import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ItemCard from './ItemCard';
import { Link } from 'react-router-dom';
import {Card} from 'react-materialize';
import { firestoreConnect } from 'react-redux-firebase';

class ItemsList extends React.Component {
    render() {
        const todoList = this.props.todoList;
        const items = todoList.items;
        console.log("ItemsList: todoList.id " + todoList.id);
        
        sortingTask = (e) => {
            // console.log(this.props.todoList);
            console.log("hello");
        }

        return (
            <div className="todo-lists section">
                <div className="row">
                                    <div className="col s12 m6" id = "abcde">
                                    <div className="card black darken-1">
                                        <div className="card-content white-text">
                                            <span onClick = {(e) => this.sortingTask(e)} className = "task_header">Task</span>
                                            <span className = "date_header">Date</span>
                                            <span className = "status_header">Status</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
         
                {items && items.map(function(item) {
                    item.id = item.key;
                    return (
                        <Link to={{pathname: '/adding', sampleParam: todoList, sampleParam2: "0", sampleParam3: item.id }}> 

                        <div className="row">
                                    <div className="col s12 m6" id = "abcd">
                                    <div className="card grey darken-1">
                                        <div className="card-content white-text">
                                        <ItemCard todoList={todoList} item={item} />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                        </Link>
                    
                    );})
                }
         
        </div>
            
            
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const todoList = ownProps.todoList;
    return {
        todoList,
        auth: state.firebase.auth,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'todoLists' },
    ]),
)(ItemsList);