import React from 'react';
import {Table} from 'react-materialize';
class ItemCard extends React.Component {
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
                <div className = "item_assigned">{item.assigned_to}</div>
                <div id = "item_complete" className={this.completedClass()}>{this.completedText()}</div>
            </div>
            // </div>
            
        );
    }
}
export default ItemCard;