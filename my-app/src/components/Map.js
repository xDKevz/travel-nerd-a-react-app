import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: {
                lat: 0,
                lng: 0
            },

            allowLocation: "true"
        }
    }

    componentDidMount () {
        document.querySelector(".map").style.width = "10%";
        document.querySelector(".map").style.height = "45%";

        // check for navigation in browser
        // if allowed set currentlocations coordinate
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( (pos) => {
                const coords = pos.coords;
                this.setState({
                    currentLocation: {
                        lat: coords.latitude,
                        lng: coords.longitude
                    }
                });
            },
            // this will set the state to false when the request for location is block/or denied
            (error) => {
                this.setState({allowLocation: "false"});
            }

            );
        } 
    }

    componentDidUpdate () {
        document.querySelector(".map").style.width = "10%";
        document.querySelector(".map").style.height = "45%";
    }

    handleView = () => {
        console.log("handleView");
        this.props.changeRender("view");
    }

    handleEdit = () => {
        this.props.changeRender("edit");
    }

    // code from https://www.movable-type.co.uk/scripts/latlong.html
    calculateDistance = (lat1, lon1) => {
        if (this.state.allowLocation !== "false" ) {
            let lat2 = this.state.currentLocation.lat;
            let lon2 = this.state.currentLocation.lng;
    
            var R = 6371e3; // metres
            var φ1 = this.toRadians(lat1);
            var φ2 = this.toRadians(lat2);
            var Δφ = this.toRadians(lat2-lat1);
            var Δλ = this.toRadians(lon2-lon1);
    
            var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                    Math.cos(φ1) * Math.cos(φ2) *
                    Math.sin(Δλ/2) * Math.sin(Δλ/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
            var d = R * c;
            d = Math.round(d);
            d = "Distance from User " + d + " (KM)";
        } else {
            d = "Cannot calculate distance.";
        }

        console.log("Distance = " + d);
        return d;

    }

    toRadians = (degrees) => {
        return (degrees * Math.PI) / 180;
    }
    
    
    render() {
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/`;
        let photo = this.props.photos.find((obj) => obj.id === this.props.currentPhoto);
        console.log(photo);
        if (photo != null) {
            return (
                <div className="mapViewBox" >
                    <div>
                        <Map className="map" key={photo.id} google={this.props.google} 
                            style={{ width: '500px', height: '800px' }}
                            initialCenter={{ lat: Number(photo.latitude), lng: Number(photo.longitude) }}
                            zoom={15} onClick={this.onMapClicked}
                        >

                            <Marker title={photo.title} onClick={this.onMarkerClick} name={'Current location'} />
                        </Map>
                    </div>
                    <div>
                        <img src={imgURL + photo.path} alt={photo.title} />
                        <h2>{photo.title}</h2>
                        <h3>{photo.city}, {photo.country}</h3>
                        <p>{this.calculateDistance(photo.latitude, photo.longitude)}</p>
                        
                        <button onClick={this.handleView}>View</button>
                        <button onClick={this.handleEdit}>Edit</button>
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