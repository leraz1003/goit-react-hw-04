import s from "./ImageCard.module.css";

const ImageCard = ({ items, onImageClick }) => {
  const {
    urls: { small: smallUrl, regular: regularUrl },
    likes,
    user: { name: userName },
    alt_description,
  } = items;

  const handleImageClick = () => {
    onImageClick({
      regularUrl,
      alt_description,
      likes,
      userName,
    });
  };

  return (
    <li className={s.item} onClick={handleImageClick}>
      <img src={smallUrl} alt={alt_description} />
      <div>
        <p>Author: {userName}</p>
        <p> ❤️ {likes}</p>
      </div>
    </li>
  );
};

export default ImageCard;
