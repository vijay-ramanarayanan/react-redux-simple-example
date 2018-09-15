import {combineReducers} from 'redux';

const initialState = {
    activeView : 'Top10'
}

const changeActiveItem = (state, action) => {
    return ({
        ...state,
        activeView : action.data
    });
}

const handler = {
    ['ACTIVE_MENU_ITEM_CHANGED'] : changeActiveItem
}

const sideBar = (state = initialState, action ={}) => (handler[action.type] ? handler[action.type](state, action) : state)

const rootReducer = combineReducers({
    sideBar
});

export default rootReducer;