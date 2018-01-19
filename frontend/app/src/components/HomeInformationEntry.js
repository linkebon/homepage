import React from 'react';

const HomeInformationEntry = (props) => {
    const {bgColor, isRoundedTop, isRoundedBottom, textColor, text, header, secondHeader, id, areaLabel, isInitiallyCollapsed} = props;
    const bgClass = 'bg-' + bgColor;
    const textClass = 'text-' + textColor;
    const collapsedClass = isInitiallyCollapsed ? 'show' : '';
    const roundedTop = isRoundedTop ? 'rounded-top' : '';
    const roundedBottom = isRoundedBottom ? 'rounded-bottom' : '';
    const createTextHtml = () => {
        return {__html: text}
    };
    return (
        <div className="pos-f-t">
            <div className={'collapse ' + collapsedClass} id={id}>
                <div className={bgClass + ' p-4 ' + roundedTop}>
                    <h4 className={'text-capitalize ' + textClass}>{secondHeader}</h4>
                    <div className="text-muted" dangerouslySetInnerHTML={createTextHtml()}/>
                </div>
            </div>
            <div className={'navbar ' + bgClass + ' ' + roundedBottom}>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target={'#' + id} aria-controls={id}
                        aria-expanded="false" aria-label={areaLabel}>
                    <h4 className={textClass}>{header}</h4>
                </button>
            </div>
        </div>
    )
};

export default HomeInformationEntry