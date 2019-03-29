import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  }

  addIngredient = (type) => {
    const { ingredients, totalPrice } = this.state;
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredient = (type) => {
    const { ingredients, totalPrice } = this.state;
    const oldCount = ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  }
  
  updatePurchaseState = (ingredients) => {
    const sum = Object.values(ingredients).reduce((sum, el) => sum + el, 0);
    this.setState({purchasable: sum > 0});
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler = () => {
    alert('You continue!');
  }

  render() {
    const { ingredients, totalPrice, purchasable, purchasing } = this.state;

    const disabledInfo = {
      ...ingredients,
    };

    for (let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0;
    };

    return (
      <Aux>
        <Modal show={purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary 
            ingredients={ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
            price={totalPrice}
          />
        </Modal>
        <Burger 
          ingredients={this.state.ingredients}
        />
        <BuildControls
          disabled={disabledInfo}
          purchasable={purchasable}
          ordered={this.purchaseHandler}
          ingredientAdded={this.addIngredient}
          ingredientRemoved={this.removeIngredient}
          price={totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
