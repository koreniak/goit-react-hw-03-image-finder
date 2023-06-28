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
    total: 0
  };

  async componentDidUpdate(_, prevState) {
    const { value, page } = this.state;
    
    if (prevState.value !== value || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        const response = await getPhotos(value, page);

        if (response.hits.length === 0) {
          return alert(`Sorry, the photos of you requested: ${value} did not found.`)
        }
        
        this.setState(({ photos }) => ({
            photos: [...photos, ...response.hits],
            total: response.totalHits
          }));

      } catch (error) {
        this.setState({ error });
        
      } finally {
        this.setState({ isLoading: false });
      };
    };
  };

  onSubmit = ({ value }) => {
    if (value.trim() === "") {
      return alert('The string without value')
    }
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
    const { photos, isLoading, error, total } = this.state;
    const allPages = total / photos.length;
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
        {allPages > 1 && !isLoading && photos.length !== 0 && <Button onClick={this.onLoadMore}/>}
      </AppField>
    );
  };
};
