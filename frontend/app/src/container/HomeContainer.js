import React, {Component} from 'react';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container" style={{marginTop: '5%'}}>
                {/*about*/}
                <div className="pos-f-t">
                    <div className="collapse" id="aboutId">
                        <div className="bg-dark p-4 rounded-top">
                            <h4 className="text-capitalize text-white">About</h4>
                            <span className="text-muted">My name is Staffan Holmgren. I am a 31 years old happily married man and I have a soon to be 2 year old son.
                        <br/>
                            Besides as a programmer I enjoy sports, e-sports, cooking food any many other things.
                        </span>
                        </div>
                    </div>
                    <nav className="navbar bg-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#aboutId" aria-controls="aboutId"
                                aria-expanded="false" aria-label="Toggle about">
                            <h4 className="text-white">Staffan Holmgren</h4>
                        </button>

                    </nav>
                </div>
                {/*github*/}
                <div className="pos-f-t">
                    <div className="collapse" id="githubId">
                        <div className="bg-white p-4">
                            <span className="text-muted">Sometimes i write some code which i then publishn to my github account which is <a
                                href="https://github.com/linkebon">linkebon</a></span>
                        </div>
                    </div>
                    <nav className="navbar bg-white">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#githubId" aria-controls="githubId"
                                aria-expanded="false" aria-label="Toggle github">
                            <h4 className="text-dark">Github</h4>
                        </button>
                    </nav>
                </div>
                {/*twitter*/}
                <div className="pos-f-t">
                    <div className="collapse" id="twitterId">
                        <div className="bg-dark p-4">
                            <span className="text-muted">Here is a twitter of linkebon just for fun :)</span>
                        </div>
                    </div>
                    <nav className="navbar bg-dark rounded-bottom">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#twitterId" aria-controls="twitterId"
                                aria-expanded="false" aria-label="Toggle twitter">
                            <h4 className="text-white">Twitter</h4>
                        </button>
                    </nav>
                </div>
            </div>
        )
    }
}

export default HomeContainer