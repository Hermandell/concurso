import React from "react";
import data from "./data";

const useCounter = () => {
  const [count, setCount] = React.useState(0);
  if (count < 0) {
    setCount(0);
  }

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
 

  return { count, increment, decrement };
};

const App = () => {
  let sum = [];
  let total = [];

  
  return (
    <>
      {data.map((item, index) => {
        const { count, increment, decrement } = useCounter();
        sum.push(count);
        total.push(item.price * count);
        return (
          <div key={index}>
            <div>My App</div>
            <div>{count}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
          </div>
        );
      })}
      <p> items :{sum.reduce((a, b) => a + b, 0)}</p>
      <p> items Total Precio:{total.reduce((a, b) => a + b, 0)}</p>
      <p>SubTotal:{total.reduce((a, b) => a + b, 0) * 200}</p>
      <p>Tax: {total.reduce((a, b) => a + b, 0) * 200 * 0.16}</p>
      <p>
        Total: $
        {total.reduce((a, b) => a + b, 0) * 200 * 0.16 +
          total.reduce((a, b) => a + b, 0) * 200}
      </p>
      <button >reset</button>
    </>
  );
};

export default App;
