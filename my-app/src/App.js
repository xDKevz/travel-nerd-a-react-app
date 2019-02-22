import React, { Component } from 'react';
import * as cloneDeep from 'lodash/cloneDeep';
import { Route } from 'react-router-dom';
import PhotoBrowser from './components/PhotoBrowser.js';
import Home from './components/Home.js';
import About from './components/About.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [], favorites: [] };
  }

  async componentDidMount() {
    try {
      const url = "http://randyconnolly.com/funwebdev/services/travel/images.php";
      const response = await fetch(url);
      const jsonData = await response.json();
      this.setState( { photos: jsonData } );
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
            favorites={ this.state.favorites} 
            photos={ this.state.photos } 
            updatePhoto={ this.updatePhoto }  
            addPhotoToFavorites={ this.addPhotoToFavorites } />
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


}

export default App;
