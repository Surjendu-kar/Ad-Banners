import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  IconButton,
  Box,
  Avatar,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import BannerImageComp from "./BannerImageComp";

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
  const [formData, setFormData] = useState(banner);
  const [selectedImage, setSelectedImage] = useState(banner.image);
  const [selectedBackground, setSelectedBackground] = useState(
    banner.background
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
      <DialogTitle>
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
      </DialogTitle>

      <Box display={"flex"} justifyContent={"center"}>
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
          buttonStyle={{ fontSize: "12px" }}
        />
      </Box>

      <DialogContent sx={{ overflowY: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mb: 2,
            flexWrap: "wrap",
          }}
        >
          <Tooltip title="Upload Image">
            <Avatar
              component="label"
              sx={{
                width: 48,
                height: 48,
                bgcolor: "grey.200",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <ImageIcon sx={{ color: "grey.400" }} />
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
            </Avatar>
          </Tooltip>

          {allBannerImages.map((image, index) => (
            <Avatar
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              sx={{
                width: 48,
                height: 48,
                border: "3px solid",
                borderColor:
                  image === selectedImage ? "primary.main" : "grey.300",
                cursor: "pointer",
                transition: "border-color 0.3s",
              }}
              onClick={() => handleImageSelect(image)}
            />
          ))}
        </Box>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <TextField
          label="Call to Action"
          variant="outlined"
          fullWidth
          margin="normal"
          name="cta"
          value={formData.cta}
          onChange={handleChange}
        />
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              background: "#0b5531",
              "&:hover": {
                background: "white",
                color: "#0b5531",
              },
            }}
          >
            Done
          </Button>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              background: "white",
              color: "#1976d2",
              "&:hover": {
                background: "#1976d2",
                color: "white",
              },
            }}
          >
            Download
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default EditBannerTemplateBs;
