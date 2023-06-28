import React, { Component } from "react";
import { getPhotos } from "services/gallery-api";
import { Audio } from 'react-loader-spinner'
import { AppField } from "./App.styled";
import Searchbar from "components/Searchbar";
import ImageGallery from "components/ImageGallery";
import Button from "components/Button";

export class App extends Component {
  state = {
    photos: [],
    isLoading: false,
    error: null,
    page: 1,
    value: "",
    isLoadMore: false
  };

  async componentDidUpdate(prevProps, prevState) {
    const { value, page } = this.state;
    
    if (prevState.value !== value || prevState.page !== page) {
      try {
        this.setState({ isLoading: true, isLoadMore: false });
        const response = await getPhotos(value, page);

        if (response.length === 0) {
          alert(`Sorry, the photos of you requested: ${value} did not found.`)
        }
        
        this.setState(({photos}) => {
          return {photos: [...photos, ...response.hits],
          isLoadMore: true}
        });

      } catch (error) {
        this.setState({ error });
        
      } finally {
        this.setState({ isLoading: false });
      };
    };
  };

  onSubmit = ({value}) => {
    this.setState({
      value,
      photos: [],
      page: 1
    })
  };

  onLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }))
  };

  render() {
    const { photos, isLoading, error, isLoadMore } = this.state;

    return (
      <AppField>
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && <Audio
                        height="160"
                        width="160"
                        radius="9"
                        color="blue"
                        ariaLabel="loading"
                      />}
        {error && <h2>Can not download pgotos</h2>}
        {photos.length > 1 && <ImageGallery items={photos} />}
        {isLoadMore && <Button onClick={this.onLoadMore}/>}

      </AppField>
    );
  };
};
