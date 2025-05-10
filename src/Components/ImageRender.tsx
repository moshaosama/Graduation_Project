import clsx from "clsx";
import React, { useMemo } from "react";

const ImageRender = React.memo(
  ({ src, alt, width }: { src: string; alt: string; width: string }) => {
    const computedClass = useMemo(() => `w-${width} max-sm:w-12`, [width]);

    return <img src={src} alt={alt} loading="lazy" className={clsx(computedClass, "object-cover")} />;
  }
);

export default ImageRender;
