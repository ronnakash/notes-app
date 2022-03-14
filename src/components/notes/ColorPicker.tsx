import React, {Component} from 'react';
import { SketchPicker } from 'react-color';

interface IColorPickerProps {
    handleChange : (event : any) => void;
    color: string;
}

class ColorPicker extends Component<IColorPickerProps> {

    render() {
        let { handleChange, color } = this.props;
        return (
            <SketchPicker
                color={color}
                onChange = {handleChange}
            />
        );
    }
}

export default ColorPicker;