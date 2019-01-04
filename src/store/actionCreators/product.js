import {
    GETTING_PRODUCTS_ERROR,
    GETTING_PRODUCTS_REQUEST,
    GETTING_PRODUCTS_SUCCESS,
    GETTING_PRODUCT_ERROR,
    GETTING_PRODUCT_REQUEST,
    GETTING_PRODUCT_SUCCESS,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_ERROR,
    GET_ALL_PRODUCTS_SUCCESS,
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS
} from '../actions/product';

const creator = (dispatch) => ({
  getProducts: async (token, category, subcategory, searchQuery, isHomePage) => {
    let url = null;
    if (isHomePage) {
      url = "http://127.0.0.1:5000/api/Products/Random" + (token ? "?token=" + token : "");
    } else if (category && subcategory) {
      url = "http://127.0.0.1:5000/api/Categories/" + category + "/Subcategories/" + subcategory + (token ? "?token=" + token : "");
    } else if (category && !subcategory) {
      url = "http://127.0.0.1:5000/api/Categories/" + category + (token ? "?token=" + token : "");
    } else if (searchQuery) {
      url = "http://127.0.0.1:5000/api/Products/Search=" + searchQuery + (token ? "?token=" + token : "");
    } else {
      url = "http://127.0.0.1:5000/api/Products" + (token ? "?token=" + token : "");
    }
    if (url) {
      dispatch({
        type: GETTING_PRODUCTS_REQUEST
      });
      await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((product) => {
        dispatch({
          type: GETTING_PRODUCTS_SUCCESS,
          product
        });
      })
      .catch((error) => {
        dispatch({
          type: GETTING_PRODUCTS_ERROR,
          error
        });
      });
    }
  },

  getProduct: async (productId, token) => {
    const url = "http://127.0.0.1:5000/api/products/" + productId + (token ? "?token=" + token : null);
    
    dispatch({
      type: GETTING_PRODUCT_REQUEST
    });
    await fetch(url)
    .then((response) => {
      response.json()
      .then((product) => {
        dispatch({
          type: GETTING_PRODUCT_SUCCESS,
          product
        });
      });
    })
    .catch((error) => {
      dispatch({
        type: GETTING_PRODUCT_ERROR,
        error
      });
    });
  },

  deleteProduct: async (productId, token) => {
    const url = "http://127.0.0.1:5000/api/Admin/Product/Delete?token=" + token;
    
    dispatch({
      type: DELETE_PRODUCT_REQUEST
    });

    try {
      const res = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([{"Id": productId}])
      });
      
      if (res.ok) {
        dispatch({
          type: DELETE_PRODUCT_SUCCESS,
          productId
        }); 
      }
    } catch (error) {
      dispatch({
        type: DELETE_PRODUCT_ERROR,
        error
      });
    }
  },

  getAllProducts: async (token) => {
    const url = "http://127.0.0.1:5000/api/Admin/Product?token=" + token;
    
    dispatch({
      type: GET_ALL_PRODUCTS_REQUEST
    });
    await fetch(url)
    .then((response) => {
      response.json()
      .then((product) => {
        dispatch({
          type: GET_ALL_PRODUCTS_SUCCESS,
          product
        });
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_ALL_PRODUCTS_ERROR,
        error
      });
    });
  },

  addProduct: async (product, token) => {
    const url = "http://127.0.0.1:5000/api/products?token=" + token;
    dispatch({
      type: ADD_PRODUCT_REQUEST
    });

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "Name": product.name,
          "Description": product.description,
          "Price": product.price,
          "FirstImg": product.firstImg,
          "Stock": product.stock,
          "CategoryId": product.category,
          "SubCategoryId": product.subcategory
        })
      });

      if (res.ok) {
        dispatch({
          type: ADD_PRODUCT_SUCCESS
        });
      } else {
        dispatch({
          type: ADD_PRODUCT_ERROR
        });
      }
    } catch (error) {
      dispatch({
        type: ADD_PRODUCT_ERROR,
        error
      });
    }
  },

  addImagesToProduct: async (images, productId, token) => {
    const url = "http://127.0.0.1:5000/api/products?token=" + token;
    dispatch({
      type: ADD_PRODUCT_REQUEST
    });
    console.log(images);
    console.log(productId);
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "imageURLs": images,
          "productid": productId
        })
      });

      if (res.ok) {
        dispatch({
          type: ADD_PRODUCT_SUCCESS
        });
      } else {
        dispatch({
          type: ADD_PRODUCT_ERROR
        });
      }
    } catch (error) {
      dispatch({
        type: ADD_PRODUCT_ERROR,
        error
      });
    }
  },
});

export default creator;