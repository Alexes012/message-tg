import p from "./Message.module.css";
import "./Message.module.css"
import React from "react";


const Message = () => {
    return <div className={p.wrapper}>
        <div className={p.cloud}>
            <div className={p.name}>
                Alex Shkut
            </div>
            <div className={p.before}>
            </div>
            <div className={p.after}>

            </div>
            <div className={p.message}>
                Hello! I am the best react developer. I don’t know what else to write.
            </div>
            <div className={p.time}>
                7:20 PM
            </div>
        </div>
    </div>
};

export default Message;