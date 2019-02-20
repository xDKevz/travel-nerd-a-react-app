import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {


    
    render() {
        const style = { width: '900px', height: '900px' };
        let photo = this.props.photos.find((obj) => obj.id === this.props.currentPhoto);
        console.log(photo);

        if (photo != null) {
            return (
                <Map key={photo.id} google={this.props.google} style={style}
                    initialCenter={{ lat: Number(photo.latitude), lng: Number(photo.longitude) }}
                    zoom={15} onClick={this.onMapClicked}
                >

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>

                        </div>
                    </InfoWindow>
                </Map>
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