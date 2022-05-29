import React from "react";
import "./Footer.scss"
import Twitter from '../../Twitter.svg';
import Facebook from '../../Facebook.svg';
import Instagram from '../../Instagram.svg';

const image1 = <a href="https://www.qoogle.com/"><img src={Twitter} className="Icon" alt="twitter" /></a>;
const image2 = <a href="https://www.qoogle.com/"><img src={Facebook} className="Icon" alt="Facebook" /></a>;
const image3 = <a href="https://www.qoogle.com/"><img src={Instagram} className="Icon" alt="Instagram" /></a>;

export const Footer = () => {
  return (
    <div className="footer">
      {image1}
      {image2}
      {image3}
    </div>
  )
}