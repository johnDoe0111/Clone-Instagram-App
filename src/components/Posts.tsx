import {
  ChatBubbleOutline,
  FavoriteBorder,
  SentimentVeryDissatisfied,
  Telegram,
  TurnedInNot,
  MoreHoriz,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { IPost } from "../types/IPosts";
import { deletePost } from "../redux/posts/postsAction";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { IOpen } from "../types/IOpen";

type CombinedInterface = IPost & IOpen;

const Posts: React.FC<CombinedInterface> = ({
  user,
  image,
  description,
  _id,
  created_at,
  setSecondVariant,
  setEditModalContent,
  handleImageClick,
  handOverId,
}) => {

  const postsStyle = {
    generalBox: {
      width: '600px'
    },
    headerBox: {
      padding: "14px 20px",
      backgroundColor: "#EFEFEF",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative",    
    },
    user: {
      display: "flex", 
      alignItems: "center"
    },
    avatar: {
      width: "32px", 
      height: "32px", 
      borderRadius: "50%"
    },
    editAndDeleteModal: {
      width: "116px",
      position: "absolute",
      right: 0,
      top: 42,
    }
  }

  const [isExpanded, setIsExpanded] = useState(false);
  const [openEditMode, setopenEditMode] = useState(false);

  const userId = useAppSelector((state) => state.autorization.user?._id);
  const dispatch = useAppDispatch();

  const postDescription = description;

  const delPost = () => {
    dispatch(deletePost(_id));
  };

  const handleOpen = () => {
    setSecondVariant(true);
    setEditModalContent(true);
    handleImageClick(image, description);
    handOverId(_id);
  };

  dayjs.extend(relativeTime);

  return (
    <Box sx={postsStyle.generalBox}>
      <Box
        sx={postsStyle.headerBox}
      >
        <Box sx={postsStyle.user}>
          <Box
            component="img"
            src={user.avatar}
            sx={postsStyle.avatar}
          ></Box>
          <Box component="p" sx={{ margin: "0px", ml: "14px" }}>
            {user.username}
          </Box>
        </Box>
        <MoreHoriz
          onClick={() => setopenEditMode(!openEditMode)}
          sx={{
            display: userId === user._id ? "block" : "none",
            cursor: "pointer",
          }}
        />
        <Box
          sx={{
            display: openEditMode ? "block" : "none",
            width: postsStyle.editAndDeleteModal.width,
            position: postsStyle.editAndDeleteModal.position,
            right: postsStyle.editAndDeleteModal.right,
            top: postsStyle.editAndDeleteModal.top,
          }}
        >
          <Box
            onClick={handleOpen}
            sx={{
              width: "116px",
              cursor: "pointer",
              backgroundColor: "#2B3138",
              borderRadius: "20px",
              fontWeight: 700,
              fontSize: "11px",
              color: "#F4FAFF",
              padding: "7px 0",
              textAlign: "center",
            }}
          >
            Edit
          </Box>
          <Box
            onClick={delPost}
            sx={{
              width: "116px",
              backgroundColor: "#2B3138",
              borderRadius: "20px",
              fontWeight: 700,
              fontSize: "11px",
              color: "#F4FAFF",
              padding: "7px 0",
              textAlign: "center",
              mt: "4px",
              cursor: "pointer",
            }}
          >
            Delete
          </Box>
        </Box>
      </Box>
      <Box
        component="img"
        src={image}
        sx={{ width: "600px", height: "600px" }}
      ></Box>
      <Box sx={{ padding: "15px 20px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <FavoriteBorder />
            <ChatBubbleOutline sx={{ ml: "20px" }} />
            <Telegram sx={{ ml: "20px" }} />
          </Box>
          <Box>
            <TurnedInNot />
          </Box>
        </Box>
        <Box>
          <Box sx={{ fontWeight: 500, mt: "15px" }}>9.999 likes</Box>
          <Box>
            <Box component="p" sx={{ fontWeight: 500, m: 0, mt: "8px" }}>
              {user.username}
              <Box
                component="span"
                sx={{ fontWeight: 400, ml: "5px", lineHeight: "16px" }}
              >
                {isExpanded
                  ? postDescription
                  : !isExpanded && postDescription.length <= 20
                  ? postDescription
                  : `${postDescription.slice(0, 20)}...`}
                <Box
                  component="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  sx={{ border: "none", cursor: "pointer", color: "#8E8E8E" }}
                >
                  {isExpanded
                    ? "less"
                    : !isExpanded && postDescription.length <= 20
                    ? " "
                    : "more"}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              component="p"
              sx={{ m: 0, mt: "10px", color: "#8E8E8E", fontSize: "14px" }}
            >
              See 99 comments
            </Box>
            <Box
              component="p"
              sx={{
                m: 0,
                mt: "10px",
                color: "#8E8E8E",
                fontSize: "12px",
                textTransform: "uppercase",
              }}
            >
              {dayjs(+created_at).fromNow()}
            </Box>
          </Box>
          <Box
            sx={{
              width: "559px",
              display: "flex",
              padding: "20px 20px 20px 0",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SentimentVeryDissatisfied />
              <Box
                sx={{
                  border: " none",
                  outline: "none",
                  width: "105px",
                  ml: "12px",
                }}
                component="input"
                placeholder="Add a comment..."
              ></Box>
            </Box>
            <Box
              component="p"
              sx={{
                color: "rgba(0, 149, 246, 0.25)",
                margin: 0,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Post
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Posts;
