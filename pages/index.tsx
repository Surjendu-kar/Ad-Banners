import type { NextPage } from "next";
import banners from "../data/banners.json";
import BannerImageComp from "../components/BannerImageComp";
import { Box } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
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
    </Box>
  );
};

export default Home;
