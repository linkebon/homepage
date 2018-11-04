import React, {Component} from 'react';

class CalculationInputParameter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {componentId, recalculate, inputValue} = this.props;
        return (
                <input id={componentId} className="form-control" type="text" defaultValue={inputValue} onChange={(e) => {
                    e.preventDefault();
                    recalculate(e.target.value)
                }}/>
        )
    }
}

export default CalculationInputParameter

