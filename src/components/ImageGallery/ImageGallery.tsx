import ImageCard from "../ImageCard/ImageCard";
import { ImageGalleryProps } from "./ImageGallery.types";
import styles from './ImageGallery.module.css';

const ImageGallery: React.FC<ImageGalleryProps>  = ({images, onOpenModal}) => {

  console.log(images);
  return (
    <ul className={styles.list}>
	{images.map((image) => 
    <li key={image.id} className={styles.item}>
    <ImageCard
    image={image}
    onOpenModal={onOpenModal}
    />
    </li>)}
    </ul>
  )
}

export default ImageGallery