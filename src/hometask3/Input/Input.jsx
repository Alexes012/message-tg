import p from "./hometask3.module.css";
import React from "react";

class HomeTask3 extends React.Component {
    newRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            count: 6
        };
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        });
        this.newRef.current.value = "";
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Привествую вас ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className={p.All}>
                <form onSubmit={this.handleSubmit}>
                    <div className={p.Span}>
                        <span>{this.state.count}</span>
                    </div>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        ref={this.newRef}
                    />
                    <button type="submit" onClick={this.handleClick}>CLICK</button>
                </form>
            </div>

        );
    }
}

export default HomeTask3;