
import { createStore } from 'redux'
export const types = {
    userName: 'userName',
    dataIndonesia: 'dataIndonesia',
    dataGlobalPositif: 'dataGlobalPositif',
    dataGlobalSembuh: 'dataGlobalSembuh',
    dataGlobalMeninggal:'dataGlobalMeninggal',
    isLoading: 'isLoading',
    isLoggedIn: 'isLoggedIn',
    isError: 'isError',
  }

export const actionCreators = {
    userName: (item) => {
      return { type: types.userName, payload: item }
    }, 
    dataWorkshop: (item) => {
      return { type: types.dataIndonesia, payload: item }
    },
    dataKursus: (item) => {
        return { type: types.dataGlobalPositif, payload: item }
    },
    dataSeminar: (item) => {
        return { type: types.dataGlobalSembuh, payload: item }
    },
    dataEvent: (item) => {
      return { type: types.dataGlobalMeninggal, payload: item }
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
    dataIndonesia: {},
    dataGlobalPositif: {},
    dataGlobalSembuh: {},
    dataGlobalMeninggal: {},
    isLoading: true,
    isLoggedIn: false,
    isError: false,
  };
  
export const reducerCredential = (state = initialState, action) => {
    const { userName,dataIndonesia,dataGlobalPositif,dataGlobalSembuh,dataGlobalMeninggal,isLoading,isLoggedIn,isError } = state
    const { type, payload } = action
  
    switch (type) {
      case types.userName: 
      return {
        ...state,
        userName: payload
      }
      case types.dataIndonesia: 
      return {
        ...state,
        dataIndonesia: payload
      }
      case types.dataGlobalPositif: 
      return {
        ...state,
        dataGlobalPositif: payload
      }
      case types.dataGlobalSembuh: 
      return {
        ...state,
        dataGlobalSembuh: payload
      }
      case types.dataGlobalMeninggal: 
      return {
        ...state,
        dataGlobalMeninggal: payload
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