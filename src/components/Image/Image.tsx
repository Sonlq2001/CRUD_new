import React, { FC, memo, useState } from "react";

import imgNotFound from "assets/images/no-img.png";

export interface ImageProps {
  src: string;
  title?: string;
  notFound?: string;
  className?: any;
}

const Image: FC<ImageProps> = ({ title = "", src, className, notFound }) => {
  const [url, setUrl] = useState(src || imgNotFound);
  return (
    <img
      className={className}
      src={url}
      alt={title}
      title={title}
      onError={() => setUrl(notFound || imgNotFound)}
    />
  );
};

export default memo(Image);
