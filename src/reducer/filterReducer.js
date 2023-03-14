export function filterReducer(state, action) {
  switch (action.type) {
    case "changeCategory": {
      if (action.checked) {
        return { ...state, category: [...state.category, action.category] };
      } else {
        const newCat = state.category.filter((i) => i !== action.category);
        return { ...state, category: newCat };
      }
    }

    case "changeBrand": {
      if (action.checked) {
        return { ...state, brand: [...state.brand, action.brand] };
      } else {
        const newBrand = state.brand.filter((i) => i !== action.brand);
        return { ...state, brand: newBrand };
      }
    }

    case "changePrice": {
      return { ...state, price: action.price };
    }

    case "handleSort": {
      return { ...state, sortBy: action.sort };
    }

    case "handlePerPage": {
      return { ...state, perPage: action.perPage };
    }

    case "handleFilter": {
      return { ...state, loading: action.loading };
    }

    default: {
      throw Error("Unknown action " + action.type);
    }
  }
}
