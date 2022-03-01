/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import {TextField,Button,SvgIcon} from '@mui/material';
import XImage from './assets/images/x.png';
import { ReactComponent as ArrowRight } from './assets/images/Icon_Arrow_Right__Color_default.svg';
import { ReactComponent as Check } from './assets/images/Icon_Check__Color_default.svg';
import {styled} from '@mui/material/styles';
import usePaymentCard from './usePaymentCard';
 
const TypeQuest = styled("div")(({ theme }) =>({  
  opacity: "1",  
  backgroundColor: "rgba(255, 255, 255, 1)",  
  boxShadow: theme.customShadows.cardShadow.boxShadow,  
  borderRadius: "10px",  
  display: "flex",  
  flexDirection: "row",  
  width: "728px",  
  height: "574px",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "40px",  
  padding: "40px",  
  boxSizing: "border-box",  
  overflow: "hidden",  
}));
  
const Image = styled("div", {
    shouldForwardProp: prop => !["bgImage1"].includes(prop)
  })(({ bgImage1 }) =>({  
  opacity: "1",  
  backgroundImage: `url(${bgImage1})`,  
  backgroundPosition: "center",  
  backgroundSize: "cover",  
  backgroundRepeat: "no-repeat",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "40px",  
  padding: "0px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
  width: "304px",  
}));
  
const Form = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "24px",  
  padding: "0px",  
  boxSizing: "border-box",  
  flexGrow: "0",  
  width: "304px",  
});
  
const TextTop = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "2px",  
  padding: "0px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
});
  
const TopRow = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "row",  
  justifyContent: "space-between",  
  alignItems: "flex-start",  
  padding: "0px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
});
  
const Text = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "2px",  
  padding: "0px",  
  boxSizing: "border-box",  
  flexGrow: "0",  
});
  
const ConfirmPurchase = styled("div")(({ theme }) =>({  
  textAlign: "left",  
  color: "rgba(0, 0, 0, 1)",  
  fontStyle: theme.typography["H5"].fontStyle,  
  fontFamily: theme.typography["H5"].fontFamily,  
  fontWeight: theme.typography["H5"].fontWeight,  
  fontSize: theme.typography["H5"].fontSize,  
  letterSpacing: theme.typography["H5"].letterSpacing,  
  textDecoration: theme.typography["H5"].textDecoration,  
  lineHeight: theme.typography["H5"].lineHeight,  
  textTransform: theme.typography["H5"].textTransform,  
  opacity: "1",  
  flexGrow: "0",  
}));
  
const ItemName = styled("div")({  
  textAlign: "left",  
  color: "rgba(0, 0, 0, 1)",  
  fontStyle: "normal",  
  fontFamily: "Heebo",  
  fontWeight: "400",  
  fontSize: "20px",  
  letterSpacing: "0px",  
  textDecoration: "none",  
  textTransform: "none",  
  opacity: "1",  
  flexGrow: "0",  
});
  
const ItemPrice = styled("div")({  
  textAlign: "left",  
  color: "rgba(0, 0, 0, 1)",  
  fontStyle: "normal",  
  fontFamily: "Heebo",  
  fontWeight: "700",  
  fontSize: "18px",  
  letterSpacing: "0px",  
  textDecoration: "none",  
  textTransform: "none",  
  opacity: "1",  
  flexGrow: "0",  
});
  
const X = styled("img")({  
  height: "12px",  
  width: "12px",  
  flexGrow: "0",  
  cursor: "pointer",  
});
  
const Frame3 = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "40px",  
  padding: "0px",  
  boxSizing: "border-box",  
  flexGrow: "0",  
  width: "304px",  
});
  
const Row1 = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "30px",  
  padding: "0px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
});
  
const TextField1 = styled(TextField)({  
  alignSelf: "stretch",  
  flexGrow: "0",  
  height: "77px",  
});
  
const TextField2 = styled(TextField)({  
  alignSelf: "stretch",  
  flexGrow: "0",  
  height: "77px",  
});
  
const Row2 = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "row",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "30px",  
  padding: "0px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
});
  
const TextField3 = styled(TextField)({  
  flexGrow: "0",  
  width: "58px",  
  height: "77px",  
});
  
const TextField4 = styled(TextField)({  
  flexGrow: "1",  
  height: "77px",  
});
  
const Q123 = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-end",  
  gap: "24px",  
  padding: "0px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
});
  
const Button1 = styled(Button)({  
  flexGrow: "0",  
});
  
const Success = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "center",  
  alignItems: "flex-start",  
  gap: "60px",  
  padding: "0px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
  width: "304px",  
});
  
const Text1 = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "4px",  
  padding: "0px",  
  boxSizing: "border-box",  
  flexGrow: "0",  
});
  
const Frame2 = styled("div")({  
  opacity: "1",  
  border: "3px solid rgba(100, 207, 111, 1)",  
  boxSizing: "border-box",  
  borderRadius: "40px",  
  display: "flex",  
  flexDirection: "row",  
  justifyContent: "center",  
  alignItems: "center",  
  gap: "10px",  
  padding: "0px",  
  flexGrow: "0",  
  height: "52px",  
  width: "52px",  
  overflow: "hidden",  
});
  
const Icon1 = styled(SvgIcon)({  
  flexGrow: "0",  
  width: "36px",  
  height: "36px",  
});
  
const PaymentConfirmed = styled("div")(({ theme }) =>({  
  textAlign: "left",  
  color: "rgba(0, 0, 0, 1)",  
  fontStyle: theme.typography["H5"].fontStyle,  
  fontFamily: theme.typography["H5"].fontFamily,  
  fontWeight: theme.typography["H5"].fontWeight,  
  fontSize: theme.typography["H5"].fontSize,  
  letterSpacing: theme.typography["H5"].letterSpacing,  
  textDecoration: theme.typography["H5"].textDecoration,  
  lineHeight: theme.typography["H5"].lineHeight,  
  textTransform: theme.typography["H5"].textTransform,  
  opacity: "1",  
  flexGrow: "0",  
}));
  
const AConfirmationEmailHa = styled("div")(({ theme }) =>({  
  textAlign: "left",  
  color: "rgba(0, 0, 0, 1)",  
  fontStyle: theme.typography["H6"].fontStyle,  
  fontFamily: theme.typography["H6"].fontFamily,  
  fontWeight: theme.typography["H6"].fontWeight,  
  fontSize: theme.typography["H6"].fontSize,  
  letterSpacing: theme.typography["H6"].letterSpacing,  
  textDecoration: theme.typography["H6"].textDecoration,  
  lineHeight: theme.typography["H6"].lineHeight,  
  textTransform: theme.typography["H6"].textTransform,  
  opacity: "1",  
  flexGrow: "0",  
}));
  
const Text2 = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "4px",  
  padding: "0px",  
  boxSizing: "border-box",  
  flexGrow: "0",  
});
  
const OrderReference = styled("div")(({ theme }) =>({  
  textAlign: "left",  
  color: "rgba(0, 0, 0, 1)",  
  fontStyle: theme.typography["H5"].fontStyle,  
  fontFamily: theme.typography["H5"].fontFamily,  
  fontWeight: theme.typography["H5"].fontWeight,  
  fontSize: theme.typography["H5"].fontSize,  
  letterSpacing: theme.typography["H5"].letterSpacing,  
  textDecoration: theme.typography["H5"].textDecoration,  
  lineHeight: theme.typography["H5"].lineHeight,  
  textTransform: theme.typography["H5"].textTransform,  
  opacity: "1",  
  flexGrow: "0",  
}));
  
const Q0021488192 = styled("div")(({ theme }) =>({  
  textAlign: "left",  
  color: "rgba(0, 0, 0, 1)",  
  fontStyle: theme.typography["H6"].fontStyle,  
  fontFamily: theme.typography["H6"].fontFamily,  
  fontWeight: theme.typography["H6"].fontWeight,  
  fontSize: theme.typography["H6"].fontSize,  
  letterSpacing: theme.typography["H6"].letterSpacing,  
  textDecoration: theme.typography["H6"].textDecoration,  
  lineHeight: theme.typography["H6"].lineHeight,  
  textTransform: theme.typography["H6"].textTransform,  
  opacity: "1",  
  flexGrow: "0",  
}));
 
function PaymentCard(props){
  const {data, fns} = usePaymentCard();
  return (
     <TypeQuest>
        <Image bgImage1={props.product.image}>
        </Image>
        {!data.formSubmitted ?
            <Form>
            <TextTop>
              <TopRow>
                <Text>
                  <ConfirmPurchase>
                    Confirm Purchase
                  </ConfirmPurchase>
                  <ItemName>
                    {props.product.name}
                  </ItemName>
                  <ItemPrice>
                    {props.product.price}
                  </ItemPrice>
                </Text>
                <X onClick={props.onClose} src={XImage}/>
              </TopRow>
            </TextTop>
            <Frame3>
              <Row1>
                <TextField1 variant="standard" size="medium"  onChange={fns.onNameChange} label="Name on Card" helperText={data.nameError ? data.nameError: "Name of cardholder"} value={data.name} error={Boolean(data.nameError)}/>
                      <TextField2 variant="standard" size="medium"  onChange={fns.onCardNumberChange} label="Card Number" helperText={data.cardError ? data.cardError : " Card Number without dashes or spaces"} value={data.cardNumber} error={Boolean(data.cardError)}/>
                    </Row1>
              <Row2>
                <TextField3 variant="standard" size="medium"  onChange={fns.onCvvChange} label="CVV" helperText={data.cvvError ? data.cvvError: "CVV"} value={data.cvv} error={Boolean(data.cvvError)}/>
                      <TextField4 variant="standard" size="medium"  onChange={fns.onExpDateChange} label="Vaild Through" helperText={data.expDateError? data.expDateError : "Exp Date MM/YY or MM/YYYY"} value={data.expDate} error={Boolean(data.expDateError)}/>
                    </Row2>
            </Frame3>
            <Q123>
              <Button1 variant="contained" size="large" color="primary"  onClick={fns.handleSubmit} endIcon={ <SvgIcon size={ "medium" } component = { ArrowRight } />}> BUY </Button1>
            </Q123>
          </Form>
        :null}
        {data.formSubmitted ?
            <Success>
            <Text1>
              <Frame2>
                < Icon1  size = { "large"} color = { "success"} component = { Check}/>
              </Frame2>
              <PaymentConfirmed>
                Payment Confirmed!
              </PaymentConfirmed>
              <AConfirmationEmailHa>
                A confirmation email 
has been sent.
              </AConfirmationEmailHa>
            </Text1>
            <Text2>
              <OrderReference>
                Order Reference #
              </OrderReference>
              <Q0021488192>
                0021488192
              </Q0021488192>
            </Text2>
          </Success>
        :null}
      </TypeQuest>
   );
}

export default PaymentCard;
