import './StarRating.css';
import React from 'react';
import PropTypes from 'prop-types';

function Star(props) {
    const {selected = false, onClick=f=>f } = props;
    return (
        <div className={selected ? "star selected" : "star"}
            onClick={onClick}>
        </div>
    );
}

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func,
}

class StarRating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0
        };
    }

    onClick(index) {
        this.setState({
            rating: index + 1
        });
    }

    render() {
        const {scale = 5} = this.props;
        const {rating } = this.state;
        return (
            <div className="star-rating">
                {[...Array(scale)].map((n, i) => 
                    <Star key={i}
                        selected={i < rating}
                        onClick={() => this.onClick(i)}
                    />
                )}
                <p>{rating} of {scale} stars</p>
            </div>
        );
    }
}

export default StarRating;
