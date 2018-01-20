import React from 'react';

const CollapsableContentEntry = ({id, header, secondHeader, children, bgColorCssClass, textColorCssClass, isRoundedTop, isRoundedBottom, isInitiallyCollapsed, areaLabel}) => {
    const collapsedClass = isInitiallyCollapsed ? 'show' : '';
    const roundedTop = isRoundedTop ? 'rounded-top' : '';
    const roundedBottom = isRoundedBottom ? 'rounded-bottom' : '';
    return (
        <div className="pos-f-t">
            <div className={'collapse ' + collapsedClass} id={id}>
                <div className={bgColorCssClass + ' p-4 ' + roundedTop}>
                    <h4 className={'text-capitalize ' + textColorCssClass}>{secondHeader}</h4>
                    <div className="text-muted">{children}</div>
                </div>
            </div>
            <div className={'navbar ' + bgColorCssClass + ' ' + roundedBottom}>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target={'#' + id} aria-controls={id}
                        aria-expanded="false" aria-label={areaLabel}>
                    <h4 className={textColorCssClass}>{header}</h4>
                </button>
            </div>
        </div>
    )
};

export default CollapsableContentEntry