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
  console.log("smal", smallUrl);
  console.log("regular", regularUrl);
  // const [selectedImg, setSelectedImg] = useState(setImage);
  // const handleImageClick = (evt) => {
  //   console.log("evt", evt.target.src);
  //   setSelectedImg(evt.target);
  // };
  // console.log("selectedImg", selectedImg);
  return (
    <li className={s.item} onClick={handleImageClick}>
      <img src={smallUrl} alt={alt_description} />
      <div>
        <p>Author: {userName}</p>
        <p>likes: {likes}</p>
      </div>
    </li>
  );
};

export default ImageCard;
