import React from 'react';
import './Community.css';

class BoardOfDirectors extends React.Component {
    render() {
        return (
            <div>
            <p className="jumbotron">
            <h1 className="display-4">Boards Of Directors</h1>
            <img className="ui fluid image" src="../images/image-5.jpg"></img>
            <hr className="my-4"></hr>
            <p id="sub-text">It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="/community/board_of_directors" role="button">Learn more</a>
           </p>
            <p className="jumbotron">
            <h1 className="display-4">Non-Profit Representation</h1>
            <img src="/images/image-4.jpg" class="ui fluid image"></img>
            <hr className="my-4"></hr>
            <p id="sub-text">It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="/community/non_profit_representation" role="button">Learn more</a>
            </p>
            <p className="jumbotron">
            <h1 className="display-4">Social Impact</h1>
            <img src="/images/image-5.jpg" class="ui fluid image" />
            <hr className="my-4"></hr>
            <p id="sub-text">It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="/community/social_impact" role="button">Learn more</a>
            </p>
            <p className="jumbotron">
            <h1 className="display-4">Why This Non Profit</h1>
            <img src="/images/image-1.jpg" class="ui fluid image" />
            <hr className="my-4"></hr>
            <p id="sub-text">It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="/community/why_non_profit" role="button">Learn more</a>
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

export default BoardOfDirectors;