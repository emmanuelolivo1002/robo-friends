import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
import App from './App';
import Card from './Card';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Card id="1" name="Emm" email="emm@test.com"/>
    <Card id="2" name="Emm" email="emm@test.com"/>
    <Card id="3" name="Emm" email="emm@test.com"/>
  </div>
  , document.getElementById('root'));
registerServiceWorker();
