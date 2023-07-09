import { Box, Modal, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import WestIcon from "@mui/icons-material/West";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useForm } from "react-hook-form";
import { addPost, editPost } from "../redux/posts/postsAction";
import { SentimentVeryDissatisfied } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { IModal } from "../types/IModal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "650px",
  height: "677px",
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  boxShadow:
    "0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "24px",
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    paddingRight: "35px",
    paddingTop: "16px",
  }
};

const secondModalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  boxShadow:
    "0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "24px",
  width: "956px",
  maxHeight: "677px",
};

const PostCreationModal: React.FC<IModal> = ({
  open,
  handleClose,
  secondVariant,
  setSecondVariant,
  handleEditModalClose,
  editModalContent,
  selectedImage,
  selectedDesc,
  postId,
  addPostVariant,
  setEditModalContent,
  setOpen,
}) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.autorization);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState("");
  const [inputLength, setInputLength] = useState(Number);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);

    if (file) {
      setImageURL(URL.createObjectURL(file));
    }
  };

  console.log(typeof selectedFile)

  const handleChangeModal = () => {
    setSecondVariant(!secondVariant);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputLength(e.target.value.length);
  };

  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (userData: any) => {
    const description = userData.description;

    if (editModalContent) {
      dispatch(editPost({ postId, description }));
      reset();
      setEditModalContent(false);
      setSecondVariant(false);
    } else if (addPostVariant) {
      const formData = new FormData();

      if (selectedFile) {
        formData.append("image", selectedFile);
      }

      formData.append("description", userData.description);

      dispatch(addPost(formData));
      reset();
      setSecondVariant(false);
      setOpen(false);
    }
  };

  useEffect(() => {
    return () => {
      if (imageURL) {
        URL.revokeObjectURL(imageURL);
      }
    };
  }, [imageURL]);

  if (!secondVariant) {
    return (
      <Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box
              sx={style.box}
            >
              <Typography
                id="modal-modal-title"
                sx={{ fontWeight: 700, fontSize: "20px" }}
              >
                Создание публикации
              </Typography>
              <Typography
                onClick={handleChangeModal}
                id="modal-modal-description"
                sx={{
                  cursor: "pointer",
                  fontWeight: 600,
                  color: "#0095F6",
                  fontSize: "18px",
                  ml: "135px",
                }}
              >
                Далее
              </Typography>
            </Box>
            <Box sx={{ border: "1px solid #DBDBDB", mt: "17px" }}></Box>
            <Box sx={{ display: "flex", height: "608px" }}>
              <Box sx={{ width: "380px", margin: "auto" }}>
                <Box
                  component="p"
                  sx={{ m: 0, fontWeight: 700, fontSize: "24px" }}
                >
                  Перетащите сюда фото и видео
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#79A7FF",
                    width: "272px",
                    margin: "auto",
                    textAlign: "center",
                    color: "white",
                    border: "1px solid #6A6A6A",
                    borderRadius: "24px",
                    mt: "16px",
                  }}
                >
                  <Box
                    onChange={handleFileChange}
                    component="input"
                    name="file"
                    type="file"
                    accept="image/*"
                    id="input__file"
                    sx={{
                      opacity: 0,
                      visibility: "hidden",
                      position: "absolute",
                    }}
                  ></Box>
                  <Box
                    component="label"
                    htmlFor="input__file"
                    sx={{ cursor: "pointer" }}
                  >
                    <Box component="p" sx={{ m: 0, padding: "9px 0" }}>
                      Выбрать на компьютере
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Box>
    );
  }

  return (
    <Box>
      <Modal
        open={secondVariant}
        onClose={handleEditModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Box sx={secondModalStyle}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "20px",
                justifyContent: "space-between",
              }}
            >
              <WestIcon
                fontSize="large"
                onClick={handleChangeModal}
                sx={{ cursor: "pointer" }}
              />
              <Box
                component="p"
                sx={{ m: 0, fontSize: "20px", fontWeight: 700 }}
              >
                Создание публикации
              </Box>
              <Button
                type="submit"
                sx={{
                  m: 0,
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#0095F6",
                  outline: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {editModalContent ? "Изменить" : "Поделиться"}
              </Button>
            </Box>
            <Box sx={{ border: "1px solid #DBDBDB" }}></Box>
            <Box sx={{ display: "flex" }}>
              <Box>
                <Box
                  component="img"
                  src={editModalContent ? selectedImage : imageURL}
                  sx={{
                    width: "600px",
                    mt: "2px",
                    height: "590px",
                    borderRadius: "0 0 0 24px",
                  }}
                />
              </Box>
              <Box sx={{ paddingLeft: "16px", width: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    {...register("image", {})}
                    component="img"
                    src={user?.avatar}
                    sx={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                    }}
                  />
                  <Box
                    component="p"
                    sx={{ paddingLeft: "10px", fontWeight: 500 }}
                  >
                    {user?.username}
                  </Box>
                </Box>
                <Box
                  {...register("description", {
                    onChange: handleInputChange,
                  })}
                  component="textarea"
                  maxLength={2200}
                  placeholder={
                    editModalContent ? selectedDesc : "Добавьте подпись..."
                  }
                  sx={{
                    fontWeight: 300,
                    ml: "5px",
                    mt: "10px",
                    fontSize: "14px",
                    border: "none",
                    outline: "none",
                    resize: "none",
                    width: "164px",
                    height: "160px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingRight: "20px",
                  }}
                >
                  <SentimentVeryDissatisfied sx={{ color: "#DBDBDB" }} />
                  <Box sx={{ color: "#999999" }}>{`${inputLength}/2,200`}</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default PostCreationModal;
