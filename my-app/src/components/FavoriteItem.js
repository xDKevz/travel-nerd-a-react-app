import React from 'react';

class FavoriteItem extends React.Component {
    render() {
        // const imgURL = `https://storage.googleapis.com/funwebdev-3rdtravel/square-medium/${this.props.photo.path}`
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/${this.props.photo.path}`;
        return (
            <div className="favoriteItem">
                <button>X</button>
                <img src={ imgURL } title= {this.props.photo.title} alt={ this.props.photo.title } />
            </div>
        );
    }
}

export default FavoriteItem;