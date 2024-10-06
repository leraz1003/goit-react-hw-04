import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <LoadMoreBtn />
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery />
      <Loader />
      <ErrorMessage />
      <ImageModal />
    </>
  );
}

export default App;
