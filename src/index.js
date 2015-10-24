import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import Root from './components/root';

const store = { }; // Create your store
const dest = document.getElementById('root');

ReactDom.render((
    <Provider store={store}>
        <Root />
    </Provider>
), dest);

if (process.env.NODE_ENV === 'development') {
    const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
    ReactDom.render((
        <div>
            <Provider store={store}>
                <Root />
            </Provider>
            <DebugPanel top right bottom>
                <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
        </div>
    ), dest);
}
