import { SvgIcon, Link } from '@mui/material';
import { ReactComponent as Calendar } from './assets/images/Icon_Calendar__Color_default.svg';
import { styled } from '@mui/material/styles';


const TypeQuest = styled("div")(({ theme }) => ({
  opacity: "1",
  backgroundColor: theme.palette.text.buttonPrimary,
  display: "flex",
  flexDirection: "row",
  width: "358px",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "12px",
  padding: "16px 12px",
  boxSizing: "border-box",
}));

const LeftSide = styled("div")({
  opacity: "1",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "12px",
  padding: "0px",
  boxSizing: "border-box",
  flexGrow: "0",
});

const Frame2 = styled("div")({
  opacity: "1",
  backgroundColor: "rgba(210, 209, 255, 1)",
  borderRadius: "18px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  padding: "0px",
  boxSizing: "border-box",
  flexGrow: "0",
  width: "52px",
  height: "52px",
  overflow: "hidden",
});

const Icon1 = styled(SvgIcon)({
  flexGrow: "0",
  width: "36px",
  height: "36px",
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

const EllenchoQuestAi = styled("div")(({ theme }) => ({
  textAlign: "left",
  color: theme.palette.text.secondary,
  fontStyle: "normal",
  fontFamily: "Heebo",
  fontWeight: "400",
  fontSize: "12px",
  letterSpacing: "0px",
  textDecoration: "none",
  lineHeight: "16px",
  textTransform: "none",
  opacity: "1",
  flexGrow: "0",
  width: "227px",
}));

const Frame1 = styled("div")({
  opacity: "1",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "2px",
  padding: "0px",
  boxSizing: "border-box",
  flexGrow: "0",
  width: "227px",
});

const EllenCho = styled("div")(({ theme }) => ({
  textAlign: "left",
  color: theme.palette.text.primary,
  fontStyle: "normal",
  fontFamily: "Heebo",
  fontWeight: "700",
  fontSize: "14px",
  letterSpacing: "0.021000000834465026px",
  textDecoration: "none",
  lineHeight: "142.99999475479126%",
  textTransform: "none",
  opacity: "1",
  flexGrow: "1",
}));

const Link1 = styled(Link)({
  flexGrow: "0",
});

function EventListItem(props) {


  return (
    <TypeQuest>
      <LeftSide>
        <Frame2>
          < Icon1 size={"large"} color={"primary"} component={Calendar} />
        </Frame2>
        <Text>
          <EllenchoQuestAi>
            ellencho@quest.ai
          </EllenchoQuestAi>
          <Frame1>
            <EllenCho>
              Ellen Cho
            </EllenCho>
          </Frame1>
        </Text>
      </LeftSide>
      <Link1 href="#" variant="Body 3" >View</Link1>
    </TypeQuest>
  );
}

export default EventListItem;
