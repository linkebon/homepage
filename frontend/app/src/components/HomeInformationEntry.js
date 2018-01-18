import React, {Component} from 'react';

class HomeInformationEntry extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {bgColor, isRoundedTop, isRoundedBottom, textColor, text, header, secondHeader, id, areaLabel} = this.props;
        const bgClass = 'bg-' + bgColor;
        const textClass = 'text-' + textColor;
        const roundedTop = isRoundedTop ? 'rounded-top' : '';
        const roundedBottom = isRoundedBottom ? 'rounded-bottom' : '';
        return (
            <div className="pos-f-t">
                <div className="collapse" id={id}>
                    <div className={bgClass + ' p-4 ' + roundedTop}>
                        <h4 className={'text-capitalize ' + textClass}>{secondHeader}</h4>
                        <span className="text-muted">{text}</span>
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
    }
}

export default HomeInformationEntry