import React, { Component } from "react";
import { AppField } from "./App.styled";
import Searchbar from "components/Searchbar";
import { getPhotos } from "services/gallery-api";
import ImageGallery from "components/ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    photos: [],
    isLoading: false,
    error: null
  };

  onSubmit = async ({value}) => {
    try {
      this.setState({ isLoading: true })
      const response = await getPhotos(value)
      this.setState({
        photos: response,
        isLoading: false
      })
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { photos, isLoading, error } = this.state;

    console.log(this.state.photos)
    return (
      <AppField>
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && <h2>Downloading gallery</h2>}
        {error && <h2>{error}</h2>}
        {photos.hits && <ImageGallery items={photos}></ImageGallery>}
      </AppField>
    );
  };
};
