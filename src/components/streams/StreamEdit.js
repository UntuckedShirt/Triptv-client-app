import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
    componentDidMount() {
      this.props.fetchStream(this.props.match.params.id);
    }
  
    render() {
      if (!this.props.stream) {
        return <div>Loading...</div>;
      }
  
      return <div>{this.props.stream.title}</div>;
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
    { fetchStream }
  )(StreamEdit);