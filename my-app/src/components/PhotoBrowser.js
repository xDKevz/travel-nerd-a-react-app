import React from 'react';
import PhotoList from './PhotoList';
import EditPhotoDetails from './EditPhotoDetails';
import HeaderApp from './HeaderApp.js';
import Favorites from './Favorites.js';

class PhotoBrowser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPhoto: 1 };
    }

    render() {
        return (
            <div>
                <HeaderApp />
                <Favorites favorites={this.props.favorites} />
                <div className="photoBrowser">
                    <div className="sorting">
                            <label>Filter by: </label>
                            <button>Default</button>
                            <button>City</button>
                            <button>Country</button>
                    </div>
                    <section className="container">
                        <PhotoList photos={ this.props.photos } showImageDetails={ this.showImageDetails } addPhotoToFavorites={ this.props.addPhotoToFavorites } />
                        <EditPhotoDetails photos={ this.props.photos } currentPhoto={ this.state.currentPhoto } updatePhoto={ this.props.updatePhoto } />
                    </section>
                </div>
            </div>
        );
    }

    showImageDetails = (id) => {
        this.setState( {currentPhoto: id });
    }
}

export default PhotoBrowser;