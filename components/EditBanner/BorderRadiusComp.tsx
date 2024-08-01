import { FormControlLabel, Radio, Box } from "@mui/material";

type BorderRadiusCompProps = {
  value: string;
  borderRadiusStyle: string | number;
};

const BorderRadiusComp: React.FC<BorderRadiusCompProps> = ({
  value,
  borderRadiusStyle,
}) => {
  return (
    <FormControlLabel
      value={value}
      control={<Radio />}
      label={
        <Box
          sx={{
            width: 40,
            height: 40,
            bgcolor: "grey.300",
            borderRadius: borderRadiusStyle,
          }}
        />
      }
    />
  );
};

export default BorderRadiusComp;
