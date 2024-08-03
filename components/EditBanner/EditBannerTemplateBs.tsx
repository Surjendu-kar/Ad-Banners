import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
} from "@mui/material";
import { toPng } from "html-to-image";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import BannerFormComponent from "./BannerFormComponent";
import ImageSelectionComponent from "./ImageSelectionComponent";
import BannerPreviewComponent from "./BannerPreviewComponent";
import BorderRadiusSelectionComp from "./BorderRadiusSelectionComp";

const Heading = styled(DialogTitle)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    padding: "10px",
  },
}));

const DialogContentStyle = styled(DialogContent)(({ theme }) => ({
  overflowY: "auto",
  padding: "0px 24px 20px",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    padding: "0px 10px 15px",
  },
}));

type EditBannerTemplateBsProps = {
  open: boolean;
  onClose: () => void;
  banner: {
    id: string;
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
    titleColor: string;
    ctaColor: string;
    ctaBgColor: string;
    imageBorderRadius?: string;
  };
  onSave: (data: any) => void;
  allBannerImages: string[];
};

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({
  open,
  onClose,
  banner,
  onSave,
  allBannerImages,
}) => {
  const [formData, setFormData] = useState({
    ...banner,
    imageBorderRadius: banner.imageBorderRadius || "7px",
  });
  const [selectedImage, setSelectedImage] = useState(banner.image);
  const [selectedBackground, setSelectedBackground] = useState(
    banner.background
  );
  const [selectedBorderRadius, setSelectedBorderRadius] = useState(
    banner.imageBorderRadius || "7px"
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
    setFormData({
      ...formData,
      image: image,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setFormData({
          ...formData,
          image: e.target?.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const handleBorderRadiusChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedBorderRadius(event.target.value);
    setFormData((prev) => ({
      ...prev,
      imageBorderRadius: event.target.value,
    }));
  };

  const componentRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (componentRef.current) {
      toPng(componentRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `banner_${formData.id}.png`;
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error("Error exporting image:", err);
        });
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "24px",
          maxHeight: "calc(100% - 64px)",
          overflow: "hidden",
        },
      }}
    >
      <Heading>
        Edit Banner
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </Heading>

      <Box display={"flex"} justifyContent={"center"}>
        <BannerPreviewComponent
          ref={componentRef}
          formData={formData}
          selectedImage={selectedImage}
          selectedBackground={selectedBackground}
        />
      </Box>

      <DialogContentStyle>
        <ImageSelectionComponent
          allBannerImages={allBannerImages}
          selectedImage={selectedImage}
          handleImageSelect={handleImageSelect}
          handleImageChange={handleImageChange}
        />

        <BorderRadiusSelectionComp
          selectedBorderRadius={selectedBorderRadius}
          handleBorderRadiusChange={handleBorderRadiusChange}
        />

        <BannerFormComponent
          formData={formData}
          handleChange={handleChange}
          handleSave={handleSave}
          handleDownload={handleDownload}
        />
      </DialogContentStyle>
    </Dialog>
  );
};

export default EditBannerTemplateBs;
