import React from 'react';
import Header from "./components/Header";
import './App.css';
import Products from "./components/Products";
import {element, func} from "prop-types";
import BasketItem from './components/BasketItem';

export default class App  extends React.Component {
    state = {
        products : [
            {
                id : 1,
                name : " 153113872",
                brand : "Zi",
                hasDiscount : true,
                discountValue : 235,
                hasOff : true,
                offValue : 51,
                image  : "/images/1.jpg" ,
                price : 90
            },
            {
                id : 2,
                name : "J537G8-CRP",
                brand : "LC Waikiki",
                hasDiscount : true,
                discountValue : 206,
                hasOff : true,
                offValue : 30,
                image  : "/images/1.jpg",
                price : 144
            },
            {
                id : 3,
                name : "dsfsd",
                brand : "Mango",
                hasDiscount : false,
                discountValue : 0,
                hasOff : false,
                offValue : 0,
                image  : "/images/1.jpg",
                price : 89
            },
            {
                id : 4,
                name : "d444 ",
                brand : "FRED",
                hasDiscount : true,
                discountValue : 59,
                hasOff : true,
                offValue : 51,
                image  : "/images/1.jpg",
                price : 29
            },

        ],
        basket : {
            basket_items : [{
                id : 4,
                name : "za ",
                brand : "FRED",
                hasDiscount : true,
                discountValue : 59,
                hasOff : true,
                offValue : 51,
                image  : "/images/1.jpg",
                price : 29,
                count : 1,
            }],
            basket_items_id : [4],

        }
    }

   

    addProductToBasketHandler = (productId) => {
        
        let product = this.state.products.find(product => productId == product.id);
        let index = this.state.basket.basket_items.findIndex(element => product.id === element.id);
        if(index<0) {
            this.setState({
                basket : {
                    basket_items:[...this.state.basket.basket_items , {...product, count : 1}],
                    basket_items_id:[...this.state.basket.basket_items_id , product.id]
                }
            })
        }else {
            let basketItems = this.state.basket.basket_items;
            basketItems[index].count++;
            this.setState({
                basket :{
                    basket_items : basketItems,
                    basket_items_id : this.state.basket.basket_items_id,
                }
            })
        }
    }

    removeProductFromBasket = (productId) => {
        let index = this.state.basket.basket_items_id.findIndex(elementId => elementId === productId);
        if(index>=0) {
            let basketItems = this.state.basket.basket_items;
            let basketItemsId = this.state.basket.basket_items_id;
            basketItems.splice(index,1)
            basketItemsId.splice(index,1)
            this.setState({
                basket : {
                    basket_items : basketItems,
                    basket_items_id : basketItemsId
                }
            })        
        }
    }


    render() {
        return (
            <div>
                <Header basket={this.state.basket} onBasketItemRemoveFromBasketHandler={this.removeProductFromBasket}/>
                <Products products={this.state.products} onProductItemAddToCardHandler={this.addProductToBasketHandler}/>
            </div>
        );
    }
};