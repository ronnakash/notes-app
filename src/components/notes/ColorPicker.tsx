import {Component} from 'react';

interface IColorPickerProps {
    handleChange : (event : any) => void;
    color: string;
}

class ColorPicker extends Component<IColorPickerProps> {

    render() {
        let { handleChange, color } = this.props;
        return (
            <div style={{background: '#fffff'}}>
                <input type="color" 
                    value={color} 
                    onChange={handleChange} 
                    className='color-picker'
                />
            </div>

        );
    }
}

export default ColorPicker;