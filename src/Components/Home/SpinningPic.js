import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from "react-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = ["https://images.unsplash.com/photo-1437326401470-c3bf383e201e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                "https://images.unsplash.com/photo-1506422748879-887454f9cdff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                "https://images.unsplash.com/uploads/1413142012358a3b38d01/316f8e75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                "https://images.unsplash.com/photo-1419675871098-db2745078906?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIxMTIzfQ&auto=format&fit=crop&w=968&q=80"]

function SpinningPic() {
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
      const timer = setInterval(() => {
        if (index === 4) {
          setIndex(0);
        } else {
          setIndex(prev => prev + 1);
        }
      }, 5000);
      return () => clearInterval(timer);
    }, [index]);
    return (
      <Gallery
        style={{
          background: "transparent",
          marginTop: "10px",
          height: "70vh",
          width: "100vw",
          boxShadow: "0px 0px 20px grey"
        }}
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {images.map(image => (
          <GalleryImage objectFit="contain" key={image} src={image} />
        ))}
      </Gallery>
    );
   }

export default SpinningPic;
