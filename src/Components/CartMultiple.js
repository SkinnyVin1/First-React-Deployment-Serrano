import { Action } from "@remix-run/router";
import { useState, useEffect } from "react";
import CartSingle from "../pages/CartSingle";

const CartMultiple = () => {
  const [items, setItems] = useState([
    { id: 0, name: "Iverter Action", price: 20000 },
    { id: 1, name: "Fried Chicken", price: 200 },
    { id: 2, name: "Nike Air Force 1", price: 80000 },
  ]);

  return (
    <div>
      {items.map((cartItem) => (
        <div key={cartItem.id}>
          <CartSingle name={cartItem.name} price={cartItem.price}></CartSingle>
        </div>
      ))}
    </div>
  );
};

export default CartMultiple;
