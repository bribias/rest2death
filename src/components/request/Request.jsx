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
                <div className='buttons'>
                    <label htmlFor='get'>GET</label>
                    <input
                        aria-label='method'
                        type='radio'
                        value='GET'
                        id='get'
                        name='method'
                        onChange={onChange} />
                    <label htmlFor='post'>POST</label>
                    <input
                        aria-label='method'
                        type='radio'
                        value='POST'
                        id='post'
                        name='method'
                        onChange={onChange} />
                    <label htmlFor='put'>PUT</label>
                    <input
                        aria-label='method'
                        type='radio'
                        value='PUT'
                        id='put'
                        name='method'
                        onChange={onChange} />
                    <label htmlFor='patch'>PATCH</label>
                    <input
                        aria-label='method'
                        type='radio'
                        value='PATCH'
                        id='patch'
                        name='method'
                        onChange={onChange} />
                    <label htmlFor='delete'>DELETE</label>
                    <input
                        aria-label='method'
                        type='radio'
                        value='DELETE'
                        id='delete'
                        name='method'
                    onChange={onChange} />
                </div>
                <textarea
                    placeholder='Raw JSON request'
                    rows='10'
                    cols='50'
                    name='body'
                    value={body}
                onChange={onChange}></textarea>
            </form>
        </>
    );
};

Request.propTypes = {
    url: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Request;