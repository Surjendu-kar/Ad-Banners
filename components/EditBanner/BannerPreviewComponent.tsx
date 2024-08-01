import { FC } from "react";
import BannerImageComp from "../BannerImageComp";

interface BannerPreviewProps {
  formData: {
    id: string;
    title: string;
    description: string;
    cta: string;
    titleColor: string;
    ctaColor: string;
    ctaBgColor: string;
    imageBorderRadius?: string;
  };
  selectedImage: string;
  selectedBackground: string;
}

const BannerPreviewComponent: FC<BannerPreviewProps> = ({
  formData,
  selectedImage,
  selectedBackground,
}) => (
  <BannerImageComp
    id={formData.id}
    title={formData.title}
    description={formData.description}
    cta={formData.cta}
    image={selectedImage}
    background={selectedBackground}
    titleColor={formData.titleColor}
    ctaColor={formData.ctaColor}
    ctaBgColor={formData.ctaBgColor}
    onEdit={null}
    titleStyle={{ fontSize: "18px", fontWeight: "bold" }}
    descriptionStyle={{ fontSize: "14px" }}
    mainContainerStyle={{
      maxWidth: "100%",
      height: "150px",
      width: "520px",
    }}
    imgStyle={{ maxHeight: "110px" }}
    imageBorderRadius={formData.imageBorderRadius}
    buttonStyle={{ fontSize: "12px" }}
  />
);

export default BannerPreviewComponent;
