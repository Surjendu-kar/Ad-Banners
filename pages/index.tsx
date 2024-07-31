import fs from "fs/promises";
import path from "path";
import BannerManager from "@/components/BannerManager";
import type { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const fullPath = path.join(process.cwd(), "data", "banners.json");
  const jsonData = await fs.readFile(fullPath, "utf-8");
  const data = JSON.parse(jsonData);

  if (data.banners.length === 0) return { notFound: true };

  return {
    props: {
      banners: data.banners,
    },
    revalidate: 10,
  };
};

interface HomeProps {
  banners: Banner[];
}

const Home: NextPage<HomeProps> = ({ banners }) => {
  return (
    <div>
      <BannerManager banners={banners} />
    </div>
  );
};

export default Home;
