import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component {
    componentDidMount() {
      this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);

    };
  
    render() {
      if (!this.props.stream) {
        return <div>Loading...</div>;
      }
    // the outside {} indicates we are going to write some JS expression insdie our JSX
    // the second set indicates that we a re creating a normal obj
    // pick below is 



        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    intialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit} />
            </div>
      );
    }
  }

// ownProps are the attributes that are passed when the component is used
// stream prop refers to an obj where th keys of the obj is the id of the streams
// other benefit of id is that we can use [] 

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
  };
  
  export default connect(
    mapStateToProps,
    { fetchStream, editStream }
  )(StreamEdit);