export default function todoReducer(state = {data: []}, action) {
    switch (action.type) {
        case 'add':
            const data_add = [...state.data, action.value];
            return {
                data: data_add
            }
        case 'remove':
            const data_remove = [...state.data];
            data_remove.splice(action.index, 1);
            return {
                data: data_remove
            }
        case 'update': 
            const data_update = [...state.data];
            data_update[action.index] = action.value;
            return {
                data: data_update
            }
        default: return state;
    }

}