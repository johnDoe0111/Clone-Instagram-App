import { Box } from "@mui/material";
import { ISkeleton } from "../types/ISkeleton";

export const Skeleton: React.FC<ISkeleton> = ({ username }) => {

  const sceletonStyle = {
    generalBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      ":not(:first-of-type)": { mt: "12px" },
    },
    itemsBox: {
      width: "150px",
      display: "flex",
      justifyContent: "space-between",
    },
    avatarBox: {
      width: `37px`,
      heigth: `37px`,
      backgroundColor: "#C4C4C4",
      borderRadius: "50%",    
    },
    fontSize: {
      fontSize: '12px'
    }
  }

  return (
    <Box
      sx={sceletonStyle.generalBox}
    >
      <Box
        sx={sceletonStyle.itemsBox}
      >
        <Box
          sx={sceletonStyle.avatarBox}
        ></Box>
        <Box>
          <Box
            sx={{
              margin: 0,
            }}
            component="p"
          >
            {username}
          </Box>
          <Box
            sx={{
              margin: 0,
              color: "#8E8E8E",
              fontSize: sceletonStyle.fontSize,
            }}
            component="p"
          >
            Suggestion for you
          </Box>
        </Box>
      </Box>
      <Box sx={{ color: "#0095F6", fontSize: sceletonStyle.fontSize }} component="p">
        Follow
      </Box>
    </Box>
  );
};
