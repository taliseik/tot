import { connect } from 'react-redux';
import WorktimeTrackerPage from '../components/WorktimeTrackerPage';
import { create } from '../ducks/worktime';

const WorktimeTrackerContainer = connect(
  (state, props) => ({
      worktime: state.worktime,
    }),
  {
    create,
  }
)(WorktimeTrackerPage);

export default WorktimeTrackerContainer;
