import React, { useEffect } from 'react';
import {Stage,Text, Rect, Layer, Group, Label, Tag} from 'react-konva';
import CanvasElements from './CanvasElements';

const holder = [];

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


    const handleKeyDown = (e) => {
        console.log(selectedId);
        let charCode = String.fromCharCode(e.which).toLowerCase();
        if(e.ctrlKey && charCode === 'd') {
            e.preventDefault();
            handleDuplicate();
        }
        if(e.which === 46) {
            e.preventDefault();
            handleDelete();
        }

    }

    const handleDuplicate = () => {
        var counter = 0;
        var newObject = null;

        if(selectedId != null) {
            for(counter; counter < holder.length; counter++) {
                if(holder[counter].id === selectedId) {
                    newObject = JSON.parse(JSON.stringify(holder[counter]));
                    newObject.id = Math.random(0,100);
                }
            }
        rectangles.push(newObject);
        selectShape(null);
        setRectangles(rectangles);
        }
    }

    const handleDelete = () => {
        var counter = 0;
        if(selectedId != null) {
            for(counter; counter < holder.length; counter++) {
                if(holder[counter].id === selectedId) {
                    holder.splice(counter, 1);
                }
            }
            selectShape(null);
            setRectangles(rectangles);
        }
    }

    React.useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedId]);


   
  
    
    return(

        <Stage
        className = "main-stage"
        width = {5000}
        height = {5000}
        x = {1000}
        y = {1000}
        scaleX = {params.zoom}
        scaleY = {params.zoom}
        onMouseDown = {e => {
            const clickedOnEmpty = e.target === e.target.getStage();
            if(clickedOnEmpty) {
                selectShape(null);
            }
        }}>
            <Layer
            id = "on-stage">
                <Rect
                width = {params.dimensionWidth}
                height = {params.dimensionHeight}
                fill = "grey"s
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
                        setID = {params.setID}
                        />
                    )
                })}
            </Layer>

        </Stage>
    )
}

export default Canvas;