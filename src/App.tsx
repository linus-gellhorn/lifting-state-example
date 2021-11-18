import Apples from "./components/Apples";
import Bananas from "./components/Bananas";
import Carrots from "./components/Carrots";
import { useState } from "react";

function App(): JSX.Element {
  const [AppleCount, setAppleCount] = useState(5);
  const [BananaCount, setBananaCount] = useState(5);

  const handleAddApple = () => {
    setAppleCount((prev) => prev + 1);
    setBananaCount((prev) => prev - 1);
  };

  const handleAddBanana = () => {
    setBananaCount((prev) => prev + 1);
    setAppleCount((prev) => prev - 1);
  };

  return (
    <>
      <h1>Lifting state: you only have room for 10!</h1>
      <Apples
        AppleCount={AppleCount}
        handleAddApple={handleAddApple}
        BananaCount={BananaCount}
        handleAddBanana={handleAddBanana}
      />
      <Bananas
        AppleCount={AppleCount}
        handleAddApple={handleAddApple}
        BananaCount={BananaCount}
        handleAddBanana={handleAddBanana}
      />
      <hr />
      <Carrots />
    </>
  );
}

export default App;
