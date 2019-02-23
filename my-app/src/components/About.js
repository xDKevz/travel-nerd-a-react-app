import React from 'react';
import HeaderApp from './HeaderApp.js';

class About extends React.Component {
    render() {
        return (
            <div>
                <HeaderApp />
                <div id="aboutBanner" className="banner">
                    <div>
                        <h1>COMP 4513 Assignment 1</h1>
                        <p className="para1">
                            This is a website that demonstrates our understanding of how to generate a single-page application using React.
                        </p>
                        <h3>Team Members:</h3>
                        <h4>  
                            John Kevin Ruiz & Rafael Angelo Pucut
                        </h4>
                        <h3>Powered BY:</h3>
                        <div className="powered">
                            <p><img src="https://nodejs.org/static/images/logo.svg" width="200" height="200" alt="NodeJsLogo" /></p>
                            <p><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="200" height="200" alt="ReactLogo" /></p>
                            <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" width="200" height="200" alt="JSLogo" /></p>
                            <p><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="200" height="200" alt="GithubLogo" /></p>
                            <p><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" width="200" height="200" alt="GoogleLogo" /></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;