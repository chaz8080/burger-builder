/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map(ingredientKey => [...Array(ingredients[ingredientKey])]
      .map((_, i) => <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />))
    .reduce((arr, el) => arr.concat(el), []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
