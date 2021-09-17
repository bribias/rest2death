import React from 'react';
import ReactJson from 'react-json-view';
import PropTypes from 'prop-types'

const Response = ({ response }) => {
    return (
        <article aria-label="response" className="response">
            <ReactJson src={response} />
        </article>
    );
};

Response.propTypes = {
    response: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired
};

export default Response;
