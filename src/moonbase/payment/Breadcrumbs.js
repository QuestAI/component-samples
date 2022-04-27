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

import HomeImage from './assets/images/Home.png';
import SeparatorImage from './assets/images/Separator_2.png';
import Separator1Image from './assets/images/Separator_1.png';
import Separator2Image from './assets/images/Separator.png';
import Frame44Image from './assets/images/Frame_44.png';
import { styled } from '@mui/material/styles';

 
const Breadcrumbs1 = styled("div")({  
  display: `flex`,  
  flexDirection: `column`,  
  width: `1423px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `22px 60px 0px 60px`,  
  boxSizing: `border-box`,  
});
  
const HeroContent = styled("div")({  
  display: `flex`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  gap: `117px`,  
  padding: `0px 0px 20px 0px`,  
  boxSizing: `border-box`,  
});
  
const Breadcrumb3 = styled("div")(({ theme }) =>({  
  backgroundColor: theme.palette["Background"]["Paper"],  
  display: `flex`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  gap: `24px`,  
  padding: `0px 36px 0px 0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  width: `760px`,  
  overflow: `hidden`,  
}));
  
const Frame45 = styled("div")({  
  display: `flex`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  gap: `10px`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
});
  
const Home = styled("img")({  
  height: `22px`,  
  width: `22px`,  
});
  
const Separator = styled("img")({  
  height: `12.5px`,  
  width: `6px`,  
});
  
const CompanySwag = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `20px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
}));
  
const Separator1 = styled("img")({  
  height: `12.5px`,  
  width: `6px`,  
});
  
const Clothing = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `20px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
}));
  
const Separator2 = styled("img")({  
  height: `12.5px`,  
  width: `6px`,  
});
  
const Latest = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `20px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
}));
  
const Frame44 = styled("img")({  
  height: `22px`,  
  width: `22px`,  
});
 
function Breadcrumbs() {
  return (
    <Breadcrumbs1 >
       <HeroContent >
         <Breadcrumb3 >
           <Frame45 >
             <Home  src={HomeImage} alt={"Home"}/>
           </Frame45>
           <Separator  src={SeparatorImage} alt={"Separator"}/>
           <CompanySwag >
             {`Company Swag`}
               </CompanySwag>
           <Separator1  src={Separator1Image} alt={"Separator"}/>
           <Clothing >
             {`Clothing`}
               </Clothing>
           <Separator2  src={Separator2Image} alt={"Separator"}/>
           <Latest >
             {`Latest`}
               </Latest>
           <Frame44  src={Frame44Image} alt={"Frame 44"}/>
         </Breadcrumb3>
       </HeroContent>
     </Breadcrumbs1>
   );
}

export default Breadcrumbs;