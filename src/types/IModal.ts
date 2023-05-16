export interface IModal {
  open: boolean;
  handleClose: (value: boolean) => void;
  secondVariant: boolean;
  setSecondVariant: (value: boolean) => void;
  handleEditModalClose: (value: boolean) => void;
  editModalContent: boolean;
  selectedImage: string | undefined;
  selectedDesc: string | undefined;
  postId: string;
  addPostVariant: boolean;
  setEditModalContent: (value: boolean) => void;
  setOpen: (value: boolean) => void;
}
