import React from 'react';
import {FAB, Button, Icon} from 'react-materialize';
import { getFirestore } from 'redux-firestore';


class ItemCard extends React.Component {

    goUp = (e) => {
        // console.log(this.props.item);
        const testing = this.props.todoList;
        if(this.props.item.key === 0) {
            return;
        }
        // console.log(abc);
        else {
            const holder = testing.items[this.props.item.key];
            testing.items[this.props.item.key] = testing.items[this.props.item.key-1];
            testing.items[this.props.item.key - 1] = holder;

        }
        for(var i = 0; i < testing.items.length; i++ ) {
            testing.items[i].key = i;
            testing.items[i].id = i;
        }
        getFirestore().collection("todoLists").doc(this.props.todoList.id).update({
            items: testing.items,
        })

    }

    goDown = (e) => {
        // console.log(this.props.item);
        const testing = this.props.todoList;
        if(this.props.item.key === this.props.todoList.items.length - 1) {
            return;
        }
        // console.log(abc);
        else {
            const holder = testing.items[this.props.item.key];
            testing.items[this.props.item.key] = testing.items[this.props.item.key+1];
            testing.items[this.props.item.key + 1] = holder;

            for(var i = 0; i < testing.items.length; i++ ) {
                testing.items[i].key = i;
                testing.items[i].id = i;
            }

            getFirestore().collection("todoLists").doc(this.props.todoList.id).update({
                items: testing.items,
            })
        }

    }

    goRemove = (e) => {
        const testing = this.props.todoList;

    
        testing.items.splice(this.props.item.key, 1);

        // console.log(testing);
        for(var i = 0; i < testing.items.length; i++ ) {
            testing.items[i].key = i;
            testing.items[i].id = i;
        }

        getFirestore().collection("todoLists").doc(this.props.todoList.id).update({
            items: testing.items,
        })

        
    }


    completedText() {
        return this.props.item.completed ? "Completed" : "Pending";
    }

    completedClass() {
        return this.props.item.completed ? "list_item_card_completed" : "list_item_card_not_completed";
    }
    render() {
        const { item } = this.props;  
        return (
            // <div className="card z-depth-0 todo-list-link pink lighten-3">
            //     <div className="card-content grey-text text-darken-3">
            <div>
                <div className = "item_name">{item.description}</div>
                <div className = "item_due">{item.due_date}</div>
                <div className = "item_assigned">Assigned to: {item.assigned_to}</div>
                <div id = "item_complete" className={this.completedClass()}>{this.completedText()}</div>
                <Button 
                                        floating                                       
                                        fab={{direction: 'left'}}
                                        className="red"
                                        id="buttontest"
                                        small
                                        >


                                       <Button onClick = {e => {this.goUp(e); e.stopPropagation(); e.preventDefault()}} floating icon={<Icon/>} id = "floatingbutton" className="red" />
                                        <Button onClick = {e => {this.goDown(e); e.stopPropagation(); e.preventDefault()}} floating icon={<Icon />} id = "floatingbutton" className="yellow darken-1" />
                                        <Button onClick = {e => {this.goRemove(e); e.stopPropagation(); e.preventDefault()}} floating icon={<Icon/>} id = "floatingbutton" className="blue" ></Button>
                                        </Button>
                    
            </div>
            // </div>
            
        );
    }
}
export default ItemCard;