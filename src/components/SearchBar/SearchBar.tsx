import { IoSearchSharp } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import { SearchBarProps } from "./SearchBar.types";
import styles from './SearchBar.module.css';
import { FormEvent } from "react";

const SearchBar: React.FC<SearchBarProps> = ({onSubmit}) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const value = (form.elements.namedItem("text") as HTMLInputElement).value.trim();
    if(value === '' || value === null){
      toast.error('This is an invalid request. Try again!');
      return;
      } else {
        onSubmit(value)
        form.reset(); //очищуємо форму
      }
   }
    return (
        <header className={styles.header}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name='text'
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={styles.input}
          />
          <button type="submit" className={styles.btn}><IoSearchSharp /></button>
        </form>
        <Toaster position="top-right"/>
      </header>
      )
}

export default SearchBar