import Page from "../Page";
import apiRequest from "../apiRequest";
import "../css/Cart.css";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Cart(props) {

    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(true);
    
    

    useEffect((data, isLoading) => {
        apiRequest('GET', `api/products?q=`).then(response =>{
            setData(response);
            setLoading(false);
        })
        
      }, []);


      if (isLoading) {
        return <div className="App">Loading...</div>;
      }

    function getData(id){
        return  data[id];
    }


    function calculateTotal(){
        if(!isLoading){
        let totalAmount = 0;
        props.cart.forEach(element => {
            totalAmount += element.amount * getData(element.id - 1).price;
        });
        return totalAmount;
    }
    }

    return(      
    <Page>
        <header className="products-navigated">
          <h1>კალათა</h1>
          <p>მთავარი / კალათა</p>
      </header>

            <div className="in-cart">
                <div className="cart-items">
                <table>
                    <tr className="table-title">
                        <th>პროდუქციის დასახელება</th>
                        <th>ფასი</th>
                        <th>რაოდენობა</th>
                        <th>ჯამი</th>
                    </tr>

        {props.cart.map(element => {
            let amount = element.amount;
            element = getData(element.id - 1)
            return(
                <tr>
                  <td className="cart-product-name">
                      <img src={element.image}/>
                      <p>{element.title}</p>
                  </td>
                  <td>{element.price} ლ</td>
                  <td>
                        {amount}
                    </td>
                  <td>{amount * element.price} ლ</td>
                </tr>
            )
        })
        }
          
      </table>

                </div>

                <div className="total-amount">
                    <div className="texts">
                    <p className="product-to-buy"> პროდუქცია</p>
                    <p>{calculateTotal()} ლარი</p>
                    <p>მიტანის საკომისიო</p>
                    <p>0 ლარი</p>
                    <p></p>
                    <p></p>
                    <p>სულ</p>
                    <p>{calculateTotal()} ლარი</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    </div>
                    <Link to={{
                            pathname: "/buy",
                            search: calculateTotal().toString(),
                          }}
                          >
                    {
                        calculateTotal() == 0 ? <div></div>:<button className="to-buy" onClick={() => {props.addToCart(0, 0)}}>ყიდვა</button>
                    
                    }
                    </Link>
                </div>
            </div>

            <p className="warning">
                გაყიდული პროდუქცია დაბრუნებას ან/და შეცვლას არ ექვემდებარება
                </p>
    </Page>
    )
}