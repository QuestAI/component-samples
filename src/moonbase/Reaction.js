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

import {styled} from '@mui/material/styles';
import useReaction from './useReaction';
 
const StateDefault = styled("div", {
    shouldForwardProp: prop => !["backgroundColor1", "border1"].includes(prop)
  })(({ theme, backgroundColor1,border1 }) =>({  
  backgroundColor: backgroundColor1,  
  border: border1,  
  boxSizing: "border-box",  
  borderRadius: "20px",  
  display: "flex",  
  flexDirection: "row",  
  width: "221px",  
  height: "42px",  
  justifyContent: "center",  
  alignItems: "center",  
  gap: "2px",  
  padding: "4px 8px",  
  cursor: "pointer",  
}));
  
const Emoji = styled("div")({  
  textAlign: "center",  
  color: "rgba(0, 0, 0, 1)",  
  fontStyle: "normal",  
  fontFamily: "Roboto",  
  fontWeight: "400",  
  fontSize: "28px",  
  letterSpacing: "0px",  
  textDecoration: "none",  
  lineHeight: "14px",  
  textTransform: "none",  
  opacity: "1",  
  flexGrow: "0",  
});
 
function Reaction(props){
  const {data, fns} = useReaction();
  return (
     <StateDefault backgroundColor1={props.isSelected ? "rgba(195, 230, 255, 1)" : data.isHover ? "rgba(232, 245, 255, 1)" :  "rgba(255, 255, 255, 1)"} border1={props.isSelected ? "6px solid rgba(255, 255, 255, 1)" : data.isHover ? "1px solid rgba(123, 97, 255, 0.15)" : "1px solid rgba(0, 0, 0, 0.08)"} onClick={props.handleClick} onMouseOver={fns.handleMouseOver} onMouseOut={fns.handleMouseOut}>
        <Emoji>
          {props.reactionInfo.emoji}
        </Emoji>
      </StateDefault>
   );
}

export default Reaction;
