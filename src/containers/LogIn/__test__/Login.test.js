import React from 'react';
import Login from '../../LogIn/index.jsx';
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../../redux/store/store'
import {BrowserRouter} from 'react-router-dom'



describe('Signin', () => {
  
  it('should render the signin page', () => {
    const { getByText } = render(<Provider store={store}>
        <BrowserRouter>
        <Login />
        </BrowserRouter>
        </Provider>)
    expect(getByText('Mira')).not.toBeNull()
  });

})