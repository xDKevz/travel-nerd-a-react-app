import React from "react";
import PhotoList from './PhotoList.js';
import EditPhotoDetails from './EditPhotoDetails.js';
import HeaderApp from './HeaderApp.js';
import Favorites from './Favorites.js';
import ViewSinglePhoto from './ViewSinglePhoto.js';
import Map from './Map.js';

class PhotoBrowser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPhoto: 1, renderValue: "view" };
    }
    
    showImageDetails = (id) => {
        this.setState({ currentPhoto: id });
    }

    changeRender = (value) =>    {
        this.setState({renderValue: value});
    }

    viewOrEdit = () => {
        if (this.state.renderValue === "edit")
            return (<EditPhotoDetails changeRender={this.changeRender} photos={this.props.photos} currentPhoto={this.state.currentPhoto} updatePhoto={this.props.updatePhoto} />);
        else if (this.state.renderValue === "map")
            return (
                <Map photos={this.props.photos} currentPhoto={this.state.currentPhoto} />
            )
        else 
            return (<ViewSinglePhoto changeRender={this.changeRender} photos={this.props.photos} currentPhoto={this.state.currentPhoto} />);
    }
    
    render() {
        return (
            <div>
                <HeaderApp />
                <Favorites favorites={this.props.favorites} />
                <section className="container">
                        <PhotoList changeRender={this.changeRender} removePhotoFromFav={this.props.removePhotoFromFav} removePhotoFromList={this.props.removePhotoFromList} sortByValue={this.props.sortByValue} photos={this.props.photos} showImageDetails={this.showImageDetails} addToFavorites={this.props.addPhotoToFavorites} />
                        {this.viewOrEdit()}
                </section>
            </div>
        );
    }
}

export default PhotoBrowser;