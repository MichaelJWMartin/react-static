import React from "react";
import "./Card.scss";
import { Avatar } from '../Avatar/Avatar';
import { Info } from '../Info/Info';
import { MainContent } from '../MainContent/MainContent';
import { Footer } from '../Footer/Footer';


export const Card = () => {
  return (
    <div className="card-container-bg">
      <Avatar />
      <Info />
      <MainContent />
      <Footer /> 
    </div>
  )
}