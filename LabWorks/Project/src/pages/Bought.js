
import Page from "../Page";
import checked from '../images/bought.png'
import '../css/Bought.css'
import { useLocation } from "react-router-dom"
import Schedule from "./Schedule";

export default function Bought() {
    return(
        <Page>
            <div className="bought">
                <div className="bought-condition">
                    <div className="statement">
                        <img src={checked} className="check-box"/>
                        <h1 className="bought-text">გადახდილია!</h1>
                    </div>
                        <h5> მადლობა, თქვენი გადახდა მიღებულია</h5>
                    <div className="details">
                        <div className="details-title">
                            <p>გადახდის დეტალები:</p>
                        </div>
                        <div className="details-info">
                        <p className="total-amount-text">ჯამური თანხა:</p>
                            <p className="amount">{useLocation().search.substring(1)} ლარი</p>
                            <p className="total-amount-text">უნაღდო ანგარიშსწორებით:</p>
                            <p className="amount">{useLocation().search.substring(1)} ლარი</p>
                        </div>
                    </div>
                </div>
                <Schedule/>
            </div>
        </Page>
    )
}
