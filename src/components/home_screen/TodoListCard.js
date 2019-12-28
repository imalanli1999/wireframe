import React from 'react';
import { getFirestore } from 'redux-firestore';

class TodoListCard extends React.Component {


    deleteList = () => {
        getFirestore().collection('todoLists').doc(this.props.todoList.id).delete();
    }
    

    render() {
        const { todoList } = this.props;
        console.log("TodoListCard, todoList.id: " + todoList.id);
        return (
            <div id = "backgroundcard" className="card z-depth-0 todo-list-link">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{todoList.name}</span>
                    <span onClick = {(e) => {e.stopPropagation(); e.preventDefault(); this.deleteList()}}> X </span>
                    
                </div>
            </div>
        );
    }
}
export default TodoListCard;