import React from "react";
import './Avatar.scss';
import avatar from '../../avatar.svg';


const image = <img src={avatar} className="Avatar" alt="avatar" />;

export const Avatar = () => {
  return (
    <div>{image}</div>
  );
}