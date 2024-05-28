import React from "react";
const Box = ({backgroundColor, width, height, removeBox,id})=>{
    const style = {
        backgroundColor: backgroundColor,
        width: width,
        height:height,
    };
return (
    <div style={style}>
        <button
         onClick={() => removeBox(id)}
         style={{
           position: 'absolute',
           top: '5px',
           right: '5px',
           background: 'red',
           color: 'white',
           border: 'none',
           borderRadius: '50%',
           cursor: 'pointer'
         }}
        >
            X
        </button>
    </div>
        
)
}
export default Box;