import React from 'react';
import './Events.css';

class SubPages extends React.Component {
    render() {
        return (
            <div>
            <p className="jumbotron">
            <h1 className="display-4">Upcoming Events</h1>
            <img id="sub-img"className="ui fluid image" src="../images/image-5.jpg"></img>
            <hr className="my-4"></hr>
            <p id="sub-text">It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="/events/upcoming" role="button">Learn more</a>
           </p>
            <p className="jumbotron">
            <h1 className="display-4">Schedule Meeting </h1>
            <img  id="sub-img" src="/images/image-4.jpg" class="ui fluid image"></img>
            <hr className="my-4"></hr>
            <p id="sub-text">It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="/events/schedule" role="button">Learn more</a>
            </p>
    
            <p className="jumbotron">
            <h1 className="display-4">Contact </h1>
            <img  id="sub-img" src="/images/image-4.jpg" class="ui fluid image" />
            <hr className="my-4"></hr>
            <p id="sub-text">It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="/events/contact" role="button">Learn more</a>
          </p>
     
            </div>

            // <div className="jumbotron">
            // <h1 className="display-4">Boards Of Directors</h1>
            // <img className="ui fluid image" src="../images/image-5.jpg"></img>
            // <hr className="my-4"></hr>
            // <p id="sub-text">It uses utility classes for typography and spacing to space content out within the larger container.</p>
            // <a className="btn btn-primary btn-lg" href="/board_of_directors" role="button">Learn more</a>
            // </div>
        )
    }
};


// // Profile Pictures aef
// class PhotoGrid extends React.Component {
//     render() {
//         return (
//    <div>
//             <img className="ui fluid image" src="../images/image-5.jpg"></img>
            
// </div>

//         )
//     }
// }

export default SubPages;