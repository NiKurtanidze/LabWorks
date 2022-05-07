import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { BrowserRouter as Router, Route, Link, useSearchParams } from "react-router-dom"
import apiRequest from "../apiRequest";
import Page from "../Page";
import heart from '../images/heart.png'
import favoriteHeart from '../images/heart-favorite.png'
import stars from '../images/stars.png'
import '../css/Products.css'

export default function Products(props) {
  let [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery(
    ['products', searchParams.get('search')],
    () => apiRequest('GET', `api/products?q=${searchParams.get('search') || ''}`)
  );
  const [searchValue, setSearchValue] = useState('');
  
  function isFavoriteItem(id){
    return props.favoriteList.includes(id);
  }

  useEffect(() => {
    setSearchValue(searchParams.get('search'));
  }, []);

  function onSearchSubmit(e) {
    e.preventDefault();

    setSearchParams({
      search: searchValue
    });
  }

  function pagingHandle(e){
    if(page == 1 && e == -1) return
    if( !isLoading && page == Math.ceil(data.length / 20) && e == 1) return
    setPage(page + e);
  }

  function paging(){
    if(isLoading) return <div></div> 
    
    let pageNumber = Math.ceil(data.length / 20);
    var pagesArray = [];

    for (var i = 1; i <= pageNumber; i++) {
      pagesArray.push(i);
    }
    return(
      <div className="pagination">
        <a onClick={() => pagingHandle(-1)}>&laquo;</a>
        {
        pagesArray.map(item => {
                    return(
                    <a className={item == page ? 'active' : ''} onClick={() => setPage(item)} href="#">{item}</a>)
                  }
        )}
        <a onClick={() => pagingHandle(1)}>&raquo;</a>
    </div>
    )

  }
  return (
    <Page>
      <section className="py-5">
      <div className="products-navigated">
          <h1>წამლები</h1>
          <p>მთავარი / კატალოგი / წამლები</p>
      </div>
        <div className="products">
            <div className="sidebar">
                <table>
                <tr><th className="filter">გაფილტვრა</th></tr>

                <tr><td><a>ფასით</a></td></tr>
                <tr><td><a>დოზებით</a></td></tr>
                <tr><td><a>გამოშვების ქვეყნით</a></td></tr>
                <tr><td><a>ბრენდით</a></td></tr>
                <tr><td><a>მწარმოებლით</a></td></tr>
                <tr><td><a>შეფუთვის ფორმით</a></td></tr>
                <tr><td><a>ასაკის მიხედვით</a></td></tr>
                <tr><td><a>გაცემის ფორმის მიხედვით</a></td></tr>
                </table>
            </div>
            <div className="get-promotions">
              <p>გაიგე პირველმა რა აქციები არის ავერსში</p>
              <input placeholder="თქვენი ელ-ფოსტა"/>
            </div>
            <div className="drop-select">
            <p className="sorting">სორტირება:</p>
            <select name="filter-by" id="options">
              <option value="volvo">ბრენდის მიხედვით</option>
              <option value="saab">ასაკის მიხედვით</option>
              <option value="mercedes">ფასის მიხედვით</option>
            </select>
            </div>
          <div className="products all together">
            {
              (data || []).map(item => {
                if(item.id >= (page - 1) * 20 + 1 && item.id <= (page - 1) * 20 + 20) {
                  return (
                <div className="product-item" key={item.id}>
                    <div className="item-box">
                    <img src={stars} className="stars"/>
                      <Link to={`/product/${item.id}`}>
                        <img
                          className="prod-img"
                          src={item.image}
                          alt="..."
                        />
                         
                      </Link>
                      <img 
                         className="favorite" 
                         src={isFavoriteItem(item.id) ? favoriteHeart : heart}
                         onClick={() => props.makeFavorite(item.id)}/>
                      <div className="prod-body">
                        <div className="text-center">
                          <Link to={`/product/${item.id}`}>
                          <h5 className="product-title">{item.title}</h5>
                          <h5 className="product-description">{item.title}</h5>
                          </Link>
                          <div className='price-to-buy'>
                          <p className='price'>{item.price} ლარი</p>
                          <Link to={{
                            pathname: "/buy",
                            search: item.price.toString(),
                          }}
                          >
                            <button className='buyItem'>ყიდვა</button>
                          </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
               }}
               )
              }
          </div>
          
        </div>
       {paging()}
      </section>
    </Page>
  )
}