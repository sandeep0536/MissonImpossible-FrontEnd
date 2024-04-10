import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
const Footer = () => {
    useEffect(() => {
        Aos.init({
            disable: function () {
                var maxWidth = 768;
                return window.innerWidth < maxWidth;
            }
        });
    }, [])
    return (
        <>
            <footer className="footer">
                <div className="top-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="footer-box" data-aos="fade-up" data-aos-duration={1000} data-aos-once="true">
                                    <h4>About Etihad Airways</h4>
                                    <ul>
                                        <li><a href="https://www.etihad.com/en/" target="_blank">Book a Flight <i className="bi bi-box-arrow-up-right ms-1" /></a></li>
                                        <li><a href="https://www.etihad.com/en/destinations" target="_blank">Where we Fly <i className="bi bi-box-arrow-up-right ms-1" /></a></li>
                                        <li><Link to="/">Mission Impossible NFT</Link></li>
                                        <li><a href="https://opensea.io/collection/ey-zero1" target="_blank">EY-ZERO1 NFT <i className="bi bi-box-arrow-up-right ms-1" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-box" data-aos="fade-up" data-aos-duration={1500} data-aos-once="true">
                                    <h4>Explore Etihad’s Web3 Journey</h4>
                                    <ul>
                                        <li><a href="https://www.arcube.org/" target="_blank">About Arcube <i className="bi bi-box-arrow-up-right ms-1" /></a></li>
                                        <li><a href="/collectionFAQs">FAQ</a></li>
                                        <li><a href="https://www.discord.gg/etihad" target="_blank">Join our Community <i className="bi bi-box-arrow-up-right ms-1" /></a></li>
                                        <li><a href="/terms">Terms and Conditions</a></li>
                                        <li><a href="/policy">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <ul className="footer-logo-right d-flex align-items-center justify-content-center justify-content-md-end" data-aos="fade-up" data-aos-duration={2000} data-aos-once="true">
                                    <li><Link to="/"><img src="./assets/images/etihad-footer-logo.svg" alt /></Link></li>
                                    <li><Link to="/"><img src="./assets/images/arcube-footer-logo.svg" alt /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mid-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="social-footer justify-content-center d-flex align-items-center">
                                    <li data-aos="zoom-in" data-aos-duration={1000} data-aos-once="true"><a href="https://www.discord.gg/etihad" target="_blank"><img src="./assets/images/eth-discord-icon.svg" alt /></a></li>
                                    <li data-aos="zoom-in" data-aos-duration={1500} data-aos-once="true"><a href="https://www.instagram.com/arcubeNFT" target="_blank"><img src="./assets/images/instagram.svg" alt /></a></li>
                                    <li data-aos="zoom-in" data-aos-duration={2000} data-aos-once="true"><a href="https://www.twitter.com/etihadNFT" target="_blank"><img src="./assets/images/twitter.svg" alt /></a></li>
                                    <li data-aos="zoom-in" data-aos-duration={2500} data-aos-once="true"><a href="https://www.twitter.com/arcubeNFT" target="_blank"><img src="./assets/images/arcube-icon.svg" alt /></a></li>
                                    <li data-aos="zoom-in" data-aos-duration={3000} data-aos-once="true"><a href="mailto:info@arcube.org"><img src="./assets/images/icon-mail.svg" alt /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="container">
                        <div className="row flex-wrap align-items-center justify-content-between">
                            <div className="col-md-12 d-md-flex align-items-center">
                                <div className="logo-arcube text-center text-md-left">
                                    <img src="./assets/images/footer-logo.svg" alt />
                                </div>
                                <div className="footer-img text-center ms-auto">
                                    <img src="./assets/images/abu-logo.svg" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer;
