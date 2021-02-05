import React from "react";
import ImageCard from "./imageCard";
import "./imageList.css";

const ImageList = (props) => {

    const printImage = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/> 
    })


    console.log(props.images)
    return (
        <div className="image-list">
            {printImage}
        </div>
        )
}

export default ImageList;