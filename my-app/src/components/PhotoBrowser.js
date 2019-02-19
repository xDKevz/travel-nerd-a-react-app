import React from "react";
import PhotoList from './PhotoList.js';
import EditPhotoDetails from './EditPhotoDetails.js';
import HeaderApp from './HeaderApp.js';
import Favorites from './Favorites.js';
import ViewSinglePhoto from './ViewSinglePhoto.js';
import { Route } from 'react-router-dom';

class PhotoBrowser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPhoto: 1, renderValue: "single" };
    }
    
    showImageDetails = (id) => {
        this.setState({ currentPhoto: id });
    }

    changeRender = (value) =>    {
        this.setState({renderValue: value});
    }
    
    render() {
        if (this.state.renderValue === "single") {
            return (
                <div>
                    <HeaderApp />
                    <Favorites favorites={this.props.favorites} />
                    <section className="container">
                        <PhotoList removePhotoFromFav={this.props.removePhotoFromFav} removePhotoFromList={this.props.removePhotoFromList} sortByValue={this.props.sortByValue} photos={this.props.photos} showImageDetails={this.showImageDetails} addToFavorites={this.props.addPhotoToFavorites} />
                        <ViewSinglePhoto changeRender={this.changeRender} photos={this.props.photos} currentPhoto={this.state.currentPhoto} />
                    </section>
                </div>
            );
        } else {
            return (
                <div>
                    <HeaderApp />
                    <Favorites favorites={this.props.favorites} />
                    <section className="container">
                        <PhotoList removePhotoFromFav={this.props.removePhotoFromFav} removePhotoFromList={this.props.removePhotoFromList} sortByValue={this.props.sortByValue} photos={this.props.photos} showImageDetails={this.showImageDetails} addToFavorites={this.props.addPhotoToFavorites} />
                        <EditPhotoDetails photos={this.props.photos} currentPhoto={this.state.currentPhoto} updatePhoto={this.props.updatePhoto} />
                    </section>
                </div>
            );
        }
        
    }
}

export default PhotoBrowser;