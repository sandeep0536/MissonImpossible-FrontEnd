import React from "react";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

const Collectiofaqs = () => {
    return (
        <>
            <NavigationBar />
            <main className="main">
                <div className="faq-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Frequently Asked Questions</h2>
                                <div className="faq-box">
                                    <h3>Payment</h3>
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="headingOne">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                How can I purchase my Mission: Impossible Livery NFT?
                                                </button>
                                            </h4>
                                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                <p>You can purchase your Mission: Impossible Livery NFT with Ethereum (mainnet) and using your Credit/Debit Card. We use Crossmint for our minting provider and Stripe as our card processing partner.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How do I create a wallet if I don’t have one?
                                                </button>
                                            </h4>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                               <p> Please see our tutorial video <a href="https://www.youtube.com/watch?v=RTM9Yr85vuA&t=6s" target="_blank">here</a> on how to create a MetaMask wallet. You will need your enter your wallet address on our website in order to mint your NFT. In the public sale, you do not need to create a wallet. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">
                                                What if I don’t have a wallet?
                                                </button>
                                            </h4>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>If you have won a whitelist, which you can check <a href="https://etihad.arcube.io/whitelistchecker">here</a>, you will need to mint your NFT using Ethereum and through the wallet provided for whitelist. </p>

                                                    <p>If you haven’t got a whitelist, our checkout provider, CrossMint, will create a wallet on your behalf if you don’t already have one. You can simply sign up with your email and password.</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How can I check if I am whitelisted?
                                                </button>
                                            </h4>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>You can enter your wallet address into our whitelist checker <a href="https://etihad.arcube.io/whitelistchecker">here.</a></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                How can I buy if I am not whitelisted?
                                                </button>
                                            </h4>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                   <p>There will be different “stages” of whitelisting, and our EY-ZERO1 NFT holders have the highest mint priority. After that, Guaranteed Whitelist and General Whitelist Addresses will have a limited time window to complete their sale. </p>

                                                   <p>If there are any NFTs remaining in stock after the Whitelist, they will be available for a Public Sale, to purchase without a whitelist. In the Public Sale, you can also purchase without a wallet, instead using your email and password. </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="headingFive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    Can I buy my NFT with Etihad Miles?
                                                </button>
                                            </h4>
                                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>You can buy your Etihad: Mission Impossible Livery NFT with Etihad Guest Miles or Miles + Cash from the Etihad Guest Store. Purchasing from the Etihad Guest Store also gives you access to the mint at the highest priority alongside the EY-ZERO1 NFT Holders.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="headingSix">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                What do I do if I am facing issues?
                                                </button>
                                            </h4>
                                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                   <p>Please contact our team who will be happy to help at <a href="mailto:info@arcube.org">info@arcube.org.</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="headingSeven">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                What countries are supported for card payments?
                                                </button>
                                            </h4>
                                            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                   <p>All countries are supported by our payment partner, Stripe. See details here <a href="https://stripe.com/docs/currencies" target="_blank">stripe.com/docs/currencies.</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <h3>Details</h3>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="heading8">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                                How many NFTs will there be in the Etihad: Mission Impossible collection?
                                                </button>
                                            </h4>
                                            <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                   <p>There are only 300 Etihad: Mission Impossible livery NFT pieces, all represented by the 3D model of Etihad’s 787-9 with the Mission: Impossible Dead Reckoning Part One livery. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="heading9">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                                What will the NFT look like?
                                                </button>
                                            </h4>
                                            <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                   <p>The NFT is a 3D model, in the form of a .glb file, to allow interactivity with the model itself. To see an example, you can view the EY-ZERO1 collection on OpenSea <a href="https://opensea.io/collection/ey-zero1">here.</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="heading10">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                                                What is the price of each NFT?
                                                </button>
                                            </h4>
                                            <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Each NFT is priced at $349 USD for non-holders, and $299 for whitelisted holders of the EY-ZERO1 NFT. Payment processing fees of 3-5% will be appliable on card transactions, and depends upon your country of purchase and value of sale. The fees will be available to view throughout the checkout process, and are calculated by Crossmint not Arcube. Gas fees will be applicable on payment in ETH. There are no additional fees or taxes on payments.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="heading11">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                                                When will the Etihad: Mission Impossible livery be available for purchase?
                                                </button>
                                            </h4>
                                            <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>The collection sale will be available for sale first by our EY-ZERO1 holders, who will be able to purchase from 1 August 2023 at <mark>10:00</mark> UTC. You can join our Discord here to keep up-to-date on key updates.</p>
                                                    <p>For those with a guaranteed whitelist, you can purchase from 1 August 2023 at <mark>12:00 UTC</mark> 
      For a first-come-first-server whitelist, you can purchase from 1 August <mark>13:00 UTC</mark></p>

      <p>At 16:00 UTC the public sale will open, where anyone can purchase without a whitelist.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="heading12">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                                How do I get a whitelist?
                                                </button>
                                            </h4>
                                            <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>There are many opportunities in our Discord and on Twitter to gain a whitelist. You can obtain an automatic whitelist if you are a holder of an EY-ZERO1 NFT. If you are not, please join our Discord 
                                                        <a href="https://www.discord.gg/etihad" target="_blank"> here</a> and file a ticket at the help-desk, and our team can help you get a whitelist. </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <h3>Utility</h3>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="heading13">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                                What perks come with the Mission: Impossible NFT?
                                                </button>
                                            </h4>
                                            <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Minters of a Mission: Impossible NFT will unlock immediate Etihad Guest Silver status that includes exclusive lounge access at Abu Dhabi International Airport, priority check-in at all airports, 25% bonus miles, extra baggage and much more benefits when flying Etihad which you can view <a href="https://www.etihadguest.com/en/our-programme/tiers-and-status.html" target="_blank">here.</a> You can either upgrade yourself to Silver Tier, or choose to gift the status to a family or friend.</p>

                                                    <p>All NFT holders will be invited to “stake” (lock-up) their NFTs and earn Etihad Miles as a reward. Using our staking platform, which will be released in September 2023. See the trailer video on our <a href="https://etihad.arcube.io">home page.</a> </p>

                                                    <p>In addition to a Silver Tier upgrade and Staking-for-Miles, minters will also be added to the Etihad: Virtual Club. This will give the member receiving the Silver Tier upgrade, the additional benefit of 10% bonus miles, addition to the FastTrack challenge, and a custom card design to view on <a href="https://www.etihadguest.com" target="_blank">
                                                    etihadguest.com.</a></p>

                                                    <p>Terms and Conditions apply. Silver status will be added to your account after you make your first booking and will be applied in time for you to enjoy the benefits before your first flight.</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="heading14">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                                                    What is the Staking Platform?
                                                </button>
                                            </h4>
                                            <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                   <p>The Staking platform is the next revolution in loyalty programs for Etihad Airways. 
To be revealed in September 2023, the platform will allow holders to view their NFTs, earn Miles, spend those miles on web3 and web2 benefits, or move into your Etihad Guest account where they can be spent on free flights, upgrades, hotels and retail outlets within the UAE.</p>

<p>View our platform trailer <a href="https://www.youtube.com/watch?v=4ZHN1k6Y8bc" target="_blank">here.</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="heading15">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                                                What is the FastTrack Challenge?
                                                </button>
                                            </h4>
                                            <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>For flights flown until 31st Dec 2023, an Etihad: Virtual Club member will be promoted from Silver to Gold Tier status with only flying four business segments or eight Economy segments. A segment is described as 1 flight, such as London to Abu Dhabi. A return trip from London to Manila via Abu Dhabi consists of 4 segments.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="heading16">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                                                Where can I see my NFTs?
                                                </button>
                                            </h4>
                                            <div id="collapse16" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                   <p>Once you have purchased your NFT and it has been minted, you will be able to see your NFTs within your wallet and on OpenSea, once you connect your wallet and go to your profile. You can also see your NFTs on our staking platform, when released in September. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="heading17">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                                                Can I sell my Mission: Impossible NFTs?
                                                </button>
                                            </h4>
                                            <div id="collapse17" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                   <p>After purchasing your Mission: Impossible NFT, you will be able to sell or trade it on any secondary marketplace that supports the Polygon chain, such as OpenSea. The Etihad Guest Silver status is not transferrable and will remain with the first owner even if the NFT is sold. </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="heading18">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
                                                Can NFTs be returned or refunded?
                                                </button>
                                            </h4>
                                            <div id="collapse18" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                   <p>All NFT sales are final and cannot be returned or refunded. For more information please see EY-ZERO1 terms and conditions.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="heading19">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
                                                How do I enter a Manchester City F.C. or Mission: Impossible Model giveaway?
                                                </button>
                                            </h4>
                                            <div id="collapse19" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                   <p>You can join our Discord <a href="https://www.discord.gg/etihad" target="_blank">here</a>, where coming up to the mint there will be lots of giveaways and it is also your opportunity to join our community and interact with other holders.</p>
                                                </div>
                                            </div>
                                        </div>

                                        
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Collectiofaqs;
