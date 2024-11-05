const initialState = "";

const UpdateTheEnablePostData = (state = initialState, action) => {
  switch (action.type) {
    case "ENABLEPOST":
      return (state = action.payload);
    default:
      return state;
  }
};

export default UpdateTheEnablePostData;
