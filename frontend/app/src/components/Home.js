import React from 'react';
import CollapsableContentEntry from './CollapsableContentEntry';

const Home = (props) => {
    const aboutText = <p>My name is Staffan Holmgren. I am a 30 years old happily married man and I have a soon to be 2 year old son. Besides as a programmer I enjoy sports, e-sports, cooking food any many other things.</p>
    const githubText = <p>Sometimes i write some code which i probably push to my github account which is <a href="https://github.com/linkebon">linkebon</a></p>;
    const programmingText = <p>Here is the programming skillz of linkebon just for fun :)</p>;
    return (
        <div className="container">
            <CollapsableContentEntry id="aboutId" bgColor="dark" isRoundedTop={false} isRoundedBottom={false}
                                  textColor="white"
                                  text={aboutText} header="About" secondHeader="Staffan Holmgren"
                                  areaLabel="About linkebon" isInitiallyCollapsed={true}>
                {aboutText}
            </CollapsableContentEntry>
            <CollapsableContentEntry id="githubId" bgColor="white" isRoundedTop={false} isRoundedBottom={false}
                                  textColor="dark" header="Github" secondHeader="" areaLabel="Github">
                {githubText}
            </CollapsableContentEntry>
            <CollapsableContentEntry id="twitterId" bgColor="dark" isRoundedTop={false} isRoundedBottom={true}
                                  textColor="white" header="Programming" secondHeader="Skillz"
                                  areaLabel="Programming">
                {programmingText}
            </CollapsableContentEntry>
        </div>
    )
};

export default Home