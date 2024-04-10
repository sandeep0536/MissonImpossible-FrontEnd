import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useSelector } from 'react-redux';
import Web3 from "web3";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { merkleProofApi, userDetailsApi, whiteListChecker } from "../services/apiServices";
import ERC721ABI from '../ABI/ERC721_ABI.json'

const Crossmint = () => {
  const { walletConnect, address, addressStatus } = useSelector((state) => state.navigation);

  const [showError, setShowError] = useState(false);
  const [metaMaskExtention, setMetaMaskExtention] = useState(false);
  const [showClaimedPopup, setShowClaimedPopup] = useState(false);
  const [showIsNotWhiteListed, setShowIsNotWhiteListed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ethihadGuestNumber: ''
  });
  const [diffChainPopup, setDiffChainPopup] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [quantity, setQuantity] = useState('');
  const [proof, setProof] = useState([]);
  const [plusMinus, setPlusMinus] = useState(1);
  const [checkSetWhitelisting, setCheckSetWhitelisting] = useState(false);
  const [whiteListing, setWhiteListing] = useState(false);
  const [walletCategory, setWalletCategory] = useState('');
  const [Category, setCategory] = useState('');
  const [notHolder, setNotHolder] = useState(false);
  const [showRemoveError, setShowRemoveError] = useState(false);
  const [showRemoveMetaMaskExtention, setShowRemoveMetaMaskExtention] = useState(false)
  const [showRemoveClaimedPopup, setShowRemoveClaimedPopup] = useState(false)
  const [ShowRemoveIsNotWhiteListed, setShowRemoveIsNotWhiteListed] = useState(false)
  const [showRemoveDiffChainPopup, setShowRemoveDiffChainPopup] = useState(false)
  const [showRemovedNotHolder, setShowRemoveNotHolder] = useState(false);


  const provider = window?.ethereum || window?.web3?.currentProvider;
  const jsonRpcEndpoint = "https://polygon-mainnet.g.alchemy.com/v2/iaWZl88m9R7h1ySkA0l2tODeabbMGKId"
  const web3 = new Web3(new Web3.providers.HttpProvider(jsonRpcEndpoint));
  const contract = useMemo(() => new web3.eth.Contract(ERC721ABI, process.env.REACT_APP_CONTRACT_ADDRESS), [web3]);


  const fetchChainId = async () => {
    try {
      const chainId = await provider.request({ method: 'eth_chainId' });
      return chainId;
    } catch (error) {
      console.error("Error fetching chainId:", error);
      return null;
    }
  };


  const getWalletTokenTypes = useCallback(async () => {
    try {
      const statusAddress = await web3.eth.getAccounts()
      console.log("🚀 ~ file: CrossMint.js:56 ~ getWalletTokenTypes ~ statusAddress:", statusAddress)
      //console.log ~file: CrossMint.js: 56 ~getWalletTokenTypes ~statusAddress: ", statusAddress.length)
      if (statusAddress.length) {
        const categories = await contract.methods.category().call();
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^ ", categories)
        setCategory(categories);
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^ ", Category)
        //setNotCategoryHolder(categories);
        const checkAndSetPhasePrice = async (contract, address) => {
          const isOnlyPhase1 = await contract.methods.isOnlyPhase1().call();
          const phasePrice = isOnlyPhase1 ? await contract.methods.phase1Price().call() : await contract.methods.otherPhasesPrice().call();
          setQuantity(phasePrice);
        };

        if (categories === 'holder') {
          const walletData = { wallet_address: statusAddress[0] };
          const responseForCategory = await whiteListChecker('/checkWhitelistDB', walletData);
          console.log("^^^^^^^^^^^^^^^^^^^ ", responseForCategory.data.data)

          //setWalletCategory(responseForCategory.data.data);
          console.log(">>>>>>>>>>>>>>>>>>>>>>>>>", responseForCategory.data.data.includes("holder"))
          console.log("🚀 ~ file: CrossMint.js:83 ~ getWalletTokenTypes ~ responseForCategory.data:", responseForCategory.data)

          if (responseForCategory.data.data.includes("holder")) {
            const response = await merkleProofApi("/root-hash", {
              wallet_address: statusAddress[0],
              category: categories
            });

            setProof(response.data.proof);
            const is_whiteLised = await checkWhiteListAddress(response.data.leaf, response.data.proof);

            if (is_whiteLised) {
              const alreadyClaimed = await contract.methods.claimed(categories, statusAddress[0]).call();
              if (!alreadyClaimed) {
                await checkAndSetPhasePrice(contract, statusAddress[0]);
              } else {
                await checkAndSetPhasePrice(contract, statusAddress[0]);
                setShowRemoveClaimedPopup(true);
              }
            } else {
              const alreadyClaimed = await contract.methods.claimed(categories, statusAddress[0]).call();
              if (!alreadyClaimed) {
                await checkAndSetPhasePrice(contract, statusAddress[0]);
              } else {
                await checkAndSetPhasePrice(contract, statusAddress[0]);
                setShowRemoveClaimedPopup(true);
              }
              setShowRemoveIsNotWhiteListed(true);
            }
          } else {
            setShowRemoveNotHolder(true)
          }
        }

        else if (categories === 'guaranteed') {
          const walletData = { wallet_address: statusAddress[0] };
          const responseForCategory = await whiteListChecker('/checkWhitelistDB', walletData)
          //console.log ~ file: CrossMint.js:108 ~ getWalletTokenTypes ~ responseForCategory:", responseForCategory)
          //setWalletCategory(responseForCategory.data.data)
          const walletDataForCategory = { wallet_address: statusAddress[0], category: categories };
          if (responseForCategory.data.data.includes("guaranteed")) {
            const response = await merkleProofApi("/root-hash", walletDataForCategory);
            setProof(response.data.proof);
            const is_whiteLised = await checkWhiteListAddress(response.data.leaf, response.data.proof)
            if (is_whiteLised) {
              const alreadyClaimed = await contract.methods.claimed(categories, statusAddress[0]).call();
              if (!alreadyClaimed) {

                const isOnlyPhase1 = await contract.methods.isOnlyPhase1().call();
                const phasePrice = isOnlyPhase1 ? await contract.methods.phase1Price().call() : await contract.methods.otherPhasesPrice().call();
                setQuantity(phasePrice);
              } else {
                const isOnlyPhase1 = await contract.methods.isOnlyPhase1().call();
                const phasePrice = isOnlyPhase1 ? await contract.methods.phase1Price().call() : await contract.methods.otherPhasesPrice().call();
                setQuantity(phasePrice);
                setShowRemoveClaimedPopup(true);
              }
            } else {
              const alreadyClaimed = await contract.methods.claimed(categories, statusAddress[0]).call();
              if (!alreadyClaimed) {
                const isOnlyPhase1 = await contract.methods.isOnlyPhase1().call();
                const phasePrice = isOnlyPhase1 ? await contract.methods.phase1Price().call() : await contract.methods.otherPhasesPrice().call();
                setQuantity(phasePrice);
              } else {
                const isOnlyPhase1 = await contract.methods.isOnlyPhase1().call();
                const phasePrice = isOnlyPhase1 ? await contract.methods.phase1Price().call() : await contract.methods.otherPhasesPrice().call();
                setQuantity(phasePrice);
                setShowRemoveClaimedPopup(true);
              }
              setShowRemoveIsNotWhiteListed(true);
            }
          }
          else {
            setShowRemoveNotHolder(true)
          }
        }
        else if (categories === 'whitelist') {
          const walletData = { wallet_address: statusAddress[0] };
          const responseForCategory = await whiteListChecker('/checkWhitelistDB', walletData)
          //setWalletCategory(responseForCategory.data.data)
          const walletDataForCategory = { wallet_address: statusAddress[0], category: categories };
          if (responseForCategory.data.data.includes("whitelist")) {
            const response = await merkleProofApi("/root-hash", walletDataForCategory);
            setProof(response.data.proof);
            const is_whiteLised = await checkWhiteListAddress(response.data.leaf, response.data.proof)
            if (is_whiteLised) {
              const alreadyClaimed = await contract.methods.claimed(categories, statusAddress[0]).call();
              if (!alreadyClaimed) {

                const isOnlyPhase1 = await contract.methods.isOnlyPhase1().call();
                const phasePrice = isOnlyPhase1 ? await contract.methods.phase1Price().call() : await contract.methods.otherPhasesPrice().call();
                setQuantity(phasePrice);
              } else {
                const isOnlyPhase1 = await contract.methods.isOnlyPhase1().call();
                const phasePrice = isOnlyPhase1 ? await contract.methods.phase1Price().call() : await contract.methods.otherPhasesPrice().call();
                setQuantity(phasePrice);
                setShowRemoveClaimedPopup(true);
              }
            } else {
              const alreadyClaimed = await contract.methods.claimed(categories, statusAddress[0]).call();
              if (!alreadyClaimed) {
                const isOnlyPhase1 = await contract.methods.isOnlyPhase1().call();
                const phasePrice = isOnlyPhase1 ? await contract.methods.phase1Price().call() : await contract.methods.otherPhasesPrice().call();
                setQuantity(phasePrice);
              } else {
                const isOnlyPhase1 = await contract.methods.isOnlyPhase1().call();
                const phasePrice = isOnlyPhase1 ? await contract.methods.phase1Price().call() : await contract.methods.otherPhasesPrice().call();
                setQuantity(phasePrice);
                setShowRemoveClaimedPopup(true);
              }
              setShowRemoveIsNotWhiteListed(true);
            }
          }
          else {
            setShowRemoveNotHolder(true);
          }
        }
      } else {
        setShowRemoveError(true);
      }
    } catch (error) {
      handleWalletError('Error retrieving token balance:', error);
    }
  }, [address, walletConnect, contract]);

  const fetchData = useCallback(async () => {

    try {
      const checkWhitelisting = await contract.methods.checkWhitelisting().call();
      console.log("🚀 ~ file: CrossMint.js:212 ~ fetchData ~ checkWhitelisting:", checkWhitelisting)
      console.log("🚀 ~ file: CrossMint.js:212 ~ fetchData ~ checkWhitelisting:", checkWhitelisting)
      if (checkWhitelisting) {
        console.log("🚀 ~ file: CrossMint.js:215 ~ fetchData ~ checkWhitelisting:", checkWhitelisting)
        await getWalletTokenTypes();
      } else {
        setWhiteListing(true)
        const phase2Price = await contract.methods.otherPhasesPrice().call();
        setQuantity(phase2Price);
      }
    } catch (error) {
      handleWalletError('Error retrieving token balance:', error);
    }
  }, [getWalletTokenTypes, contract]);

  useEffect(() => {
    // Function to handle chain changes
    const handleChainChange = async () => {
      const chainId = await fetchChainId();
      if (window.ethereum) {
        if (chainId === process.env.REACT_APP_MUMBAI) {
          console.log("🚀 ~ file: CrossMint.js:221 ~ handleChainChange ~ process.env.REACT_APP_MUMBA:", process.env.REACT_APP_MUMBAI)
          //setDiffChainPopup(false)
          fetchData();
        }
        else if (chainId === "0x1") {
          setShowRemoveDiffChainPopup(true)
        }
        else {
          try {
            setShowRemoveDiffChainPopup(true)
            await provider.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: process.env.REACT_APP_MUMBAI }],
            });
            fetchData();
          } catch (switchError) {
            if (switchError.code === 4902) {
            }
          }
        }
      }
      else {
        fetchData()
        //showRemoveMetaMaskExtention(true)
      }
    };
    handleChainChange();
    if (window.ethereum) {
      window.ethereum.on("chainChanged", handleChainChange);
      window.ethereum.on('accountsChanged', function (accounts) {
        window.location.reload();
      })
    }
    else {
      //showRemoveMetaMaskExtention(true)
    } return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("chainChanged", handleChainChange);
      }
      else {
        fetchData()
        //showRemoveMetaMaskExtention(true)
      }
    };
  }, [provider, fetchData]);



  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleWalletError = (message, error) => {
    console.error(message, error);
    // Handle error, e.g., show error message to the user
  };

  const checkWhiteListAddress = async (leaf, proof) => {
    try {
      const checkWhitelist = await contract.methods.isWhiteListed(proof, leaf).call();
      setCheckSetWhitelisting(checkWhitelist)
      return checkWhitelist;
    } catch (error) {
      handleWalletError('Error checking whitelist wallet:', error)
    }
  }
  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }, []);

  const onSubmit = useCallback(async () => {
    const userData = {
      full_name: formData.name,
      email: formData.email,
      Etihad_guest_number: formData.ethihadGuestNumber,
    };
    try {
      const response = await userDetailsApi('/user-details', userData);
      setTimeout(() => {
        setFormData("")
      }, 2000);
    } catch (error) {
      console.log("Error submitting user details:", error);
    }
  }, [formData]);


  const plus = useMemo(() => async () => {
    const category = await contract.methods.category().call();
    if (category === 'whitelist' || category === '') {
      if (plusMinus < 3) {
        setPlusMinus(plusMinus + 1);
      }
    } else {
      if (plusMinus < 1) {
        setPlusMinus(plusMinus + 1);
      }
    }

  }, [plusMinus]);

  const minus = useMemo(() => () => {
    if (plusMinus > 1) {
      setPlusMinus(plusMinus - 1);
    }
  }, [plusMinus]);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowError(true);
    setShowRemoveError(false)
    setMetaMaskExtention(true);
    setShowRemoveMetaMaskExtention(false);

    setShowClaimedPopup(true);
    setShowRemoveClaimedPopup(false);
    setShowIsNotWhiteListed(true);
    setShowRemoveIsNotWhiteListed(false);

    setDiffChainPopup(true)
    setShowRemoveDiffChainPopup(false)

    setNotHolder(true)
    setShowRemoveNotHolder(false)
  };
  const acceptMint = (event) => {
    setAcceptTerms(event.target.checked)
  }



  const { name, email, ethihadGuestNumber } = formData;

  const quantityForCross = quantity * plusMinus;
  const totalPrice = (quantityForCross / 10 ** 6).toString();
  return (
    <>
      <NavigationBar />
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={showRemoveError} autoHideDuration={6000} onClose={handleClose} >
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Please connect with your wallet
          </Alert>
        </Snackbar>
      </Stack>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={showRemoveClaimedPopup} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            You have already claimed your whitelist mint NFT
          </Alert>
        </Snackbar>
      </Stack>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={ShowRemoveIsNotWhiteListed} autoHideDuration={6000} onClose={handleClose} >
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            This Address is not whitelisted at this stage of the mint
          </Alert>
        </Snackbar>
      </Stack>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={showRemoveDiffChainPopup} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            You are connected with the wrong network, please connect with Polygon network
          </Alert>
        </Snackbar>
      </Stack>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={showRemoveMetaMaskExtention} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Meta mask extention are required
          </Alert>
        </Snackbar>
      </Stack>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={showRemovedNotHolder} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            You are not a {Category}
          </Alert>
        </Snackbar>
      </Stack>

      <main className="main" >
        <div className="billing-detail">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="form-box-left">
                  <h2>Billing Details</h2>

                  <div className="form-main">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="text" name="name" className="form-control" placeholder="Name" value={name ?? ''} onChange={handleChange} />
                          <label>Name <span>*</span></label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="email" name="email" className="form-control" value={email ?? ''} onChange={handleChange} placeholder="Email" />
                          <label>Email <span>*</span></label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="email" name="ethihadGuestNumber" className="form-control" value={ethihadGuestNumber ?? ''} onChange={handleChange} placeholder="Etihad Guest Number" />
                          <label>Etihad Guest Number</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>Please enter your Etihad Guest number to obtain Etihad Guest Silver Tier membership. If you are giving Silver status as a gift for family or friends, please enter their number above. If you are buying more than 1 NFT, you can provide us with multiple Etihad Guest numbers. Please separate them with a comma (,).

                    If you don't have an existing Etihad Guest account, you can create one on Etihad Guest's website <a href="https://www.etihadguest.com/en/quick-enrolment-atm.html" className="text-link">here</a> in under 2 minutes.
                  </p>

                  <div className="col-md-12">
                    <h3>How to register for an Etihad Guest Account</h3>
                  </div>

                  <div className="col-md-12">
                    <div className="video-billing">
                      <video width="100%" height="350px" controls muted>
                        <source src="./assets/video/etihadguestnumbervid.mp4" type="video/mp4" />
                        {/* <source src="movie.ogg" type="video/ogg" /> */}
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>


                </div>
              </div>
              <div className="col-lg-5">
                <div className="form-box-right">
                  <h2>Billing Details</h2>
                  <div className="billing-product">
                    <div className="billing-list d-flex flex-wrap align-items-center justify-content-between">
                      <div className="left-product d-flex align-items-center">
                        <div className="product-img">
                          <video width="64px" height="64px" autoPlay muted loop>
                            <source src="./assets/video/video-nft.mp4" type="video/mp4" />
                            {/* <source src="movie.ogg" type="video/ogg" /> */}
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div className="product-details">
                          <p>Mission Impossible NFT</p>
                          <span>Quantity {plusMinus}</span>
                        </div>
                      </div>
                      <div className="right-quantity">
                        <div className="input-group number-spinner">
                          <span className="input-group-btn">
                            <button className="btn-default" data-dir="dwn" onClick={minus}>
                              <span><i className="bi bi-dash"></i></span>
                            </button>
                          </span>
                          <input type="text" className="form-control text-center" value={plusMinus} />
                          <span className="input-group-btn">
                            <button className="btn-default" data-dir="up" onClick={plus}><span><i className="bi bi-plus"></i></span></button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="billing-details">
                    <ul className="billing-info">
                      <li className="d-flex justify-content-between align-items-center"><span className="text-align-left">Price</span> <span className="text-align-right">{quantity / 1000000} $ / NFT</span></li>
                      <li className="d-flex justify-content-between align-items-center"><span className="text-align-left">Total</span> <span className="text-align-right">{quantityForCross / 1000000} $</span></li>
                    </ul>
                  </div>

                  <div className="billing-discription">
                    <p>All payments are in US Dollars (USD) + Payment processing fee. Payment processing fee is dependent on your method and country of payment. Card fees include additional regulatory checks, and the fee is 3-5%. Please ensure your card can process international payments in USD.</p>
                  </div>

                  <div className="submit-sec">
                    <div className="form-check">
                      <input className="form-check-input" onChange={acceptMint} type="checkbox" id="inlineFormCheck" />
                      <label className="form-check-label" for="inlineFormCheck">
                        I accept Arcube’s  <a href="/terms" className="text-link"> Terms and Conditions </a> and <a href="/policy" className="text-link"> Privacy Policy.</a>
                      </label>
                    </div>
                    {/* {(!whiteListing ?)} */}
                    {(whiteListing === false) ? (
                      <><div className="submit-btn">
                        <div>
                          <CrossmintPayButton
                            clientId={process.env.REACT_APP_CLIENT_ID}
                            className={`xmint-btn ${(!name || !email || !acceptTerms) ? 'cursor-not-allowed' : ''}`}
                            //className="xmint-btn"
                            onClick={onSubmit}
                            disabled={!name || !email || !acceptTerms}
                            environment={process.env.REACT_APP_ENVIRONMENT}
                            mintTo={(checkSetWhitelisting || address) ? address : ''}
                            mintConfig={{
                              type: "erc-721",
                              _quantity: plusMinus,
                              _priceUSDC: quantityForCross,
                              totalPrice,
                              merkleProof: proof,
                              _category: walletCategory
                            }}
                            successCallbackURL={`${process.env.REACT_APP_CROSS_SUCCESS_URL}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&ethihadGuestNumber=${encodeURIComponent(ethihadGuestNumber)}`}
                            failureCallback={`${process.env.REACT_APP_CROSS_FAILURE_URL}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&ethihadGuestNumber=${encodeURIComponent(ethihadGuestNumber)}`} />
                        </div>
                      </div><div style={{ marginTop: '-52px' }}>
                          <div style={{ marginLeft: '238px' }}>
                            <CrossmintPayButton
                              clientId={process.env.REACT_APP_CLIENT_ID}
                              paymentMethod="ETH"
                              className={`xmint-btn ${(!name || !email || !acceptTerms) ? 'cursor-not-allowed' : ''}`}
                              disabled={!name || !email || !acceptTerms}
                              environment={process.env.REACT_APP_ENVIRONMENT}
                              mintTo={address}
                              mintConfig={{
                                type: "erc-721",
                                _quantity: plusMinus,
                                _priceUSDC: quantityForCross,
                                totalPrice,
                                merkleProof: proof,
                                _category: walletCategory

                              }}
                              successCallbackURL={`${process.env.REACT_APP_CROSS_SUCCESS_URL}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&ethihadGuestNumber=${encodeURIComponent(ethihadGuestNumber)}`}
                              failureCallback={`${process.env.REACT_APP_CROSS_FAILURE_URL}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&ethihadGuestNumber=${encodeURIComponent(ethihadGuestNumber)}`} />
                          </div>
                        </div></>
                    ) : (<><div className="submit-btn">
                      <div>
                        <CrossmintPayButton
                          clientId={process.env.REACT_APP_CLIENT_ID}
                          className={`xmint-btn ${(!name || !email || !acceptTerms) ? 'cursor-not-allowed' : ''}`}
                          onClick={onSubmit}
                          disabled={!name || !email || !acceptTerms}
                          environment={process.env.REACT_APP_ENVIRONMENT}
                          mintTo={(checkSetWhitelisting || address) ? address : ''}
                          mintConfig={{
                            type: "erc-721",
                            _quantity: plusMinus,
                            _priceUSDC: quantityForCross,
                            totalPrice,
                            merkleProof: whiteListing ? [] : proof,
                            _category: ''
                          }}
                          successCallbackURL={`${process.env.REACT_APP_CROSS_SUCCESS_URL}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&ethihadGuestNumber=${encodeURIComponent(ethihadGuestNumber)}`}
                          failureCallback={`${process.env.REACT_APP_CROSS_FAILURE_URL}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&ethihadGuestNumber=${encodeURIComponent(ethihadGuestNumber)}`} />
                      </div>
                    </div><div style={{ marginTop: '-52px' }}>
                        <div style={{ marginLeft: '238px' }}>
                          <CrossmintPayButton
                            clientId={process.env.REACT_APP_CLIENT_ID}
                            paymentMethod="ETH"
                            className={`xmint-btn ${(!name || !email || !acceptTerms) ? 'cursor-not-allowed' : ''}`}
                            disabled={!name || !email || !acceptTerms}
                            environment={process.env.REACT_APP_ENVIRONMENT}
                            mintTo={address}
                            mintConfig={{
                              type: "erc-721",
                              _quantity: plusMinus,
                              _priceUSDC: quantityForCross,
                              totalPrice,
                              merkleProof: whiteListing ? [] : proof,
                              _category: ''
                            }}
                            successCallbackURL={`${process.env.REACT_APP_CROSS_SUCCESS_URL}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&ethihadGuestNumber=${encodeURIComponent(ethihadGuestNumber)}`}
                            failureCallback={`${process.env.REACT_APP_CROSS_FAILURE_URL}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&ethihadGuestNumber=${encodeURIComponent(ethihadGuestNumber)}`} />
                        </div>
                      </div></>)}

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* )} */}
      </main>
      <Footer />
    </>
  );
}

export default Crossmint;
