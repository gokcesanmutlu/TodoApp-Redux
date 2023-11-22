import { ActionTypes } from "../actionTypes/todoTypes";

const initialState = {
    todos: [],
    category: [],
    isDone: true,
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        //2. aşama değişimi kodla
        case ActionTypes.ADD_TODO:
            //burda doğrudan push kullanamıyoruz.push doğrudan o diziyi düzenler. biz state'in nasıl olması
            //gerektiğini belirleyip o hali return etmesini sağlayacağız
            const tempTodos = state.todos.concat(action.payload);
            console.log(tempTodos)
            // store'un güncel halini return et / state'im bir objeydi obje kalmaya devam edicek, 
            // içindeki değerlerden sadece todos'u güncellicem, bunun yeni değeri tempTodos olcak
            // objedeki bir değeri güncellerken diğerlerini silmediğimize emin olmalıyız , 
            // örn. todos'u güncellerken categoryleri silmicez
            return { ...state, todos: tempTodos };

        case ActionTypes.TODO_DELETE:
            const filtredTodos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );

            return { ...state, todos: filtredTodos };

        case ActionTypes.EDIT_TODO:
            // actioun payloadı ile gelen elemanın state'deki halini bul. Oluşturacağımız yeni dizide state 
            // eski versiyonu 
            const updatedTodos = state.todos.map((item) =>
                item.id === action.payload.id ? action.payload : item)

        case ActionTypes.SET_TODOS:

            return { ...state, todos: action.payload }

        default:
            return state;
    }

}

export default todoReducer