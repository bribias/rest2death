import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import RESTcontainer from './RESTcontainer';

const server = setupServer(
    rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
        return res(
            ctx.json({
                results: [
                    {
                        id: 1,
                        name: 'Rick Sanchez',
                        status: 'Alive',
                        image: 'example.com/image.png',
                    },
                ],
            })
        );
    })
);

describe('RESTcontainer', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    // eslint-disable-next-line max-len
    it('takes a url, method and optional request body and gives a json response', async () => {
        render(<RESTcontainer />);
        const URLinput = await screen.findByRole('textbox', { name: 'url' });
        userEvent.type(
            URLinput,
            '{selectall{del}https://rickandmortyapi.com/api/character'
        );

        const methodSelection = await screen.findByDisplayValue('GET');
        userEvent.click(methodSelection);

        const requestButton = await screen.findByRole('button', {
            name: 'request',
        });
        userEvent.click(requestButton);

        const response = await screen.findByRole('article', { name: 'response' });

        expect(response).toMatchSnapshot();
    });
});