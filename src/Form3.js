import {TextField,Button,SvgIcon} from '@mui/material';
import { ReactComponent as ArrowRight } from './assets/images/Icon_Arrow_Right__Color_default.svg';
import {styled} from '@mui/material/styles';
import ImageImage from './assets/images/image.png';

 
const TypeQuest = styled("div")(({ theme }) =>({  
  opacity: "1",  
  backgroundColor: "rgba(255, 255, 255, 1)",  
  boxShadow: theme.customShadows.cardShadow.boxShadow,  
  borderRadius: "10px",  
  display: "flex",  
  flexDirection: "row",  
  width: "728px",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "40px",  
  padding: "40px",  
  boxSizing: "border-box",  
  overflow: "hidden",  
}));
  
const Image = styled("div")({  
  opacity: "1",  
  backgroundImage: `url(${ImageImage})`,  
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
});
  
const Form = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "40px",  
  padding: "0px",  
  boxSizing: "border-box",  
  flexGrow: "0",  
});
  
const Text = styled("div")({  
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
  
const SignatureFloweralPum = styled("div")(({ theme }) =>({  
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
  
const TextField0 = styled(TextField)({  
  alignSelf: "stretch",  
  flexGrow: "0",  
  height: "77px",  
});
  
const TextField1 = styled(TextField)({  
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
  
const TextField2 = styled(TextField)({  
  flexGrow: "0",  
  width: "58px",  
  height: "77px",  
});
  
const TextField3 = styled(TextField)({  
  flexGrow: "1",  
  height: "77px",  
});
  
const Btm = styled("div")({  
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
 
function Form3(props){
  
  
  return (
     <TypeQuest>
        <Image>
        </Image>
        <Form>
          <Text>
            <ConfirmPurchase>
              Confirm Purchase
            </ConfirmPurchase>
            <SignatureFloweralPum>
              Signature - Floweral Pumps
            </SignatureFloweralPum>
          </Text>
          <Frame3>
            <Row1>
              <TextField0 variant="standard"  label="Name on Card" helperText="Helper"/>
                  <TextField1 variant="standard"  label="Card Number" helperText="Helper"/>
                </Row1>
            <Row2>
              <TextField2 variant="standard"  label="CVV" helperText="Helper"/>
                  <TextField3 variant="standard"  label="Vaild Through" helperText="Helper"/>
                </Row2>
          </Frame3>
          <Btm>
            <Button1 variant="contained" size="large" color="success"  endIcon={<SvgIcon size={"medium"} component={ArrowRight} />}> PAY </Button1>
          </Btm>
        </Form>
      </TypeQuest>
   );
}

export default Form3;
