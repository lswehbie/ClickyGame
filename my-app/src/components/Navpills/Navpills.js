import React from "react";
import "./Navpills.css";

const Navpills = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li><a href="/">React Clicky Game</a></li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "wrong" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "right" :
                        "okay"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "green"}}>{props.curScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navpills;