import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import BannerImageComp from "./BannerImageComp";
import EditBannerTemplateBs from "./EditBannerTemplateBs";
import bannersData from "../data/banners.json";

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

const BannerManager: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>(bannersData.banners);
  const [editBanner, setEditBanner] = useState<Banner | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEditClick = (banner: Banner) => {
    setEditBanner(banner);
    setIsEditOpen(true);
  };

  const handleClose = () => {
    setIsEditOpen(false);
    setEditBanner(null);
  };

  const handleSaveChanges = (updatedBanner: Banner) => {
    const updatedBanners = banners.map((banner) =>
      banner.id === updatedBanner.id ? updatedBanner : banner
    );
    setBanners(updatedBanners);
    handleClose();
  };
  return (
    <MainContainer>
      {banners.map((banner) => (
        <BannerImageComp
          key={banner.id}
          {...banner}
          onEdit={() => handleEditClick(banner)}
        />
      ))}
      {isEditOpen && editBanner && (
        <EditBannerTemplateBs
          open={isEditOpen}
          onClose={handleClose}
          banner={editBanner}
          onSave={handleSaveChanges}
        />
      )}
    </MainContainer>
  );
};

export default BannerManager;
