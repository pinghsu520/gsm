import React from 'react';

class ConnectWithUs extends React.Component {
    render() {
        return (
            <div class="ui form error">
            <div class="field">
              <label>E-mail</label>
              <input type="email" placeholder="joe@schmoe.com"></input>
            </div>
            <div class="ui error message">
              <div class="header">Action Forbidden</div>
              <p>You can only sign up for an account once with a given e-mail address.</p>
            </div>
            <div class="ui submit button">Submit</div>
          </div>
        )
    }
};

export default ConnectWithUs;