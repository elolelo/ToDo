import React, {Component } from "react";

class TodoItems extends Component {
    cerateTasks(items){
        return <li key={items.key}>{items.text}</li>
    }

    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.cerateTasks);
        
        return (
        <ul classNames ="theList">
        {listItems}
        </ul>
        );
    }
}

export default TodoItems;
