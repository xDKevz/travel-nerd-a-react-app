import React from 'react';
import HeaderApp from './HeaderApp.js';

class About extends React.Component {
    render() {
        return (
            <div>
                <HeaderApp />
                <div className="banner">
                    <div>
                        <h1>About Us!</h1>
                        <h3>"Lorem Ipsum"</h3>
                        <p className="para1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices purus eget elit molestie convallis. Duis nisl massa, sodales ut commodo in, maximus ut ipsum. Integer vehicula ipsum dolor, eget mattis leo pharetra nec. Ut molestie metus vel quam imperdiet elementum. Nulla consectetur tristique interdum. Etiam eget nunc et justo scelerisque vulputate a a augue. Aenean blandit mi id neque mattis pretium. Integer sed magna fermentum dui interdum sodales. Sed rhoncus, leo vitae tincidunt tempor, nulla dolor mattis sapien, finibus varius justo ligula at erat. Aenean nisl sapien, tristique a suscipit ac, gravida ac enim.
                        </p>
                        <p className="para2">  
                            Vestibulum tincidunt metus ac consequat consectetur. Vestibulum finibus lacus diam, a hendrerit lorem euismod eget. Cras sed sem arcu. Fusce ultricies turpis vel interdum aliquet. Phasellus elit dui, porttitor consequat volutpat efficitur, rutrum in urna. Pellentesque id posuere elit. Sed accumsan accumsan tellus vel facilisis. Donec malesuada ligula eget ultrices dapibus. Cras diam tellus, aliquam vitae dui a, finibus porta magna. Aliquam eu neque ut augue ultrices tempor sed vitae augue. Sed finibus sem felis, a interdum felis porta vitae. Integer vel lacinia nulla.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;