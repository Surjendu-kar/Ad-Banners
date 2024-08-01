import { FC } from "react";
import { Box, Button, styled, TextField } from "@mui/material";

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

interface BannerFormProps {
  formData: {
    title: string;
    description: string;
    cta: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSave: () => void;
  handleDownload: () => void;
}

const BannerFormComponent: React.FC<BannerFormProps> = ({
  formData,
  handleChange,
  handleSave,
  handleDownload,
}) => (
  <>
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
  </>
);

export default BannerFormComponent;
