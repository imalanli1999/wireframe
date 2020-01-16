import React from 'react';
import Konva from 'konva';
import InputOptions from './InputOptions';
import Canvas from './Canvas';
import Properties from './Properties';
import {Stage, Rect, Layer} from 'react-konva'
import {Layout, Icon, Button, Input} from 'antd/lib';


const holder = [{}];

const EditScreen = () => {

    const [template, setTemplate] =  React.useState(null);
    const [backgroundColor, setBackgroundColor] = React.useState("black");
    const [borderColor, setBorderColor] = React.useState("black");
    const [fontColor, setFontColor] = React.useState("black");
    
    const [zoom, setZoom] = React.useState(1);

    const [dimensionWidth, setDimensionWidth] = React.useState(2000);
    const [dimensionHeight, setDimensionHeight] = React.useState(2000);
    const [dimensionWidthHolder, setDimensionWidthHolder] = React.useState(2000);
    const [dimensionHeightHolder, setDimensionHeightHolder] = React.useState(2000);
    const [clickable, setClickable] = React.useState("disabled");

    const isFirstRun = React.useRef(true);

    const [clickingOn, setID] = React.useState(null);



    const zoomingIn = () => {
        setZoom(zoom * 2);
    }

    const zoomingOut = () => {
        setZoom(zoom / 2);
    }

    const changingWidth = (e) => {
        setDimensionWidthHolder(e.target.value);
    }

    const changingHeight = (e) => {
        setDimensionHeightHolder(e.target.value);
    }

    const changingDimensions = () => {
        if(dimensionHeightHolder >= 1 && dimensionHeightHolder <= 5000
            && dimensionWidthHolder >= 1 && dimensionWidthHolder <= 5000) {
                setDimensionHeight(Number(dimensionHeightHolder));
                setDimensionWidth(Number(dimensionWidthHolder));
            }
        else {
            setDimensionWidth(dimensionWidth);
            setDimensionHeight(dimensionHeight);
        }
        setClickable("disabled");
    }

 



    React.useEffect(() => {
        if(isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        setClickable("");
    }, [dimensionWidthHolder, dimensionHeightHolder])


    React.useEffect(() => {


    }, [zoom, dimensionWidth, dimensionHeight, clickable])




 



    return(
        <Layout width = "100%">
            
            <div>   
                <Button  
                size="large" 
                className = "zoom-buttons" 
                onClick = {() => {zoomingIn()}}>
                    <Icon 
                    type="zoom-in" 
                    />
                
                </Button>

                <Button  
                size="large" 
                className = "zoom-buttons" 
                onClick = {() => {zoomingOut()}}>
                    <Icon 
                    type="zoom-out" 
                    />
                </Button>

                <Button  
                size="large" 
                className = "zoom-buttons">
                    Save
                </Button>

                <Button  
                size="large" 
                className = "zoom-buttons">
                    Close
                </Button>
            </div>

            <div>
                <div className = "width-option">
                    <span className = "weight-text">
                        Width:
                    </span>
                    
                    <input 
                    onChange = {(e) => changingWidth(e)}
                    type = "text" 
                    id = "width-textfield"
                    value = {dimensionWidthHolder}>
                    </input>
                </div>

                <div className = "height-option">
                    <span 
                    className = "height-text">
                        Height:
                    </span>

                    <input 
                    onChange = {(e) => changingHeight(e)}
                    type = "text" 
                    id = "height-textfield"
                    value = {dimensionHeightHolder}>
                    </input>
                </div>

                <Button 
                size = "large" 
                className = "dimension-button"
                onClick = {() => changingDimensions()}
                disabled = {clickable}
                > 
                    Update
                </Button>
            </div>
          
            
          
            <Layout>

                <Layout.Sider 
                width = {300}
                height = "800"
                className = "sidebars"> 
                    <InputOptions
                    setTemplate = {setTemplate}/> 
                </Layout.Sider>


                <Layout.Content
                width = {800} 
                height = {800}
                className = "middle-screen"> 
                    <Canvas
                    setTemplate = {setTemplate}
                    template = {template}
                    borderColor = {borderColor}
                    fontColor = {fontColor}
                    backgroundColor = {backgroundColor}
                    setBackgroundColor = {setBackgroundColor}
                    setBorderColor = {setBorderColor}
                    setFontColor = {setFontColor} 
                    zoom = {zoom}
                    dimensionWidth = {dimensionWidth}
                    dimensionHeight = {dimensionHeight}
                    setID = {setID}
                    clickingOn = {clickingOn}
                    />
                </Layout.Content>


                <Layout.Sider 
                width = {300} 
                height = {800}
                className = "sidebars"> 
                    <Properties
                     borderColor = {borderColor}
                     fontColor = {fontColor}
                     backgroundColor = {backgroundColor}
                     setBackgroundColor = {setBackgroundColor}
                     setBorderColor = {setBorderColor}
                     setFontColor = {setFontColor} 
                     />
                </Layout.Sider>
                
            </Layout>
      </Layout>
    )

}


export default EditScreen;