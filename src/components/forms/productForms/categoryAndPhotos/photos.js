import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../../../../store/productContext";

export default function Photos() {
  const [showPicture, setShowPicture] = useState(false);
  const productContext = useContext(ProductContext);
  const photos = productContext.photos;
  //getting photos from browser as an array

  const handleImageChange = (event) => {
    if (event) {
      Object.values(event.target.files).forEach((element) => {
        const reader = new FileReader();
        reader.readAsDataURL(element);
        reader.onload = function (e) {
          photos.push(e.target.result);
        };
      });
    }
  };

  return (
    <div className="form-group">
      <h3>Upload your product pictures</h3>
      <Link
        onClick={() => setShowPicture(true)}
        className="btn btn-info d-block mt-5 mb-5"
      >
        Show Picture
      </Link>

      {showPicture
        ? photos.map((photo) => {
            return (
              <img className="showUploadPhoto mb-5" alt="no photos" src={photo} />
            );
          })
        : null}
      {/* uploading images */}
      <input
        className="mb-3 d-block "
        name="image"
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
    </div>
  );
}
