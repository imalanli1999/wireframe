import React from 'react';
import {CompactPicker} from "react-color";

const Properties = (params) => {
    return(
        <div className = "container">
            
            <h5> Properties </h5>
            <input id = "right-textfield" type="text"/>

            <div className = "fontSize">
                <label className = "labelText"> Font Size: </label>
                <input id = "font-size-textfield" type="text"/>
            </div>

            <div className = "fontColor">
                <CompactPicker
                color = {params.fontColor}
                onChange = {(e) => params.setFontColor(e.hex)}
                />
                <label className = "labelText"> Font Color: </label>
            </div>

            <div className = "backgroundColor">
                <CompactPicker
                color = {params.backgroundColor}
                onChange = {(e) => params.setBackgroundColor(e.hex)}
                />
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
                <CompactPicker
                color = {params.borderColor}
                onChange = {(e) => params.setBorderColor(e.hex)}
                />
                <label className = "labelText"> Border Color: </label>
            </div>

        </div>
    )
}


export default Properties;