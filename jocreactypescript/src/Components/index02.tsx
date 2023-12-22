import React, { useEffect, useState } from "react";

// https://stackoverflow.com/questions/73678855/fetch-and-display-image-from-api-react
export default function Example02() {
  const [img, setImg] = useState<string>();

  const let_fetchImage = async () => {
    const res = await fetch('/def_TheGreatestShowMustGoOn');
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    let_fetchImage();
  }, []);

  return (
    <>
      <img src={img}  style={{height:'500px'}} alt="icons" />
    </>
  );
}