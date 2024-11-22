import { Image } from "../App/App.types";

export type ImageModalProps ={
    modalIsOpen: boolean;
    onCloseModal: () => void;
    imgModal: Image | null;
}