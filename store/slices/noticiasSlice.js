import Categories from "@/components/Categories";
import { DATACATEGORIAS, DATANOTICIAS } from "@/data/data";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noticias: DATANOTICIAS,
  categorias: DATACATEGORIAS
};
console.log(initialState);

const noticiasSlice = createSlice({
  name: "noticias",
  initialState,
  reducers: {
    seleccionarBase: (state, action) => {
      console.log("seleccionarBase");
      // state.selectedCombo.base = action.payload;
      // state.selectedCombo.totalPrice = action.payload.price;
      // state.selectedCombo.totalCal = action.payload.cal;
    },
  },
});

export const {
  seleccionarBase
} = noticiasSlice.actions;

export default noticiasSlice.reducer;
