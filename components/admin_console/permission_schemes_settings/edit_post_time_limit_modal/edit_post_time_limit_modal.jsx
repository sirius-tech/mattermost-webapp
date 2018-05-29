// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Modal} from 'react-bootstrap';

export default class EditPostTimeLimitModal extends React.Component {
    static propTypes = {
        timeLimit: PropTypes.number.isRequired,
        show: PropTypes.bool,
        onClose: PropTypes.func.isRequired,
    };

    save = () => {
        console.log('TODO: Save it.');
    }

    render = () => {
        return (
            <Modal
                dialogClassName='admin-modal edit-post-time-limit-modal'
                show={this.props.show}
            >
                <Modal.Header
                    closeButton={true}
                >
                    <h4 className='modal-title'>
                        <FormattedMessage
                            id='edit_post.time_limit_modal.title'
                            defaultMessage='Configure Global Edit Post Time Limit'
                        />
                    </h4>
                </Modal.Header>
                <Modal.Body>
                    <FormattedMessage
                        id='edit_post.time_limit_modal.description'
                        defaultMessage='Setting a time limit applies to all users who have the "Edit Post" permissions in any permission scheme.'
                    />
                    <div>
                        <input
                            id='anytime'
                            type='radio'
                            name='limit'
                            value='anytime'
                        />
                        <label htmlFor='anytime'>
                            <FormattedMessage
                                id='edit_post.time_limit_modal.option_label_anytime'
                                defaultMessage='Anytime'
                            />
                        </label>
                    </div>
                    <div>
                        <input
                            id='timelimit'
                            type='radio'
                            name='limit'
                            value='timelimit'
                        />
                        <label htmlFor='timelimit'>
                            <FormattedMessage
                                id='edit_post.time_limit_modal.option_label_time_limit.preinput'
                                defaultMessage='Can edit for'
                            />
                        </label>
                        <input
                            type='number'
                            id='editPostTimeLimit'
                        />
                        <label htmlFor='timelimit'>
                            <FormattedMessage
                                id='edit_post.time_limit_modal.option_label_time_limit.postinput'
                                defaultMessage='seconds after posting'
                            />
                        </label>
                    </div>
                    <FormattedMessage
                        id='edit_post.time_limit_modal.subscript'
                        defaultMessage='Set the length of time users have to edit their messages after posting.'
                    />
                </Modal.Body>
                <Modal.Footer>
                    <button
                        type='button'
                        className='btn btn-cancel'
                        onClick={this.props.onClose}
                    >
                        <FormattedMessage
                            id='confirm_modal.cancel'
                            defaultMessage='Cancel'
                        />
                    </button>
                    <button
                        id='linkModalCloseButton'
                        type='button'
                        className='btn btn-default'
                        onClick={this.save}
                    >
                        <FormattedMessage
                            id='edit_post.time_limit_modal.save_button'
                            defaultMessage='Save Edit Time'
                        />
                    </button>
                </Modal.Footer>
            </Modal>
        );
    };
}
