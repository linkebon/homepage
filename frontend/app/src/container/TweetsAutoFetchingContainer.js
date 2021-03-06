import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Tweet from '../components/Tweet';
import * as TweetActions from '../actions/TweetActions';
import SearchTweetInput from "../components/SearchTweetInput";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class TweetsAutoFetchingContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {dispatch, tweets} = this.props;
        let actions = bindActionCreators(TweetActions, dispatch);
        const tweetsToRender = tweets.tweetsAutoUpdating.map((tweet) => {
            const id = tweet.id;
            return (
                <div key={id}>
                    <Tweet tweet={tweet} id={id}/>
                </div>
            )
        });
        return (
            <div>
                <SearchTweetInput getTweets={actions.getTweetsAutoUpdating} renderCountInput={false} autoUpdate={{auto: true, interval: 20000}}
                                  initialText={'Autoupdating..'}/>
                <br/>
                <ReactCSSTransitionGroup
                    transitionName="twitter"
                    transitionEnterTimeout={2000}
                    transitionLeaveTimeout={300}>
                    {tweetsToRender}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tweets: state.tweetsReducer
    }
};

export default connect(mapStateToProps)(TweetsAutoFetchingContainer)