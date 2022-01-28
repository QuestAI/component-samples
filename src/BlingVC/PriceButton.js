import {styled} from '@mui/material/styles';
import usePriceButton from './usePriceButton';
 
const HoverFalse = styled("div", {
    shouldForwardProp: prop => !["background1"].includes(prop)
  })(({ background1 }) =>({  
  background: background1,  
  borderRadius: "18px 8px 18px 8px",  
  display: "flex",  
  flexDirection: "row",  
  height: "42px",  
  justifyContent: "center",  
  alignItems: "center",  
  gap: "10px",  
  padding: "0px 28px",  
  boxSizing: "border-box",  
  cursor: "pointer",  
}));
  
const Q19999 = styled("div")({  
  textAlign: "left",  
  color: "rgba(255, 255, 255, 1)",  
  fontStyle: "normal",  
  fontFamily: "DM Sans",  
  fontWeight: "700",  
  fontSize: "16px",  
  letterSpacing: "0px",  
  textDecoration: "none",  
  textTransform: "none",  
  opacity: "1",  
  flexGrow: "0",  
  width: "60px",  
});
 
function PriceButton(props){
  const { onButtonClick, price } = props;
  const { data, fns } = usePriceButton();
  return (
     <HoverFalse background1={data.isHover ? "linear-gradient(107.35deg, rgba(104, 53, 213, 1) 1.961785417841504%, rgba(142, 90, 252, 1) 95.88998450253727%)" :  "linear-gradient(107.35deg, rgba(104, 53, 213, 0.6) 1.961785417841504%, rgba(142, 90, 252, 0.6) 95.88998450253727%)"} onClick={onButtonClick} onMouseOver={fns.handleMouseOver} onMouseOut={fns.handleMouseOut}>
        <Q19999>
          {price}
        </Q19999>
      </HoverFalse>
   );
}

export default PriceButton;
