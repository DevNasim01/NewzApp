import { useState } from 'react';
import defaultImg from '../assets/default-img.webp'
const Box = ({ title, description, src, url }) => {
  
  const [imgError , setImgError] = useState(false)

  const handleImageError = () => {
    setImgError(true);
  };

  const renderImage = () => {
    if (imgError || !src || !src.trim()) {
      return <img src={defaultImg} alt="Default" onError={handleImageError} />;
    } else {
      return <img src={src} alt="Article" onError={handleImageError} />;
    }
  };
  return (
    <div className="card" style={{ maxWidth: "18rem" }}>
      {renderImage()}
      <div className="card-body">
        <h5 className="card-title pb-2">{title.slice(0, 40)+".."}</h5>
        <p className="card-text">{description ? description.slice(0, 100)+"..." : "The Description isn't avalable please go throw the artical to see more..."}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  );
};

export default Box;
