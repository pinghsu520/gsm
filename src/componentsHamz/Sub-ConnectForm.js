import React from 'react';

class ConnectWithUs extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    terms: false,
  }
  change = e => {
    this.props.onChange({[e.target.name]: e.target.value})
    this.setState({
      [e.target.name]: e.target.value 
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    //this.props.onSubmit(this.state)
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      terms: false
    });
  };
  render() {
        return (
          <div>
          <div class="ui horizontal divider">Work With Us</div>
          <form class="ui huge form segment">
            <p>Tell Us About Yourself</p>
            <div class="two fields">
              <div class="field">
                <label>First Name</label>
                <input 
                  placeholder="First Name" 
                  name="firstName" 
                  type="text"
                  value={this.state.firstName} 
                  onChange={e => this.change(e)} 
                />
              </div>
              <div class="field">
                <label>Last Name</label>
                <input 
                  placeholder="Last Name" 
                  name="lastName" 
                  type="text"
                  value={this.state.lastName} 
                  onChange={e => this.change(e)} 
                />
                {/* Drop Down Format */}
                {/* <label>Gender</label>
                <select class="ui dropdown" name="gender">
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select> */}
              </div>
            </div>
            <div class="two fields">
              <div class="field">
                <label>Email</label>
                <input 
                  placeholder="Email" 
                  name="email" 
                  type="text"
                  value={this.state.email} 
                  onChange={e => this.change(e)} 
                />
                {/* Password Format */}
                {/* <label>Username</label>
                <input placeholder="Username" name="username" type="text"/>
              </div>
              <div class="field">
                <label>Password</label>
                <input type="password" name="password"/> */}
              </div>
              <div class="field">
                <label>Phone Number</label>
                <input 
                  placeholder="Phone Number" 
                  name="number" 
                  type="text"
                  value={this.state.number} 
                  onChange={e => this.change(e)} 
                />
                {/* Error Block Format */}
                {/* <div class="ui form error">
                  <div class="field">
                    <label>E-mail</label>
                    <input type="email" placeholder="joe@schmoe.com"></input>
                  </div>
                  <div class="ui error message">
                    <div class="header">Action Forbidden</div>
                    <p>You can only sign up for an account once with a given e-mail address.</p>
                  </div>
                </div> */}
              </div>
            </div>
            {/* Check box Format */}
            {/* <div class="inline field">
              <div class="ui large checkbox">
                <input 
                  type="checkbox" 
                  name="terms"
                  value={this.state.terms}
                  onChange={e => this.change(e)}/>
                <label>I agree to the terms and conditions</label>
              </div>
            </div> */}
            <div class="ui primary submit button" 
              onClick={e => this.onSubmit(e)}>
                Submit
            </div>
            <div class="ui error message"></div>
          </form>
          </div>

          
        )
    }
};

export default ConnectWithUs;