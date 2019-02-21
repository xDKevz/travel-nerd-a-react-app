import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 
export class MapContainer extends React.Component {

    // Methods to update the size of the map as it is overflowing and extending size of div
    componentDidMount () {
        document.querySelector(".map").style.width = "50%";
        document.querySelector(".map").style.height = "45%";
    }

    componentDidUpdate () {
        document.querySelector(".map").style.width = "50%";
        document.querySelector(".map").style.height = "45%";
    }

    render() {
        const photo = this.props.photos.find( obj => obj.id === this.props.currentPhoto);
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/`;

        const style = {
            width: '50%',
            height: '195%'
        };

        const lat = Number(photo.latitude);
        const lng = Number(photo.longtitude);

        if (photo !== null) {
            return (
                <div className="mapViewBox"> 
                    <div>
                        <Map className="map"
                            key={photo.id}
                            google={this.props.google}
                            style={style}
                            zoom={14}
                            center={{
                                lat: lat,
                                lng: lng
                            }}
                        >
                        <Marker title={photo.title} onClick={this.onMarkerClick} name={'Current location'} />
                        </Map>
                    </div>
                    <div >
                        <h1>This is a random text</h1>
                        <img src={imgURL + photo.path} alt={photo.title} />
                        <h2>{photo.title}</h2>
                        <h3>{photo.city}, {photo.country}</h3>
                        <button onClick={this.handleChangeRender}>View</button>
                    </div>
                </div>
            );
        } else {
            return (
                <article className="details">
                    <div className="detailsPhotoBox">
                        <h1>Photo Removed</h1>
                    </div>
                </article>
            )

        }
    }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDKABHgdY2tt-ny_J2y6tG7rPAPZ853Ss4")
})(MapContainer)