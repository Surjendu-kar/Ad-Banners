import { FC } from "react";
import { Typography, Box, Avatar, Tooltip } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

interface ImageSelectionProps {
  allBannerImages: string[];
  selectedImage: string;
  handleImageSelect: (image: string) => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageSelectionComponent: FC<ImageSelectionProps> = ({
  allBannerImages,
  selectedImage,
  handleImageSelect,
  handleImageChange,
}) => (
  <>
    <Typography sx={{ margin: "1rem 0", fontWeight: 600 }}>Images:</Typography>
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
            borderColor: image === selectedImage ? "primary.main" : "grey.300",
            cursor: "pointer",
            transition: "border-color 0.3s",
          }}
          onClick={() => handleImageSelect(image)}
        />
      ))}
    </Box>
  </>
);

export default ImageSelectionComponent;
