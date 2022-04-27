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

import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';

 
const Notifications1 = styled("div")({  
  display: `flex`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  gap: `41px`,  
  padding: `10px 0px 0px 0px`,  
  boxSizing: `border-box`,  
});
  
const QuickAccess = styled("div")({  
  display: `flex`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  gap: `24px`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
});
  
const Notifications2 = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Inter`,  
  fontWeight: `700`,  
  fontSize: `22px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
});
  
const Box = styled("div")({  
  backgroundColor: `rgba(251, 250, 250, 1)`,  
  boxShadow: `0px 4px 18px rgba(0, 0, 0, 0.1)`,  
  border: `1px solid rgba(176, 176, 176, 1)`,  
  boxSizing: `border-box`,  
  borderRadius: `4px`,  
  display: `flex`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  gap: `7px`,  
  padding: `24px`,  
  width: `348px`,  
});
  
const YouHave3ProjectNotif = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Inter`,  
  fontWeight: `500`,  
  fontSize: `20px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `28px`,  
  textTransform: `none`,  
});
  
const Link1 = styled(Link)(({ theme }) =>({  
  color: theme.palette["Primary"]["Main"],  
  fontStyle: theme.typography["Typography"]["Body 3"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 3"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 3"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 3"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 3"].letterSpacing,  
  textDecoration: theme.typography["Typography"]["Body 3"].textDecoration,  
  lineHeight: theme.typography["Typography"]["Body 3"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 3"].textTransform,  
}));
 
function Notifications() {
  return (
    <Notifications1 >
       <QuickAccess >
         <Notifications2 >
           {`Notifications`}
             </Notifications2>
         <Box >
           <YouHave3ProjectNotif >
             {`You have 3 Project 
Notifications`}
               </YouHave3ProjectNotif>
           <Link1 href="#" underline="hover"  >See your notifications ></Link1>
         </Box>
       </QuickAccess>
     </Notifications1>
   );
}

export default Notifications;