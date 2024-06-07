import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import styles from "./ImageUploader.module.css";
const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 8;
  // Here you can decided images,How much images you want?
  const maxFileSize = 100 * 1024;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Images Uploder </h2>
      <div>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          maxFileSize={maxFileSize}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
            errors,
          }) => (
            <div className={styles.uploadImageWrapper}>
              <button
                className={styles.mainBtns}
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Select images
              </button>
              &nbsp;
              <button className={styles.mainBtns} onClick={onImageRemoveAll}>
                Remove all images
              </button>
              {errors && errors.maxFileSize && (
                <div className={styles.errorMsg}>
                  Selected file size exceed 100kb
                </div>
              )}
              <div className={styles.imageList}>
                {imageList.map((image, index) => (
                  <div key={index} className={styles.imageItem}>
                    <img src={image["data_url"]} alt="" width="100" />
                    <div className={styles.btnWrapper}>
                      <button
                        className={styles.updateBtn}
                        onClick={() => onImageUpdate(index)}
                      >
                        Update
                      </button>
                      <button
                        className={styles.removeBtn}
                        onClick={() => onImageRemove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ImageUploading>
      </div>
    </div>
  );
};

export default ImageUploader;
