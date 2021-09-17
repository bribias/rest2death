import React, { Component } from 'react';
import Request from '../components/request/Request';
import Response from '../components/response/Response';
import { fetchAPI } from '../services/fetch';

export default class RESTcontainer extends Component {
    state = {
        method: '',
        url: '',
        body: '',
        response: {
            'Submit a request': 'Input a url, select a method and click the button',
        },
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { url, method, body } = this.state;

        fetchAPI(url, method, body)
            .then((response) => this.setState({ response }))
    };

    render() {
        const { url, method, body, response } = this.state;
        return (
            <>
                <Request
                    url={url}
                    method={method}
                    body={body}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
                <Response response={response} />
            </>
        );
    }
}