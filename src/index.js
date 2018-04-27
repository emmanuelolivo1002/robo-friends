import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

import './index.css';

import App from './App';
import CardList from './CardList';
import {robots} from './robots'


ReactDOM.render(
  <CardList robots={robots}/>
  , document.getElementById('root'));
registerServiceWorker();
