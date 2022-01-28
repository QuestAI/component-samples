import {styled} from '@mui/material/styles';
import PriceButton from './PriceButton';

 
const Property1ForSale = styled("div")({  
  opacity: "1",  
  backgroundColor: "rgba(46, 42, 56, 1)",  
  boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.08)",  
  borderRadius: "20px",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "20px",  
  padding: "16px 17px",  
  boxSizing: "border-box",  
});
  
const CardTop = styled("div")({  
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
  
const Seller = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "row",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "10px",  
  padding: "0px",  
  boxSizing: "border-box",  
  flexGrow: "0",  
});
  
const Profile = styled("img")({  
  height: "42px",  
  width: "42px",  
  flexGrow: "0",  
});
  
const Name = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "3px",  
  padding: "0px",  
  boxSizing: "border-box",  
  flexGrow: "0",  
});
  
const AnkurPansari = styled("div")({  
  textAlign: "left",  
  color: "rgba(255, 255, 255, 1)",  
  fontStyle: "normal",  
  fontFamily: "DM Sans",  
  fontWeight: "700",  
  fontSize: "17px",  
  letterSpacing: "0px",  
  textDecoration: "none",  
  textTransform: "none",  
  opacity: "1",  
  flexGrow: "0",  
});
  
const Anxman = styled("div")({  
  textAlign: "center",  
  color: "rgba(180, 180, 180, 1)",  
  fontStyle: "normal",  
  fontFamily: "DM Sans",  
  fontWeight: "500",  
  fontSize: "13px",  
  letterSpacing: "0px",  
  textDecoration: "none",  
  textTransform: "none",  
  opacity: "1",  
  flexGrow: "0",  
});
  
const Time = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "row",  
  justifyContent: "flex-end",  
  alignItems: "flex-start",  
  gap: "10px",  
  padding: "4px 0px 0px 0px",  
  boxSizing: "border-box",  
  flexGrow: "0",  
});
  
const Q1HourAgo = styled("div")({  
  textAlign: "right",  
  color: "rgba(255, 255, 255, 0.4)",  
  fontStyle: "normal",  
  fontFamily: "DM Sans",  
  fontWeight: "500",  
  fontSize: "14px",  
  letterSpacing: "0px",  
  textDecoration: "none",  
  textTransform: "none",  
  opacity: "1",  
  flexGrow: "0",  
  width: "66px",  
});
  
const CardForSale = styled("div")({  
  opacity: "1",  
  backgroundColor: "rgba(35, 32, 44, 1)",  
  borderRadius: "20px",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "center",  
  alignItems: "center",  
  gap: "10px",  
  padding: "14px 38px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
});
  
const Images1 = styled("img")({  
  height: "153px",  
  width: "229px",  
  flexGrow: "0",  
});
  
const AddedUnlimitedBlackL = styled("div")({  
  textAlign: "left",  
  color: "rgba(255, 255, 255, 1)",  
  fontStyle: "normal",  
  fontFamily: "DM Sans",  
  fontWeight: "500",  
  fontSize: "16px",  
  letterSpacing: "0px",  
  textDecoration: "none",  
  lineHeight: "24px",  
  textTransform: "none",  
  opacity: "1",  
  alignSelf: "stretch",  
  flexGrow: "0",  
});
  
const Frame240 = styled("div")({  
  opacity: "1",  
  backgroundColor: "rgba(29, 26, 34, 1)",  
  borderRadius: "15px",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "10px",  
  padding: "13px 14px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
});
  
const SalePrice = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "row",  
  justifyContent: "space-between",  
  alignItems: "center",  
  padding: "0px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
});
  
const ConditionHp = styled("div")({  
  textAlign: "left",  
  color: "rgba(255, 255, 255, 1)",  
  fontStyle: "normal",  
  fontFamily: "DM Sans",  
  fontWeight: "700",  
  fontSize: "15px",  
  letterSpacing: "0px",  
  textDecoration: "none",  
  textTransform: "none",  
  opacity: "1",  
  flexGrow: "0",  
  width: "149px",  
});
  
const PriceButton1 = styled(PriceButton)(({ theme }) =>({  
  flexGrow: "0",  
  height: "42px",  
}));
  
const SoldPrice = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "row",  
  justifyContent: "center",  
  alignItems: "center",  
  padding: "0px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
  height: "42px",  
});
  
const Sold = styled("div")({  
  textAlign: "left",  
  color: "rgba(255, 255, 255, 0.5)",  
  fontStyle: "normal",  
  fontFamily: "DM Sans",  
  fontWeight: "700",  
  fontSize: "20px",  
  letterSpacing: "0px",  
  textDecoration: "none",  
  textTransform: "none",  
  opacity: "1",  
  flexGrow: "0",  
  width: "48px",  
});
  
const Q305799 = styled("div")({  
  textAlign: "left",  
  color: "rgba(255, 255, 255, 0.5)",  
  fontStyle: "normal",  
  fontFamily: "DM Sans",  
  fontWeight: "500",  
  fontSize: "20px",  
  letterSpacing: "0px",  
  textDecoration: "none",  
  textTransform: "none",  
  opacity: "1",  
  flexGrow: "0",  
  width: "93px",  
});
 
function Card(props){
  const { cardData, handleButtonClick } = props;
  
  return (
     <Property1ForSale>
        <CardTop>
          <Seller>
            <Profile src={cardData.profileImage}/>
            <Name>
              <AnkurPansari>
                {cardData.sellerName}
              </AnkurPansari>
              <Anxman>
                {"(" + cardData.sellerUsername + ")"}
              </Anxman>
            </Name>
          </Seller>
          <Time>
            <Q1HourAgo>
              {cardData.listingTime}
            </Q1HourAgo>
          </Time>
        </CardTop>
        <CardForSale>
          <Images1 src={cardData.image}/>
        </CardForSale>
        <AddedUnlimitedBlackL>
          {cardData.description}
        </AddedUnlimitedBlackL>
        <Frame240>
          {!(cardData.isSold) ?
              <SalePrice>
              <ConditionHp>
                {"Condition: " + cardData.condition}
              </ConditionHp>
              <PriceButton1  onButtonClick={() => handleButtonClick(cardData.index)} price={cardData.price}/>
            </SalePrice>
          :null}
          {(cardData.isSold) ?
              <SoldPrice>
              <Sold>
                Sold:
              </Sold>
              <Q305799>
                {cardData.price}
              </Q305799>
            </SoldPrice>
          :null}
        </Frame240>
      </Property1ForSale>
   );
}

export default Card;
