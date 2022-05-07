import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import apiRequest from "../apiRequest";
import Page from "../Page";
import { useEffect, useState } from "react";
import '../css/Product.css'
import chosenHeart from '../images/heart.png';
import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



export default function Product(props) {



  const params = useParams();
  const { productId } = params;
  const { data, isLoading } = useQuery(['product', productId],
   () => apiRequest('GET', `api/products/${productId}`));

   const [amount, setAmount] = useState(1)

  if (isLoading) {
    return <div>loading...</div>
  }

  return (
    <Page>
      <section className="product">
      <div className="products-navigated">
          <h1>{data.title}</h1>
          <p>მთავარი / კატალოგი / წამლები / {data.title}</p>
      </div>

        <div className="product-container">
          <div className="item-view">
              <img
                src={data.image}
                alt="..."
              />
          </div>
            
          <div className="item-information">
            <h1 className="item-title">{data.title}</h1>
            <div className="item-price">
                <span>{data.price} ლარი</span>
              </div>
              <div className="item-description">{data.description}</div>
              <input
                  className="quantity"
                  id="inputQuantity"
                  type="num"
                  defaultValue={amount}
                  onChange ={event => setAmount(event.target.value)}
                  style={{ maxWidth: "3rem" }}
                />

                <div className="buttons-item">
                <Popup trigger={
                  <button
                  className="add-to-cart"
                  type="button"
                >
                  
                  <i className="add-to-cart-text"
                   />
                  კალათაში დამატება
                </button>
                } modal nested > 
                {close => ( 
                  
                <div className="modal"> 
                  
                  <div className="header"> წარმატებულია </div> 
                  <div className="content"> {' '} თქვენი მოთხოვნის თანახმად, კალათაში დაემატა {amount} პროდუქტი </div>
                   <div className="actions"> 
                  <button className="button" onClick={() => { close(); props.addToCart(productId, amount) }} > გასაგებია </button> </div> </div> )}
                   
                </Popup>
                
                {props.favoriteId.includes(parseInt(productId)) ? <button className="add-to-favorites chosen" onClick={() => props.makeFavorite(parseInt(productId))}><img src={chosenHeart} />
                 </button> : <button className="add-to-favorites" onClick={() => props.makeFavorite(parseInt(productId))}> <img src={chosenHeart} /></button>
                }
                  
                </div>

          </div>
        </div>
        
      </section> 
    </Page>
    
  )
}