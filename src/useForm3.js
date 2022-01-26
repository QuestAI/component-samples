import { useState } from "react";
import valid from "card-validator";

const useForm3 = () => {
  let [formSubmitted, setFormSubmitted] = useState(false);

  let [name, setName] = useState("");
  let [nameError, setNameError] = useState(null);

  let [cardNumber, setCardNumber] = useState("");
  let [cardError, setCardError] = useState(null);

  let [cvv, setCvv] = useState("");
  let [cvvError, setCvvError] = useState(null);

  let [expDate, setExpDate] = useState("");
  let [expDateError, setExpDateError] = useState(null);

  let data = {};
  data.name = name;
  data.nameError = nameError;
  data.cardNumber = cardNumber;
  data.cardError = cardError;
  data.cvv = cvv;
  data.cvvError = cvvError;
  data.expDate = expDate;
  data.expDateError = expDateError;
  data.formSubmitted = formSubmitted;

  const onNameChange = (e) => {
    setName(e.target.value);
    setNameError(null);
  }

  const onCardNumberChange = (e) => {
    let val = e.target.value;
    if (val.length === 4 || val.length === 9 || val.length === 14) {
      val = val + "-";
    }
    setCardNumber(val);
    setCardError(null);
  }

  const onCvvChange = (e) => {
    setCvv(e.target.value);
    setCvvError(null);
  }

  const onExpDateChange = (e) => {
    let val = e.target.value;
    if (val.length === 2) {
      val = val + "/";
    }
    setExpDate(val);
    setExpDateError(null);
  }

  const handleSubmit = () => {
    let hasError = false;
    if (name.trim() === "") {
      setNameError("Name is required");
      hasError = true;
    }
    else {
      let res = valid.cardholderName(name);
      if (!res.isPotentiallyValid) {
        setNameError("Invalid Name");
        hasError = true;
      }
    }

    if (cardNumber.trim() === "") {
      setCardError("Card Number is required");
      hasError = true;
    }
    else {
      let res = valid.number(cardNumber);
      if (!res.isPotentiallyValid) {
        setCardError("Invalid Card Number");
        hasError = true;
      }
    }

    if (cvv.trim() === "") {
      setCvvError("CVV is required");
      hasError = true;
    }
    else {
      let res = valid.cvv(cvv);
      let res1 = valid.cvv(cvv, 4);
      if (!res.isPotentiallyValid && !res1.isPotentiallyValid) {
        setCvvError("Invalid CVV");
        hasError = true;
      }
    }


    if (expDate.trim() === "") {
      setExpDateError("Expiration date is required");
      hasError = true;
    }
    else if (!expDate.includes("/")) {
      setExpDateError("Invalid Expiration Date");
      hasError = true;
    }
    else {
      let res = valid.expirationDate(expDate);
      if (!res.isPotentiallyValid) {
        setExpDateError("Invalid Expiration Date");
        hasError = true;
      }
    }

    if (!hasError) {
      setFormSubmitted(true);
    }

  };

  let fns = { handleSubmit, onNameChange, onCardNumberChange, onCvvChange, onExpDateChange };
  return { data, fns };
}

export default useForm3;