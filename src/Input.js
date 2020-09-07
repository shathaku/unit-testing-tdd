import React, { Fragment } from 'react';
import {connect} from 'react-redux';

class Input extends React.Component {
    render() {
        const content = this.props.success ? null :
            <Fragment>
                <input type='text' className='guess-input' />
                <button className='guess-submit' type="submit">Submit</button>
            </Fragment>
        return (
            <div>
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        success: state.success
    }
}

export default connect(mapStateToProps)(Input);