import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream } from '../../actions';

// React Fragment is a jsx elelment that allows us tor eutrn multi ele mtns to a single variable
// when rendered doesnt produce and html. its an invisible element with no dom impact
// you can always shorten a react fragment to just  and open and closed tag <> </>


class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)

    }

    renderActions() {
        return(
            <React.Fragment>
                <button className="ui button negative">Delete</button>
                <button className="ui button">Cancel</button>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.stream) {
                return "Are you sure"
        }
        return `Are you sure you want to delete stream title: ${this.props.stream.title}`
    }

    render() {

        return (
            
                <Modal
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDimiss={() => history.push('/')}
                />
            
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return{ stream: state.streams [ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchStream })(StreamDelete);