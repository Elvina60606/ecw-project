import { useState, useEffect } from "react";

const ProductImages = ({ images: initialImages }) => {
  const [images, setImages] = useState(
    initialImages?.length ? initialImages : [],
  );

  // 如果 initialImages 後續改變，跟著更新
  useEffect(() => {
    if (initialImages?.length) {
      const timer = setTimeout(() => setImages(initialImages));
      return () => clearTimeout(timer);
    }
  }, [initialImages]);

  const handleClickChangeImage = (index) => {
    if (!images || index >= images.length) return;
    const newImages = [...images];
    [newImages[0], newImages[index]] = [newImages[index], newImages[0]];
    setImages(newImages);
  };

  return (
    <>
      {/* 縮圖（桌機：左直排，手機：下方橫排） */}
      <div className="col-12 col-lg-1 order-2 order-lg-1">
        <div className="row flex-lg-column align-items-center justify-content-between mb-6 pe-lg-1">
          {images.slice(1)?.map((img, index) => {
            return (
              <div className="col-4 col-lg-10 g-lg-0 g-6 pb-lg-6" key={index}>
                <div className="ratio ratio-1x1">
                  <img
                    src={img}
                    alt="商品圖"
                    className="w-100 h-100 object-fit-cover border-4 border-secondary-500 rounded-3"
                    onClick={() => {
                      handleClickChangeImage(index + 1);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* 主圖 */}
      <div className="col-12 col-lg-4 order-1 order-lg-2 pe-lg-6">
        {images.length > 0 && (
          <img
            src={images[0]}
            alt="商品主圖"
            className="img-fluid rounded w-100 rounded-4"
          />
        )}
      </div>
    </>
  );
};

export default ProductImages;
