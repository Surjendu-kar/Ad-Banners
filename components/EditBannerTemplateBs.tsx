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
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import BannerImageComp from "./BannerImageComp";
import { styled } from "@mui/system";
import RadioGroup from "@mui/material/RadioGroup";
import BorderRadiusComp from "./BorderRadiusComp";

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

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    fontSize: "1rem",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
  },
  "& .MuiInputLabel-root": {
    fontSize: "1rem",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
  },
  margin: theme.spacing(1, 0),
}));
StyledTextField.defaultProps = {
  variant: "outlined",
  fullWidth: true,
};

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

  const handleDownload = () => {};

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
      </Box>

      <DialogContentStyle>
        <Typography sx={{ margin: "1rem 0", fontWeight: 600 }}>
          Images:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            overflowX: "scroll",
            gap: 2,
            mb: 1,
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Tooltip title="Upload Image">
            <Avatar
              component="label"
              sx={{
                width: 65,
                height: 65,
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
                width: 65,
                height: 65,
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

        <Typography sx={{ marginTop: "0.7rem", fontWeight: 600 }}>
          Image Border Radius:
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            overflowX: "auto",
            margin: "0.5rem 0",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <RadioGroup
            row
            value={selectedBorderRadius}
            onChange={handleBorderRadiusChange}
            sx={{
              flexWrap: "nowrap",
            }}
          >
            <BorderRadiusComp value="0px" borderRadiusStyle="0" />
            <BorderRadiusComp value="7px" borderRadiusStyle="7px" />
            <BorderRadiusComp value="15px" borderRadiusStyle="15px" />
            <BorderRadiusComp value="50%" borderRadiusStyle="50%" />
            <BorderRadiusComp
              value="0 15px 15px 0"
              borderRadiusStyle="0 15px 15px 0"
            />
            <BorderRadiusComp
              value="15px 0 0 15px"
              borderRadiusStyle="15px 0 0 15px"
            />
            <BorderRadiusComp
              value="50% 15px 15px 50%"
              borderRadiusStyle="50% 15px 15px 50%"
            />
            <BorderRadiusComp
              value="15px 50% 50% 15px"
              borderRadiusStyle="15px 50% 50% 15px"
            />
          </RadioGroup>
        </Box>

        <StyledTextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <StyledTextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <StyledTextField
          label="Call to Action"
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
            onClick={handleDownload}
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
      </DialogContentStyle>
    </Dialog>
  );
};

export default EditBannerTemplateBs;
