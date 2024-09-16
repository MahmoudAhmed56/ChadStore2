import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchTerm: "",
  filterData: []
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers : {
    setProducts(state,action){
      state.products = action.payload
    },
    setSearchTerm(state,action){
      state.searchTerm = action.payload
      state.filterData = state.products.filter(product=>
        product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
    }
  }
  // extraReducers
});
export const {setProducts,setSearchTerm} = productSlice.actions
export default productSlice.reducer