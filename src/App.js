import React from 'react';
import './App.css'
import p from "./App.css"
import Message from "./message/Message.jsx";
import Quality from "./quality/quality";
import Lexablabla from "./3hometask/3hometask";

newTaskTitleRef = React.createRef();

onAddTasksClick = () => {
    let newText = this.newTaskTitleRef.current.value;
    this.newTaskTitleRef.current.value = ""; //очистили инпут (присвоили пустую строку)
    let newTask = {
        title: newText,
        isDone: false,
        priority: "low"
    };

    let newTasks = [...this.state.tasks, newTask]
    this.setState({
        tasks: newTasks
    });
}

function App() {
    return (
        <div>
            <Message/>
            <Quality/>
            <Lexablabla newTaskTitleRef={this.newTaskTitleRef} onAddTasksClick={this.onAddTasksClick}/>
        </div>
    )
}

export default App;
