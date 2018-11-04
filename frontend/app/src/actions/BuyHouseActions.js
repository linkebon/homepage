import * as actionType from './ActionType';

export const recalculateWithNewValuePrice = (newValue) => {
    console.log("recalculateWithNewValuePrice newValue:" + newValue);
    return {
        type: actionType.BUY_HOUSE_RECALCULATE,
        id: "price", // todo exporta to a constant class
        value: newValue
    }
};