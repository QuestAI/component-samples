import {styled} from '@mui/material/styles';
import Card from './Card';
import useCardList from './useCardList';
 
const Property1Default = styled("div")({  
  opacity: "1",  
  backgroundColor: "rgba(29, 26, 34, 1)",  
  display: "flex",  
  flexDirection: "column",  
  width: "390px",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  padding: "0px",  
  boxSizing: "border-box",  
  overflow: "hidden",  
});
  
const Frame236 = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "24px",  
  padding: "25px 25px 0px 25px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
});
  
const Explore = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "12px",  
  padding: "0px 0px 25px 0px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
});
  
const ExploreTheBeautifulW = styled("div")({  
  textAlign: "left",  
  color: "rgba(255, 255, 255, 1)",  
  fontStyle: "normal",  
  fontFamily: "DM Sans",  
  fontWeight: "700",  
  fontSize: "20px",  
  letterSpacing: "0px",  
  textDecoration: "none",  
  textTransform: "none",  
  opacity: "1",  
  flexGrow: "0",  
  width: "156px",  
});
  
const CardList1 = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "10px",  
  padding: "0px",  
  boxSizing: "border-box",  
  flexGrow: "0",  
});
  
const Card1 = styled(Card)(({ theme }) =>({  
  flexGrow: "0",  
  width: "340px",  
}));
 
function CardList(props){
  
  const { data, fns } = useCardList();
  return (
     <Property1Default>
        <Frame236>
          <Explore>
            <ExploreTheBeautifulW>
              Explore the
Beautiful world!
            </ExploreTheBeautifulW>
            <CardList1>
              {data.cards.map((card, index) => {
                return (
                  <Card1  key={index} cardData={card} handleButtonClick={(index) => fns.handleButtonClick(index)}/>
                )
              })}
            </CardList1>
          </Explore>
        </Frame236>
      </Property1Default>
   );
}

export default CardList;
