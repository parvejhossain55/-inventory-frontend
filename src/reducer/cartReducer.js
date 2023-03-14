export function cartReducer(state, action) {
  switch (action.type) {
 

    case "changePrice": {
      return { ...state, price: action.price };
    }

    default: {
      throw Error("Unknown action " + action.type);
    }
  }
}
