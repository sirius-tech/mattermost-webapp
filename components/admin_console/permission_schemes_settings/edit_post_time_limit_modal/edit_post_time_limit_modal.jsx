// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Modal} from 'react-bootstrap';

import {Constants} from 'utils/constants';

export default class EditPostTimeLimitModal extends React.Component {
    static propTypes = {
        timeLimit: PropTypes.number.isRequired,
        show: PropTypes.bool,
    };

    render = () => {
        return (
            <Modal
                dialogClassName='admin-modal'
                show={this.props.show}
                onHide={() => { }}
            >
                <Modal.Header
                    closeButton={true}
                >
                    <h4 className='modal-title'>
                        <FormattedMessage
                            id='admin.permissions.systemScheme.resetDefaultsButtonModalTitle'
                            defaultMessage='Reset to Default?'
                        />
                    </h4>
                </Modal.Header>
                <Modal.Body>
                    <FormattedMessage
                        id='admin.permissions.systemScheme.resetDefaultsButtonModalBody'
                        defaultMessage='This will reset all selections on this page to their default settings. Are you sure you want to reset?'
                    />
                </Modal.Body>
                <Modal.Footer>
                    <button
                        type='button'
                        className='btn btn-cancel'
                        onClick={() => { }}
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
                        onClick={() => { }}
                    >
                        <FormattedMessage
                            id='admin.permissions.systemScheme.resetDefaultsConfirmationButton'
                            defaultMessage='Yes, Reset'
                        />
                    </button>
                </Modal.Footer>
            </Modal>
        );
    };
}
