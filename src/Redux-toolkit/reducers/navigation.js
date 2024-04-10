import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: '',
  balance: null,
  token: false,
  whiteListAddress: false,
  walletConnect: false,
  quantity: '',
  isOnlyPhase1: false,
  checkWhitelisting: false,
  addressStatus: false
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setWhiteListAddress: (state, action) => {
      state.whiteListAddress = action.payload;
    },
    setWalletConnect: (state, action) => {
      state.walletConnect = action.payload;
    },
    setQuantitiy: (state, action) => {
      state.quantity = action.payload;
    },
    setIsOnlyPhase1: (state, action) => {
      state.isOnlyPhase1 = action.payload;
    },
    setCheckWhitelisting: (state, action) => {
      state.checkWhitelisting = action.payload;
    },
    setAddressStatus: (state, action) => {
      state.addressStatus = action.payload
    }
  },
});

export const { setAddressStatus, setAddress, setBalance, setToken, setWhiteListAddress, setWalletConnect, setQuantitiy, setIsOnlyPhase1, setCheckWhitelisting } = navigationSlice.actions;

export default navigationSlice.reducer;
