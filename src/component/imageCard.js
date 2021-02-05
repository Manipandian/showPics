import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { span: 0}
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // console.log(this.imageRef.current.clientHeight);
        //To get image height after image get loaded
        this.imageRef.current.addEventListener('load', this.getSpan);
    }
    getSpan = () => {
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height / 10);
        this.setState({span});
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.span}`}}>
                <img ref={this.imageRef} src={urls.regular} alt={description}/>
            </div>
        )
    }
}

export default ImageCard;