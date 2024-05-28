import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const [nextId, setId] =useState(1)

  const addBox = (newBox) => {
    const boxWithId = { ...newBox, id: nextId };
    setBoxes([...boxes, boxWithId]);
    setId(nextId + 1)
  };
  const removeBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };
 

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map((box) => (
        <Box
          key={box.id}
          backgroundColor={box.backgroundColor}
          width={box.width + 'px'}
          height={box.height + 'px'}
         removeBox={() => removeBox(box.id)}

        />
      ))}
    </div>
  );
 
};

export default BoxList;
