import React, { useEffect } from 'react';
import {Stage,Text, Rect, Layer, Group, Label, Tag} from 'react-konva';
import CanvasElements from './CanvasElements';

const holder = [{

}]; 

const Canvas = (params) => {

    const [rectangles, setRectangles] = React.useState(holder);
    const [selectedId, selectShape] = React.useState(null);

    useEffect(() => {
        if(params.template === "container") {
            const rectangle = {
                x: 10,
                y: 10,
                width: 250,
                height: 200,
                fill: "#a3a3a3",
                id: Math.random(0,100),
                type: "container",
                stroke: "black",
                strokeWidth: 1,
                cornerRadius: 1,
                content: "",
                textSize: "",
                textColor: "black"
            }

            holder.push(rectangle);
            params.setTemplate(null);
        }

        if(params.template === "label") {
            const rectangle = {
                x: 10,
                y: 10,
                width: 250,
                height: 50,
                fill: "transparent",
                id: Math.random(0,100),
                type: "label",
                stroke: "black",
                strokeWidth: 0,
                cornerRadius: 1,
                content: "Prompt for Input",
                textSize: 20, 
                textColor: "black"
                
            }
            holder.push(rectangle);
            params.setTemplate(null);
        }

        if(params.template === "button") {
            const rectangle = {
                x: 10,
                y: 10,
                width: 200,
                height: 50,
                fill: "#a3a3a3",
                id: Math.random(0,100),
                type: "button",
                stroke: "black",
                strokeWidth: 1,
                cornerRadius: 1,
                content: "Submit",
                textSize: 20,
                textColor: "black"
            }

            holder.push(rectangle);
            params.setTemplate(null);
        }

        if(params.template === "textfield") {
            const rectangle = {
                x: 10,
                y: 10,
                width: 200,
                height: 30,
                fill: "#a3a3a3",
                id: Math.random(0,100),
                type: "textfield",
                stroke: "black",
                strokeWidth: 1,
                cornerRadius: 1,
                content: "input", 
                textSize: 20,
                textColor: "black"
            }
            holder.push(rectangle);
            params.setTemplate(null);
        }




    }, params.template)
    
    return(

        <Stage
        className = "main-stage"
        width = {5000}
        height = {5000}
        onMouseDown = {e => {
            const clickedOnEmpty = e.target === e.target.getStage();
            if(clickedOnEmpty) {
                selectShape(null);
            }
        }}>
            <Layer
            id = "on-stage">
                <Rect
                width = {2500}
                height = {2500}
                fill = "grey"
                onMouseDown = { e => {
                    selectShape(null);
                }}>
                </Rect>

                {rectangles.map((rect, i) => {
                    return (
                        <CanvasElements
                        key = {i}
                        shapeProps = {rect}
                        isSelected = {rect.id === selectedId}
                        onSelect = {() =>  {selectShape(rect.id)}}
                        type = {rect.type}
                        borderColor = {params.borderColor}
                        fontColor = {params.fontColor}
                        backgroundColor = {params.backgroundColor}
                        setBackgroundColor = {params.setBackgroundColor}
                        setBorderColor = {params.setBorderColor}
                        setFontColor = {params.setFontColor}
                        />
                    )
                })}
            </Layer>

        </Stage>
    )
}

export default Canvas;