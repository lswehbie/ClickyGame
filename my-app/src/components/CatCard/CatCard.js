import React from "react";
import "./CatCard.css";

const CatCard = props => (
    <div className="card">
        <div className="img">
            <a onClick={() => props.selectKitten(props.breed)} 
                className={props.curScore === 0 ? "cats_galore" : "kitty_kitty"}
            >
                <img alt={props.breed} src={props.image} />
            </a>
        </div>
    </div>
);

export default CatCard;