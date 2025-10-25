import { useState } from "react";

const Carousel: React.FC<{ images: string[], trailers: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex:number) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex:number) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevImage}>Previous</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={nextImage}>Next</button>
    </div>
  );
}