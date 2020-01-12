import React from 'react';
import {Stage,Text, Rect, Layer, Group, Label, Tag} from 'react-konva'
import CanvasElements from './CanvasElements';

const containerTemplate = {
    x: 35,
    y: 80,
    width: 250,
    height: 200,
    fill: "#a3a3a3",
    id: "container",

} 

const labelTemplate = {
    x: 35,
    y: 380,
    width: 250,
    height: 50,
    fill : "transparent",
    id: "label",
}

const buttonTemplate = {
    x: 60,
    y: 520,
    width: 200,
    height: 50,
    fill: "#a3a3a3",
    id: "button",
}

const textfieldTemplate = {
    x: 35,
    y: 660,
    width: 250,
    height: 30,
    fill: "#a3a3a3",
    id: "textfield",
}


const Input = (params) => {
    const [selectedId, selectShape] = React.useState(null);

    return(
        
        <Stage
        width = {300}
        height = {800}>
            <Layer>
                
                <Group
                onClick = {() => params.setTemplate(containerTemplate.id)}>
                    <CanvasElements
                    shapeProps = {containerTemplate}
                    isSelected = {containerTemplate.id === selectedId}
                    onSelect = {() => {selectShape(containerTemplate.id)}}
                    onInputBar = {true}
                    />

                    <Label>
                        <Text
                        text = "Container"
                        x = {(containerTemplate.x + containerTemplate.width)/2 - 13}
                        y = {(containerTemplate.y + containerTemplate.height + 10)}
                        fontSize = {14}
                        >
                        </Text>
                    </Label>
                </Group>

                <Group
                onClick = {() => params.setTemplate(labelTemplate.id)}>
                    <CanvasElements
                    shapeProps = {labelTemplate}
                    isSelected = {labelTemplate.id === selectedId}
                    onSelect = {() => {selectShape(labelTemplate.id)}}
                    onInputBar = {true}
                    />

                    <Text
                    text = {"Prompt for Input"}
                    offsetX = {-35}
                    offsetY = {-385}
                    verticalAlign = "middle"
                    align = "center"
                    height = {labelTemplate.height - 8}
                    width = {labelTemplate.width - 8}
                    fontSize={16}
                    listening = {false}
                    />

                    <Label>
                        <Text
                        text = "Label"
                        x = {(containerTemplate.x + containerTemplate.width)/2 - 13}
                        y = {(labelTemplate.y + labelTemplate.height + 10)}
                        fontSize = {14}
                        >
                        </Text>
                    </Label>
                </Group>

                <Group
                onClick = {() => params.setTemplate(buttonTemplate.id)}>
                    <CanvasElements
                    shapeProps = {buttonTemplate}
                    isSelected = {buttonTemplate.id === buttonTemplate}
                    onSelect = {() => {selectShape(buttonTemplate.id)}}
                    onInputBar = {true}
                    />

                    <Text
                    text = {"Submit"}
                    offsetX = {-35}
                    offsetY = {-525}
                    verticalAlign = "middle"
                    align = "center"
                    height = {labelTemplate.height - 8}
                    width = {labelTemplate.width - 8}
                    fontSize={16}
                    listening = {false}
                    />

                    <Label>
                        <Text
                        text = "Label"
                        x = {(containerTemplate.x + containerTemplate.width)/2}
                        y = {(buttonTemplate.y + buttonTemplate.height + 10)}
                        fontSize = {14}
                        >
                        </Text>
                    </Label>
                </Group>
                
                <Group
                onClick = {() => params.setTemplate(textfieldTemplate.id)}>
                    <CanvasElements
                    shapeProps = {textfieldTemplate}
                    isSelected = {textfieldTemplate.id === textfieldTemplate}
                    onSelect = {() => {selectShape(textfieldTemplate.id)}}
                    onInputBar = {true}
                    />

                    <Text
                    text = {"input"}
                    offsetX = {-40}
                    offsetY = {-655}
                    verticalAlign = "middle"
                    align = "center"
                    height = {labelTemplate.height - 8}
                    width = {labelTemplate.width - 8}
                    fontSize={16}
                    listening = {false}
                    opacity = {0.4}
                    />

                    <Label>
                        <Text
                        text = "Textfield"
                        x = {(containerTemplate.x + containerTemplate.width)/2 - 10}
                        y = {(textfieldTemplate.y + textfieldTemplate.height + 10)}
                        fontSize = {14}
                        >
                        </Text>
                    </Label>
                </Group>

               



                


            </Layer>
        </Stage>

    ) 

}





export default Input;