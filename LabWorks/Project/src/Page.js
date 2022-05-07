import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import'./css/App.css'
import phone from './images/phone.png'
import mail from './images/mail.png';
import logo from './images/aversi-ltd.svg'
import user from './images/user.png'
import heart from './images/heart-favorite.png'
import cart from './images/cart.png'
import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import payCard from './images/pay-card.svg'
import logoFooter from './images/aversi-footer.svg'
import chat from './images/chat.svg'
import copyright from './images/copyright.png'

export default function Page({ children }) {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  return <>
    <nav className="App-header">
      <div className="contact-info">
        <img src={phone} className="header-image" alt="call" /> 
        <p>0322 900 800 </p>
        <img src={mail} className="header-image" alt="mail" /> 
        <p>info@aversi.ge</p>
      </div>
      
      <div className="header-logo">
        <img src={logo} alr="logo" 
        onClick={useCallback(() => navigate('/', {replace: true}), [navigate])}/>
        <input className="main-search" placeholder="წამლის ძებნა" type="text" />
          <div className="header-navigator-logo">
            <img src={user} className="personal-info" alt="user" onClick={useCallback(() => navigate('/personal', {replace: true}), [navigate])}/>
            <img src={heart} className="heart" alt="heart"/>
            <img src={cart} className="cart" alt="cart"
            onClick={useCallback(() => navigate('/cart', {replace: true}), [navigate])}/>
          </div>
      </div>

      <div className="navbar">
        <ul>
          <li className = "menu-inside" onClick={useCallback(() => navigate('/product', {replace: true}), [navigate])}>
          <div id="menuToggle">
          <span></span>
          <span></span>
          <span></span>
          </div>
           კატალოგი</li>
          <Link to={`/map`}>
              <li>აფთიაქები</li>
          </Link>
          <li>კლინიკები</li>
          <li>ჩვენს შესახებ</li>
        </ul>
      </div>
    </nav>
      
      {children}

      <footer className="footer">
        
          <div className="container">
            <img src={logoFooter} className="footer-logo"/>

            <table>
          <tr>
            <th>კომპანია</th>
            <th>ინფორმაცია</th>
            <th>დახმარება</th>
          </tr>
          <tr>
              <td>ჩვენს შესახებ</td>
              <td>საბონუსე სისტემა</td>
              <td>დაბრუნება</td>
          </tr>
          <tr>
              <td>ფასების რეესტრი</td>
              <td>მონაცემთა ბაზა</td>
              <td>შეკვეთის გაფორმება</td>
          </tr>
          <tr>
              <Link to={`/map`}>
                 <td>აფთიაქები</td>
              </Link>
              <td>ფასების რეესტრი</td>
              <td>შეკვეთის გადახდა</td>
          </tr>
          <tr>
              <td>კლინიკები</td>
              <td></td>
              <td>მომსახურების წესები</td>
          </tr>
            </table>
            <button className="online-help">
            <img src={chat}/> ონლაინ დახმარება
          </button>
          </div>

          <div className="second-part-footer">
            <img src={payCard} className="paying-method"/>
            <div className="copyright">
            <img src={copyright}/>
            <p>2020 Aversi, LTD. All rights reserved.</p>
          </div>
        </div>
        
      </footer>
  </>
}