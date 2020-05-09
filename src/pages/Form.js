import React, {Component} from 'react'

import form from '../images/form.png'

import './css/form.css'
import './css/home.css'

class Form extends Component {
    constructor(props) {
      super(props);
      
      this.state = { value: 'select'};
    }

    onChange(e) {
      this.setState({
        value: e.target.value
      })
    }

    render(){
        return (
            <div className="form component">
                <form method="POST"
                    action="google form link"
                    onsubmit="return window.submitGoogleForm(this);"
                >
                    <div className="image-container">
                        <img src={form} className="image" alt="programs" />
                    </div>
                    
                    
                    <p className="instruction">Please register for any of the sessions by filling the google form below:</p>

                    <div className="tab">
                        <label>Full Name</label><br />
                        <input type="text" name="entry.94395823" />
                    </div>

                    <div className="tab">
                        <label>Email Address</label><br />
                        <input type="email" name="emailAddress" />
                    </div>

                    <div className="tab">
                        <label>Phone Number</label><br />
                        <input type="text" name="entry.2017378620" />
                    </div>

                    <div className="tab">
                        <label>Interested in</label><br />
                        <select 
                            name="entry.1382238968"
                            value={this.state.value} 
                            onChange={this.onChange.bind(this)} 
                            className="form-control"
                        >
                            <option value="select">Select an Option</option>
                            <option value="First">First</option>
                            <option value="Second">Second</option>
                            <option value="Third">Third</option>
                        </select>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
