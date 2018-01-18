import React, {Component} from 'react';
import HomeInformationEntry from '../components/HomeInformationEntry';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let aboutText = "My name is Staffan Holmgren. I am a 31 years old happily married man and I have a soon to be 2 year old son. Besides as a programmer I enjoy sports, e-sports, cooking food any many other things.";
        let githubText = "Sometimes i write some code which i then publishn to my github account which is <a\n" +
            "                                href=\"https://github.com/linkebon\">linkebon</a>";
        let twitterText = "Here is a twitter of linkebon just for fun :)";
        return (
            <div className="container" style={{marginTop: '5%'}}>
                {/*about*/}
                <HomeInformationEntry id="aboutId" bgColor="dark" isRoundedTop={true} isRoundedBottom={false}
                                           textColor="white"
                                           text={aboutText} header="Staffan Holmgren" secondHeader="About"
                                           areaLabel="About linkebon"/>
                {/*github*/}
                <HomeInformationEntry id="githubId" bgColor="white" isRoundedTop={false} isRoundedBottom={false}
                                           textColor="dark"
                                           text={githubText} header="Github" secondHeader="" areaLabel="Github"/>
                {/*twitter*/}
                <HomeInformationEntry id="twitterId" bgColor="dark" isRoundedTop={false} isRoundedBottom={true}
                                           textColor="white"
                                           text={twitterText} header="Twitter" secondHeader="" areaLabel="Twitter"/>
            </div>
        )
    }
}

export default HomeContainer