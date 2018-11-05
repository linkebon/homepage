import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as buyHouseActions from '../../actions/BuyHouseActions';
import CalculationInputParameter from '../../components/buyhousecalculator/CalculationInputParameter';

class InputParamsContainer extends Component {
    constructor(props) {
        super(props);
        let {dispatch} = this.props;
        this.actions = bindActionCreators(buyHouseActions, dispatch);
    }

    render() {
        let {buyHouseState} = this.props;
        return (
            <div>
                <h2>InputParamsContainer</h2>
                <CalculationInputParameter componentId="price"
                                           recalculate={this.actions.recalculateWithNewValuePrice}
                                           inputValue={buyHouseState.inputValues.price}
                                           label="Huspris"
                />

                <CalculationInputParameter componentId="availableMoney"
                                           recalculate={this.actions.recalculateWithNewValuePrice}
                                           inputValue={buyHouseState.inputValues.availableMoney}
                                           label="Tillgängliga pengar"
                />

                <CalculationInputParameter componentId="interest"
                                           recalculate={this.actions.recalculateWithNewValuePrice}
                                           inputValue={buyHouseState.inputValues.availableMoney}
                                           label="Ränta"
                />




            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        buyHouseState: state.buyHouseCalculatorReducer
    }
};

export default connect(mapStateToProps)(InputParamsContainer)