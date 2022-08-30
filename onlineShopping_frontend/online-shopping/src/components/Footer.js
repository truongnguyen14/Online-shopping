import React from "react";
import image from "./logo192.png"
import List from "./List";
export default function Footer(){
    return(
        <div className="footer-container">
            <img className="footer-logo" src={image} alt="this is an logo" />
            <div className="footer-infos">
                <div className="footer-info-container">
                    <h1 className="footer-title">About</h1>
                    <p className="footer-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                    of type and scrambled it to make a type specimen book</p>
                </div>
                 <div className="footer-info-container">
                    <h1 className="footer-title">Categories</h1>
                         <ul className="list small-white">
                            <li><a>Others</a></li>
                            <li>Food</li>
                            <li>Clothes</li>
                        </ul>
                </div>
            </div>
            <div className="copy-right">
                <p>Copy right @2022 All rights reserved by Rmit
                </p>
            </div>
        </div>
    )
}