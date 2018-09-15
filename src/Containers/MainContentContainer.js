import React, { Component } from 'react';
import ToolBar from './ToolBarContainer';
import Dashboard from './DashBoardContainer';

export default class MainContent extends Component {
    render() {
        return(

            <div   id="wrapper" className="col-sm-9 col-xs-8 ">
                <ToolBar/>
                <Dashboard/>
            </div>
       );
    }
}
