import React from 'react';
import {Link} from 'react-router-dom';

function Order () {
    return (
        <div>
            <Link to={`/pizza`}>
                <button>Order Now</button>
            </Link>
        </div>
    )
}

export default Order