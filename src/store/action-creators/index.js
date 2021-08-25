export const updateJSON = (json) => {
    return (dispatch) => {
      dispatch({
        type: "UPDATE_JSON",
        payload: json
      })
    }
}
