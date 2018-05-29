// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getConfig} from 'mattermost-redux/selectors/entities/general';
import {updateConfig} from 'mattermost-redux/actions/admin';

import EditPostTimeLimitModal from './edit_post_time_limit_modal';

function mapStateToProps(state, ownProps) {
    const config = getConfig(state);

    return {
        ...ownProps,
        config,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            updateConfig,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostTimeLimitModal);
