import React from "react";
import { Box, Button, Typography } from "@mui/material";

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
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        overflow: "hidden",
        height: "300px",
        width: "650px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", padding: "3rem" }}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ color: titleColor }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: titleColor }}
        >
          {description}
        </Typography>
        <Box>
          <Button
            variant="contained"
            sx={{
              mt: 2,
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
          </Button>
        </Box>
      </Box>
      <Box>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", maxHeight: "140px", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default BannerImageComp;
