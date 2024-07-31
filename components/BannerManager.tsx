import React, { useEffect, useState } from "react";
import { Box, Button, styled } from "@mui/material";
import BannerImageComp from "./BannerImageComp";
import EditBannerTemplateBs from "./EditBannerTemplateBs";

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

interface BannerManagerProps {
  banners: Banner[];
}

const BannerManager: React.FC<BannerManagerProps> = ({
  banners: initialBanners,
}) => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [editBanner, setEditBanner] = useState<Banner | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
    const storedBanners = localStorage.getItem("banners");
    if (storedBanners) {
      setBanners(JSON.parse(storedBanners));
    } else {
      setBanners(initialBanners);
    }
  }, [initialBanners]);

  const handleEditClick = (banner: Banner) => {
    setEditBanner(banner);
    setIsEditOpen(true);
  };

  const handleClose = () => {
    setIsEditOpen(false);
    setEditBanner(null);
  };

  const handleSaveChanges = (updatedBanner: Banner) => {
    const updatedBanners = banners?.map((banner) =>
      banner.id === updatedBanner.id ? updatedBanner : banner
    );
    setBanners(updatedBanners);
    localStorage.setItem("banners", JSON.stringify(updatedBanners));
    handleClose();
  };

  const handleClearBanners = () => {
    localStorage.removeItem("banners");
    setBanners(initialBanners);
  };

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClearBanners}
      >
        Reset Banners
      </Button>
      <MainContainer>
        {banners?.map((banner) => (
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
    </>
  );
};

export default BannerManager;
