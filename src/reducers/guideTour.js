export const setStepIndex = (stepIndex) => ({
  type: "SET_STEP_INDEX",
  stepIndex,
});

export const setReset = (run, tourCompleted, stepIndex) => ({
  type: "SET_RESET",
  run,
  tourCompleted,
  stepIndex,
});

const initialState = {
  run: true,
  stepIndex: 0,
  tourCompleted: false,
};

const guideTour = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STEP_INDEX":
      return { ...state, stepIndex: action.stepIndex };
    case "SET_RESET":
      return {
        ...state,
        stepIndex: action.stepIndex,
        tourCompleted: action.tourCompleted,
        run: action.run,
      };
    default:
      return state;
  }
};

export default guideTour;
