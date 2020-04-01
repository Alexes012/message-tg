import p from "./hometask3.module.css";
import React from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";

class HomeTask3 extends React.Component {

    state = {
        value: '',
        count: 6,
        error: false,
        names: [{title: "Lexa"}]
    };

    handleChange = (event) => {
        this.setState({
            error: false,
            value: event.target.value
        });
    };

    handleSubmit = () => {
        let newName = this.state.value;
        if (newName === "") {
            this.setState({error: true})
        } else {
            alert('Приветсвую вас ' + newName);
            this.setState({
                error: false,
                value: '',
                count: this.state.count + 1,
                names: [...this.state.names, {title: newName}]
            })
        }
    };
    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.handleSubmit()
        }
    };

    render = () => {

        let names = this.state.names.map((name) => {
            return <div>{name.title}</div>
        });

        return (
            <div className={p.All}>
                <div className={p.Span}>
                    <span>{this.state.count}</span>
                </div>
                <Input
                    state={this.state}
                    handleChange={this.handleChange}
                    onKeyPress={this.onKeyPress}
                />
                <Button
                    handleSubmit={this.handleSubmit}
                />
                <div>{names}</div>
            </div>
        );
    }
}

export default HomeTask3;