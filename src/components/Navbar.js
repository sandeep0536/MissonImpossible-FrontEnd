import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Web3 from 'web3'
import { Link } from 'react-router-dom';
import { getWhiteListAddres1 } from '../services/apiServices';
import {
  setWhiteListAddress,
  setWalletConnect,
  setAddress,
  setQuantitiy,
  setIsOnlyPhase1,
  setAddressStatus,
  setCheckWhitelisting
} from '../Redux-toolkit/reducers/navigation';
import ERC721ABI from '../ABI/ERC721_ABI.json'

const NavigationBar = () => {
  const isActive = true;
  const dispatch = useDispatch();
  const { walletConnect } = useSelector(state => state.navigation);
  const provider = window?.ethereum || window?.web3?.currentProvider;

  useEffect(() => {
    if (window.location.pathname == '/wpkrj-checkout') {
      const checkWalletConnect = async () => {
        if (provider) {
          const web3 = new Web3(provider);
          try {
            const [address] = await web3.eth.getAccounts();
            if (address != "") {
              dispatch(setAddressStatus(true));
              dispatch(setAddress(address));
            }
            await Promise.all([
              getWalletTokenTypes(web3),
              accountChangeHandler(address),
            ]);
          } catch (error) {
            handleWalletError('Error connecting to wallet:', error);
          }
        } else {
        }
      };

      checkWalletConnect();
    }

  }, []);

  const handleWalletError = (message, error) => {
    console.error(message, error);
    // Handle error, e.g., show error message to the user
  };

  const checkWhiteListAddress1Wallet = async (address) => {
    const walletData = { wallet_address: address };
    try {
      const res = await getWhiteListAddres1('/whitelist-checkout1', walletData);
      const isWhitelisted = res.data.status === true;
      dispatch(setWhiteListAddress(isWhitelisted));
    } catch (error) {
      handleWalletError('Error checking whitelist wallet:', error)
    }
  }

  const switchAccounts = () => {
    window.ethereum.request({
      method: 'wallet_requestPermissions',
      params: [{
        eth_accounts: {},
      }]
    }).then((res) => {
      window.location.reload();
    }).catch((res) => {
      console.log(res)
    })

  }

  // const WalletConnect = async () => {
  //   if (window.ethereum) {
  //     try {
  //       const [address] = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //       dispatch(setAddress(address));
  //       await Promise.all([
  //         accountChangeHandler(address),
  //         getWalletTokenTypes(new Web3(provider)),
  //       ]);
  //     } catch (error) {
  //       handleWalletError('Error connecting to wallet:', error);
  //     }
  //   } else {
  //     console.log('Wallet not connected');
  //   }
  // };

  // const WalletDisconnect = () => {
  //   if (window.ethereum && window.ethereum.selectedAddress) {
  //     dispatch(setWalletConnect(false));
  //   }
  // };

  const accountChangeHandler = async (account) => {
    try {
      if (account) {
        dispatch(setWalletConnect(true))
        await checkWhiteListAddress1Wallet(account);
      }

    } catch (error) {
      handleWalletError('Error handling account change:', error);
    }
  };

  const getWalletTokenTypes = async (web3) => {
    try {
      const contract = new web3.eth.Contract(
        ERC721ABI,
        process.env.REACT_APP_CONTRACT_ADDRESS
      );
      const isOnlyPhase1 = await contract.methods.isOnlyPhase1().call();
      dispatch(setIsOnlyPhase1(isOnlyPhase1))
      if (isOnlyPhase1) {
        const phase1Price = await contract.methods.phase1Price().call();
        dispatch(setQuantitiy(phase1Price))
      }
      else {
        const phase2Price = await contract.methods.otherPhasesPrice().call();
        const checkWhitelisting = await contract.methods.checkWhitelisting().call();
        dispatch(setCheckWhitelisting(checkWhitelisting))
        dispatch(setQuantitiy(phase2Price))
      }
    } catch (error) {
      handleWalletError('Error retrieving token balance:', error);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-shape"></div>
        <div className="d-flex align-items-center">
          <div className="logo">
            <Link to="/">
              <img src="./assets/images/logo.svg" alt="" />
            </Link>
          </div>
          <div className="header-right d-flex align-items-center justify-content-center">
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header d-md-none justify-content-between border-bottom">
                <div className="header-close text-white ms-auto" data-bs-dismiss="offcanvas" aria-label="Close">
                  <i className="bi bi-x-lg"></i>
                </div>
              </div>
              <div className="offcanvas-body">
                <nav>
                  <ul className="navbar-nav">
                    <li className="nav-item "><Link to="/whitelistchecker" className="nav-link">
                      <span>Whitelist Checker</span> </Link>
                    </li>

                    <li className="nav-item ">
                      <a href="/collectionFAQs" className="nav-link"><span>Collection FAQs</span> </a>
                    </li>
                    <li className="nav-item menu-underline"><a href="https://www.twitter.com/etihadnft" className="nav-link" target="_blank"><i className="bi bi-twitter me-2"></i> <span>Twitter</span>
                    </a></li>

                    <li className="nav-item menu-underline"><a href="https://discord.gg/etihad" className="nav-link" target="_blank"><i className="bi bi-discord me-2"></i> <span>Discord</span>
                    </a></li>
                  </ul>
                </nav>

              </div>
            </div>
          </div>
          <div className="user-auth">
            <div className="d-flex align-items-center">
              {isActive ? (
                <a href='https://opensea.io/collection/ey-mi-1' className="btn-primary btn-fill">
                  <span className="inside">Buy NFT</span>
                </a>) : (<a href='https://opensea.io/collection/ey-mi-1' className="btn-primary btn-fill disabled-link">
                  <span className="inside">Buy NFT</span>
                </a>)}
            </div>
          </div>
          <div className="user-auth">
            <div className="d-flex align-items-center">
              {window.location.pathname == '/wpkrj-checkout' && provider ? (
                <Link onClick={switchAccounts} className="btn-primary btn-fill">
                  <span className="inside">Switch Wallets</span>
                </Link>) : <></>}
            </div>
          </div>
          <button className="btn d-md-none bg-transparent border-0 p-0" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <span className="mobile-nav">
              <span className="bar1"></span>
              <span className="bar2"></span>
              <span className="bar3"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
