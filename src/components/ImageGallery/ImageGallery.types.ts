import { Image } from "../App/App.types";

export type ImageGalleryProps = {
    images: Image[];
    onOpenModal: (image: Image) => void;
  }