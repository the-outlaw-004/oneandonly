import Image from "next/image";

export default function ImageWrapper({
  src,
  alt,
  fill = true,
  objectFit = "contain",
  wrapperClassName = "",
  imageClassName = "",
  ...rest
}) {
  return (
    <div className={`relative ${wrapperClassName}`}>
      <Image
        src={src}
        fill={fill}
        objectFit={objectFit}
        alt={alt}
        className={`${imageClassName}`}
        {...rest}
      />
    </div>
  );
}
