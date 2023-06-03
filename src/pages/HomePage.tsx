import Posts from "../components/Posts";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Box, Container } from "@mui/material";
import Header from "../components/Header";
import { Skeleton } from "../components/Skeleton";
import { mock } from "../mock";
import { getPosts } from "../redux/posts/postsAction";
import { useEffect, useState } from "react";
import PostCreationModal from "../components/PostCreationModal";

const Homepage = () => {

  const homepageStyle = {
    homepageContainer: {
      width: '980px'
    },
    generalBox: {
      display: "flex", 
      justifyContent: "space-between", 
      mt: "24px"
    },
    rightItemsBox: {
      width: "300px", 
      padding: "30px 0"
    },
    rightItemsInnerGeneralBox: {
      display: "flex", 
      alignItems: "center",
      justifyContent: "space-between"
    },
    rightItemsInnerBox: {
      display: "flex", 
      alignItems: "center",
    },
    avatarBox: {
      width: "56px",
      height: "56px",
      borderRadius: "50%",
      backgroundColor: "#C4C4C4",
    },
    p: {
      color: "#000000",
      fontWeight: 500,
      margin: 0,
    },
    changeBox: {
      fontSize: "12px", 
      color: "#0095F6"
    },
    suggestionsBox: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    grayColor: {
      color: '#8E8E8E'
    },
    fontSize: {
      fontSize: '12px'
    }
  }

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
      <Container sx={homepageStyle.homepageContainer}>
        <Header
          setOpen={setOpen}
          setAddPostVariant={setAddPostVariant}
          setEditModalContent={setEditModalContent}
        />
        <Box
          sx={homepageStyle.generalBox}
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
            <Box sx={homepageStyle.rightItemsBox}>
              <Box
                sx={homepageStyle.rightItemsInnerGeneralBox}
              >
                <Box sx={homepageStyle.rightItemsInnerBox}>
                  <Box
                    sx={homepageStyle.avatarBox}
                  ></Box>
                  <Box sx={{ marginLeft: "12px" }}>
                    <Box
                      component="p"
                      sx={homepageStyle.p}
                    >
                      johndoe
                    </Box>
                    <Box
                      component="span"
                      sx={homepageStyle.grayColor}
                    >
                      John Doe
                    </Box>
                  </Box>
                </Box>
                <Box sx={homepageStyle.changeBox}>Change</Box>
              </Box>
              <Box
                sx={homepageStyle.suggestionsBox}
              >
                <Box sx={homepageStyle.grayColor} component="p">
                  Suggestions for you
                </Box>
                <Box sx={{ fontSize: homepageStyle.fontSize, color: "#262626" }} component="p">
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
                sx={{ color: homepageStyle.grayColor, fontSize: homepageStyle.fontSize, mt: "32px" }}
              >
                Information · Help · Prisoner · API · Job · Privacity ·
                Conditions · Locations · Trending accounts · Hashtags · Language
              </Box>
              <Box
                sx={{ color: homepageStyle.grayColor, fontSize: homepageStyle.fontSize, mt: "18px" }}
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

export default Homepage;
