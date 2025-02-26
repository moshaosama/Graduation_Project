const ImageRender = ({
  src,
  alt,
  width,
}: {
  src: string;
  alt: string;
  width: string;
}) => {
  return (
    <>
      <img src={src} alt={alt} loading="lazy" className={`w-${width}`} />
    </>
  );
};

export default ImageRender;
