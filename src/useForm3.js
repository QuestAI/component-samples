import { useState } from "react";

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
    setCardNumber(e.target.value);
    setCardError(null);
  }

  const onCvvChange = (e) => {
    setCvv(e.target.value);
    setCvvError(null);
  }

  const onExpDateChange = (e) => {
    setExpDate(e.target.value);
    setExpDateError(null);
  }

  const handleSubmit = () => {
    let hasError = false;
    if (name.trim() === "") {
      setNameError("Name is required");
      hasError = true;
    }

    if (cardNumber.trim() === "") {
      setCardError("Card Number is required");
      hasError = true;
    }

    if (cvv.trim() === "") {
      setCvvError("CVV is required");
      hasError = true;
    }

    if (expDate.trim() === "") {
      setExpDateError("Expiration date is required");
      hasError = true;
    }

    if (!hasError) {
      setFormSubmitted(true);
    }

  };

  let fns = { handleSubmit, onNameChange, onCardNumberChange, onCvvChange, onExpDateChange };
  return { data, fns };
}

export default useForm3;