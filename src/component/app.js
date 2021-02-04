import React from "react";
import InputForm from "./inputForm";

class App extends React.Component {
    onFormSubmit(text) {
        console.log(text);
    }
    
    render() {
        return (
            <div className="ui container">
                <InputForm onSubmit={this.onFormSubmit}/>
            </div>
        )
    }
}

export default App;