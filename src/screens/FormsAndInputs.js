import React, { Component } from 'react';

class FormsAndInputs extends Component {
    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: ''

        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log("Final data is", data)
    }

    handleInputChange = (event) => {
        event.preventDefault()
        // console.log(event)
        // console.log(event.target.name)
        // console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value,
        })

    }
    // componentDidMount(){
    //     this.setState({
    //         first_name: "Brook",
    //         last_name: "Magar"
    //     })
    // }

  render() {
       const {first_name} = this.state
       const {last_name} = this.state
    return (
      <div>
          <h1>Forms and Inputs!</h1>
          <p>Full name is: {first_name} {last_name}</p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-input-container">
            <div className="row">
                 <div className="col">
               <input type="text" className="form-control" placeholder="First name" name='first_name' onChange={this.handleInputChange} />
            </div>
            <div className="col">
               <input type="text" className="form-control" placeholder="Last name" name='last_name' onChange={this.handleInputChange} />
            </div>
        </div>
     </div>
</form>
            <br></br><br></br>
            <button type="button" className="btn btn-secondary" onClick={this.handleSubmit}>Submit</button>
      </div>
      
    );
  }
}

export default FormsAndInputs;
