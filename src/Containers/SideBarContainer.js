import React, {Component} from 'react';
import SideBarComponent from '../Components/SideBarComponent';
import sideBarActions from '../Actions/SideBarActions';
import {sidebarMenu} from '../utils/SideBarOptions'

import {connect} from 'react-redux';

class SideBar extends Component {

    render() {
        return(
            <SideBarComponent menu = {sidebarMenu()} onSelect = {this.props.changeActiveMenuOption} menuHeader = "" activeKey = {this.props.activeView}/>
        )
    }
}

const mapStateToProps = ({sideBar}) => ({...sideBar});

const mapDispatchToProps = (dispatch) => ({
    changeActiveMenuOption : (selectedKey) => dispatch(sideBarActions.changeActiveOption(selectedKey))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
