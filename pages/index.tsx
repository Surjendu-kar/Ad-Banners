import type { NextPage } from "next";
import banners from "../data/banners.json";
import BannerImageComp from "../components/BannerImageComp";
import { Box, styled } from "@mui/material";

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
  margin: "1rem",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Home: NextPage = () => {
  return (
    <MainContainer>
      {banners.banners.map((banner, index) => (
        <BannerImageComp
          key={index}
          title={banner.title}
          description={banner.description}
          cta={banner.cta}
          image={banner.image}
          background={banner.background}
          titleColor={banner.titleColor}
          ctaColor={banner.ctaColor}
          ctaBgColor={banner.ctaBgColor}
        />
      ))}
    </MainContainer>
  );
};

export default Home;
