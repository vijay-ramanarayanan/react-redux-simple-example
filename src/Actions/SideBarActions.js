const sideBarActions ={
    changeActiveOption(selectedKey) {

        return({
            type : 'ACTIVE_MENU_ITEM_CHANGED',
            data : selectedKey         
        });
    }
}

export default sideBarActions;