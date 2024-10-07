import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {items.map((item) => (
        <ImageCard
          key={item.id}
          items={item}
          onImageClick={onImageClick}
          // regularUrl={regular}
          // smallUrl={small}
          // likes={likes}
          // userName={name}
          // alt_description={alt_description}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
