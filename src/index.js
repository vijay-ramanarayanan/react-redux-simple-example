import React, { Component } from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';

import SideBar from './Containers/SideBarContainer';
import MainContent from './Containers/MainContentContainer';
import store from './Store/store'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };

  }

  render() {
    return(
      <div className = "container-fluid">
            <div className="row">
              <SideBar/>
              <MainContent/>
            </div>
      </div>
    )
  }
}

render(

    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root')

);
