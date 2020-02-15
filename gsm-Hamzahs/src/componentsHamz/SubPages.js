import React from 'react';
// import './Community.css';

class BoardOfDirectors extends React.Component {
    render() {
        return (
            <div>
            <p className="jumbotron">
            <h1 className="display-4">Non Profits</h1>
            <img src="/images/image-1.jpg" class="ui fluid image" />
            <hr className="my-4"></hr>
            <p id="sub-text">It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="/community/non_profits" role="button">Learn more</a>
            <h1 className="display-4">Community Colleges</h1>
            <img src="/images/image-1.jpg" class="ui fluid image" />
            <hr className="my-4"></hr>
            <p id="sub-text">It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="/community/community_colleges" role="button">Learn more</a>
            <h1 className="display-4">High School Programs </h1>
            <img src="/images/image-1.jpg" class="ui fluid image" />
            <hr className="my-4"></hr>
            <p id="sub-text">It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="/community/high_school_programs" role="button">Learn more</a>
           </p>
            </div>
        )
    }
};

export default BoardOfDirectors;