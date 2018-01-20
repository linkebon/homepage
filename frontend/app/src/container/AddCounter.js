import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addCounter} from '../actions/CounterActions';
import {bindActionCreators} from 'redux';

class AddCounter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <div className="form-inline">
                    <button className="btn btn-info"
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.dispatch(addCounter());
                            }}>
                        Add
                    </button>
                </div>
            </form>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(addCounter, dispatch)}
}

export default connect(mapDispatchToProps)(AddCounter)