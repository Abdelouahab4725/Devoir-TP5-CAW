import React from 'react';

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: "PLEASE CLICK ",
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ count: this.state.count + 1 });
        if (this.state.count % 2 != 0) {
            this.setState({ clicked: "NOT CLICKED " });
        } else {
            this.setState({ clicked: "CLICKED " });
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.clicked} </h1>
                <h3>{this.state.count}</h3>
                <button onClick={this.handleClick}>Toggle click</button>
            </div>
        );
    }

}
export default ToggleButton;