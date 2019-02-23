import React, { Component } from 'react';
import * as cloneDeep from 'lodash/cloneDeep';
import { Route } from 'react-router-dom';
import PhotoBrowser from './components/PhotoBrowser.js';
import Home from './components/Home.js';
import About from './components/About.js';
import _ from 'lodash';


class App extends Component {
  constructor(props) {
    super(props);
    // temp backup copy of photos
    this.state = { photos: [], favorites: [], temp: [] };
  }

  async componentDidMount() {
    try {
      const url = "http://randyconnolly.com/funwebdev/services/travel/images.php";
      const response = await fetch(url);
      const jsonData = await response.json();
      this.setState( { photos: jsonData, temp: jsonData } );
    }
    catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/browse' exact 
          render={ (props) => 
          <PhotoBrowser
            removeFav={ this.removeFav}
            removePhoto={ this.removePhoto}
            favorites={ this.state.favorites} 
            photos={ this.state.photos } 
            updatePhoto={ this.updatePhoto }  
            addPhotoToFavorites={ this.addPhotoToFavorites }
              />
           }
        />
        <Route path='/about' exact component={About} />
      </div>
     
    );
  }

  updatePhoto = (id, photo) => {
    // Create a deep clone of photo array from state.
    // We will use a lodash function for that task.
    const copyPhotos = cloneDeep(this.state.photos);

    // find photo to update in cloned array
    const photoToReplace = copyPhotos.find( p => p.id === id);

    // replace photo fields with edited values
    photoToReplace.title = photo.title;
    photoToReplace.city = photo.city;
    photoToReplace.country = photo.country;
    photoToReplace.description = photo.description;
    photoToReplace.latitude = photo.latitude;
    photoToReplace.longtitude = photo.longtitude;

    // update state
    this.setState( { photos: copyPhotos } );
  }

  addPhotoToFavorites = (id) => {
    // find photo to add
    const photo = this.state.photos.find ( p => p.id === id);
    console.log(photo);

    // check if item is already in favorite
    // if not add it
    if (!this.state.favorites.find (p => p.id === id) ) {
      // create copy of favorites
      const copyFavorites = cloneDeep(this.state.favorites);
      
      // push item into array
      copyFavorites.push(photo);
      
      // update state
      this.setState( { favorites: copyFavorites });
    } else {
      console.log ("Photo already in favorites")
    }
  }

  removePhoto = (id) => {
    let index = _.findIndex(this.state.photos, ['id', id]);
      
    if (index > -1) {
        // create copy of favorites
        const copyPhotos = cloneDeep(this.state.photos);
        //console.log(copyPhotos);
        // delete photo
        _.remove(copyPhotos, copyPhotos[index]);
        // update state
        this.setState({ photos: copyPhotos });
    }
  }

  removeFav = (id) => {
    let index = _.findIndex(this.state.favorites, ['id', id]);
    
    if (index > -1) {
        // create copy of favorites
        const copyFav = cloneDeep(this.state.favorites);
        //console.log(copyPhotos);
        // delete fav
        _.remove(copyFav, copyFav[index]);
        // update state
        this.setState({ favorites: copyFav });

        // update local storage
        this.updateLocalStorage(copyFav);
    }
  }
  
  updateLocalStorage = (data) => {
    localStorage.setItem('favorites', JSON.stringify(data));
  }

  getLocalStorageFav = () => {
    return JSON.parse(localStorage.getItem('favorites'));
  }
}

export default App;
