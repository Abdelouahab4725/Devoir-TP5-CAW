import React from 'react';

class Game extends React.Component {
    render() {
        const p1 = this.props.p1;
        const p2 = this.props.p2;
        const p3 = this.props.p3;

        return (<div>
            <b>You {(this.props.p1 == this.props.p2 || this.props.p1 == this.props.p3) ?
                "win" : "lose"}!</b>
        </div>);
    }
}
export default Game;