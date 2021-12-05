export const GET_EMPLOYEE = "GET_EMPLOYEE";
export const SET_EMPLOYEE = "SET_EMPLOYEE";
export const POST_EMPLOYEE = "POST_EMPLOYEE";


export const getEmployee = () => ({
  type: GET_EMPLOYEE,
});

export const postEmployee = (formdata) => ({
    type: POST_EMPLOYEE,
    payload: formdata
  });

export const setEmployee = (employee) => ({
  type: SET_EMPLOYEE,
  employee,
});

const initialstate = {
  employee: undefined,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case SET_EMPLOYEE:
      const { employee } = action;
      return { ...state, employee };
    default:
      return state;
  }
};
