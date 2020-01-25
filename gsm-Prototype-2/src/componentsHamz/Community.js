import React from 'react';
import SubPages from './Sub-BoardOfDirectors';
import ConnectWithUs from './Sub-ConnectForm';
import './Community.css';


class Community extends React.Component {
    state ={
        fields: {}
    }
    
    onChange = (updatedValue) => {
        this.setState({
            fields: {
                ...this.state.fields,
                ...updatedValue
            }
        });
    };
    render() {
        return (
                <div id="community-back">
                <h1 id="title">Community</h1>
                <SubPages />
                <ConnectWithUs onChange={fields => this.onChange(fields)} />
                <p>{JSON.stringify(this.state.fields, null, 2)}</p>
                </div>  
                
        )
    }
};

export default Community;

