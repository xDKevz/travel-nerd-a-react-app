import React from "react";
import './Home.css';
import HeaderApp from './HeaderApp.js';
class About extends React.Component {
    render() {
        return (
            <div className="banner">
                <HeaderApp />
                <div>
                    <h1>About</h1>
                    <h3>Course: COMP 4513 - WEB 3</h3>
                    <h3>Members: John Kevin Ruiz & Rafael Angelo Pucut</h3>
                    <h3>Technologies Used</h3>
                    <h4>
                        <ul>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                        </ul>
                    </h4>
                </div>
            </div>
        );
    }
}
export default About;