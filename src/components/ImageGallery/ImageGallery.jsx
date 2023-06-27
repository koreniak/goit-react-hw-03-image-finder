import ImageGalleryItem from "components/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

const ImageGallery = ({ items }) => {
  const options = items.hits;
  return <Gallery>
          {options.map(({ id, webformatURL, tags, largeImageURL }) =>
            <ImageGalleryItem key={id} smallImageURL={webformatURL} alt={tags} largeImageURL={largeImageURL} />)}
        </Gallery>
};

export default ImageGallery;