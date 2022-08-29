import * as React from "react";
import Joyride from "react-joyride";
import { Outlet, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { steps } from "./Tour";
import { setReset, setStepIndex } from "../../reducers/guideTour";

const JoyrideSample = ({ run, stepIndex, dispatch }) => {
  const navigate = useNavigate();

  const handleCallback = (data) => {
    const { action, index, lifecycle, type } = data;
    const newIndex = index + (action === "prev" ? -1 : 1);
    console.log(action, index, lifecycle, type);

    if (action === "close") {
      dispatch(setReset(false, false, 0));
    } else if (type === "step:after" && index === 0) {
      dispatch(setStepIndex(newIndex));
      navigate("/a");
    } else if (type === "step:after" && index === 1) {
      dispatch(setStepIndex(newIndex));
      action === "next" ? navigate("/b") : navigate("/");
    } else if (type === "step:after" && index === 2) {
      if (action === "prev") {
        dispatch(setStepIndex(newIndex));
        navigate("/a");
      } else {
        dispatch(setReset(false, true, 0));
      }
    } else if (action === "reset" || lifecycle === "complete") {
      dispatch(setReset(false, true, 0));
    }
  };

  return (
    <>
      <Outlet />
      <Joyride
        steps={steps}
        continuous
        run={run}
        stepIndex={stepIndex}
        callback={handleCallback}
        showSkipButton
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  stepIndex: state.UI.stepIndex,
  run: state.UI.run,
});

export default connect(mapStateToProps)(JoyrideSample);
