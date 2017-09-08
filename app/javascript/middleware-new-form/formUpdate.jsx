import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';  

class FormUpdate extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
  }
  
  componentDidMount() {
    this.updateValue('');
  };

  updateValue(value) {
    this.props.updateForm({reactThingy: value});
  }

  render(){
    return (
      <div>
        <label className="col-md-2 control-label" htmlFor="react-thingy">React thingy</label>
        <div className="col-md-8">
          <input id="react-thingy"
                 type="text"
                 className="form-control"
                 value={this.props.formObject.reactThingy}
                 onChange={event => this.updateValue(event.target.value)}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {  
  return {
    formObject: state.providers.middleware.hawkular.newProvider
  }
}

function mapDispatchToProps(dispatch) {  
  return {
    updateForm: (payload) => {
      dispatch({type: 'UPDATE_FORM', payload: payload});
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormUpdate);
