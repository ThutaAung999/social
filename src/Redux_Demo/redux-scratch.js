//step 1 : create a store
let store = [
   {
      id: 1,
      name: 'John',
   },
   {
      id: 2,
      name: 'Jane',
   },
];

//step 2  : create a action
function actionAddTodo(todo) {
   return {
      type: 'ADD_TODO',
      payload: todo,
   };
}
function actionRemoveTodo(todo) {
   return {
      type: 'REMOVE_TODO',
      payload: todo,
   };
}

//step 3 : create a reducer
function reducer(state, action) {
   switch (action.type) {
      case 'ADD_TODO':
         return [...state, action.payload];
      case 'REMOVE_TODO':
         return state.filter((todo) => todo.id !== action.payload.id);
      default:
         return state;
   }
}

//step 4 : create dispatch function
function dispatch(action) {
   store = reducer(store, action);
}

dispatch(
   actionAddTodo({
      id: 3,
      name: 'Tom',
   }),
);

console.log('Add todo to the store', store);

dispatch(
   actionRemoveTodo({
      id: 1,
      name: 'John',
   }),
);

console.log('Remove todo from the store', store);
