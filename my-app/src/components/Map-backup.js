import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {

    componentDidMount () {
        document.querySelector(".map").style.width = "50%";
        document.querySelector(".map").style.height = "45%";
    }

    componentDidUpdate () {
        document.querySelector(".map").style.width = "50%";
        document.querySelector(".map").style.height = "45%";
    }

    handleChangeRender = () => {
        this.props.changeRender("map");
    }
    
    render() {
        const style = { width: '500px', height: '800px' };
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/`;
        let photo = this.props.photos.find((obj) => obj.id === this.props.currentPhoto);
        console.log(photo);

        if (photo != null) {
            return (
                <div className="map" >
                    <div>
                        <Map key={photo.id} google={this.props.google} style={style}
                            initialCenter={{ lat: Number(photo.latitude), lng: Number(photo.longitude) }}
                            zoom={15} onClick={this.onMapClicked}
                        >

                        <Marker title={photo.title} onClick={this.onMarkerClick} name={'Current location'} />
                        </Map>
                    </div>
                    <div>
                        <h1>This is a random text</h1>
                        <img src={imgURL + photo.path} alt={photo.title} />
                        <h2>{photo.title}</h2>
                        <h3>{photo.city}, {photo.country}</h3>
                        <button onClick={this.handleChangeRender}>View</button>
                    </div>
                </div>
            );
        } else {
            return (<Map google={this.props.google} style={style}
                initialCenter={{ lat: 25.0000, lng: -71.0000 }}
                zoom={15} onClick={this.onMapClicked}>
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
            </Map>);
        }
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDKABHgdY2tt-ny_J2y6tG7rPAPZ853Ss4")
})(MapContainer)