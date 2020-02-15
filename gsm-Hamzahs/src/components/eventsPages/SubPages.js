import React from 'react';
import './Events.css';
import Button from '@material-ui/core/Button';
class SubPages extends React.Component {
    render() {
        return (
            <div>
            <p className="jumbotron">
            <h1 className="display-4">Schedule Meeting </h1>
            <img  id="sub-img" src="/images/image-4.jpg" class="ui fluid image"></img>
            <hr className="my-4"></hr>
            <p id="sub-text">It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="/events/schedule" role="button">Learn more</a>
            <h1 className="display-4">Contact </h1>
            <img  id="sub-img" src="/images/image-4.jpg" class="ui fluid image" />
            <hr className="my-4"></hr>
            <p id="sub-text">It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="/press/contact_us" role="button">Learn more</a>
          </p>
     
            </div>

    
        )
    }
};



export default SubPages;