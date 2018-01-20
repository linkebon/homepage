import React from 'react';
import {Link} from 'react-router-dom';
import CollapsableContentEntry from './CollapsableContentEntry';

const Home = () => {
    const aboutText =
        <p>
            My name is Staffan Holmgren. I am a 30 years old happily married man with a soon to be 2
            year old son. Beside programming I enjoy sports, e-sports, cooking food and many other things.
            <br/>
            <br/>

            This page was created to improve my knowledge of javascript, learn some popular frameworks like
            react and redux and also learn more about webdesign. In the Apps part of navigation you can find some
            example apps I coded during my learning of react and redux. You
            constantly improve/change your mind during coding which is why the code/structure can look different in the
            apps.
            <br/>
            <br/>

            Prior to this homepage I have worked alot with building integration layers with different languages like
            scala, java, groovy and php. Buildtools as maven, gradle and sbt. Continuous integration tools as jenkins
            and
            ansible etc. I currently prefer using scala because of the simplicity and understandable functional
            programming style it provides.
            <br/>
            <br/>
            The goal of this year 2018 is to learn more about frontend programming.
        </p>;
    const githubText =
        <p>
            When I write code you can find it in my github repo: <a href="https://github.com/linkebon">linkebon</a>
        </p>;
    const programmingText =
        <div>
            <p>Here is a list of programming languages and tools I have used during my career.</p>
            <h4>Languages</h4>
            <ul>
                <li>java</li>
                <li>scala</li>
                <li>javascript</li>
                <li>groovy</li>
                <li>php</li>
                <li>sql</li>
            </ul>

            <h4>Frameworks</h4>
            <ul>
                <li><Link to="https://www.playframework.com/" target="_blank">Playframework</Link></li>
                <li><Link to="https://projects.spring.io/spring-boot/" target="_blank">Spring boot</Link></li>
                <li><Link to="https://grails.org/" target="_blank">Grails</Link></li>
                <li><Link to="https://angularjs.org/" target="_blank">Angular</Link></li>
                <li><Link to="https://reactjs.org/" target="_blank">React</Link></li>
                <li><Link to="https://framework.zend.com/" target="_blank">Zend framework</Link></li>
            </ul>
            <h4>Build tools</h4>
            <ul>
                <li>Gradle</li>
                <li>Maven</li>
                <li>Sbt</li>
            </ul>

            <h4>Databases</h4>
            <ul>
                <li>Oracle</li>
                <li>Mysql</li>
            </ul>
        </div>;

    return (
        <div>
            <CollapsableContentEntry id="aboutId" bgColorCssClass="bg-dark" isRoundedTop={false} isRoundedBottom={false}
                                     textColorCssClass="text-white"
                                     header="About" secondHeader="Staffan Holmgren"
                                     areaLabel="About linkebon" isInitiallyCollapsed={true}>
                {aboutText}
            </CollapsableContentEntry>
            <CollapsableContentEntry id="githubId" bgColorCssClass="bg-white" isRoundedTop={false}
                                     isRoundedBottom={false}
                                     textColorCssClass="text-dark" header="Github" secondHeader="linkebon"
                                     areaLabel="Github">
                {githubText}
            </CollapsableContentEntry>
            <CollapsableContentEntry id="programmingId" bgColorCssClass="bg-dark" isRoundedTop={false}
                                     isRoundedBottom={true}
                                     textColorCssClass="text-white" header="Programming" secondHeader="Skills"
                                     areaLabel="Programming">
                {programmingText}
            </CollapsableContentEntry>
        </div>

    )
};

export default Home