import banner from '../images/banner.jpg'
import '../css/Home.css'
import Page from '../Page';
import cart from '../images/home-cart.png';
import visit from '../images/visit.png';
import card from '../images/home-card.png';
import apiRequest from '../apiRequest';
import { useEffect, useState } from "react";
import heart from '../images/heart.png'
import favoriteHeart from '../images/heart-favorite.png'
import stars from '../images/stars.png'
import { Link, useSearchParams } from "react-router-dom";
import arrowLeft from '../images/arrow-left.png';
import arrowRight from '../images/arrow-right.png';
import arrowLeftDisabled from '../images/left-disabled.png';
import arrowRightDisabled from '../images/right-disabled.png';
import saleOne from '../images/sale1.png';
import saleTwo from '../images/sale2.png';
import saleThree from '../images/sale3.png';
import saleFour from '../images/sale4.png';

import drug from '../images/drug.svg'
import makeup from '../images/makeup.svg'
import feeder from '../images/feeder.svg'
import inclusive from '../images/inclusive.svg'
import blind from '../images/blind.svg'
import hygiene from '../images/hygiene.svg'
import diagnosis from '../images/diagnosis.svg'
import sos from '../images/sos.png'
import salad from '../images/salad.svg'
import more from '../images/more.svg'
import iphone from '../images/iphone.png'
import text from '../images/text.png'

function Home(props) {

  const [leaderPage, setLeaderPage] = useState(0);
  
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    apiRequest('GET', `api/products?q=`).then(response =>{
        setData(response);
        setLoading(false);
    })
    
  }, []);

  function isFavoriteItem(id){
    return props.favoriteList.includes(id);
  }

  function pagingHandling(e){
    if(leaderPage == 0 && e == -1) return
    if(leaderPage == data.length - 4 && e == 1) return
    setLeaderPage(leaderPage + e);
  }

  return (
    <Page>
      <div>
      <p className='text-over-img'>
        შექმენით თქვენი პირადი <br>
        </br>
        სააფთიაქო თარო
      </p>
      <button className='learn-more'> გაიგე მეტი</button>
      <img className='banner' src={banner}/>
      </div>
      <div className='promotions'>
        <div className='promotion-elements'>
          <img src={cart} className="cart"/>
          <p className='title'>შეუკვეთე ონლაინ</p>
          <p className='description'>ჩამოტვირთეთ ავერსის 
          მობილური აპლიკაცია ან ისარგებლეთ გლოვოს მიტანის სერვისით</p>
        </div>
        <div className='promotion-elements'>
          <img src={visit} className="visit"/>
          <p className='title'>ექიმთან ჩაწერა</p>
          <p className='description'>ნუ გადადებ ექიმთან ვიზიტს 
          შორეულ მომავალზე, ჩაეწერე ონლაინ დღესვე</p>
        </div>
        <div className='promotion-elements'>
          <img src={card} className="card"/>
          <p className='title'>მტრედი ბარათი</p>
          <p className='description'>დააგროვე ბონუსები და ამავე
           დროს შეიძინე პროდუქცია ფასდაკლებით</p>
        </div>
      </div>
      
        {isLoading ? <div>Loading...</div> : 
        <div className="leaders">
        <div className='leader-heading'>
        <h1>ლიდერები გაყიდვაში</h1>
        <div className='arrows'>
          <img src={leaderPage == 0 ? arrowLeftDisabled : arrowLeft} className='product-paging-left' onClick={() =>{pagingHandling(-1)}}/>
          <img src={leaderPage == data.length - 4 ? arrowRightDisabled :arrowRight} className='product-paging-right' onClick={() =>{pagingHandling(1)}}/>
        </div>  
        </div>
         <div className='leader-product'>{
              (data || []).map(item => {
               if(item.id > leaderPage && item.id <= leaderPage + 4) {
                return (
                  <div className="leader-product-item" key={item.id}>
                    <div className="product-item-box">
                    <img src={stars} className="leader-stars"/>
                      <Link to={`/product/${item.id}`}>
                        <img
                          className="prod-img-leader"
                          src={item.image}
                          alt="..."
                        />
                         
                      </Link>
                      <img 
                         className="favorite-leader" 
                         src={isFavoriteItem(item.id) ? favoriteHeart : heart}
                         onClick={() => props.makeFavorite(item.id)}/>
                      <div className="prod-body-leader">
                        <div className="text-center-leader">
                          <Link to={`/product/${item.id}`}>
                          <h5 className="product-title-leader">{item.title}</h5>
                          <h5 className="product-description-leader">{item.title}</h5>
                          </Link>
                          <div className='price-to-buy-leader'>
                          <p className='price-leader'>{item.price} ლარი</p>
                          <Link to={{
                            pathname: "/buy",
                            search: item.price.toString(),
                          }}
                          >
                          <button className='buyItem-leader'>ყიდვა</button>
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
        }
        <div className='sales'>
          <div className='sales-header'>
            <p className='current-sales'>მიმდინარე აქციები</p>
            <p className='all-sales'>ყველა აქცია</p>
          </div>

          <div className='sales-items'>
          <div className='sale-item'>
              <img src={saleOne} className='first-sale'/>
              <p className='till-date'>10 ივლისი, 2020</p>
              <p className='sale-description'>ეწვიეთ ავერსს და ისარგებლეთ ჩიპოლინოს საბავშვო პროდუქციაზე 20%-იანი ფასდაკლებით</p>
            </div>
            <div className='sale-item'>
              <img src={saleTwo} className='second-sale'/>
              <p className='till-date'>10 ივლისი, 2020</p>
              <p className='sale-description'>24 - 31 ივლისს, ფრანგული ბრენდი ნორევა გთავაზობთ 30%-50% ფასდაკლებას სრულ ასორტიმენტზე</p>
            </div>
            <div className='sale-item'>
              <img src={saleThree} className='thirds-sale'/>
              <p className='till-date'>10 ივლისი, 2020</p>
              <p className='sale-description'>თურქული წარმოების ბავშვის საფენები პიკოლო განახლებული დიზაინითა და ხელმისაწვდომი ფასით</p>
            </div>
            <div className='sale-item'>
              <img src={saleFour} className='forth-sale'/>
              <p className='till-date'>10 ივლისი, 2020</p>
              <p className='sale-description'>ეწვიეთ ავერსს და ისარგებლეთ თქვენს რჩეულ ბრენდზე საუკეთესო შემოთავაზებით!</p>
            </div>
          </div>
        </div>

        <div className='catalog'>
          <p className='catalog-title'>პროდუქციის კატალოგი</p>
          <div className='catalog-items'>
          <div className='catalog-item'>
            <img src={drug}/>
            <p>წამლები</p>
          </div>
          <div className='catalog-item'>
            <img src={makeup}/>
            <p>კოსმეტიკა</p>
          </div>
          <div className='catalog-item'>
            <img src={feeder}/>
            <p>საბავშვო კვება</p>
          </div>
          <div className='catalog-item'>
            <img src={inclusive}/>
            <p>ორთოდონტია</p>
          </div>
          <div className='catalog-item'>
            <img src={blind}/>
            <p>ოპტიკა</p>
          </div>
          <div className='catalog-item'>
            <img src={hygiene}/>
            <p>ჰიგიენა</p>
          </div>
          <div className='catalog-item'>
            <img src={diagnosis}/>
            <p>დიაგნოსტიკა</p>
          </div>
          <div className='catalog-item'>
            <img src={sos}/>
            <p>პირველადი დახმარება</p>
          </div>
          <div className='catalog-item'>
            <img src={salad}/>
            <p>ბალახეული</p>
          </div>
          <div className='catalog-item'>
            <img src={more}/>
            <p>სხვა</p>
          </div>
        </div>
        </div>
        
        <div className='application'>
          <img src={iphone} className='iphone'/>
          <img src={text} className='application-text'/>
        </div>
      </Page>
  );
}

export default Home;

