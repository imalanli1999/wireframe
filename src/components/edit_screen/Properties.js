import React from 'react';

import {SketchPicker, CompactPicker} from "react-color";



const Properties = () => {
    return(
        <div className = "container">
            <h5> Properties </h5>
            <input id = "right-textfield" type="text"/>

            <div className = "fontSize">
                <label className = "labelText"> Font Size: </label>
                <input id = "font-size-textfield" type="text"/>
            </div>

            <div className = "fontColor">
                <CompactPicker/>
                <label className = "labelText"> Font Color: </label>
            </div>

            <div className = "backgroundColor">
                <CompactPicker/>
                <label className = "labelText"> Background: </label>
            </div>

            <div className = "borderThickness">
                <label className = "labelText"> Border Thickness: </label>
                <input id = "border-thickness-textfield" type="text"/>
            </div>

            <div className = "borderRadius">
                <label className = "labelText"> Border Radius: </label>
                <input id = "border-radius-textfield" type="text"/>
            </div>

            <div className = "borderColor">
                <CompactPicker/>
                <label className = "labelText"> Border Color: </label>
            </div>


        </div>
    )
}


export default Properties;