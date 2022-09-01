import React from 'react';
import s from './Home.module.css'
import {Products} from "../Products/Products";

export const Home = () => {

  return (
    <div>
      <div className={s.home}>
        <div className={s.homeContainer}>
          <img
            src="https://t4.ftcdn.net/jpg/03/20/46/13/360_F_320461388_5Snqf6f2tRIqiWlaIzNWrCUm1Ocaqhfm.jpg"
            alt="main image" className={s.mainImage}/>

          <div className={s.homeRow}>
            <Products/>
            <Products/>
          </div>
          <div className={s.homeRow}>
            <Products/>
            <Products/>
            <Products/>
          </div>
          <div className={s.homeRow}>
            <Products/>
          </div>
        </div>
      </div>
    </div>
  );
};
