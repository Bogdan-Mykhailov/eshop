import React from 'react';
import s from "./Header.module.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Header = () => {

  return (
    <div className={s.header}>
      <div className={s.headerLogo}>
        <StorefrontIcon className={s.headerLogoImage} fontSize="large"/>
        <h2 className={s.headerLogoTitle}>eShop</h2>
      </div>
      <div className={s.headerSearch}>
        <input type="text" className={s.headerSearchInput}/>
        <SearchIcon className={s.headerSearchIcon}/>
      </div>
      <div className={s.headerNav}>
        <div className={s.navItem}>
          <span className={s.navItemLineOne}>Hello Guest</span>
          <span className={s.navItemLineTwo}>Sing In</span>
        </div>
        <div className={s.navItem}>
          <span className={s.navItemLineOne}>Your</span>
          <span className={s.navItemLineTwo}>Shop</span>
        </div>
        <div className={`${s.navItem} ${s.cartCount}`}>
          <ShoppingCartIcon className={s.itemCart}/>
          <span className={s.navItemLineTwo}>0</span>
        </div>
      </div>
    </div>
  );
};
