import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

const ImageGallery = ({ items }) => {
  return  <Gallery>
            {items.map(({ id, webformatURL, tags, largeImageURL }) =>
              <ImageGalleryItem key={id} smallImageURL={webformatURL} alt={tags} largeImageURL={largeImageURL} />)}
          </Gallery>
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }))
};

export default ImageGallery;