import { Box, Button, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";

const MainContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundSize: "cover",
  overflow: "hidden",
  height: "300px",
  width: "650px",
  padding: "1rem",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "40%",
  height: "100%",
  justifyContent: "space-around",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 600,
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Img = styled("img")(({ theme }) => ({
  width: "100%",
  height: "200px",
  objectFit: "cover",
  background: "#ffff",
  borderRadius: "7px",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

interface BannerProps extends Banner {
  onEdit?: (() => void) | null;
  titleStyle?: React.CSSProperties;
  descriptionStyle?: React.CSSProperties;
  mainContainerStyle?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
}

const BannerImageComp: React.FC<BannerProps> = ({
  title,
  description,
  cta,
  image,
  background,
  titleColor,
  ctaColor,
  ctaBgColor,
  onEdit,
  titleStyle,
  descriptionStyle,
  mainContainerStyle,
  imgStyle,
  buttonStyle,
}) => {
  return (
    <MainContainer
      sx={{ backgroundImage: `url(${background})`, ...mainContainerStyle }}
    >
      {onEdit && (
        <IconButton
          onClick={onEdit}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "#000",
            backgroundColor: "white",
            borderRadius: "50%",
            padding: "5px",
            "&:hover": {
              color: "white",
              backgroundColor: "#808080bf",
            },
          }}
        >
          <EditIcon />
        </IconButton>
      )}
      <ContentContainer>
        <TitleTypography sx={{ color: titleColor, ...titleStyle }}>
          {title}
        </TitleTypography>
        <DescriptionTypography sx={{ color: titleColor, ...descriptionStyle }}>
          {description}
        </DescriptionTypography>
        <ButtonContainer>
          <StyledButton
            variant="contained"
            sx={{
              color: ctaColor,
              background: ctaBgColor,

              "&:hover": {
                color: ctaBgColor,
                background: ctaColor,
                opacity: 0.9,
              },
              ...buttonStyle,
            }}
          >
            {cta}
          </StyledButton>
        </ButtonContainer>
      </ContentContainer>
      <Box>
        <Img src={image} alt={title} sx={{ ...imgStyle }} />
      </Box>
    </MainContainer>
  );
};

export default BannerImageComp;
