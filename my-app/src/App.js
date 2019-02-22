import React, { Component } from 'react';
// import HeaderApp from './components/HeaderApp.js';
import PhotoBrowser from './components/PhotoBrowser.js';
import * as cloneDeep from 'lodash/cloneDeep';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
// import Favorites from './components/Favorites.js';
import _ from 'lodash';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';


class App extends Component {

  constructor(props) {
    super(props); 
    this.state = { photos: [], favorites: [] };
  }

  updateLocalStorage = (data) => {
      localStorage.setItem('favorites', JSON.stringify(data));
  }

  getLocalStorageFav = () => {
      return JSON.parse(localStorage.getItem('favorites'));
  }

  generateZip = () => {
      let zip = new JSZip();
      zip.file("test.jpg", this.urlToDownload("https://storage.googleapis.com/funwebdev-3rd-travel/large/15108090436.jpg"), {binary: true});
      zip.generateAsync({type:"blob"})
      .then(function(content){
          zip.saveAs(content, "test.zip")
      })
  }

  //https://stuk.github.io/jszip/documentation/examples/downloader.html
  urlToDownload = (url) => {
      return new Promise(function (resolve, reject) {
          JSZipUtils.getBinaryContent(url, function(err, data) {
              if (err) {
                  reject(err);
              } else {
                  resolve(data);
              }
          });
      });
  }

  async componentDidMount() {
    if (this.getLocalStorageFav() !== null) {
        console.log(this.setState({favorites: this.getLocalStorageFav()}));
    }
      try {
          const url = "http://randyconnolly.com/funwebdev/services/travel/images.php";
          const response = await fetch(url);
          const jsonData = await response.json();
          this.setState({ photos: jsonData });
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
      photoToReplace.description = photo.description;
      photoToReplace.latitude = photo.latitude;
      photoToReplace.longtitude = photo.longtitude;
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
        console.log(this.state.favorites);

        // update local storage
        this.updateLocalStorage(this.state.favorites);
        console.log(this.getLocalStorageFav());
    } else {
        alert("Photo already in favorites");
    }
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
      }
  }

  removePhotoFromFav = (id) => {
    let index = _.findIndex(this.state.favorites, ['id', id]);
    
    if (index > -1) {
        // create copy of favorites
        const copyFav = cloneDeep(this.state.favorites);
        //console.log(copyPhotos);
        // delete photo
        _.remove(copyFav, copyFav[index]);
        // update state
        this.setState({ favorites: copyFav });

        // update local storage
        this.updateLocalStorage(copyFav);
    }
}

  sortByValue = (value) => {
    let tmp = cloneDeep(this.state.photos);
    if (value === "city") {
        tmp.sort( (a,b) => a.city > b.city ? 1:-1);
    } else if (value === "country")  {
        tmp.sort( (a,b) => a.country > b.country ? 1:-1);
    } else {
        tmp.sort( (a,b) => a.id - b.id);
    }
    this.setState({photos: tmp});
  }

  render() {
    return (
        <div>
            <Route path='/' exact component={Home} />
            <Route path='/home' exact component={Home} />
            <Route path='/browse' exact render={(props) =>
                <PhotoBrowser generateZip={this.generateZip} removePhotoFromFav={this.removePhotoFromFav} removePhotoFromList={this.removePhotoFromList} sortByValue={this.sortByValue} favorites={this.state.favorites} photos={this.state.photos} updatePhoto={this.updatePhoto} addPhotoToFavorites={this.addPhotoToFavorites} /> 
            }
            />
            <Route path='/about' exact component={About} />

        </div>
    );
  }
}

export default App;
