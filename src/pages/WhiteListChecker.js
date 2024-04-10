import React, { useState } from "react";
import NavigationBar from "../components/Navbar";
import { merkleProofApi, whiteListChecker, contractIsWhiteListed } from "../services/apiServices";
import Footer from "../components/Footer";

const WhiteListChecker = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [status, setStatus] = useState(null); // status can be 'loading', 'success', 'error'
    const handleChange = (event) => {
        const { value } = event.target;
        setWalletAddress(value);
    };

    const checkWhiteListAddress = async (leaf, proof) => {
        try {
            // const checkWhitelist = await contract.methods.isWhiteListed(proof, leaf).call();
            const proof_leaf = {
                proof: proof,
                leaf: leaf
            }
            const checkWhitelist = await contractIsWhiteListed('/contractMethodIswhiteListed', proof_leaf)
            const walletData = { wallet_address: walletAddress };
            //console.log ~ file: WhiteListChecker.js:23 ~ checkWhiteListAddress ~ checkWhitelist:", checkWhitelist)
            if (checkWhitelist.data) {
                const response = await whiteListChecker('/checkWhitelistDB', walletData)
                //console.log ~ file: WhiteListChecker.js:25 ~ checkWhiteListAddress ~ response:", response)
                if (response.data.data.includes('holder')) {
                    setStatus('holder');
                }
                else if (response.data.data.includes('guaranteed')) {
                    setStatus('guaranteed')
                }
                else if (response.data.data.includes('whitelist')) {
                    setStatus('whitelist')
                }
            }
            else {
                setStatus('error')
            }
        } catch (error) {
            console.error("Error checking whitelist wallet:", error);
            setStatus('error');
        }
    };

    const handleSubmit = async () => {
        if (!walletAddress) {
            setStatus('emptyrequired');
            return;
        }

        setStatus('loading');
        try {
            const walletData = { wallet_address: walletAddress };
            const responseForCategory = await whiteListChecker('/checkWhitelistDB', walletData)
            //console.log ~ file: WhiteListChecker.js:55 ~ handleSubmit ~ responseForCategory:", responseForCategory.data)
            if (responseForCategory.data.status == true && responseForCategory.data.data.length >= 1) {
                const walletDataForCategory = { wallet_address: walletAddress, category: responseForCategory.data.data[0] };
                const response = await merkleProofApi("/root-hash", walletDataForCategory);
                // setTimeout(() => {
                checkWhiteListAddress(response.data.leaf, response.data.proof);
                // }, 1000);
            } else {
                setStatus('error');
            }

        } catch (error) {
            console.error("Error fetching Merkle proof:", error);
            setStatus('error');
        }
    };



    return (
        <>
            <NavigationBar />
            <main className="main">

                <div className="sec-whitelist-checker" style={{ backgroundImage: 'url(./assets/images/whitelist-checker-bg.jpg)' }}>
                    <div className="container">
                        <div className="card-whitelist">
                            <div className="card-whitelist-inner" style={{ backgroundImage: 'url(./assets/images/bg-whitelist.svg)' }}>
                                <img src="./assets/images/livery-top-line.png" alt="" draggable="false" className="whitelist-top-line" />
                                <div className="card-whitelist-title text-center">
                                    <span>Verify Whitelist </span>
                                </div>
                                <p>Check your Whitelist status by providing your Ethereum Address.</p>
                                <div className="form-group">
                                    <label>Enter your Ethereum Address</label>
                                    <div className="input-single">
                                        <input type="text" name="walletaddress" placeholder="Enter Your Ethereum Address" className="form-control" value={walletAddress} onChange={handleChange} />
                                    </div>
                                    <div className="text-center">
                                        <button onClick={handleSubmit} className="btn-secondary btn-fill">VERIFY</button>
                                    </div>
                                </div>
                                <img src="./assets/images/livery-bottom-line.png" alt="" draggable="false" className="whitelist-bottom-line" />
                            </div>
                        </div>
                        {status === 'holder' && (
                            <div className="card-congratulations">
                                <div className="card-congratulations-inner">
                                    <div className="item-box-main">
                                        <p className="m-0">
                                            Congratulations! You have a holder’s priority to mint 1 NFT. Holder’s mint starts 1st August, 10:00am UTC
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {status === 'guaranteed' && (
                            <div className="card-congratulations">
                                <div className="card-congratulations-inner">
                                    <div className="item-box-main">
                                        <p className="m-0">
                                            Congratulations! You have a Guaranteed Whitelist spot to mint 1 NFT. Whitelist (WL) mint starts 1st August, 12:00 UTC
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {status === 'whitelist' && (
                            <div className="card-congratulations">
                                <div className="card-congratulations-inner">
                                    <div className="item-box-main">
                                        <p className="m-0">
                                            Congratulations! You have a FCFS Whitelist spot to mint 1 NFT. Whitelist (WL) mint starts 1st August, 13:00 UTC
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="card-congratulations">
                                <div className="card-congratulations-inner">
                                    <div className="item-box-main">
                                        <p className="m-0">
                                        Unfortunately you do not have a reserved NFT. Public mint starts 1st August, 16:00 UTC
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
            {/* <main className="main">
                <div className="billing-detail">
                    <div className="container">
                        <div className="form-main">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" name="walletaddress" className="form-control" placeholder="walletaddress" value={walletAddress} onChange={handleChange} />
                                        {status === 'holder' && (
                                            <p style={{ marginBottom: '-1rem' }}>Congratulations! You have a holder’s priority to mint 1 NFT. Holder’s mint starts 1st August, 10:00am UTC</p>
                                        )}
                                        {status === 'guaranteed' && (
                                            <p style={{ marginBottom: '-1rem' }}>Congratulations! You have a Guaranteed Whitelist spot to mint 1 NFT. Whitelist (WL) mint starts 1st August, 13:00 UTC</p>
                                        )}
                                        {status === 'whitelist' && (
                                            <p style={{ marginBottom: '-1rem' }}>Congratulations! You have a Whitelist spot to mint 1 NFT. Whitelist (WL) mint starts 1st August, 14:00 UTC</p>
                                        )}
                                        {status === 'error' && (
                                            <p style={{ color: 'red', marginBottom: '-1rem' }}>Unfortunately you not have a reserved NFT. Public mint starts 1st August, 17:00 UTC</p>
                                        )}
                                        {status === 'loading' && (
                                            <p>Loading...</p>
                                        )}
                                        {status === 'notcorrectaddress' && (
                                            <p style={{ color: 'red', marginBottom: '-1rem' }}>This Address is not correct*</p>
                                        )}
                                        {
                                            status === 'emptyrequired' && (
                                                <p style={{ color: 'red', marginBottom: '-1rem' }}>required*</p>
                                            )
                                        }
                                        <label htmlFor="walletaddress">Wallet Address<span>*</span></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="user-auth">
                            <div className="d-flex align-items-center">
                                <Link onClick={handleSubmit} className="btn-primary btn-fill">
                                    <span className="inside">Check Whitelist</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main> */}
        </>
    )
}

export default WhiteListChecker;
