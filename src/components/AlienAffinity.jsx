import React, { Component } from "react";
import RenderCounter from "./RenderCounter";
import "../styles/AlienAffinity.css";

let toggle;
let i = 1;

const animeImgObject = {
    img1: "http://www.scified.com/topics/571343805484005.jpg",
    img2:
        "https://dumielauxepices.net/sites/default/files/xenomorph-clipart-alien-queen-829179-3720683.jpg",
    img3:
        "https://78.media.tumblr.com/892c9f06dacdd4c3099b8c692213cd4f/tumblr_oozvleGZR71txn1qro1_r2_1280.png",
    img4:
        "https://i.pinimg.com/originals/6d/e1/32/6de13278901d8c4d5f426b8fa2872533.png"
};

const img = Object.values(animeImgObject);

class AlienAffinity extends Component {
    constructor(props) {
        super(props);
        this.count = 0;
        this.state = { renderCount: 0, image: null, images: [], imgSrc: "" };
    }

    componentWillMount() {
        const currentImg = img[0];
        this.setState({
            imgSrc: currentImg
        });
        toggle = setInterval(this.handleImgChange, 1000);
    }

    handleImgChange = () => {
        if (i < img.length) {
            this.setState({
                imgSrc: img[i++]
            });
        } else {
            i = 0;
        }
        return;
    };

    addImgToSite = img => {
        animeImgObject.img5 = img;
    };

    componentWillUnmount() {
        clearInterval(toggle);
    }

    render() {
        const { imgSrc } = this.state;
        return (
            <div>
                <>
                    <RenderCounter renderCount={++this.count} />
                    <img id="img" src={imgSrc} alt="anime stuff" />
                </>
            </div>
        );
    }
}
export default AlienAffinity;
