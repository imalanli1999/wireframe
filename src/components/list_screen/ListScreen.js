import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-materialize';
import ItemsList from './ItemsList.js'
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import ItemScreen from '../item_screen/ItemScreen.js';

class ListScreen extends Component {
    state = {
        name: '',
        owner: '',
    }

    yesDialog = (e) => {
        getFirestore().collection("todoLists").doc(this.props.todoList.id).delete();
        this.props.history.push("/");
    }


    handleChange = (e) => {
        const { target } = e;
        const todoList = this.props.todoList;


        if(target.id === "owner") {
            getFirestore().collection("todoLists").doc(todoList.id).update({
                owner: target.value
            })
            getFirestore().collection("todoLists").doc(todoList.id).update({
                timestamp: new Date()
            })
        }

        if(target.id === "name") {
            getFirestore().collection("todoLists").doc(todoList.id).update({
                name: target.value
            })
            getFirestore().collection("todoLists").doc(todoList.id).update({
                timestamp: new Date()
            })

        }

    
   

        // this.setState(state => ({
        //     name: target.value,
        //     owner: target.value
        //     // ...state,
        //     // [target.id]: target.value,
        // }));
    }

    render() {
        const auth = this.props.auth;
        const todoList = this.props.todoList;
        if (!auth.uid) {
            return <Redirect to="/" />;
        }

        return (
            <div className="container">
                <h5  className="grey-text text-darken-3">Todo List
                <span id = "modaltesting">
                <Modal header="Delete list?" trigger={<Button> &#128465; </Button>}>
                    <p><strong>Are you sure you want to delete this list?</strong></p>
                    <br></br>

                    <button onClick = {(e) => this.yesDialog(e)}>Yes</button>

                    <br></br>
                    <p>
                        This action cannot be undone.
                    </p>
                </Modal>
                </span>
                
                
                
                
                </h5> 
                
               



                <div className="input-field">
                    <label className = "active" htmlFor="email">Name</label>
                    <input className="active" type="text" name="name" id="name" onChange={(e) => this.handleChange(e)} value={todoList.name} />
                </div>
                <div className="input-field">
                    <label className="active" htmlFor="password">Owner</label>
                    <input className="active" type="text" name="owner" id="owner" onChange={(e) => this.handleChange(e)} value={todoList.owner} />
                </div>
                <ItemsList todoList = {todoList}/>
                <div id="addbuttonin" className="card z-depth-0 todo-list-link lighten-3">
                <div  className="card-content grey-text text-darken-3">
                    {/* <div><Link to="/adding">+</Link></div> */}
                    <div id = "addbutton"><Link to={{pathname: "/adding", sampleParam: this.props.todoList, sampleParam2: "1"}}>+</Link></div>
                 
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { todoLists } = state.firestore.data;
  const todoList = todoLists ? todoLists[id] : null;
  todoList.id = id;

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
)(ListScreen);