import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ItemCard from './ItemCard';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import {FAB, Button, Icon} from 'react-materialize';



class ItemsList extends React.Component {
    state = {
        taskSorted: "dsc",
        dateSorted: "dsc",
        completedSorted: "dsc"
    }

    goUp = (e) => {
        console.log("testing");
    }

    sortingTask = (e) => {
        const myTask = this.props.todoList;

        if(this.state.taskSorted === "dsc") {
            myTask.items.sort(function (a,b) {
                if(a.description > b.description) {
                    return 1;
                }
                if(a.description < b.description) {
                    return -1;
                }
                if(a.description === b.description) {
                    return 0;
                }
            });
    
           for(var i = 0; i < myTask.items.length; i++ ) {
               myTask.items[i].key = i;
               myTask.items[i].id = i;
           }

           this.setState({
               taskSorted: "asc"
           })
        }

        else {
            myTask.items.sort(function (a,b) {
                if(a.description < b.description) {
                    return 1;
                }
                if(a.description > b.description) {
                    return -1;
                }
                if(a.description === b.description) {
                    return 0;
                }
            });
    
           for(var i = 0; i < myTask.items.length; i++ ) {
               myTask.items[i].key = i;
               myTask.items[i].id = i;
           }

           this.setState({
               taskSorted: "dsc"
           })
        }
       
        
        getFirestore().collection("todoLists").doc(this.props.todoList.id).update({
                items: myTask.items,
            })
    }

    sortingDate = (e) => {
        const myDate = this.props.todoList;

        if(this.state.dateSorted === "dsc") {
            myDate.items.sort(function (a,b) {
                if(a.due_date > b.due_date) {
                    return 1;
                }
                if(a.due_date < b.due_date) {
                    return -1;
                }
                if(a.due_date === b.due_date) {
                    return 0;
                }
            });
    
           for(var i = 0; i < myDate.items.length; i++ ) {
               myDate.items[i].key = i;
               myDate.items[i].id = i;
           }

           this.setState({
               dateSorted: "asc"
           })
        }

        else {
            myDate.items.sort(function (a,b) {
                if(a.due_date < b.due_date) {
                    return 1;
                }
                if(a.due_date > b.due_date) {
                    return -1;
                }
                if(a.due_date === b.due_date) {
                    return 0;
                }
            });
    
           for(var i = 0; i < myDate.items.length; i++ ) {
               myDate.items[i].key = i;
               myDate.items[i].id = i;
           }

           this.setState({
               dateSorted: "dsc"
           })
        }
       
        
        getFirestore().collection("todoLists").doc(this.props.todoList.id).update({
                items: myDate.items,
            })
    }


    sortingCompleted = (e) => {
        const myComplete = this.props.todoList;

        if(this.state.completedSorted === "dsc") {
            myComplete.items.sort(function (a,b) {
                if(a.completed > b.completed) {
                    return 1;
                }
                if(a.completed < b.completed) {
                    return -1;
                }
                if(a.completed === b.completed) {
                    return 0;
                }
            });
    
           for(var i = 0; i < myComplete.items.length; i++ ) {
               myComplete.items[i].key = i;
               myComplete.items[i].id = i;
           }

           this.setState({
               completedSorted: "asc"
           })
        }

        else {
            myComplete.items.sort(function (a,b) {
                if(a.completed < b.completed) {
                    return 1;
                }
                if(a.completed > b.completed) {
                    return -1;
                }
                if(a.completed === b.completed) {
                    return 0;
                }
            });
    
           for(var i = 0; i < myComplete.items.length; i++ ) {
               myComplete.items[i].key = i;
               myComplete.items[i].id = i;
           }

           this.setState({
               completedSorted: "dsc"
           })
        }
       
        
        getFirestore().collection("todoLists").doc(this.props.todoList.id).update({
                items: myComplete.items,
            })
    }





    render() {
        const todoList = this.props.todoList;
        const items = todoList.items;
        console.log("ItemsList: todoList.id " + todoList.id);
        

        return (
            <div className="todo-lists section">
                <div className="row">
                                    <div className="col s12 m6" id = "abcde">
                                    <div className="card black darken-1" >
                                        <div className="card-content white-text" id= "todoheader">
                                            <span onClick = {(e) => this.sortingTask(e)} className = "task_header">Task</span>
                                            <span onClick = {(e) => this.sortingDate(e)} className = "date_header">Date</span>
                                            <span onClick = {(e) => this.sortingCompleted(e)} className = "status_header">Status</span>
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
                                        <div className="card-content black-text" id="eachcard">
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