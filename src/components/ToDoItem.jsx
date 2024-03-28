import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function Index() {
    const toDoItem = {text : "Wash clothes", completed : false, important : true }
    return (
        <ToDoItem {...toDoItem}/>
    )
}

function ToDoItem({text, completed, important}){
    const [textState, setTextState] = useState(text);
    const [completedState, setCompletedState] = useState(completed);
    
    useEffect(() => {
        setTextState (`${text} ${new Date().toLocaleTimeString()}`);
    },[])

    return (
        <div
            onClick={() => {
                setCompletedState(!completedState);
            }}>
            {important ? "*" : "" } {textState}

            {completedState ? " completed" : ""}
        </div>
    );
}

ToDoItem.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    important: PropTypes.string.isRequired
};