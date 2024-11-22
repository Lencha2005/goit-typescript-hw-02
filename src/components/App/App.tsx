import '../../App.css'
import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMesssage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { fetchImages } from '../../api/unsplash-api';
import { ApiResponse, Image } from './App.types';



function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [imgModal, setImgModal] = useState<Image | null>(null);
 
 const handleSubmit = (value: string): void => {
  setSearchValue(value);
  setImages([]); // Скидаємо зображення при новому пошуку
  setPage(1); // Скидаємо сторінкy
 }

 const handleChangePage = (): void => {
  setPage(page + 1);
 }

 const onOpenModal = (images: Image): void => {
  setIsOpen(true);
  setImgModal(images)
}

const onCloseModal = (): void => {
  setIsOpen(false);
  setImgModal(null)
}
 
 useEffect(() => {
  const onFormSerchSubmit = async () => {
    if (!searchValue) return;

  try {
      setLoader(true);
      const response: ApiResponse = await fetchImages(searchValue, page);
        if(images.length === 0){
          setImages(response.data.results);
        } else {
          setImages(prevImages => [...prevImages, ...response.data.results])
        }
      setTotalPages(response.data.total_pages);
}
  catch(error: any) {
    setError(error);
  } finally {
    setLoader(false)
  }
}
onFormSerchSubmit()
}, [searchValue, page])


useEffect(() => {
  if (page > 1) {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }
}, [images]);

 return (
  <div>
  <SearchBar onSubmit={handleSubmit} />
  {loader && <Loader />}
  {images.length > 0 && <ImageGallery images={images} onOpenModal={onOpenModal}/>}
  {error && <ErrorMessage/>}
  {totalPages !== null && images.length > 0 && page < totalPages && <LoadMoreBtn onClick={handleChangePage} />}
  {modalIsOpen && <ImageModal imgModal={imgModal} onCloseModal={onCloseModal} modalIsOpen={modalIsOpen}/>}
  </div>
 )
}

export default App

