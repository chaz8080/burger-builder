/* eslint-disable react/prop-types */
import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Button/Button';


const orderSummary = ({
  ingredients, purchaseCancelled, purchaseContinue, price,
}) => {
  const ingredientSummary = Object.keys(ingredients)
    .map(key => (
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>
          {key}
        </span>
        {`: ${ingredients[key]}`}
      </li>
    ));

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>{`Total Price: $${price.toFixed(2)}`}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={purchaseContinue}>CONTINUE</Button>
    </Aux>
  );
};

export default orderSummary;
