import { createStore } from 'redux'
export const types = {
    userName: 'userName',
    dataGlobalPositif: 'dataGlobalPositif',
    dataIndonesia: 'dataIndonesia',
    isLoading: 'isLoading',
    isLoggedIn: 'isLoggedIn',
    isError: 'isError',
  }

export const actionCreators = {
    userName: (item) => {
      return { type: types.userName, payload: item }
    }, 
    dataGlobalPositif: (item) => {
      return { type: types.dataGlobalPositif, payload: item }
    },
    dataIndonesia: (item) => {
      return { type: types.dataIndonesia, payload: item }
    },
    isLoading: (item) => {
        return { type: types.isLoading, payload: item }
    },
    isLoggedIn: (item) => {
        return { type: types.isLoggedIn, payload: item }
    },
    isError: (item) => {
        return { type: types.isError, payload: item }
    }
  }

  const initialState = {
    userName: '',
    dataGlobalPositif: {},
    dataIndonesia: {},
    isLoading: true,
    isLoggedIn: false,
    isError: false,
  };
  
export const reducerCredential = (state = initialState, action) => {
    const { userName,dataGlobalPositif,dataIndonesia,isLoading,isLoggedIn,isError } = state
    const { type, payload } = action
  
    switch (type) {
      case types.userName: 
      return {
        ...state,
        userName: payload
      }
      case types.dataGlobalPositif: 
      return {
        ...state,
        dataGlobalPositif: payload
      }
      case types.dataIndonesia: 
      return {
        ...state,
        dataIndonesia: payload
      }
      case types.isLoading: 
      return {
        ...state,
        isLoading: payload
      }
      case types.isLoggedIn: 
      return {
        ...state,
        isLoggedIn: payload
      }
      case types.isError: 
      return {
        ...state,
        isError: payload
      }
    }
    return state
  }
const storeCredential = createStore(reducerCredential)
export default storeCredential