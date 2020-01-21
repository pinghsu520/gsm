import React from 'react';
import Navbar from './Navbar'
import NonProfitRepresentation from './Sub-NonProfitRepresentation';
import WhyThisNonProfit from './Sub-WhyThisNonProfit';
import GoodTheyAreDoing from './Sub-GoodTheyAreDoing';
import SocialImpact from './Sub-SocialImpact';
import BoardOfDirectors from './Sub-BoardOfDirectors';
import ConnectWithUs from './Sub-ConnectForm';

class Community extends React.Component {
    render() {
        return (
                <div className="alert alert-primary" role="alert">
                    Welcome to our Community Page
                    <Navbar />
                    <NonProfitRepresentation />
                    <WhyThisNonProfit />
                    <GoodTheyAreDoing />
                    <SocialImpact />
                    <BoardOfDirectors />
                    <ConnectWithUs />
                </div>  
                
        )
    }
};

export default Community;

