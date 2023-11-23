import React from "react";
import "./CardItem-1.css";
import Img from "./Rectangle_9.png"

const Card_1= () => {
    return (
        <div className="box">
            <div className="group">
                <div className="overlap-group">
                    <img className="rectangle" alt="Rectangle" src={Img} />
                    <div className="div" />
                    <p className="shingeki-no-kyojin"> Shingeki no kyojin the final season 4</p>
                </div>
            </div>
        </div>
    );
};
export default Card_1;