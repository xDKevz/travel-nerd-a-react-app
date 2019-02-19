import React, { Component } from 'react';
import HeaderApp from './components/HeaderApp.js';
import PhotoBrowser from './components/PhotoBrowser.js';
import * as cloneDeep from 'lodash/cloneDeep';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Favorites from './components/Favorites.js';

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
          this.setState( {photos: jsonData} );
      } catch (error) {
          console.error(error);
      }
  }
    
  updatePhoto = (id, photo) => {
      //create deep clone of photo array from state
      //we will use a lodash function for that task
      const copyPhotos = cloneDeep(this.state.photos);
      //find a photo to update in cloned array
      const photoToReplace = copyPhotos.find( p => p.id === id);
      //replace photo fields with edited values
      photoToReplace.title = photo.title;
      photoToReplace.city = photo.city;
      photoToReplace.country = photo.country;
      //update state
      this.setState( {photos: copyPhotos } );
  }
  
  addPhotoToFavorites = (id) => {
      let photoArray = this.state.photos;
      let findPhotoData = photoArray.find( p => p.id === id);
      let tempFav = this.state.favorites;
      tempFav.push(findPhotoData);
      this.setState({favorites: tempFav});
  }
  
  render() {
    return (
        <div>
            
            <Route path='/' exact component={Home} />
            <Route path='/home' exact component={Home} />
            <Route path='/browse' exact render={ (props) => 
                <PhotoBrowser photos={this.state.photos} updatePhoto={this.updatePhoto} addPhotoToFavorites={this.addPhotoToFavorites} /> 
            }
            />
            <Route path='/about' exact component={About} />
        </div>
    );
  }
}

export default App;
