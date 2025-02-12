import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../../actions/actions"

const products_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };

    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };

    case GET_PRODUCTS_BEGIN:
      return { ...state, products_loading: true };

    case GET_PRODUCTS_SUCCESS: {
      // Ensure payload is an array
      const productsPayload = Array.isArray(action.payload) ? action.payload : [];

      const allFeaturedProducts = productsPayload.filter(
        (product) => product.featured === true
      );
      const allNewArrivalProducts = productsPayload.filter(
        (product) => product.new_arrival === true
      );
      const allBestSeller_products = productsPayload.filter(
        (product) => product.bestseller === true
      );
      const allGamingProducts = productsPayload.filter(
        (product) => product.gaming === true
      );

      return {
        ...state,
        products_loading: false,
        products: productsPayload,
        featured_products: allFeaturedProducts,
        newArrival_products: allNewArrivalProducts,
        bestSeller_products: allBestSeller_products,
        gaming_products: allGamingProducts,
      };
    }

    case GET_PRODUCTS_ERROR:
      return { ...state, products_loading: false, products_error: true };

    case GET_SINGLE_PRODUCT_BEGIN:
      return {
        ...state,
        single_product_error: false,
        single_product_loading: true,
      };

    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        single_product_loading: false,
        singleProduct: action.payload,
      };

    case GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        single_product_loading: false,
        single_product_error: true,
      };

    default:
      throw new Error(`No matching "${action.type}" - action type`);
  }
};

export default products_reducer;