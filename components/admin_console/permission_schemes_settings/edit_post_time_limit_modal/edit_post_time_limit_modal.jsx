// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Modal} from 'react-bootstrap';

import {Constants} from 'utils/constants';

const INT32_MAX = 2147483647;

export default class EditPostTimeLimitModal extends React.Component {
    static propTypes = {
        config: PropTypes.object.isRequired,
        show: PropTypes.bool,
        onClose: PropTypes.func.isRequired,
        actions: PropTypes.shape({
            updateConfig: PropTypes.func.isRequired,
        }).isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            postEditTimeLimit: parseInt(props.config.PostEditTimeLimit, 10),
            saving: false,
            errorMessage: '',
        };
    }

    save = async () => {
        this.setState({saving: true});

        let val;

        try {
            val = parseInt(this.state.postEditTimeLimit, 10);
        } catch (e) {
            this.setState({errorMessage: e.message, saving: false});
            return false;
        }

        const {data, error: err} = await this.props.actions.updateConfig({...this.props.config, PostEditTimeLimit: val});
        this.setState({saving: false});

        if (err) {
            this.setState({errorMessage: err});
        } else {
            this.props.onClose();
        }

        return true;
    }

    handleOptionChange = (e) => {
        const {value} = e.target;
        if (value === Constants.ALLOW_EDIT_POST_ALWAYS) {
            this.setState({postEditTimeLimit: Constants.UNSET_POST_EDIT_TIME_LIMIT});
        } else {
            this.setState({postEditTimeLimit: null});
        }
    }

    handleSecondsChange = (e) => {
        const {value} = e.target;
        this.setState({postEditTimeLimit: value});
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
                            value={Constants.ALLOW_EDIT_POST_ALWAYS}
                            checked={this.state.postEditTimeLimit === Constants.UNSET_POST_EDIT_TIME_LIMIT}
                            onChange={this.handleOptionChange}
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
                            value={Constants.ALLOW_EDIT_POST_TIME_LIMIT}
                            checked={this.state.postEditTimeLimit !== Constants.UNSET_POST_EDIT_TIME_LIMIT}
                            onChange={this.handleOptionChange}
                        />
                        <label htmlFor='timelimit'>
                            <FormattedMessage
                                id='edit_post.time_limit_modal.option_label_time_limit.preinput'
                                defaultMessage='Can edit for'
                            />
                        </label>
                        <input
                            type='number'
                            min='0'
                            step='1'
                            max={INT32_MAX}
                            id='editPostTimeLimit'
                            readOnly={this.state.postEditTimeLimit === Constants.UNSET_POST_EDIT_TIME_LIMIT}
                            onChange={this.handleSecondsChange}
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
                    <div className='edit-post-time-limit-modal__error'>
                        {this.state.errorMessage}
                    </div>
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
                        disabled={this.state.saving}
                    >
                        <FormattedMessage
                            id={this.state.saving ? 'save_button.saving' : 'edit_post.time_limit_modal.save_button'}
                            defaultMessage='Save Edit Time'
                        />
                    </button>
                </Modal.Footer>
            </Modal>
        );
    };
}
