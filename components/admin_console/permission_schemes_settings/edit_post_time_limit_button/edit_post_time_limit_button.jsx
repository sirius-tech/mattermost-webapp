// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import {Constants} from 'utils/constants';

export default class EditPostTimeLimitButton extends React.Component {
    static propTypes = {
        timeLimit: PropTypes.number.isRequired,
        actions: PropTypes.shape({
        }).isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onClick = (e) => {
        console.count('clicked');
    }

    render = () => {
        let messageID;
        if (this.props.timeLimit === Constants.UNSET_POST_EDIT_TIME_LIMIT) {
            messageID = 'edit_post.time_limit_button.no_limit';
        } else {
            messageID = 'edit_post.time_limit_button.for_n_seconds';
        }

        return (
            <button
                className='edit-post-time-limit-button'
                onClick={this.onClick}
            >
                <FormattedMessage
                    id={messageID}
                    values={{n: this.props.timeLimit}}
                />
            </button>
        );
    };
}
