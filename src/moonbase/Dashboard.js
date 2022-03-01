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

import {Dialog} from '@mui/material';
import {styled} from '@mui/material/styles';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import FeedbackBar from './FeedbackBar';
import Upcoming from './Upcoming';
import Notifications from './Notifications';
import ProductCard from './ProductCard';
import PaymentCard from './PaymentCard';
import useDashboard from './useDashboard';
 
const TypeQuestSidebarOpen = styled("div", {
    shouldForwardProp: prop => !["width1"].includes(prop)
  })(({ width1 }) =>({  
  opacity: "1",  
  backgroundColor: "rgba(255, 255, 255, 1)",  
  display: "flex",  
  flexDirection: "column",  
  width: width1,  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  padding: "0px",  
  boxSizing: "border-box",  
}));
  
const Page = styled("div", {
    shouldForwardProp: prop => !["height1"].includes(prop)
  })(({ height1 }) =>({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "row",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  padding: "0px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
  height: height1,  
}));
  
const Sidebar1 = styled(Sidebar)(({ theme }) =>({  
  alignSelf: "stretch",  
  flexGrow: "0",  
  width: "290px",  
}));
  
const Content = styled("div", {
    shouldForwardProp: prop => !["width1", "height1", "overflow1"].includes(prop)
  })(({ width1,height1,overflow1 }) =>({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  padding: "0px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "1",  
  width: width1,  
  height: height1,  
  overflow: overflow1,  
}));
  
const NavBar1 = styled(NavBar)(({ theme }) =>({  
  alignSelf: "stretch",  
  flexGrow: "0",  
  height: "80px",  
}));
  
const Sec1 = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  padding: "22px 60px 30px 60px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
});
  
const HeroContent = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "row",  
  justifyContent: "flex-start",  
  alignItems: "center",  
  gap: "117px",  
  padding: "0px 0px 20px 0px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
});
  
const WelcomeRow = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "10px",  
  padding: "0px",  
  boxSizing: "border-box",  
  flexGrow: "1",  
});
  
const WelcomeText = styled("div")({  
  textAlign: "left",  
  color: "rgba(0, 0, 0, 1)",  
  fontStyle: "normal",  
  fontFamily: "Inter",  
  fontWeight: "700",  
  fontSize: "28px",  
  letterSpacing: "0px",  
  textDecoration: "none",  
  textTransform: "none",  
  opacity: "1",  
  flexGrow: "0",  
});
  
const FeedbackBar1 = styled(FeedbackBar)(({ theme }) =>({  
  alignSelf: "stretch",  
  flexGrow: "0",  
}));
  
const Sec2 = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "row",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  padding: "0px 61px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
});
  
const Upcoming1 = styled(Upcoming)(({ theme }) =>({  
  flexGrow: "1",  
}));
  
const Padding = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "22px",  
  padding: "0px 20px 0px 0px",  
  boxSizing: "border-box",  
  flexGrow: "0",  
  width: "252px",  
});
  
const Notifications1 = styled(Notifications)(({ theme }) =>({  
  flexGrow: "0",  
}));
  
const Sec3 = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "20px",  
  padding: "40px 61px 0px 61px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
});
  
const PopularSwag = styled("div")({  
  textAlign: "left",  
  color: "rgba(0, 0, 0, 1)",  
  fontStyle: "normal",  
  fontFamily: "Inter",  
  fontWeight: "700",  
  fontSize: "22px",  
  letterSpacing: "0px",  
  textDecoration: "none",  
  textTransform: "none",  
  opacity: "1",  
  flexGrow: "0",  
});
  
const Items = styled("div")({  
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
  
const ProductCard1 = styled(ProductCard)(({ theme }) =>({  
  flexGrow: "1",  
}));
  
const Sec4 = styled("div")({  
  opacity: "1",  
  display: "flex",  
  flexDirection: "column",  
  justifyContent: "flex-start",  
  alignItems: "flex-start",  
  gap: "20px",  
  padding: "40px 61px 0px 61px",  
  boxSizing: "border-box",  
  alignSelf: "stretch",  
  flexGrow: "0",  
  height: "406px",  
});
  
const PaymentCard1 = styled(PaymentCard)(({ theme }) =>({  
  flexGrow: "0",  
  height: "574px",  
  width: "728px",  
}));
 
function Dashboard(){
  const {data, fns} = useDashboard();
  return (
     <TypeQuestSidebarOpen width1={"100vw"}>
        <Page height1={"100%"}>
          <Sidebar1  />
          <Content width1={"calc(100vw - 290px)"} height1={"100vh"} overflow1={"auto"}>
            <NavBar1  />
            <Sec1>
              <HeroContent>
                <WelcomeRow>
                  <WelcomeText>
                    Welcome back to Moon Base, Ellen
                  </WelcomeText>
                </WelcomeRow>
              </HeroContent>
              <FeedbackBar1  />
            </Sec1>
            <Sec2>
              <Upcoming1  />
              <Padding>
              </Padding>
              <Notifications1  />
            </Sec2>
            <Sec3>
              <PopularSwag>
                Popular Swag
              </PopularSwag>
              <Items>
                {data.products.map((product, index) => {
                  return (
                    <ProductCard1  key={index} product={product} buyClicked={() => fns.buyClicked(product)}/>
                  )
                })}
              </Items>
            </Sec3>
            <Sec4>
            </Sec4>
          </Content>
        </Page>
        <Dialog open={data.showPayment} onClose={fns.closePaymentDialog} maxWidth={"1000px"}>
          <PaymentCard1  product={data.selectedProduct} onClose={fns.closePaymentDialog}/>
        </Dialog>
      </TypeQuestSidebarOpen>
   );
}

export default Dashboard;