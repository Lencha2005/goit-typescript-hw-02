import { Image } from "../App/App.types";

export type ImageCardProps = {
    image: Image;
    onOpenModal: (image: Image) => void;
    }