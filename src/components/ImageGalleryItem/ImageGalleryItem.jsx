import PropTypes from 'prop-types';
import { Component } from "react";
import { GalleryItem, GalleryImage } from "./ImageGalleryItem.styled";
import Modal from "components/Modal";

class ImageGalleryItem extends Component {
  state = {
    showModal: false
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }));
  };

  render() {
    const { smallImageURL, largeImageURL, alt } = this.props;
    const { showModal } = this.state;

    return <GalleryItem onClick={this.toggleModal} >
            <GalleryImage src={smallImageURL} alt={alt} />
            {showModal && <Modal onClose={this.toggleModal}><img src={largeImageURL} alt={alt} /></Modal>}
          </GalleryItem>
  };
};

ImageGalleryItem.propTypes = {
    smallImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;