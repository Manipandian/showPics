import React from "react";

class InputForm extends React.Component {
    state = {
        text: ""
    }
    onInputChange(event) {
        //To make it as controlled component
        this.setState({text: event.target.value});
    }

    onInputSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.text);
    }

    render () {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onInputSubmit}>
                    <div className="field">
                        <label htmlFor="search">Enter Text</label>
                        <input id="search" type="text" 
                        value={this.state.text} 
                        // onChange={(e) => this.setState({text: e.target.value})}
                        onChange={this.onInputChange.bind(this)}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default InputForm;