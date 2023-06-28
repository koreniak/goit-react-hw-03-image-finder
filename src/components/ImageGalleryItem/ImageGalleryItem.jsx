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
    const { smallImageURL, largeImageURL, tags } = this.props;
    const { showModal } = this.state;

    return <GalleryItem onClick={this.toggleModal} >
            <GalleryImage src={smallImageURL} alt={tags} />
            {showModal && <Modal onClose={this.toggleModal}><img src={largeImageURL} alt={tags} /></Modal>}
          </GalleryItem>
  };
};

ImageGalleryItem.propTypes = {
    smallImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;