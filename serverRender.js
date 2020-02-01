import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';
import axios from 'axios';

const serverRender = () =>

  axios('https://clinicaltrialsapi.cancer.gov/v1/interventions?name=oncology')
    .then( res => {
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App/>
        ),
        initialData: JSON.stringify(res.data)
      }
    });

export default serverRender;
