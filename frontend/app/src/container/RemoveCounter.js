import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeCounter} from '../actions/CounterActions';
import {bindActionCreators} from 'redux';

class RemoveCounter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <div className="form-inline">
                    <button className="btn btn-danger"
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.dispatch(removeCounter());
                            }}>
                        Remove
                    </button>
                </div>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(removeCounter, dispatch)
    }
}

export default connect(mapDispatchToProps)(RemoveCounter)