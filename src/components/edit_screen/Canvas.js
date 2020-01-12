import React, { useEffect } from 'react';
import {Stage,Text, Rect, Layer, Group, Label, Tag} from 'react-konva';
import CanvasElements from './CanvasElements';

const holder = [{
    x: 10,
    y: 10,
    width: 250,
    height: 50,
    fill: "black",
    strokeWidth: 1,
    id : 1
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
                test: "container",
                stroke: "black",
                strokeWidth: 1,
                cornerRadius: 1,
                text: "",
                fontSize : "",
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
                test: "label",
                stroke: "black",
                strokeWidth: 0,
                cornerRadius: 1,
                text: "Prompt for Input",
                fontSize : 20, 
                fontColor: "black"
                
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
                test: "button",
                stroke: "black",
                strokeWidth: 1,
                cornerRadius: 1,
                text: "Submit",
                fontSize : 20,
                fontColor: "black"
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
                test: "textfield",
                stroke: "black",
                strokeWidth: 1,
                cornerRadius: 1,
                text: "input", 
                fontSize: 20,
                fontColor: "black"
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
                        />
                    )
                })}
            </Layer>

        </Stage>
    )
}

export default Canvas;