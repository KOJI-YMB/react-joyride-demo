import { connect } from "react-redux";

const Home = ({ run, stepIndex, tourCompleted }) => {
  console.log(run, stepIndex, tourCompleted);
  return <h1 id="home">Home</h1>;
};

const mapStateToProps = (state) => ({
  run: state.UI.run,
  stepIndex: state.UI.stepIndex,
  tourCompleted: state.UI.tourCompleted,
});

export default connect(mapStateToProps)(Home);
