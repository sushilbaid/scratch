import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
        this.handleTick = this.handleTick.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h3>It is {this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }

    componentDidMount() {
        this.timerId = setInterval(this.handleTick.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    handleTick() {
        this.setState({date: new Date()});
    }
}

export default Clock;
