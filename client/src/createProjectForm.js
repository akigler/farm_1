import React from 'react';

class CreateProjectForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        country: '',
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleInputSubmit = this.handleInputSubmit.bind(this);
    }
  
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = event.target.name;

        this.setState( {[name]: value} );
    }
  
    handleInputSubmit(event) {
        console.log('An essay was submitted: ' + this.state.firstName);
        event.preventDefault();
    }
  
    render() {
      return (
          <form onSubmit={this.handleInputSubmit}>
              <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="validationCustom01">First name</label>
                        <input 
                            name="firstName"
                            type="text" 
                            className="form-control" 
                            onChange={this.handleInputChange}
                            value={this.state.firstName}
                            id="validationCustom01" placeholder="First name" placeholder="Mark" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="validationCustom02">Last name</label>
                        <input 
                            name="lastName"
                            onChange={this.handleInputChange}
                            value={this.state.lastName}
                            type="text" className="form-control" id="validationCustom02" placeholder="Last name" placeholder="Otto" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </div>
              <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input 
                        name="email"
                        onChange={this.handleInputChange}
                        value={this.state.email}
                        type="email" className="form-control" value={this.state.value}  onChange={this.handleChange} id="inputEmail4" placeholder="Email" required/>
                  </div>
              </div>
              <div className="form-group">
                  <label for="inputAddress">Address</label>
                  <input 
                    name="address"
                    onChange={this.handleInputChange}
                    value={this.state.address}
                    type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input 
                        name="city"
                        onChange={this.handleInputChange}
                        value={this.state.city}
                        type="text" className="form-control" id="inputCity" required/>
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputCountry">Country</label>
                    <input 
                        name="country"
                        onChange={this.handleInputChange}
                        value={this.state.country}
                        type="text" className="form-control" id="inputCountry" required/>
                  </div>  
              </div>
              <button type="submit" value="Submit" className="btn btn-primary">Create Project</button>
          </form>
  );
    }
  }
  
export default CreateProjectForm;