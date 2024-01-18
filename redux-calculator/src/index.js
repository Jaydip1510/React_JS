import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import Calculator from './components/Calculator';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={Store}>
            <Calculator />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);