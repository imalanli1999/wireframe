import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';


class ItemScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: this.props.location.sampleParam3 === undefined ? "" : this.props.location.sampleParam.items[this.props.location.sampleParam3].description
        }
    }

    cancel = (e) => {
        this.props.history.push('/todoList/' + this.props.location.sampleParam.id);

    }

    adding = (e) => {      


        if(this.props.location.sampleParam2 === "1") {
                        const uuidv1 = require('uuid/v1');
        const testing = this.props.location.sampleParam.items;
        const abc = {
            "key": testing.length,
            "description": document.getElementById("item_form_container_description").value,
            "due_date": document.getElementById("item_form_container_date").value,
            "assigned_to": document.getElementById("item_form_container_assigned").value,
            "completed": document.getElementById("item_form_container_completed").checked
        }

        testing.push(abc);
        
        
        getFirestore().collection('todoLists').doc(this.props.location.sampleParam.id).update({
            items : testing
        });
    
        console.log(this.props.location.sampleParam);

        this.props.history.push('/todoList/' + this.props.location.sampleParam.id);
        }

        else {
            const testing = this.props.location.sampleParam.items;

            const abc = {
                "key" : testing[this.props.location.sampleParam3].key,
                "description": document.getElementById("item_form_container_description").value,
                "due_date": document.getElementById("item_form_container_date").value,
                "assigned_to": document.getElementById("item_form_container_assigned").value,
                "completed": document.getElementById("item_form_container_completed").checked
            }
            testing[this.props.location.sampleParam3] = abc;
            // console.log(testing);
            getFirestore().collection('todoLists').doc(this.props.location.sampleParam.id).update({
                items : testing
            });
            this.props.history.push('/todoList/' + this.props.location.sampleParam.id);

            // console.log(this.props.location.sampleParam.items[this.props.location.sampleParam3]);
        }
       




    

    }

    render() {
        return (
            <div id="item_form_container">
            <div className = "leftside item_text">
                Item
            </div>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>

            <div>
                <div className = "leftside">
                    Description
                </div>
                <input className = "rightside"  id = "item_form_container_description"  value = {this.state.description} onChange= {e => this.setState({description : e.target.value})} type = "text">
                </input>
            </div>
            <br>
            </br>


            <div>
                <div className = "leftside"> Assigned to: 
                </div>
                <input className = "rightside" id = "item_form_container_assigned" type = "text">
                </input>
    
            </div>

            <br></br>

            <div>
                <div className = "leftside"> Due Date: 
                </div>
                <input className = "rightside" id = "item_form_container_date"  type = "date">
                </input>
    
            </div>

            <br></br>

            <div>
            <div className = "leftside"> Completed: 
            </div>
            <input className = "rightside testing" id = "item_form_container_completed"  type = "checkbox">
            </input>
           

        </div>
        <br></br>
        <p>
                <button onClick = {(e) => this.adding(e)} id = "item_form_container_submit" className = "form_buttons" >
                Submit
                </button>
                <button onClick = {(e) => this.cancel(e)} id = "item_form_container_cancel" className = "form_buttons">
                Cancel
                </button>
        </p>
        <br></br>


        </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'todoLists' },
    ]),
  )(ItemScreen);