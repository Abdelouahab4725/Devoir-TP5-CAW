import React from 'react';
import d1 from './img/1.png';
import d2 from './img/2.png';
import d3 from './img/3.png';
import d4 from './img/4.png';
import d5 from './img/5.png';
import d6 from './img/6.png';


class De extends React.Component {

    state = {
        images: [d1, d2, d3, d4, d5, d6],
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Score: {this.props.score}</h2>
                    <h2>{this.props.etat}</h2>
                    <img src={this.state.images[this.props.de1]} />
                    <img src={this.state.images[this.props.de2]} />
                    <h2>{this.props.clicks} Clicks</h2>
                </div>
            </div>
        );
    }
}

export default De;