import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: {
                lat: 0,
                lng: 0
            }
        }
    }
    render() {
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/`;
        let photo = this.props.photos.find((obj) => obj.id === this.props.currentPhoto);
        if (photo != null) {
            return (
                <div className="mapContainer">
                <div>
                    <Map className="map" 
                    key={photo.id}
                    style={{width: '500px', height: '900px', position: 'relative'}} 
                    google={this.props.google} zoom={14}
                    initialCenter={{lat: Number(photo.latitude), lng: Number(photo.longitude) }}
                    onClick={this.onMapClicked}
                    
                    >
                
                        <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />
                
                        {/* <InfoWindow onClose={this.onInfoWindowClose}>
                            <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow> */}
                    </Map>
                </div>
            
                <div className="mapDetails">
                        <img src={imgURL+photo.path} alt={photo.title}/>
                        <br></br>
                        <h2>{photo.title}</h2>
                        <p>Distance from User(KM): {this.calculateDistance(photo.latitude, photo.longitude)}</p>
                        <p>{photo.description}</p>
                        <p>{photo.city}, {photo.country}</p>
                        <button onClick={this.handleView}>View</button>
                        <button onClick={this.handleEdit}>Edit</button>
                </div>
                </div>
            );
        } else {
            return (
                <div className="detailsPhotoBox">
                    <h1>Photo has been removed</h1>
                </div>
            );
        }
    }

    handleView = () => {
        console.log("handleView");
        this.props.changeRenderView("view");
    }

    handleEdit = () => {
        this.props.changeRenderView("edit");
    }

    // code from https://www.movable-type.co.uk/scripts/latlong.html
    calculateDistance = (lat1, lon1) => {
        let lat2 = this.state.currentLocation.lat;
        let lon2 = this.state.currentLocation.lng;
        if (lat2 !== 0 && lon2 !== 0) {
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
        } else {
            d = "Unable to calculate distance.";
        }
        console.log("Distance = " + d);
        return d;
    }
    
    toRadians = (degrees) => {
        return (degrees * Math.PI) / 180;
    }

    componentDidMount () {
        // document.querySelector(".map").style.width = "50%";
        // document.querySelector(".map").style.height = "95%";

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

    // componentDidUpdate () {
    //     document.querySelector(".map").style.width = "50%";
    //     document.querySelector(".map").style.height = "95%";
    // }

}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDKABHgdY2tt-ny_J2y6tG7rPAPZ853Ss4")
})(MapContainer)