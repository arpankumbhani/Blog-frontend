export const handleClickEnablePost = (newPostData) => {
  return {
    type: "ENABLEPOST",
    payload: newPostData,
  };
};
