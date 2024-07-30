import type { NextPage } from "next";
import banners from "../data/banners.json";
import BannerImageComp from "../components/BannerImageComp";

const Home: NextPage = () => {
  return (
    <div>
      {banners.banners.map((banner, index) => (
        <BannerImageComp
          key={index}
          title={banner.title}
          description={banner.description}
          cta={banner.cta}
          image={banner.image}
          background={banner.background}
        />
      ))}
    </div>
  );
};

export default Home;
