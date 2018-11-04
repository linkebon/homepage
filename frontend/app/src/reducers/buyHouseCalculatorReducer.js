import * as actionType from '../actions/ActionType';

const initialState =
    {
        inputValues: {
            availableMoney: 0,
            price: 0
        },
        outputValues: {
            moneyLeft: 0
        }
    };

const buyHouseCalculatorReducer = (state = initialState, action) => {
        let newState;
        switch (action.type) {
            case actionType.BUY_HOUSE_RECALCULATE:
                newState = state;
                if (action.id === "price") {
                    newState.inputValues.price = action.value;
                }
                console.log(JSON.stringify(newState));
                return newState; // todo skriv en funktiion som räknar ut moneyleft
            default:
                console.log("default state: " + JSON.stringify(state));
                return state;
        }
    }
;

export default buyHouseCalculatorReducer