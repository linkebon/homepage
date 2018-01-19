import React, {Component} from 'react';
import HomeInformationEntry from '../components/HomeInformationEntry';

const Home = (props) => {
    const aboutText = "My name is Staffan Holmgren. I am a 31 years old happily married man and I have a soon to be 2 year old son. Besides as a programmer I enjoy sports, e-sports, cooking food any many other things.";
    const githubText = "Sometimes i write some code which i then publishn to my github account which is <a href=\"https://github.com/linkebon\">linkebon</a>";
    const programmingText = "Here is the programming skillz of linkebon just for fun :)";
    return (
        <div className="container" style={{paddingTop: '5%'}}>
            {/*about*/}
            <HomeInformationEntry id="aboutId" bgColor="dark" isRoundedTop={true} isRoundedBottom={false}
                                  textColor="white"
                                  text={aboutText} header="About" secondHeader="Staffan Holmgren"
                                  areaLabel="About linkebon" isInitiallyCollapsed={true}/>
            {/*github*/}
            <HomeInformationEntry id="githubId" bgColor="white" isRoundedTop={false} isRoundedBottom={false}
                                  textColor="dark"
                                  text={githubText} header="Github" secondHeader="" areaLabel="Github"/>
            {/*twitter*/}
            <HomeInformationEntry id="twitterId" bgColor="dark" isRoundedTop={false} isRoundedBottom={true}
                                  textColor="white"
                                  text={programmingText} header="Programming" secondHeader="Skillz"
                                  areaLabel="Programming"/>
        </div>
    )
};

export default Home