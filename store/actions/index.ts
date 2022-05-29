import * as AppActions from './appActions';
import * as TodoActions from './todoActions';

const rootActions = {
  ...AppActions,
  ...TodoActions,
};

export default rootActions;
