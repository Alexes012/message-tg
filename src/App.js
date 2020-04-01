import React from 'react';
import './App.css'
import p from "./App.css"
import Message from "./message/Message.jsx";
import Quality from "./quality/quality";
import HomeTask3 from "./hometask3/hometask3";

class App extends React.Component {

    render = () => {
        return (
            <div>
                <Message/>
                <Quality/>
                <HomeTask3/>
            </div>
        )
    }
}

export default App;
