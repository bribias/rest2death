import React from 'react';
import PropTypes from 'prop-types';

const Request = ({ url, body, onChange, onSubmit  }) => {
    return (
        <>
            <form onSubmit={onSubmit} className='request'>
                <label htmlFor='url'></label>
                <input
                    aria-label='url'
                    id='url'
                    name='url'
                    type='url'
                    placeholder='https://'
                    value={url}
                    onChange={onChange}
                />
            </form>
        </>
    );
};

export default Request;