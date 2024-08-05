import { Typography, Box, RadioGroup } from "@mui/material";
import BorderRadiusComp from "./BorderRadiusComp";
import { FC } from "react";

interface BorderRadiusSelectionProps {
  selectedBorderRadius: string;
  handleBorderRadiusChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const BorderRadiusSelectionComp: FC<BorderRadiusSelectionProps> = ({
  selectedBorderRadius,
  handleBorderRadiusChange,
}) => {
  return (
    <>
      <Typography sx={{ marginTop: "0.7rem", fontWeight: 600 }}>
        Choose Shape:
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
    </>
  );
};

export default BorderRadiusSelectionComp;
