import React, { useContext } from "react";
import Context from "../../../../context/context";

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
      <div className="form-group mt-4">
      <span className="btn btn-info btn-file">Change Your Profile Photo
        <input
          id="file"
          name="Change Photo"
          type="file"
          accept="image/*,.heic"
          onChange={handleImageChange}
        /></span>
      </div>
    </>
  );
}
