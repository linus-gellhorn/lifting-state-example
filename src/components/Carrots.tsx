import { useState } from "react";

export default function Carrots(): JSX.Element {
  const [count, setCount] = useState(5);

  return (
    <>
      <h2>Carrots: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>More Carrots</button>
    </>
  );
}
