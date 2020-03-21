import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      job: '',
    }
}

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState({
            name: '',
            job: '',
          })
        }
    handleChange = event => {
        const { name, value } = event.target
      console.log([name],name,[name][0]);
        this.setState({
          [name]: value,
        })
      }
    render() {
        const { name, job } = this.state;
      
        return (
          <form>
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange} />
            <label for="job">Job</label>
            <input
              type="text"
              name="job"
              id="job"
              value={job}
              onChange={this.handleChange} />
              <input type="button" value="Submit" onClick={this.submitForm} />
          </form>
        );
      }

    //this.state = this.initialState
  
}

export default Form;