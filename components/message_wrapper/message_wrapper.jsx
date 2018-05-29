// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import PropTypes from 'prop-types';
import React from 'react';

import messageHtmlToComponent from 'utils/message_html_to_component';
import * as TextFormatting from 'utils/text_formatting.jsx';
import {getSiteURL} from 'utils/url.jsx';
import * as Utils from 'utils/utils.jsx';

export default class MessageWrapper extends React.Component {
    static propTypes = {
        autolinkingSchemes: PropTypes.array,
        message: PropTypes.string,
        options: PropTypes.object
    };

    static defaultProps = {
        message: ''
    };

    render() {
        if (this.props.message) {
            const options = Object.assign({}, this.props.options, {
                autolinkingSchemes,
                siteURL: getSiteURL(),
            });

            const formattedText = TextFormatting.formatText(this.props.message, options);

            return (
                <div onClick={Utils.handleFormattedTextClick}>
                    {messageHtmlToComponent(formattedText, false, {mentions: false})}
                </div>
            );
        }

        return <div/>;
    }
}
