import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from "react-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = ["https://res.cloudinary.com/dwsbzomzq/image/upload/v1566819583/shhjdipwxntzrpohznd0.jpg",
                "https://res.cloudinary.com/dwsbzomzq/image/upload/v1566750807/sn8jlqz9b4lit7qbb6pu.jpg",
                "https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                "https://images.unsplash.com/photo-1565297032488-90722f09db62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
                "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"]

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
