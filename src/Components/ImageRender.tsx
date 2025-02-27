import React, { useMemo } from "react";

const ImageRender = React.memo(
  ({ src, alt, width }: { src: string; alt: string; width: string }) => {
    const computedClass = useMemo(() => `w-${width}`, [width]);

    return <img src={src} alt={alt} loading="lazy" className={computedClass} />;
  }
);

export default ImageRender;
