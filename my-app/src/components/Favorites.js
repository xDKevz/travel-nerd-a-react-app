import React from 'react';
import FavoriteItem from './FavoriteItem.js';

class Favorites extends React.Component {
    render() {
        return (
            <div id="toggleBox">
                <input id="togglef" type="checkbox"/>
                <label for="togglef">Favorites</label>
                <div id="expandf">
                    <div className="favorites">
                        <div className="label">
                            <p>❤ Favorites</p>
                            <button>Download</button>
                        </div>
                        { this.props.favorites.map ( (p) => <FavoriteItem removeFav={this.props.removeFav} favorites={p} key={p.id} /> )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Favorites;