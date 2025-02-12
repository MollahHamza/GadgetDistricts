import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_SORT,
  UPDATE_FILTERS,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../../actions/actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      const productsPayload = Array.isArray(action.payload) ? action.payload : [];
      const maxPrice = productsPayload.length 
        ? Math.max(...productsPayload.map((product) => product.price))
        : 0;

      return {
        ...state,
        all_products: productsPayload,
        filtered_products: productsPayload,
        filters: {
          ...state.filters,
          max_price: maxPrice,
          price: maxPrice,
        },
      };

    case SET_GRID_VIEW:
      return { ...state, grid_view: true };

    case SET_LIST_VIEW:
      return { ...state, grid_view: false };

    case UPDATE_SORT:
      return { ...state, sort: action.payload };

    case SORT_PRODUCTS: {
      const { sort, filtered_products } = state;
      const tempProducts = [...(filtered_products || [])];

      const sortOptions = {
        "price-lowest": (a, b) => a.price - b.price,
        "price-highest": (a, b) => b.price - a.price,
        "name-a": (a, b) => a.name.localeCompare(b.name),
        "name-z": (a, b) => b.name.localeCompare(a.name)
      };

      return { 
        ...state, 
        filtered_products: tempProducts.sort(sortOptions[sort] || ((a, b) => a))
      };
    }

    case UPDATE_FILTERS: {
      const { name, value } = action.payload;
      return { 
        ...state, 
        filters: { 
          ...state.filters, 
          [name]: value 
        } 
      };
    }

    case FILTER_PRODUCTS: {
      const { all_products } = state;
      if (!Array.isArray(all_products)) return state;

      const { 
        text = '', 
        category = 'all', 
        company = 'all', 
        price = Infinity, 
        shipping = false, 
        color = 'all' 
      } = state.filters;

      const tempProducts = all_products.filter(product => {
        const textMatch = !text || 
          product.name.toLowerCase().includes(text.toLowerCase());
        const categoryMatch = category === 'all' || 
          product.category === category;
        const companyMatch = company === 'all' || 
          product.company === company;
        const colorMatch = color === 'all' || 
          (Array.isArray(product.colors) && product.colors.includes(color));
        const priceMatch = product.price <= price;
        const shippingMatch = !shipping || product.shipping === true;

        return textMatch && categoryMatch && companyMatch && 
               colorMatch && priceMatch && shippingMatch;
      });

      return { ...state, filtered_products: tempProducts };
    }

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.max_price,
          shipping: false,
        },
      };

    default:
      throw new Error(`No matching "${action.type}" action type`);
  }
};

export default filter_reducer;