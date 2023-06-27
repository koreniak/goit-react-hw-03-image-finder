import { Component } from "react";
import { GalleryItem, GalleryImage } from "./ImageGalleryItem.styled";
import Modal from "components/Modal";

class ImageGalleryItem extends Component {
  state = {
    showModal: false
  };

  onClick = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }));
  };

  render() {
    const { smallImageURL, largeImageURL, tags } = this.props;
    const { showModal } = this.state;

    return <GalleryItem onClick={this.onClick} >
            <GalleryImage src={smallImageURL} alt={tags} />
            {showModal && <Modal onClose={this.onClick}><img src={largeImageURL} alt={tags} /></Modal>}
          </GalleryItem>
  };
};

export default ImageGalleryItem;