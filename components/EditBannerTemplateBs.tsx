import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
};

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({
  open,
  onClose,
  banner,
  onSave,
}) => {
  const [formData, setFormData] = useState(banner);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
      <DialogContent>
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
