import React from "react";
import image from "./logo192.png"
import List from "./List";
import "./footer.css"
export default function Footer(){
    return(
        <div className="footer-container">

                <img className="footer-logo" src={image} alt="this is an logo" />
  
            <div className="footer-infos">
                <div className="footer-info-container">
                    <h1 className="footer-title">About Us</h1>
                    <p className="footer-description">We are group 10. Member of this project: Nguyen Tan Truong, Nguyen Manh Quoc Viet,
                        Nguyen Tien Dat, Duc Anh Hoang, Dung Nguyen, Kelbin Lei</p>
                </div>
                 <div className="footer-info-container">
                    <h1 className="footer-title">Categories</h1>
                         <List/>
                </div>
            </div>
            <div className="copy-right">
                <p>Copy right @2022 All rights reserved by Rmit
                </p>
            </div>
        </div>
    )
}
