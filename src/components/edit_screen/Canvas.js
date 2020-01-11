import React from 'react';
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

const Canvas = () => {

    const [rectangles, setRectangles] = React.useState(holder);
    const [selectedId, selectShape] = React.useState(null);
    
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