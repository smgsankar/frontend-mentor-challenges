interface ImageContainerPropsType {
  src: string;
  alt: string;
  className?: string;
}

export function ImageContainer(props: ImageContainerPropsType) {
  const { src, alt, className } = props;
  return <img className={`h-14 w-14 ${className !== undefined && className}`} src={src} alt={alt} />
}