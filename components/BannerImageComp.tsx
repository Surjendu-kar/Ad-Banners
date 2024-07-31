import { Box, Button, Typography, IconButton, Tooltip } from "@mui/material";
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
  [theme.breakpoints.down("sm")]: { height: "150px", width: "650px" },
}));

const Icon = styled(IconButton)(({ theme }) => ({
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
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    padding: "3px",
    fontSize: "small",
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "40%",
  height: "100%",
  justifyContent: "space-around",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: { width: "50%" },
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 600,
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: { fontSize: "1.2rem" },
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: { fontSize: "0.75rem" },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const StyledButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.5rem",
    padding: "2px 4px",
    borderRadius: "2px",
  },
}));

const Img = styled("img")(({ theme }) => ({
  width: "100%",
  height: "200px",
  objectFit: "cover",
  background: "#ffff",
  borderRadius: "7px",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: { height: "100px" },
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
        <Icon onClick={onEdit}>
          <Tooltip title="Edit">
            <EditIcon />
          </Tooltip>
        </Icon>
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
