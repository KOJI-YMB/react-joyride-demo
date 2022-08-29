import React from "react";
import { connect } from "react-redux";
const RouteB = ({ run, stepIndex, tourCompleted }) => {
  console.log(run, stepIndex, tourCompleted);
  return <h1 id="routeB">Route B</h1>;
};

const mapStateProps = (state) => ({
  run: state.UI.run,
  stepIndex: state.UI.stepIndex,
  tourCompleted: state.UI.tourCompleted,
});

export default connect(mapStateProps)(RouteB);
