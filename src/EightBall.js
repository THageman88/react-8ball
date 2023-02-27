import React, {useState} from "react";

function randomAnswr(arr) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
  }

function EightBall(props){
    const [msg , setMsg] = useState("Think of any question you may have");
    const [color, setColor] = useState("black");
}


