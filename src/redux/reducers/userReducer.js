
const initialState = {
    todos: [],
    category: [],
    isEmpty: true,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return state;
        case "DELETE":
            return state;
        default:
            return state;
    }

}

export default userReducer