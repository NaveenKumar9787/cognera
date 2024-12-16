"use client"
import React from "react";
// import { CartProvider } from "@store/quick-cart/cart.context";

export interface State {
  modalView: string;
  modalData: any;
  displayModal: boolean;
  displayFilter: boolean;
}

const initialState = {
  modalView: "LOGIN_VIEW",
  modalData: null,
  displayModal: false,
  displayFilter: false,
};


type Action =
   {
      type: "OPEN_MODAL";
    }
  | {
      type: "CLOSE_MODAL";
    }
  | {
      type: "SET_MODAL_VIEW";
      view: MODAL_VIEWS;
    }
  | {
      type: "SET_MODAL_DATA";
      data: any;
    }
  | {
      type: "OPEN_FILTER";
    }
  | {
      type: "CLOSE_FILTER";
    }
  

type MODAL_VIEWS = | "CAREER_VIEW" | "" ;

export const UIContext = React.createContext<State | any>(initialState);

UIContext.displayName = "UIContext";

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "OPEN_MODAL": {
      return {
        ...state,
        displayModal: true,
        displaySidebar: false,
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        displayModal: false,
      };
    }
    case "SET_MODAL_VIEW": {
      return {
        ...state,
        modalView: action.view,
      };
    }
    case "SET_MODAL_DATA": {
      return {
        ...state,
        modalData: action.data,
      };
    }
    case "OPEN_FILTER": {
      return {
        ...state,
        displayFilter: true,
      };
    }
    case "CLOSE_FILTER": {
      return {
        ...state,
        displayFilter: false,
      };
    }
  }
}

export const UIProvider = (props :any) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const openModal = () => dispatch({ type: "OPEN_MODAL" });
  const closeModal = () => dispatch({ type: "CLOSE_MODAL" });
  const setModalView = (view: MODAL_VIEWS) => dispatch({ type: "SET_MODAL_VIEW", view });
  //const setModalView = (view: MODAL_VIEWS) => dispatch({ type: "SET_MODAL_VIEW", view });
  const setModalData = (data: any) => dispatch({ type: "SET_MODAL_DATA", data });

  const openFilter = () => dispatch({ type: "OPEN_FILTER" });
  const closeFilter = () => dispatch({ type: "CLOSE_FILTER" });

  const value = React.useMemo(
    () => ({
      ...state,
      setModalView,
      setModalData,
      openModal,
      closeModal,
      openFilter,
      closeFilter,
    }),
    [state]
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const ManagedUIContext = ({children }:any) => (
    <UIProvider>{children}</UIProvider>
);
