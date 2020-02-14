import React, { Component } from 'react'

class CreateProject extends Component {

    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            //this returns the id of whatever input field we are updating (title or pw)
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            //this class contains all content in a central column
            <div className="container">
                {/* on submit handler that we define function for */}
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create new project</h5>
                    <div className="input-field">
                        <label htmlFor="title" >Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content" >Content</label>
                        <textarea id="content"  className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn red lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject