import React from 'react';

class PtwForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Add ur name here",
            story: "Write a brief story here"
        }
        this.handleName = this.handleName.bind(this);
        this.handleStory = this.handleStory.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleStory(e) {
        this.setState({
            story: e.target.value
        });
    }

    handleSubmit(e) {
        console.log("a story is submitted: " + this.state.story);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleName}></input>
                </label>
                <label>
                    Story: 
                    <textarea value={this.state.story} onChange={this.handleStory}></textarea>
                </label>
                <input type="submit" value="Submit"></input>
            </form>
        );
    }
}

export default PtwForm;
