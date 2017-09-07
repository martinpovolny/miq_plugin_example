import ReactDOM from 'react-dom';
import {Credentials} from './new-credentials';

var subscriber = ManageIQ.extensionComponents.subscribe('toolbar');
subscriber.with(createNewFormFields);

function createNewFormFields(component) {
    setTimeout(() => {
      let element = component.render.addNewButton();
      element && ReactDOM.render(<Credentials component={{component}}/>, element);
    });
}
