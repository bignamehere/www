////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'mineral-ui/themes';

import App from './js/App/app';

// Project-specific styles
import './styles/base.scss';

const ButterAPIKey = '83c7a2fe135038b0520ed5ec9df758e57b76f681';

ReactDOM.render( 
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById('root') );
