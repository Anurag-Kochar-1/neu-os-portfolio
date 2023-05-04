import Image from "next/image";
import React, { useState } from "react";
import { IoChevronForwardCircle, IoChevronBackCircle } from "react-icons/io5";

interface IProps {
  images: string[];
  width: string;
}

const Carousel = ({ images, width }: IProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((currentImage) =>
      currentImage === 0 ? images?.length - 1 : currentImage - 1
    );
  };
  const nextImage = () => {
    setCurrentImage((currentImage) =>
      currentImage === images?.length - 1 ? 0 : currentImage + 1
    );
  };

  return (
    <div className="overflow-hidden relative border-2 border-black">
      {/* IMAGES */}
      <div
        className={`${width} flex transition-transform ease-out duration-500`}
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images?.map((s) => (
          <Image src={s} width={500} height={500} key={s} alt={"image"} className={"object-cover"}/>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prevImage}>
          <IoChevronBackCircle size={25} color={"white"} />{" "}
        </button>
        <button onClick={nextImage}>
          <IoChevronForwardCircle size={25} color={"white"} />{" "}
        </button>
      </div>

      {/* DOTS */}
      {false && (
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {images?.map((elm, index) => (
              <span
                className={`transition-all w-3 h-3 bg-white rounded-full ${
                  currentImage === index ? "p-1" : "bg-opacity-5"
                }`}
              ></span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
