import React, {Component} from 'react';
import {connect} from 'react-redux';

class CalculatedBuyingHouseValuesContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {buyHouseState} = this.props;
        return (
            <div>
                Pengar kvar: {buyHouseState.outputValues.moneyLeft}
            </div>

        );
    }


}

const mapStateToProps = (state) => {
    return {
        buyHouseState: state.buyHouseCalculatorReducer
    }
};


export default connect(mapStateToProps)(CalculatedBuyingHouseValuesContainer)