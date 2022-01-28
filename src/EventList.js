import { styled } from '@mui/material/styles';
import EventListItem from './EventListItem';


const TypeQuest = styled("div")({
  opacity: "1",
  display: "flex",
  flexDirection: "column",
  width: "346px",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "0px",
  boxSizing: "border-box",
});

const Header = styled("div")({
  opacity: "1",
  backgroundColor: "rgba(255, 255, 255, 1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "10px",
  padding: "0px",
  boxSizing: "border-box",
  alignSelf: "stretch",
  flexGrow: "0",
  overflow: "hidden",
});

const Frame1 = styled("div")({
  opacity: "1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "1px",
  padding: "10px 0px",
  boxSizing: "border-box",
  flexGrow: "0",
});

const Events = styled("div")(({ theme }) => ({
  textAlign: "left",
  color: theme.palette.text.primary,
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

const Oct242022 = styled("div")(({ theme }) => ({
  textAlign: "left",
  color: theme.palette.text.secondary,
  fontStyle: "normal",
  fontFamily: "Heebo",
  fontWeight: "400",
  fontSize: "14px",
  letterSpacing: "0px",
  textDecoration: "none",
  lineHeight: "16px",
  textTransform: "none",
  opacity: "1",
  flexGrow: "0",
}));

const EventListItem1 = styled(EventListItem)(({ theme }) => ({
  alignSelf: "stretch",
  flexGrow: "0",
}));

const EventListItem2 = styled(EventListItem)(({ theme }) => ({
  alignSelf: "stretch",
  flexGrow: "0",
}));

const EventListItem3 = styled(EventListItem)(({ theme }) => ({
  alignSelf: "stretch",
  flexGrow: "0",
}));

function EventList(props) {


  return (
    <TypeQuest>
      <Header>
        <Frame1>
          <Events>
            Events
          </Events>
          <Oct242022>
            Oct 24, 2022
          </Oct242022>
        </Frame1>
      </Header>
      <EventListItem1 />
      <EventListItem2 />
      <EventListItem3 />
    </TypeQuest>
  );
}

export default EventList;
