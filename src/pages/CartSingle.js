import { useState, useEffect } from "react";

const CartSingle = (details) => {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(20000);

  useEffect(() => {
    setPrice(() => count * details.price);
  });
  return (
    <div>
      <h1>{details.name}</h1>
      <h2>P{details.price}.00</h2>
      <button onClick={() => setCount(() => count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(() => count - 1)}>-</button>
      <h1>Total Price: {price}</h1>
    </div>
  );
};

export default CartSingle;
