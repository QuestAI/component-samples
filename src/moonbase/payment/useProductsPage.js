/**********************************************************************
*
*   Component hook generated by Quest
*
*   Code Logic for the component goes in this hook
*   To setup bindings that use the data here or call the functions here, use the Quest editor   
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/
import { useState } from "react";

import Beanie from './assets/images/oswaldo-ibanez-bMao86CW8Xk-unsplash.jpg';
import SummerHat from './assets/images/lucija-ros-0G9aAIN3jsk-unsplash.jpg';
import Sneakers from './assets/images/maksim-larin-NOpsC3nWTzY-unsplash.jpg';
import Outfit from './assets/images/Outfit.jpg';

import useResponsiveSize from "../../useResponsiveSize";

const useProductsPage = () => {
  let size = useResponsiveSize();

  const products = [
    {
      name: "Moonbase Outfit",
      price: "$29.00",
      image: Outfit
    },
    {
      name: "Moonbase Beanie",
      price: "$15.00",
      image: Beanie
    },
    {
      name: "Moonbase Summer Hat",
      price: "$25.00",
      image: SummerHat
    },
    {
      name: "Moonbase Sneakers",
      price: "$76.00",
      image: Sneakers
    },

  ];

  let [selectedProduct, setSelectedProduct] = useState(null);
  let [showPayment, setShowPayment] = useState(false);

  let data = { products, selectedProduct, showPayment, size };

  const closePaymentDialog = () => {
    setShowPayment(false);
  }

  const buyClicked = (product) => {
    setSelectedProduct(product);
    setShowPayment(true);
  }

  let fns = { buyClicked, closePaymentDialog };
  return { data, fns };
}

export default useProductsPage;