import * as React from "react";
import Joyride from 'react-joyride';
import { Outlet, useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import { steps } from './Tour'
import "./styles.css";

const setRun = run => ({
  type: 'SET_RUN',
  run
})

const setStepIndex = (stepIndex) => ({
  type: 'SET_STEP_INDEX',
  stepIndex
})

const setTourCompleted = tourCompleted => ({
  type: 'SET_TOUR_COMPLETED',
  tourCompleted
})

const App = ({ dispatch, stepIndex, run }) => {
  const navigate = useNavigate();

  const handleCallback = (data) => {
    const { action, index, lifecycle, type } = data;
    const newIndex = index + (action === "prev" ? -1 : 1)

    if (type === "step:after" && index === 0) {
      dispatch(setStepIndex(newIndex));
      navigate("/a");
    } else if (type === "step:after" && index === 1) {
      if (action === 'next') {
        dispatch(setRun(true));
        dispatch(setStepIndex(newIndex));
        navigate('/b');
      } else {
        navigate('/');
        dispatch(setRun(true))
        dispatch(setStepIndex(newIndex));
      }
    } else if (type === 'step:after' && index === 2) {
      if (action === 'prev') {
        dispatch(setRun(true));
        dispatch(setStepIndex(newIndex))
        navigate('/a');
        console.log('戻った')
      } else {
        dispatch(setRun(false));
        dispatch(setTourCompleted(true));
        console.log('完了')
      }
    } else if (action === "reset" || lifecycle === "complete") {
      dispatch(setRun(false));
      dispatch(setStepIndex(0));
      dispatch(setTourCompleted(true));
      navigate("/");
    }
  }

  return (
    <>
      <Outlet />
      <h1 id='home'>Home</h1>
      <Joyride
        steps={steps}
        continuous
        run={run}
        stepIndex={stepIndex}
        callback={handleCallback}
      />
    </>
  );
}

const mapStateToProps = state => ({
  stepIndex: state.UI.stepIndex,
  run: state.UI.run
})

export default connect(mapStateToProps)(App)
