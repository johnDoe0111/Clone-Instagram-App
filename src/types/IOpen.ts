export interface IOpen {
  secondVariant: boolean;
  setSecondVariant: (value: boolean) => void;
  setEditModalContent: (value: boolean) => void;
  handleImageClick: (
    value: string | undefined,
    value2: string | undefined
  ) => void;
  handOverId: (value: string) => void;
}
