import ReactDOM from 'react-dom';
import React from 'react';
import FormUpdate from './formUpdate';
import {Provider} from 'react-redux';

var subscriber = ManageIQ.extensions.subscribe('new-provider-hawkular');
subscriber.with(createNewFormFields);

function createNewFormFields(component: any) {
  let element = component.render.newFieldsElement((element) => {
    element && ReactDOM.render(
    <Provider store={ManageIQ.redux.store}>
      <FormUpdate/>
    </Provider>, element);
  });
}
