interface ImageContainerPropsType {
  src: string;
  alt: string;
  className?: string;
}

export function ImageContainer(props: ImageContainerPropsType) {
  const { src, alt, className } = props;
  return (
    <div className={`flex-shrink-0 ${className}`}>
      <img className={`h-14 w-14`} src={src} alt={alt} />
    </div>
  );
}
