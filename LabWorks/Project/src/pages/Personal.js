import Page from "../Page";
import React from "react";
import "../css/Cart.css";
import Schedule from "./Schedule";
import '../css/Personal.css'

import ImageUploading from "react-images-uploading";
import { useEffect, useState } from "react";


export default function Personal(props) {

    let [text, setText] = useState("551543111");

    const [activeUser, setActiveUser] = useState(
        {
            userName:"ნინო",
            userSurname:"კურტანიძე",
            phone: "551543111",
            mail:"ninikokurtanidze@gmail.com",
            address:"ივერთუბანი, ალავერდის ქუჩა N13"
        }
    )

    function changePhone(e){
        let currentUser = activeUser;
        currentUser[e.name] = e.target.value;
        setActiveUser(currentUser)
    }

    

    return(      
    <Page>
        <header className="products-navigated">
          <h1>პირადი პროფილი</h1>
          <p>მთავარი / პირადი პროფილი</p>
      </header>

        <div className="personal">
            <div className="left">
                <table>
                    <tr>პირადი ინფორმაცია</tr>
                    <tr>მტრედი ბარათის ქულების შემოწმება</tr>
                    <tr>მტრედი ბარათის ანგარიშზე მიბმა</tr>
                    <tr>საჩუქრის არჩევა ქულების მიხედვით</tr>
                    <tr>მისამართების მართვა</tr>
                    <tr>ინფორმაცია შეკვეთებზე</tr>
                </table>
            </div>
            <div className="right">
                <h1 className="personal-title">პირადი ინფორმაციის რედაქტირება</h1>
                <div className="picture">

                <ImageUploading
                        multiple
                        value={props.images}
                        onChange={props.uploadImg}
                        dataURLKey="data_url"
                    >
                        {({
                        imageList,
                        onImageUpload,
                        onImageUpdate,
                        dragProps
                        }) => (
                        <div className="upload__image-wrapper">
                            {imageList.length == 0 ? <button
                            onClick={onImageUpload}
                            {...dragProps}
                            >
                            ატვირთეთ ფოტო
                            </button> : 
                            


                            imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.data_url} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                <button onClick={() => onImageUpdate(index)}>სურათის შეცვლა</button>
                                </div>
                            </div>
                            ))}
                        </div>
                        )}
                    </ImageUploading>


                </div>

                <div className="information-to-change">
                    <form>
                        <label for="phone">მობილურის ნომერი:</label><br/>
                        <input type="text" id="phone" name="phone" defaultValue={activeUser.phone}
                         onChange={(e) => {changePhone(e);
                            }}
                            /><br/>
                        <label for="email">ელ-ფოსტა:</label><br/>
                        <input type="mail" id="mail" name="mail" defaultValue={activeUser.mail}
                         onChange={(e) => {changePhone(e);
                            }}/><br/>
                        <label for="address">მისამართი:</label><br/>
                        <input type="text" id="address" name="address" defaultValue={activeUser.address}
                         onChange={(e) => {changePhone(e);
                            }}/><br/>
                    </form>
                    <button className="save">შენახვა</button>
                </div>
            </div>
        </div>

        <Schedule />
    </Page>
    )
}