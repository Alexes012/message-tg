import './Input.css'
import '../../App.css'
import React from "react";

class Input extends React.Component {

    render (props) {

        return (
            <input
                type="text"
                placeholder={"Write Name"}
                className={this.props.state.error ? "error" : ""}
                value={this.props.state.value}
                onChange={this.props.handleChange}
                onKeyPress={this.props.onKeyPress}
            />
        )
    }
}
export default Input;







