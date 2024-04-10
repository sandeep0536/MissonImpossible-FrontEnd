import React, { useState, useEffect } from "react";
import { successPageApi } from "../services/apiServices";
import { Link } from "react-router-dom";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";

const SuccessPage = ({ data }) => {
    const [collectionId, setCollectionId] = useState('');
    const [walletAddress, setWalletAddress] = useState('');
    const [status, setStatus] = useState('');
    const [tokenIds, setTokenIds] = useState([]);
    const [txIds, setTxIds] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = window.location.href;
                const urlObj = new URL(url);
                const queryParams = Object.fromEntries(urlObj.searchParams);

                const urlParams = new URLSearchParams(new URL(url).search);
                //console.log(urlParams.getAll())
                // Extract name, email, and ethihadGuestNumber from the URL
                const name = urlParams.get("name");
                const email = urlParams.get("email");
                const ethihadGuestNumber = JSON.parse(decodeURIComponent(queryParams.ethihadGuestNumber.split("?p=")[1]));
                console.log("🚀 ~ file: Success.js:28 ~ fetchData ~ ethihadGuestNumber:", ethihadGuestNumber)

                ethihadGuestNumber[0]["name"] = name;
                ethihadGuestNumber[0]["email"] = email;
                ethihadGuestNumber[0]["ethihadGuestNumber"] = queryParams.ethihadGuestNumber.split("?p=")[0]
                console.log("🚀 ~ file: Success.js:28 ~ fetchData ~ ethihadGuestNumber:", ethihadGuestNumber)
                setCollectionId(ethihadGuestNumber[0].collectionId);
                setWalletAddress(ethihadGuestNumber[0].walletAddress);
                setTokenIds(ethihadGuestNumber[0].tokenIds);
                setTxIds(ethihadGuestNumber[0].txId);
                if (ethihadGuestNumber[0].status === "success") {
                    setStatus("CONFIRMED");
                }
                await successPageApi("/success-transaction", ethihadGuestNumber[0]);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <NavigationBar />
            <main className="main">
                <div className="sec-mint-main card-section">
                    <div className="container">
                        <div className="card-black card-box text-center">
                            <h2>MINT SUCCESS</h2>
                            <p>Congratulations! You have successfully minted a <br />
                                Etihad: Mission Impossible Livery NFT.</p>
                            <p><strong> Order Details</strong></p>
                            <ul>
                                <li><span>Order Status:</span> <span>{status}</span></li>
                                <li><span>Wallet Address:</span></li>
                                <li><span>{walletAddress}</span></li>
                                <li><span>Token ID:</span> <span>{[tokenIds]}</span></li>
                                <li>
                                    <span>Blockchain Transaction Confirmation:</span>{" "}
                                    <a href={`https://polygonscan.com/tx/${txIds}`} target="_blank" rel="noopener noreferrer">
                                        {`https://polygonscan.com/tx/${txIds}`}
                                    </a>
                                </li>
                                <li><span>Collection ID:</span> <span>{collectionId}</span></li>
                            </ul>
                        </div>
                        <Link to="/" className="btn back-to-home text-center">
                            <span>Return to Home</span>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default SuccessPage;
