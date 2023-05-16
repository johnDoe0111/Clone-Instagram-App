import Posts from "../components/Posts";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Box, Container } from "@mui/material";
import Header from "../components/Header";
import { Skeleton } from "../components/Skeleton";
import { mock } from "../mock";
import { getPosts } from "../redux/posts/postsAction";
import { useEffect, useState } from "react";
import PostCreationModal from "../components/PostCreationModal";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.posts);

  const [open, setOpen] = useState(false);
  const [secondVariant, setSecodVariant] = useState(false);
  const [editModalContent, setEditModalContent] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [selectedDesc, setSelectedDesc] = useState<string | undefined>(
    undefined
  );
  const [postId, setPostId] = useState("");
  const [addPostVariant, setAddPostVariant] = useState(false);

  const handleClose = () => setOpen(false);
  const handleEditModalClose = () => {
    setSecodVariant(false);
    setOpen(false);
  };
  const handleImageClick = (
    image: string | undefined,
    desc: string | undefined
  ) => {
    setSelectedImage(image);
    setSelectedDesc(desc);
  };

  const handOverId = (id: string) => {
    setPostId(id);
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Box>
      <Container sx={{ width: "980px" }}>
        <Header
          setOpen={setOpen}
          setAddPostVariant={setAddPostVariant}
          setEditModalContent={setEditModalContent}
        />
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mt: "24px" }}
        >
          <Box>
            {posts.map((post) => (
              <Posts
                key={post._id}
                {...post}
                secondVariant={secondVariant}
                setSecondVariant={setSecodVariant}
                setEditModalContent={setEditModalContent}
                handleImageClick={handleImageClick}
                handOverId={handOverId}
              />
            ))}
          </Box>
          <Box>
            <Box sx={{ width: "300px", padding: "30px 0" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      backgroundColor: "#C4C4C4",
                    }}
                  ></Box>
                  <Box sx={{ marginLeft: "12px" }}>
                    <Box
                      component="p"
                      sx={{
                        color: "#000000",
                        fontWeight: 500,
                        margin: 0,
                      }}
                    >
                      johndoe
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        color: "#8E8E8E",
                      }}
                    >
                      John Doe
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ fontSize: "12px", color: "#0095F6" }}>Change</Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ color: "#8E8E8E" }} component="p">
                  Suggestions for you
                </Box>
                <Box sx={{ fontSize: "12px", color: "#262626" }} component="p">
                  See all
                </Box>
              </Box>
              <Box>
                {mock.map((skeleton) => (
                  <Skeleton key={skeleton.id} username={skeleton.username} />
                ))}
              </Box>
              <Box
                component="p"
                sx={{ color: "#8E8E8E", fontSize: "12px", mt: "32px" }}
              >
                Information · Help · Prisoner · API · Job · Privacity ·
                Conditions · Locations · Trending accounts · Hashtags · Language
              </Box>
              <Box
                sx={{ color: "#8E8E8E", fontSize: "12px", mt: "18px" }}
                component="p"
              >
                © 2022 INSTAGRAM FROM SIMMXS
              </Box>
            </Box>
          </Box>
        </Box>
        <PostCreationModal
          open={open}
          handleClose={handleClose}
          secondVariant={secondVariant}
          setSecondVariant={setSecodVariant}
          handleEditModalClose={handleEditModalClose}
          editModalContent={editModalContent}
          selectedImage={selectedImage}
          selectedDesc={selectedDesc}
          postId={postId}
          addPostVariant={addPostVariant}
          setEditModalContent={setEditModalContent}
          setOpen={setOpen}
        />
      </Container>
    </Box>
  );
};

export default HomePage;
