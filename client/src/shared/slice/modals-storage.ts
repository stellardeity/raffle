import { createSlice } from "@reduxjs/toolkit";

import { Modals } from "./modals-types";

interface ModalsState {
  modals: Modals[];
  propsModal: any;
}

const initialState: ModalsState = {
  modals: [],
  propsModal: {},
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModalWithProps: (state, { payload }) => {
      const { modalName, props } = payload;
      state.modals = [...state.modals, modalName];
      state.propsModal = { ...state.propsModal, ...props };
    },
    closeAllModals: (state) => {
      state.modals = [];
      state.propsModal = {};
    },
    closeActiveModal: (state) => {
      state.modals = state.modals.slice(0, -1);
    },
    closeModal: (state, { payload }) => {
      state.modals = state.modals.filter((m) => m !== payload);
    },
  },
});

export const { openModalWithProps, closeModal, closeActiveModal, closeAllModals } = modalsSlice.actions;

export const currentModalSelector = (state) => ({
  activeModal: state.modals.modals[state.modals.modals.length - 1],
  modals: state.modals.modals,
  props: state.modals.propsModal,
});
