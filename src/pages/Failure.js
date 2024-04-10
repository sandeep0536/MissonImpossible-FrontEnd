import React, { useEffect } from "react";
import { failedPageApi } from "../services/apiServices";
const FailurePage = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = window.location.href;
                const urlParams = new URLSearchParams(new URL(url).search);
                const paramValue = urlParams.get("p");
                const bodyData = JSON.parse(paramValue);
                const response = await failedPageApi("/failed-transaction", bodyData[0]);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            {/* <div className='container'>
                <h1>FailurePage</h1>
                <p>This is the FailurePage of our application.</p>
            </div> */}
            <main className="main">
                <div className="sec-mint-main card-section">
                    <div className="container">
                        <div className="card-black card-box text-center">
                            <h2>MINT ERROR</h2>
                            <p>There has been an issue while minting your Etihad: Mission <br /> Impossible Livery NFT, please try again or contact our support on <br /> Discord.</p>
                            <p><strong> Order Details</strong></p>
                            <ul>
                                <li><span>Order Status:</span> <span>UNCONFIRMED</span></li>
                                <li><span>Wallet Address:</span> <span>0x000000000000000000000000000000</span></li>
                                <li><span>Error ID:</span> <span>[Error ID]</span></li>
                                <li><span>Error Message:</span> <span>Minting failed</span></li>
                            </ul>
                        </div>
                        <a href="#" className="btn back-to-home text-center">
                            <span>Return to Home</span>
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}
export default FailurePage;