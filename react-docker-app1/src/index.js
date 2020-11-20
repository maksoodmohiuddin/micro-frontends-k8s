import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './registerServiceWorker';

window.renderApp1 = (containerId) => {
  ReactDOM.render(
    <App />,
    document.getElementById(containerId),
  );
  unregister();
};

window.unmountApp1 = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

