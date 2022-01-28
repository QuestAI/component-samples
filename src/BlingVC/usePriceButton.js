import { useState } from "react";

const usePriceButton = () => {
  let [isHover, setisHover] = useState(false);
  let data = { isHover };

  const handleMouseOver = () => {
    setisHover(true);
  };

  const handleMouseOut = () => {
    setisHover(false);
  };

  let fns = { handleMouseOver, handleMouseOut };
  return { data, fns };
}

export default usePriceButton;