import { SHOW_SIDEBAR, HIDE_SIDEBAR, GET_DATA_SORT, DATA_SORT_FETCHING, DATA_SORT_SUCCESS, DATA_SORT_FAILED } from 'actions'
const sidebarReducer = (sidebarStatus = {}, action) => {
    switch (action.type) {
        case SHOW_SIDEBAR:
            return Object.assign({}, sidebarStatus,
                {
                    focus: action.payload.focus
                });
        case HIDE_SIDEBAR:
            return Object.assign({}, sidebarStatus,
                {
                    focus: action.payload.focus
                });
        case GET_DATA_SORT:
            return Object.assign({}, sidebarStatus,
                {
                    data_sort: action.payload.focus
                });

        case DATA_SORT_FETCHING:
            return Object.assign({}, sidebarStatus,
                {
                    data_sort: action.payload
                });
        case DATA_SORT_SUCCESS:
            return Object.assign({}, sidebarStatus,
                {
                    data_sort: action.payload.data
                });
        case DATA_SORT_FAILED:
            return Object.assign({}, sidebarStatus,
                {
                    data_sort: action.payload
                });
        default:
            return sidebarStatus;
    }
}
export default sidebarReducer;