import React, {Component} from 'react';
import CollapsableContentEntry from "../components/CollapsableContentEntry";

class AppsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CollapsableContentEntry id="twitterId" bgColorCssClass="bg-dark" isRoundedTop={false}
                                         isRoundedBottom={false}
                                         textColorCssClass="text-white"
                                         header="Searchable and autoupdating twitterfeed" secondHeader="Twitter"
                                         areaLabel="twitterLabel" isInitiallyCollapsed={true}>
                    <p>Hello apps!</p>
                </CollapsableContentEntry>

                <CollapsableContentEntry id="todoId" bgColorCssClass="bg-white" isRoundedTop={false}
                                         isRoundedBottom={true}
                                         textColorCssClass="text-dark"
                                         header="Todo app" secondHeader="Todoapp"
                                         areaLabel="todoLabel" isInitiallyCollapsed={false}>
                    <p>Hello apps!</p>
                </CollapsableContentEntry>

                <CollapsableContentEntry id="counterId" bgColorCssClass="bg-dark" isRoundedTop={false}
                                         isRoundedBottom={false}
                                         textColorCssClass="text-white"
                                         header="Simple react redux counter" secondHeader=""
                                         areaLabel="entry" isInitiallyCollapsed={false}>
                    <p>Hello apps!</p>
                </CollapsableContentEntry>
            </div>
        )
    }
}

export default AppsContainer