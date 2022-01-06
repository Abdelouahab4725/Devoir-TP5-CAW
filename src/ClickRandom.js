import React from 'react';

class ClickRandom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "",
            count: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            count: Math.floor(Math.random() * this.props.maxNum)
        });

        if (this.state.count == this.props.maxNum - 1) {
            this.setState({
                status: "YOU WIN"
            });

        } else {
            this.setState({
                status: "",
            });
        }
    }


    render() {
        return (
            <div>
                <h1>Number is: {this.state.count} </h1>
                <h3>{this.state.status}</h3>
                <button onClick={this.handleClick}>Random Number</button>
            </div>
        );
    }

}
export default ClickRandom;