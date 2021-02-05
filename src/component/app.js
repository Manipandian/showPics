import React from "react";
import InputForm from "./inputForm";
import ImageList from "./imageList";
import unsplash from "../api/unsplash";

class App extends React.Component {

    state = { images: [] };

    //method use normal .then promise
    // onFormSubmit(text) {
    //     console.log(text);
    //     axios.get("https://api.unsplash.com/search/photos", {
    //         params: {
    //             query: text
    //         },
    //         headers: {
    //             Authorization: "Client-ID Y3wc50y6hSuCbD-jApXPKGoAbJpaO4TX-rQ6WUB8scg"
    //         }

    //     }).then((response) => {
    //         console.log(response.data.results)
    //     })
    // }

    //method use asyn await
    onFormSubmit = async (text) => {
        const response = await unsplash.get("/search/photos", {
            params: {
                query: text
            }
        });
        this.setState({images: response.data.results});
    }

    
    render() {
        return (
            <div className="ui container">
                <InputForm onSubmit={this.onFormSubmit}/>
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;