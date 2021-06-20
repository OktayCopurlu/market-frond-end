import React, { useContext } from "react";
import Context from "../../../../store/context";

export default function UpdateUserPicture() {
  const context = useContext(Context);

  const handleImageChange = (event) => {
    Object.values(event.target.files).forEach((element) => {
      if (event) {
        const reader = new FileReader();
        reader.readAsDataURL(element);
        reader.onload = function (e) {
          context.photoHandler(e.target.result);
        };
      }
    });
  };

  return (
    <>
      <div className="form-group">
        <input
          id="file"
          name="date"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
    </>
  );
}
