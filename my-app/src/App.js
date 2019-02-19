import React, { Component } from 'react';
// import HeaderApp from './components/HeaderApp.js';
import PhotoBrowser from './components/PhotoBrowser.js';
import * as cloneDeep from 'lodash/cloneDeep';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
// import Favorites from './components/Favorites.js';
import _ from 'lodash';

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
          console.log(jsonData);
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
    // find photo to add
    const photo = this.state.photos.find (p => p.id === id);

    // check if item is already in favorite
    // if not add it
    if (!this.state.favorites.find (p => p.id === id)) {
        // create copy of favorites
        const copyFavorites = cloneDeep(this.state.favorites);

        // push item into array
        copyFavorites.push(photo);

        // update state
        this.setState({favorites: copyFavorites});
    } else {
        alert("Photo already in favorites");
    }

    //   let photoArray = this.state.photos;
    //   let findPhotoData = photoArray.find( p => p.id === id);
    //   let tempFav = this.state.favorites;
    //   tempFav.push(findPhotoData);
    //   this.setState({favorites: tempFav});
  }

  removePhotoFromList = (id) => {
      let index = _.findIndex(this.state.photos, ['id', id]);
      
      if (index > -1) {
          // create copy of favorites
          const copyPhotos = cloneDeep(this.state.photos);
          //console.log(copyPhotos);
          // delete photo
          _.remove(copyPhotos, copyPhotos[index]);
          // update state
          this.setState({ photos: copyPhotos });
          alert("Photo Deleted");
      }
  }

  sortByValue = (value) => {
    let tmp = cloneDeep(this.state.photos);
    if (value === "city") {
        tmp.sort(function (a,b) {   
            if (a.city > b.city )
                return 1;
            else if (a.city < b.city)
                return -1;
            else 
                return 0;
        });
    } else {
        tmp.sort(function (a,b) {   
            if (a.country > b.country )
                return 1;
            else if (a.country < b.country)
                return -1;
            else 
                return 0;
        });
    }

    this.setState({photos: tmp});
  }

  render() {
    return (
        <div>
            <Route path='/' exact component={Home} />
            <Route path='/home' exact component={Home} />
            <Route path='/browse' exact render={(props) =>
                <PhotoBrowser removePhotoFromList={this.removePhotoFromList} sortByValue={this.sortByValue} favorites={this.state.favorites} photos={this.state.photos} updatePhoto={this.updatePhoto} addPhotoToFavorites={this.addPhotoToFavorites} /> 
            }
            />
            <Route path='/about' exact component={About} />
        </div>
    );
  }
}

export default App;
