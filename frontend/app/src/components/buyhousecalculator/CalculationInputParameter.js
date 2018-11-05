import React, {Component} from 'react';

class CalculationInputParameter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {componentId, recalculate, inputValue, label} = this.props;
        return (
            <div>
                {label}
                <input id={componentId} className="form-control" type="text" defaultValue={inputValue}
                       onChange={(e) => {
                           e.preventDefault();
                           recalculate(e.target.value)
                       }}/>
            </div>
        )
    }
}

export default CalculationInputParameter

