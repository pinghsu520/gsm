import React from 'react';

class BoardOfDirectors extends React.Component {
    render() {
        return (
            <div className="jumbotron">
            <h1 className="display-4">Boards Of Directors</h1>
            <PhotoGrid />
            <p></p>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"></hr>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="/board_of_directors" role="button">Learn more</a>
            </div>
        )
    }
};


// Profile Pictures aef
class PhotoGrid extends React.Component {
    render() {
        return (
   
            <div class="ui small images">
            <img class="ui medium circular image" src="../images/image-5.jpg"></img>
            <button class="ui inverted grey button">Rody Espanol<div>Business Developer</div></button>
            <img class="ui medium circular image" src="../images/image-5.jpg"></img>
            <button class="ui inverted grey button">Marc Beilin<div>Sales Manager</div></button>
            <img class="ui medium circular image" src="../images/image-5.jpg"></img>
            <button class="ui inverted grey button">Hamzah Firman<div>Software Engineer</div></button>
            <img class="ui medium circular image" src="../images/image-5.jpg"></img>
            <button class="ui inverted grey button">Tristan<div>Software Engineer</div></button>
            <img class="ui medium circular image" src="../images/image-5.jpg"></img>
            <button class="ui inverted grey button">Andy Le<div>Software Engineer</div></button>
            <img class="ui medium circular image" src="../images/image-5.jpg"></img>
            <button class="ui inverted grey button">Ping Hsu<div>Software Engineer</div></button>
</div>

        )
    }
}

export default BoardOfDirectors;