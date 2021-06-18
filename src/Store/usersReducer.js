import { v4 as uuid } from "uuid";

const initialState = {
  users: [
    { id: "1", name: "John", email: "john@john.com", gen: 2 },
    { id: "2", name: "ayisha", email: "ayi@ayisha.com", gen: 1 },
    { id: "3", name: "Ali", email: "ali@ali.com", gen: 4 },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const newUser = {
        id: uuid(),
        name: action.payload.name,
        email: action.payload.email,
        gen: action.payload.gen,
      };
      return { ...state, users: [...state.users, newUser] };

    case "DELETE_USER":
      const filteredUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      return { ...state, users: filteredUsers };

    case "EDIT_USER":
      const userUpdate = state.users.map((user) => {
        if (user.id === action.user_id) {
          return { ...user, ...action.updated_info };
        } else {
          return user;
        }
      });
      return { ...state, users: userUpdate };

    default:
      return state;
  }
};

export default usersReducer;
