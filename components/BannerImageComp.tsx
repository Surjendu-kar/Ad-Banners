import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const MainContainer = styled(Box)(({ theme }) => ({
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

const ContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "3rem",
  width: "40%",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1.75rem",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
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

type BannerProps = {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  titleColor: string;
  ctaColor: string;
  ctaBgColor: string;
};

const BannerImageComp: React.FC<BannerProps> = ({
  title,
  description,
  cta,
  image,
  background,
  titleColor,
  ctaColor,
  ctaBgColor,
}) => {
  return (
    <MainContainer sx={{ backgroundImage: `url(${background})` }}>
      <ContentContainer>
        <TitleTypography sx={{ color: titleColor }}>{title}</TitleTypography>
        <DescriptionTypography sx={{ color: titleColor }}>
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
            }}
          >
            {cta}
          </StyledButton>
        </ButtonContainer>
      </ContentContainer>
      <Box>
        <Img src={image} alt={title} />
      </Box>
    </MainContainer>
  );
};

export default BannerImageComp;
