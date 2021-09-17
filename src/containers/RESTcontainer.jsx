import React from 'react';
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

}