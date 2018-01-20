import React from 'react';
import TweetContainer from '../container/TweetsContainer';
import TweetAutoFetchingContainer from '../container/TweetsAutoFetchingContainer';

const TweetApp = () => {
    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="col-8">
                    <TweetContainer/>
                </div>
                <div className="col-4">
                    <TweetAutoFetchingContainer/>
                </div>
            </div>
        </div>
    )
};
export default TweetApp;