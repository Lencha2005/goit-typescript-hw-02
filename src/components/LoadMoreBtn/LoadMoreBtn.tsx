import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({onClick}) => {
  return (
    <button type='button' onClick={onClick}>Load More</button>
  )
}

export default LoadMoreBtn