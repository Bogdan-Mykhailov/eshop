import React from 'react';
import s from './Products.module.css'

export const Products = () => {
  return (
    <div>
      <div className={s.product}>
        <div className={s.productInfo}>
          <p>Sony PlayStation 5 White Digital Edition</p>
          <p className={s.productPrice}>
            <strong>711</strong>
            <small>$</small>
          </p>
          <p className={s.productRating}>★★★☆☆</p>
        </div>
        <img className={s.productImage}
             src="https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/00_PlayStation_FAQ_featured_image_Cropped_4_8.jpg"
             alt="product image "/>
        <button className={s.addBtn}>Add to List</button>
      </div>
    </div>
  );
};
