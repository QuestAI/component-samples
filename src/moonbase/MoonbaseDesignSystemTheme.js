
import { createTheme } from "@mui/material/styles";
  
import SvgIcon from '@mui/material/SvgIcon';
    
import { ReactComponent as Success } from "./assets/images/Icon_Success__Color_default.svg";
import { ReactComponent as Info } from "./assets/images/Icon_Info__Color_default.svg";
import { ReactComponent as Alert1 } from "./assets/images/Icon_Alert__Color_default.svg";
import { ReactComponent as Error } from "./assets/images/Icon_Error__Color_default.svg";
import { ReactComponent as CheckboxIndeterminat } from "./assets/images/Icon_Checkbox_Indeterminate__Color_default.svg";
import { ReactComponent as CheckboxChecked } from "./assets/images/Icon_Checkbox_Checked__Color_default.svg";
import { ReactComponent as Checkbox1 } from "./assets/images/Icon_Checkbox__Color_default.svg";
import { ReactComponent as ToggleSwitchOff } from "./assets/images/Icon_Toggle_Switch_Off__Color_default.svg";
import { ReactComponent as ToggleSwitchOn } from "./assets/images/Icon_Toggle_Switch_On__Color_default.svg";
 
const globalTheme = createTheme({
  palette: {
    text: {
      primary: "rgba(0, 0, 0, 1)",
      secondary: "rgba(85, 85, 85, 1)",
      disabled: "rgba(176, 176, 176, 1)",
      buttonPrimary: "rgba(255, 255, 255, 1)",
      buttonSecondary: "rgba(107, 104, 255, 1)",
    },
    primary: {
      main: "rgba(107, 104, 255, 1)",
      light: "rgba(123, 97, 255, 1)",
      dark: "rgba(78, 75, 201, 1)",
      contrast: "rgba(255, 255, 255, 1)",
      containedHover: "rgba(123, 97, 255, 0.15)",
      outlinedHover: "rgba(123, 97, 255, 0.15)",
      containedResting: "rgba(255, 255, 255, 0.01)",
    },
    secondary: {
      main: "rgba(255, 255, 255, 1)",
      light: "rgba(249, 249, 255, 1)",
      dark: "rgba(235, 235, 255, 1)",
      contrast: "rgba(107, 104, 255, 1)",
      containedHover: "rgba(123, 97, 255, 0.15)",
      outlinedHover: "rgba(123, 97, 255, 0.15)",
      outlinedResting: "rgba(255, 255, 255, 0.01)",
    },
    error: {
      main: "rgba(233, 78, 124, 1)",
      light: "rgba(246, 59, 115, 1)",
      dark: "rgba(214, 41, 93, 1)",
      contrast: "rgba(255, 255, 255, 1)",
      containedHover: "rgba(246, 59, 115, 0.15)",
      outlinedHover: "rgba(246, 59, 115, 0.15)",
      outlinedResting: "rgba(255, 255, 255, 0.01)",
    },
    warning: {
      main: "rgba(245, 161, 83, 1)",
      light: "rgba(255, 144, 64, 1)",
      dark: "rgba(222, 107, 24, 1)",
      contrast: "rgba(255, 255, 255, 1)",
      containedHover: "rgba(255, 158, 87, 0.15)",
      outlinedHover: "rgba(255, 158, 87, 0.15)",
      outlinedResting: "rgba(255, 255, 255, 0.01)",
    },
    info: {
      main: "rgba(83, 177, 245, 1)",
      light: "rgba(64, 186, 255, 1)",
      dark: "rgba(33, 153, 220, 1)",
      contrast: "rgba(255, 255, 255, 1)",
      containedHover: "rgba(83, 177, 245, 0.15)",
      outlinedHover: "rgba(83, 177, 245, 0.15)",
      outlinedResting: "rgba(255, 255, 255, 0.01)",
    },
    success: {
      main: "rgba(100, 207, 111, 1)",
      light: "rgba(54, 209, 70, 1)",
      dark: "rgba(30, 170, 44, 1)",
      contrast: "rgba(255, 255, 255, 1)",
      containedHover: "rgba(55, 226, 72, 0.15)",
      outlinedHover: "rgba(55, 226, 72, 0.15)",
      outlinedResting: "rgba(255, 255, 255, 0.01)",
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      selected: "rgba(0, 0, 0, 0.08)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      focus: "rgba(0, 0, 0, 0.12)",
      hoverPrimary: "rgba(107, 104, 255, 0.12)",
      hoverSuccess: "rgba(100, 207, 111, 0.12)",
      hoverInfo: "rgba(83, 177, 245, 0.12)",
      hoverWarning: "rgba(245, 161, 83, 0.12)",
      hoverError: "rgba(233, 78, 124, 0.12)",
    },
    other: {
      divider: "rgba(224, 224, 224, 1)",
      border: "rgba(176, 176, 176, 1)",
      snackbar: "rgba(50, 50, 50, 1)",
      tooltip: "rgba(44, 44, 44, 1)",
      borderHover: "rgba(50, 50, 50, 1)",
      background: "rgba(255, 255, 255, 1)",
    },
  },
  typography: {
    "Button Font - Large": {
       fontStyle: "normal", 
       fontFamily: "Heebo", 
       fontWeight: "500", 
       fontSize: "20px", 
       letterSpacing: "0px", 
       textDecoration: "none", 
       textTransform: "none", 
    },
    "H1": {
       fontStyle: "normal", 
       fontFamily: "Antonio", 
       fontWeight: "700", 
       fontSize: "86px", 
       letterSpacing: "-2.58px", 
       textDecoration: "none", 
       lineHeight: "120.00000476837158%", 
       textTransform: "none", 
    },
    "H2": {
       fontStyle: "normal", 
       fontFamily: "Antonio", 
       fontWeight: "400", 
       fontSize: "60px", 
       letterSpacing: "-3px", 
       textDecoration: "none", 
       lineHeight: "58px", 
       textTransform: "none", 
    },
    "H3": {
       fontStyle: "normal", 
       fontFamily: "Antonio", 
       fontWeight: "700", 
       fontSize: "48px", 
       letterSpacing: "-0.48px", 
       textDecoration: "none", 
       textTransform: "none", 
    },
    "H4": {
       fontStyle: "normal", 
       fontFamily: "Heebo", 
       fontWeight: "400", 
       fontSize: "34px", 
       letterSpacing: "0.34px", 
       textDecoration: "none", 
       textTransform: "none", 
    },
    "H5": {
       fontStyle: "normal", 
       fontFamily: "Heebo", 
       fontWeight: "400", 
       fontSize: "24px", 
       letterSpacing: "0px", 
       textDecoration: "none", 
       textTransform: "none", 
    },
    "H6": {
       fontStyle: "normal", 
       fontFamily: "Heebo", 
       fontWeight: "500", 
       fontSize: "20px", 
       letterSpacing: "0px", 
       textDecoration: "none", 
       textTransform: "none", 
    },
    "Body 1": {
       fontStyle: "normal", 
       fontFamily: "Heebo", 
       fontWeight: "400", 
       fontSize: "20px", 
       letterSpacing: "0px", 
       textDecoration: "none", 
       textTransform: "none", 
    },
    "Body 2": {
       fontStyle: "normal", 
       fontFamily: "Heebo", 
       fontWeight: "400", 
       fontSize: "16px", 
       letterSpacing: "0px", 
       textDecoration: "none", 
       textTransform: "none", 
    },
    "Body 3": {
       fontStyle: "normal", 
       fontFamily: "Heebo", 
       fontWeight: "400", 
       fontSize: "14px", 
       letterSpacing: "0px", 
       textDecoration: "none", 
       textTransform: "none", 
    },
    "Body 1 Link": {
       fontStyle: "normal", 
       fontFamily: "Heebo", 
       fontWeight: "400", 
       fontSize: "20px", 
       letterSpacing: "0px", 
       textDecoration: "underline", 
       textTransform: "none", 
    },
    "Body 2 Link": {
       fontStyle: "normal", 
       fontFamily: "Heebo", 
       fontWeight: "400", 
       fontSize: "16px", 
       letterSpacing: "0px", 
       textDecoration: "underline", 
       textTransform: "none", 
    },
    "Body 3 Link": {
       fontStyle: "normal", 
       fontFamily: "Heebo", 
       fontWeight: "400", 
       fontSize: "14px", 
       letterSpacing: "0px", 
       textDecoration: "underline", 
       textTransform: "none", 
    },
    "Button Font - Medium": {
       fontStyle: "normal", 
       fontFamily: "Heebo", 
       fontWeight: "500", 
       fontSize: "18px", 
       letterSpacing: "0px", 
       textDecoration: "none", 
       textTransform: "none", 
    },
    "Button Font - Small": {
       fontStyle: "normal", 
       fontFamily: "Heebo", 
       fontWeight: "500", 
       fontSize: "15px", 
       letterSpacing: "0px", 
       textDecoration: "none", 
       textTransform: "none", 
    },
    "Label": {
       fontStyle: "normal", 
       fontFamily: "Heebo", 
       fontWeight: "400", 
       fontSize: "12px", 
       letterSpacing: "0px", 
       textDecoration: "none", 
       textTransform: "none", 
    },
    "Helper": {
       fontStyle: "normal", 
       fontFamily: "Heebo", 
       fontWeight: "400", 
       fontSize: "12px", 
       letterSpacing: "0px", 
       textDecoration: "none", 
       textTransform: "none", 
    },
    "Tooltip": {
       fontStyle: "normal", 
       fontFamily: "Heebo", 
       fontWeight: "500", 
       fontSize: "12px", 
       letterSpacing: "0px", 
       textDecoration: "none", 
       textTransform: "none", 
    },
  },
  customShadows: {
    "buttonShadowPrimary": {
       boxShadow: "0px 3px 5px rgba(107, 104, 255, 0.5)", 
    },
    "buttonShadowWarning": {
       boxShadow: "0px 3px 5px rgba(208, 132, 43, 1)", 
    },
    "buttonShadowError": {
       boxShadow: "0px 3px 5px rgba(246, 59, 115, 0.5)", 
    },
    "buttonShadowInfo": {
       boxShadow: "0px 3px 5px rgba(60, 111, 242, 0.6)", 
    },
    "buttonShadowSuccess": {
       boxShadow: "0px 3px 5px rgba(18, 157, 32, 0.6)", 
    },
    "switchShadow": {
       boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3)", 
    },
    "cardShadow": {
       boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.25)", 
    },
  },
});

const questTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      }
    },
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          fontStyle: globalTheme.typography["Button Font - Large"].fontStyle, 
          fontFamily: globalTheme.typography["Button Font - Large"].fontFamily, 
          fontWeight: globalTheme.typography["Button Font - Large"].fontWeight, 
          fontSize: globalTheme.typography["Button Font - Large"].fontSize, 
          letterSpacing: globalTheme.typography["Button Font - Large"].letterSpacing, 
          textDecoration: globalTheme.typography["Button Font - Large"].textDecoration, 
          lineHeight: globalTheme.typography["Button Font - Large"].lineHeight, 
          textTransform: globalTheme.typography["Button Font - Large"].textTransform, 
        }, 
        textSizeLarge: {
          padding: "8px 22px", 
          borderRadius: "4px", 
          height: "45px", 
        }, 
        sizeSmall: {
          fontStyle: globalTheme.typography["Button Font - Small"].fontStyle, 
          fontFamily: globalTheme.typography["Button Font - Small"].fontFamily, 
          fontWeight: globalTheme.typography["Button Font - Small"].fontWeight, 
          fontSize: globalTheme.typography["Button Font - Small"].fontSize, 
          letterSpacing: globalTheme.typography["Button Font - Small"].letterSpacing, 
          textDecoration: globalTheme.typography["Button Font - Small"].textDecoration, 
          lineHeight: globalTheme.typography["Button Font - Small"].lineHeight, 
          textTransform: globalTheme.typography["Button Font - Small"].textTransform, 
        }, 
        textSizeSmall: {
          padding: "4px 14px", 
          borderRadius: "4px", 
          height: "30px", 
        }, 
        sizeMedium: {
          fontStyle: globalTheme.typography["Button Font - Medium"].fontStyle, 
          fontFamily: globalTheme.typography["Button Font - Medium"].fontFamily, 
          fontWeight: globalTheme.typography["Button Font - Medium"].fontWeight, 
          fontSize: globalTheme.typography["Button Font - Medium"].fontSize, 
          letterSpacing: globalTheme.typography["Button Font - Medium"].letterSpacing, 
          textDecoration: globalTheme.typography["Button Font - Medium"].textDecoration, 
          lineHeight: globalTheme.typography["Button Font - Medium"].lineHeight, 
          textTransform: globalTheme.typography["Button Font - Medium"].textTransform, 
        }, 
        textSizeMedium: {
          padding: "6px 16px", 
          borderRadius: "4px", 
          height: "38px", 
        }, 
        outlinedSizeLarge: {
          padding: "8px 22px", 
          borderRadius: "4px", 
          height: "45px", 
        }, 
        outlinedSizeSmall: {
          padding: "4px 14px", 
          borderRadius: "4px", 
          height: "30px", 
        }, 
        outlinedSizeMedium: {
          padding: "6px 16px", 
          borderRadius: "4px", 
          height: "38px", 
        }, 
        containedSizeLarge: {
          padding: "8px 22px", 
          borderRadius: "4px", 
          height: "45px", 
        }, 
        containedSizeSmall: {
          padding: "4px 14px", 
          borderRadius: "4px", 
          height: "30px", 
        }, 
        containedSizeMedium: {
          padding: "6px 16px", 
          borderRadius: "4px", 
          height: "38px", 
        }, 
        textPrimary: {
          opacity: "1", 
          color: "rgba(0, 0, 0, 1)",  
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.primary.outlinedHover, 
            color: "rgba(0, 0, 0, 1)",  
          }, 
          "&:disabled": {
            opacity: "1", 
            color: "rgba(176, 176, 176, 1)",  
          }, 
        }, 
        textSecondary: {
          opacity: "1", 
          color: "rgba(107, 104, 255, 1)",  
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.secondary.outlinedHover, 
            color: "rgba(107, 104, 255, 1)",  
          }, 
          "&:disabled": {
            opacity: "1", 
            color: "rgba(176, 176, 176, 1)",  
          }, 
        }, 
        textError: {
          opacity: "1", 
          color: "rgba(233, 78, 124, 1)",  
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.error.outlinedHover, 
            color: "rgba(233, 78, 124, 1)",  
          }, 
          "&:disabled": {
            opacity: "1", 
            color: "rgba(176, 176, 176, 1)",  
          }, 
        }, 
        textSuccess: {
          opacity: "1", 
          color: "rgba(100, 207, 111, 1)",  
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.success.outlinedHover, 
            color: "rgba(100, 207, 111, 1)",  
          }, 
          "&:disabled": {
            opacity: "1", 
            color: "rgba(176, 176, 176, 1)",  
          }, 
        }, 
        textInfo: {
          opacity: "1", 
          color: "rgba(83, 177, 245, 1)",  
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.info.outlinedHover, 
            color: "rgba(83, 177, 245, 1)",  
          }, 
          "&:disabled": {
            opacity: "1", 
            color: "rgba(176, 176, 176, 1)",  
          }, 
        }, 
        textWarning: {
          opacity: "1", 
          color: "rgba(245, 161, 83, 1)",  
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.warning.outlinedHover, 
            color: "rgba(245, 161, 83, 1)",  
          }, 
          "&:disabled": {
            opacity: "1", 
            color: "rgba(176, 176, 176, 1)",  
          }, 
        }, 
        outlinedPrimary: {
          opacity: "1", 
          border: "1px solid rgba(107, 104, 255, 1)", 
          boxSizing: "border-box", 
          color: "rgba(0, 0, 0, 1)",  
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.primary.outlinedHover, 
            border: "1px solid rgba(123, 97, 255, 1)", 
            boxSizing: "border-box", 
            color: "rgba(0, 0, 0, 1)",  
          }, 
          "&:disabled": {
            opacity: "1", 
            border: "1px solid rgba(0, 0, 0, 0.26)", 
            boxSizing: "border-box", 
            color: "rgba(176, 176, 176, 1)",  
          }, 
        }, 
        outlinedSecondary: {
          opacity: "1", 
          border: "1px solid rgba(123, 97, 255, 0.15)", 
          boxSizing: "border-box", 
          color: "rgba(0, 0, 0, 1)",  
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.secondary.outlinedHover, 
            border: "1px solid rgba(123, 97, 255, 0.15)", 
            boxSizing: "border-box", 
            color: "rgba(0, 0, 0, 1)",  
          }, 
          "&:disabled": {
            opacity: "1", 
            border: "1px solid rgba(0, 0, 0, 0.26)", 
            boxSizing: "border-box", 
            color: "rgba(176, 176, 176, 1)",  
          }, 
        }, 
        outlinedError: {
          opacity: "1", 
          border: "1px solid rgba(233, 78, 124, 1)", 
          boxSizing: "border-box", 
          color: "rgba(0, 0, 0, 1)",  
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.error.outlinedHover, 
            border: "1px solid rgba(246, 59, 115, 1)", 
            boxSizing: "border-box", 
            color: "rgba(0, 0, 0, 1)",  
          }, 
          "&:disabled": {
            opacity: "1", 
            border: "1px solid rgba(0, 0, 0, 0.26)", 
            boxSizing: "border-box", 
            color: "rgba(176, 176, 176, 1)",  
          }, 
        }, 
        outlinedSuccess: {
          opacity: "1", 
          border: "1px solid rgba(100, 207, 111, 1)", 
          boxSizing: "border-box", 
          color: "rgba(0, 0, 0, 1)",  
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.success.outlinedHover, 
            border: "1px solid rgba(54, 209, 70, 1)", 
            boxSizing: "border-box", 
            color: "rgba(0, 0, 0, 1)",  
          }, 
          "&:disabled": {
            opacity: "1", 
            border: "1px solid rgba(0, 0, 0, 0.26)", 
            boxSizing: "border-box", 
            color: "rgba(176, 176, 176, 1)",  
          }, 
        }, 
        outlinedInfo: {
          opacity: "1", 
          border: "1px solid rgba(83, 177, 245, 1)", 
          boxSizing: "border-box", 
          color: "rgba(0, 0, 0, 1)",  
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.info.outlinedHover, 
            border: "1px solid rgba(64, 186, 255, 1)", 
            boxSizing: "border-box", 
            color: "rgba(0, 0, 0, 1)",  
          }, 
          "&:disabled": {
            opacity: "1", 
            border: "1px solid rgba(0, 0, 0, 0.26)", 
            boxSizing: "border-box", 
            color: "rgba(176, 176, 176, 1)",  
          }, 
        }, 
        outlinedWarning: {
          opacity: "1", 
          border: "1px solid rgba(245, 161, 83, 1)", 
          boxSizing: "border-box", 
          color: "rgba(0, 0, 0, 1)",  
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.warning.outlinedHover, 
            border: "1px solid rgba(255, 144, 64, 1)", 
            boxSizing: "border-box", 
            color: "rgba(0, 0, 0, 1)",  
          }, 
          "&:disabled": {
            opacity: "1", 
            border: "1px solid rgba(0, 0, 0, 0.26)", 
            boxSizing: "border-box", 
            color: "rgba(176, 176, 176, 1)",  
          }, 
        }, 
        containedPrimary: {
          opacity: "1", 
          backgroundColor: globalTheme.palette.primary.main, 
          boxShadow: globalTheme.customShadows.buttonShadowPrimary.boxShadow, 
          color: "rgba(255, 255, 255, 1)",  
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.primary.light, 
            boxShadow: globalTheme.customShadows.buttonShadowPrimary.boxShadow, 
            color: "rgba(255, 255, 255, 1)",  
          }, 
          "&:disabled": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.action.disabledBackground, 
            color: "rgba(255, 255, 255, 1)",  
          }, 
        }, 
        containedSecondary: {
          opacity: "1", 
          backgroundColor: globalTheme.palette.secondary.main, 
          boxShadow: globalTheme.customShadows.buttonShadowPrimary.boxShadow, 
          color: "rgba(107, 104, 255, 1)",  
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.secondary.light, 
            boxShadow: globalTheme.customShadows.buttonShadowPrimary.boxShadow, 
            color: "rgba(107, 104, 255, 1)",  
          }, 
          "&:disabled": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.action.disabledBackground, 
            color: "rgba(255, 255, 255, 1)",  
          }, 
        }, 
        containedError: {
          opacity: "1", 
          backgroundColor: globalTheme.palette.error.main, 
          boxShadow: globalTheme.customShadows.buttonShadowError.boxShadow, 
          color: "rgba(255, 255, 255, 1)",  
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.error.light, 
            boxShadow: globalTheme.customShadows.buttonShadowError.boxShadow, 
            color: "rgba(255, 255, 255, 1)",  
          }, 
          "&:disabled": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.action.disabledBackground, 
            color: "rgba(255, 255, 255, 1)",  
          }, 
        }, 
        containedSuccess: {
          opacity: "1", 
          backgroundColor: globalTheme.palette.success.main, 
          boxShadow: globalTheme.customShadows.buttonShadowSuccess.boxShadow, 
          color: "rgba(255, 255, 255, 1)",  
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.success.light, 
            boxShadow: globalTheme.customShadows.buttonShadowSuccess.boxShadow, 
            color: "rgba(255, 255, 255, 1)",  
          }, 
          "&:disabled": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.action.disabledBackground, 
            color: "rgba(255, 255, 255, 1)",  
          }, 
        }, 
        containedInfo: {
          opacity: "1", 
          backgroundColor: globalTheme.palette.info.main, 
          boxShadow: globalTheme.customShadows.buttonShadowInfo.boxShadow, 
          color: "rgba(255, 255, 255, 1)",  
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.info.light, 
            boxShadow: globalTheme.customShadows.buttonShadowInfo.boxShadow, 
            color: "rgba(255, 255, 255, 1)",  
          }, 
          "&:disabled": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.action.disabledBackground, 
            color: "rgba(255, 255, 255, 1)",  
          }, 
        }, 
        containedWarning: {
          opacity: "1", 
          backgroundColor: globalTheme.palette.warning.main, 
          boxShadow: globalTheme.customShadows.buttonShadowWarning.boxShadow, 
          color: "rgba(255, 255, 255, 1)",  
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.warning.light, 
            boxShadow: globalTheme.customShadows.buttonShadowWarning.boxShadow, 
            color: "rgba(255, 255, 255, 1)",  
          }, 
          "&:disabled": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.action.disabledBackground, 
            color: "rgba(255, 255, 255, 1)",  
          }, 
        }, 
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        "fontSizeLarge": {
          width: "36px", 
          height: "36px", 
        },
        "fontSizeInherit": {
          width: "24px", 
          height: "24px", 
        },
        "fontSizeSmall": {
          width: "20px", 
          height: "20px", 
        },    
      }
    },
    MuiLink: {
      defaultProps: {
        "underline": "hover"
      },
      styleOverrides: {
        "root": {
          color: globalTheme.palette.primary.main, 
        },    
      }
    },
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          success: <SvgIcon component={Success} />,
          info: <SvgIcon component={Info} />,
          warning: <SvgIcon component={Alert1} />,
          error: <SvgIcon component={Error} />,
        },
      },
      styleOverrides: {
        filledSuccess: {
          opacity: "1", 
          backgroundColor: globalTheme.palette.success.main, 
          borderRadius: "6px", 
          boxShadow: globalTheme.customShadows.buttonShadowSuccess.boxShadow, 
        },
        filledInfo: {
          opacity: "1", 
          backgroundColor: globalTheme.palette.info.main, 
          borderRadius: "6px", 
          boxShadow: globalTheme.customShadows.buttonShadowInfo.boxShadow, 
        },
        filledWarning: {
          opacity: "1", 
          backgroundColor: globalTheme.palette.warning.main, 
          borderRadius: "6px", 
          boxShadow: globalTheme.customShadows.buttonShadowWarning.boxShadow, 
        },
        filledError: {
          opacity: "1", 
          backgroundColor: globalTheme.palette.error.main, 
          borderRadius: "6px", 
          boxShadow: globalTheme.customShadows.buttonShadowError.boxShadow, 
        },
      }
    },
    MuiAvatar: {
      styleOverrides: {
        "circular": {
          border: "1px solid rgba(255, 255, 255, 1)", 
          boxSizing: "border-box", 
        },
        "square": {
          border: "1px solid rgba(255, 255, 255, 1)", 
          boxSizing: "border-box", 
        },
        "rounded": {
          border: "1px solid rgba(255, 255, 255, 1)", 
          boxSizing: "border-box", 
          borderRadius: "4px", 
        },
        "colorDefault": {
          color: "rgba(34, 34, 34, 1)", 
          fontStyle: "normal", 
          fontFamily: "Heebo", 
          fontWeight: "400", 
          fontSize: "20px", 
          letterSpacing: "0px", 
          textDecoration: "none", 
          textTransform: "none", 
        },    
      }
    },
    MuiCheckbox: {
      defaultProps: {
        indeterminateIcon: <SvgIcon component={CheckboxIndeterminat} />,
        checkedIcon: <SvgIcon component={CheckboxChecked} />,
        icon: <SvgIcon component={Checkbox1} />,
      },
      styleOverrides: {
        root: {
          "&:hover": {
            opacity: "1", 
            backgroundColor: globalTheme.palette.action.hover, 
            borderRadius: "12px", 
          }
        }
      }
    },
    MuiSwitch: {
      defaultProps: {
        icon: <SvgIcon component={ToggleSwitchOff} />,
        checkedIcon: <SvgIcon component={ToggleSwitchOn} />,
      },
      styleOverrides: {
        root: {
          "&:hover": {
            opacity: "0.15000000596046448", 
            backgroundColor: globalTheme.palette.action.disabled, 
            borderRadius: "50px", 
          }
        },
        thumb: {
          opacity: "1", 
          backgroundColor: globalTheme.palette.action.disabled, 
          borderRadius: "10px", 
        }    
      }
    },
    MuiTooltip: {
      styleOverrides: {
        "tooltip": {
          opacity: "1", 
          backgroundColor: globalTheme.palette.other.tooltip, 
          borderRadius: "6px", 
          boxShadow: globalTheme.customShadows.switchShadow.boxShadow, 
          color: globalTheme.palette.text.buttonPrimary, 
          fontStyle: globalTheme.typography["Tooltip"].fontStyle, 
          fontFamily: globalTheme.typography["Tooltip"].fontFamily, 
          fontWeight: globalTheme.typography["Tooltip"].fontWeight, 
          fontSize: globalTheme.typography["Tooltip"].fontSize, 
          letterSpacing: globalTheme.typography["Tooltip"].letterSpacing, 
          textDecoration: globalTheme.typography["Tooltip"].textDecoration, 
          lineHeight: globalTheme.typography["Tooltip"].lineHeight, 
          textTransform: globalTheme.typography["Tooltip"].textTransform, 
        },
        "arrow": {
          opacity: "1", 
          color: globalTheme.palette.other.tooltip, 
        },    
      }
    },
    MuiDialog: {
      styleOverrides: {
        "root": {
          borderRadius: "8px", 
          boxShadow: globalTheme.customShadows.cardShadow.boxShadow, 
          padding: "40px", 
        },
        "paper": {
          opacity: "1", 
          backgroundColor: globalTheme.palette.other.background, 
        },
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        "label": {
          margin: "11px 0px", 
          color: globalTheme.palette.text.primary, 
          fontStyle: globalTheme.typography["Body 2"].fontStyle, 
          fontFamily: globalTheme.typography["Body 2"].fontFamily, 
          fontWeight: globalTheme.typography["Body 2"].fontWeight, 
          fontSize: globalTheme.typography["Body 2"].fontSize, 
          letterSpacing: globalTheme.typography["Body 2"].letterSpacing, 
          textDecoration: globalTheme.typography["Body 2"].textDecoration, 
          lineHeight: globalTheme.typography["Body 2"].lineHeight, 
          textTransform: globalTheme.typography["Body 2"].textTransform, 
          "&.Mui-disabled": {
            color: globalTheme.palette.text.disabled, 
            fontStyle: globalTheme.typography["Body 2"].fontStyle, 
            fontFamily: globalTheme.typography["Body 2"].fontFamily, 
            fontWeight: globalTheme.typography["Body 2"].fontWeight, 
            fontSize: globalTheme.typography["Body 2"].fontSize, 
            letterSpacing: globalTheme.typography["Body 2"].letterSpacing, 
            textDecoration: globalTheme.typography["Body 2"].textDecoration, 
            lineHeight: globalTheme.typography["Body 2"].lineHeight, 
            textTransform: globalTheme.typography["Body 2"].textTransform, 
          }
        },
        "root": {
          marginLeft: "0px"
        }
            
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        "root": {
          color: globalTheme.palette.text.primary, 
          fontStyle: globalTheme.typography["Body 1"].fontStyle, 
          fontFamily: globalTheme.typography["Body 1"].fontFamily, 
          fontWeight: globalTheme.typography["Body 1"].fontWeight, 
          fontSize: globalTheme.typography["Body 1"].fontSize, 
          letterSpacing: globalTheme.typography["Body 1"].letterSpacing, 
          textDecoration: globalTheme.typography["Body 1"].textDecoration, 
          lineHeight: globalTheme.typography["Body 1"].lineHeight, 
          textTransform: globalTheme.typography["Body 1"].textTransform, 
          "&.MuiError": {
              color: globalTheme.palette.error.main, 
              fontStyle: globalTheme.typography["Body 1"].fontStyle, 
              fontFamily: globalTheme.typography["Body 1"].fontFamily, 
              fontWeight: globalTheme.typography["Body 1"].fontWeight, 
              fontSize: globalTheme.typography["Body 1"].fontSize, 
              letterSpacing: globalTheme.typography["Body 1"].letterSpacing, 
              textDecoration: globalTheme.typography["Body 1"].textDecoration, 
              lineHeight: globalTheme.typography["Body 1"].lineHeight, 
              textTransform: globalTheme.typography["Body 1"].textTransform, 
          },
          "&.MuiDisabled": {
              color: globalTheme.palette.text.disabled, 
              fontStyle: globalTheme.typography["Body 1"].fontStyle, 
              fontFamily: globalTheme.typography["Body 1"].fontFamily, 
              fontWeight: globalTheme.typography["Body 1"].fontWeight, 
              fontSize: globalTheme.typography["Body 1"].fontSize, 
              letterSpacing: globalTheme.typography["Body 1"].letterSpacing, 
              textDecoration: globalTheme.typography["Body 1"].textDecoration, 
              lineHeight: globalTheme.typography["Body 1"].lineHeight, 
              textTransform: globalTheme.typography["Body 1"].textTransform, 
          }
        },
        "focussed": {
            color: globalTheme.palette.primary.main, 
            fontStyle: globalTheme.typography["Body 1"].fontStyle, 
            fontFamily: globalTheme.typography["Body 1"].fontFamily, 
            fontWeight: globalTheme.typography["Body 1"].fontWeight, 
            fontSize: globalTheme.typography["Body 1"].fontSize, 
            letterSpacing: globalTheme.typography["Body 1"].letterSpacing, 
            textDecoration: globalTheme.typography["Body 1"].textDecoration, 
            lineHeight: globalTheme.typography["Body 1"].lineHeight, 
            textTransform: globalTheme.typography["Body 1"].textTransform, 
        },
        "shrink": {
            fontStyle: globalTheme.typography["Label"].fontStyle, 
            fontFamily: globalTheme.typography["Label"].fontFamily, 
            fontWeight: globalTheme.typography["Label"].fontWeight, 
            fontSize: globalTheme.typography["Label"].fontSize, 
            letterSpacing: globalTheme.typography["Label"].letterSpacing, 
            textDecoration: globalTheme.typography["Label"].textDecoration, 
            lineHeight: globalTheme.typography["Label"].lineHeight, 
            textTransform: globalTheme.typography["Label"].textTransform, 
            transform: "translate(0, -1.5px) scale(1)", 
        },
        "sizeSmall": {
            color: globalTheme.palette.text.primary, 
            fontStyle: globalTheme.typography["Body 2"].fontStyle, 
            fontFamily: globalTheme.typography["Body 2"].fontFamily, 
            fontWeight: globalTheme.typography["Body 2"].fontWeight, 
            fontSize: globalTheme.typography["Body 2"].fontSize, 
            letterSpacing: globalTheme.typography["Body 2"].letterSpacing, 
            textDecoration: globalTheme.typography["Body 2"].textDecoration, 
            lineHeight: globalTheme.typography["Body 2"].lineHeight, 
            textTransform: globalTheme.typography["Body 2"].textTransform, 
          "&.MuiError": {
              color: globalTheme.palette.error.main, 
              fontStyle: globalTheme.typography["Body 2"].fontStyle, 
              fontFamily: globalTheme.typography["Body 2"].fontFamily, 
              fontWeight: globalTheme.typography["Body 2"].fontWeight, 
              fontSize: globalTheme.typography["Body 2"].fontSize, 
              letterSpacing: globalTheme.typography["Body 2"].letterSpacing, 
              textDecoration: globalTheme.typography["Body 2"].textDecoration, 
              lineHeight: globalTheme.typography["Body 2"].lineHeight, 
              textTransform: globalTheme.typography["Body 2"].textTransform, 
          },
          "&.MuiDisabled": {
              color: globalTheme.palette.text.disabled, 
              fontStyle: globalTheme.typography["Body 2"].fontStyle, 
              fontFamily: globalTheme.typography["Body 2"].fontFamily, 
              fontWeight: globalTheme.typography["Body 2"].fontWeight, 
              fontSize: globalTheme.typography["Body 2"].fontSize, 
              letterSpacing: globalTheme.typography["Body 2"].letterSpacing, 
              textDecoration: globalTheme.typography["Body 2"].textDecoration, 
              lineHeight: globalTheme.typography["Body 2"].lineHeight, 
              textTransform: globalTheme.typography["Body 2"].textTransform, 
          },
          "&.MuiFocussed": {
            color: globalTheme.palette.primary.main, 
            fontStyle: globalTheme.typography["Body 2"].fontStyle, 
            fontFamily: globalTheme.typography["Body 2"].fontFamily, 
            fontWeight: globalTheme.typography["Body 2"].fontWeight, 
            fontSize: globalTheme.typography["Body 2"].fontSize, 
            letterSpacing: globalTheme.typography["Body 2"].letterSpacing, 
            textDecoration: globalTheme.typography["Body 2"].textDecoration, 
            lineHeight: globalTheme.typography["Body 2"].lineHeight, 
            textTransform: globalTheme.typography["Body 2"].textTransform, 
          },
          "&.MuiShrink": {
            fontStyle: globalTheme.typography["Label"].fontStyle, 
            fontFamily: globalTheme.typography["Label"].fontFamily, 
            fontWeight: globalTheme.typography["Label"].fontWeight, 
            fontSize: globalTheme.typography["Label"].fontSize, 
            letterSpacing: globalTheme.typography["Label"].letterSpacing, 
            textDecoration: globalTheme.typography["Label"].textDecoration, 
            lineHeight: globalTheme.typography["Label"].lineHeight, 
            textTransform: globalTheme.typography["Label"].textTransform, 
            transform: "translate(0, -1.5px) scale(1)", 
          }
        }
            
      }
    },
    MuiInput: {
      styleOverrides: {
        "root": {
          color: globalTheme.palette.text.primary, 
          fontStyle: globalTheme.typography["Body 1"].fontStyle, 
          fontFamily: globalTheme.typography["Body 1"].fontFamily, 
          fontWeight: globalTheme.typography["Body 1"].fontWeight, 
          fontSize: globalTheme.typography["Body 1"].fontSize, 
          letterSpacing: globalTheme.typography["Body 1"].letterSpacing, 
          textDecoration: globalTheme.typography["Body 1"].textDecoration, 
          lineHeight: globalTheme.typography["Body 1"].lineHeight, 
          textTransform: globalTheme.typography["Body 1"].textTransform, 
        },
        "sizeSmall": {
          color: globalTheme.palette.text.primary, 
          fontStyle: globalTheme.typography["Body 2"].fontStyle, 
          fontFamily: globalTheme.typography["Body 2"].fontFamily, 
          fontWeight: globalTheme.typography["Body 2"].fontWeight, 
          fontSize: globalTheme.typography["Body 2"].fontSize, 
          letterSpacing: globalTheme.typography["Body 2"].letterSpacing, 
          textDecoration: globalTheme.typography["Body 2"].textDecoration, 
          lineHeight: globalTheme.typography["Body 2"].lineHeight, 
          textTransform: globalTheme.typography["Body 2"].textTransform, 
        },
            
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        "root": {
          color: globalTheme.palette.text.primary, 
          fontStyle: globalTheme.typography["Helper"].fontStyle, 
          fontFamily: globalTheme.typography["Helper"].fontFamily, 
          fontWeight: globalTheme.typography["Helper"].fontWeight, 
          fontSize: globalTheme.typography["Helper"].fontSize, 
          letterSpacing: globalTheme.typography["Helper"].letterSpacing, 
          textDecoration: globalTheme.typography["Helper"].textDecoration, 
          lineHeight: globalTheme.typography["Helper"].lineHeight, 
          textTransform: globalTheme.typography["Helper"].textTransform, 
          "&.MuiError": {
              color: globalTheme.palette.error.main, 
              fontStyle: globalTheme.typography["Helper"].fontStyle, 
              fontFamily: globalTheme.typography["Helper"].fontFamily, 
              fontWeight: globalTheme.typography["Helper"].fontWeight, 
              fontSize: globalTheme.typography["Helper"].fontSize, 
              letterSpacing: globalTheme.typography["Helper"].letterSpacing, 
              textDecoration: globalTheme.typography["Helper"].textDecoration, 
              lineHeight: globalTheme.typography["Helper"].lineHeight, 
              textTransform: globalTheme.typography["Helper"].textTransform, 
          }
        },
            
      }
    },
  }
}, globalTheme);

export default questTheme;
