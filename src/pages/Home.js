import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import LaunchCountdown from './LaunchCountDown';
import { useNavigate } from 'react-router-dom';
import {
  setWalletConnect,
  setAddress,
  setAddressStatus
} from '../Redux-toolkit/reducers/navigation';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import Aos from 'aos';


function Home() {
  const isActive = true;
  const navigate = useNavigate();
  const [metaMaskExtention, setMetaMaskExtention] = useState(false);
  const dispatch = useDispatch();
  const { addressStatus } = useSelector(state => state.navigation);

  useEffect(() => {
    Aos.init({
      disable: function () {
        var maxWidth = 768;
        return window.innerWidth < maxWidth;
      }

    });
    // if (window.ethereum) {
    //   if (localStorage.getItem('walletConnected') == 'false') {
    //     dispatch(setWalletConnect(false))
    //   }
    //   else if (window.ethereum.selectedAddress != null) {
    //     dispatch(setWalletConnect(true))
    //   }
    //   else {
    //     dispatch(setWalletConnect(false))
    //     localStorage.setItem('walletConnected', JSON.stringify(false));
    //   }
    // }
    // else {
    //   setMetaMaskExtention(true)
    //   localStorage.setItem('walletConnected', JSON.stringify(false));
    // }

  }, [])
  const WalletConnect = async () => {
    if (window.ethereum) {
      try {
        const [address] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        dispatch(setAddress(address));
        dispatch(setWalletConnect(true));
        // localStorage.setItem('walletConnected', JSON.stringify(true));
        // window.location.reload('http://localhost:3000/crossmint')
        // ${window.location.href}crossmint

        navigate("/wpkrj-checkout")

        // window.open(
        //   `${window.location.href}crossmint`,
        //   '_self' // <- This is what makes it open in a new window.
        // );
        await Promise.all([
          // accountChangeHandler(address),
          // getWalletTokenTypes(new Web3(provider)),
        ]);
      } catch (error) {
        // handleWalletError('Error connecting to wallet:', error);
      }
    } else {
      // setMetaMaskExtention(true)
    }
  };

  const WalletDisconnect = () => {
    // if (window.ethereum && window.ethereum.selectedAddress) {
    dispatch(setWalletConnect(false));
    dispatch(setAddressStatus(false))
    //localStorage.setItem('walletConnected', JSON.stringify(false));
    dispatch(setAddress(''))
    // }
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMetaMaskExtention(false)
  };

  return (
    <>
      <NavigationBar />
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={metaMaskExtention} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Meta mask extention are required
          </Alert>
        </Snackbar>
      </Stack>
      <main className="main">
        <div className="hero-banner text-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <div className="content-box-banner">
                  <div className="animated-heading">
                    <div className="d-md-flex">
                      <div className="banner-text">
                        <h1> Etihad: Mission Impossible Livery </h1>
                        <p>Get ready for our ultra-exclusive 300-piece NFT collection featuring the new M:I Livery.</p>
                      </div>
                      <div className="sec-countdown-main ms-md-auto">
                        <p>Launch Countdown</p>
                        {/* <div id="bid-counter"></div> */}
                        <LaunchCountdown />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <a href="#see-benefits" className="btn-secondary">
                      See Benefits
                    </a>
                    <a href='https://opensea.io/collection/ey-mi-1' className="btn-secondary btn-fill">
                      Checkout Page
                    </a>
                  </div>
                </div>
                <div className="sec-act-group">
                  <div className="background-layer" style={{ backgroundImage: 'url(./assets/images/layer-bg-1.png)' }}></div>
                  <div className="d-flex align-items-center item-list">
                    <div className="item-box">
                      <div className="item-box-inner">
                        <div className="tag-wrap">
                          <span className="d-block">1 August</span>
                          <p>Release date</p>
                        </div>
                      </div>
                    </div>
                    <div className="item-box">
                      <div className="item-box-inner">
                        <div className="tag-wrap">
                          <span className="d-block">300</span>
                          <p>Total Supply</p>
                        </div>
                      </div>
                    </div>
                    <div className="item-box">
                      <div className="item-box-inner">
                        <div className="tag-wrap">
                          <span className="d-block">$350</span>
                          <p>Mint Price</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="banner-lead-text">
                  <span>*EY-ZERO1 NFT Holder’s Price: $299</span>
                </div>
                <div className="text-center">
                  <a href="#press-spacebar" className="btn-single">
                    <img src="./assets/images/line-top.png" alt="" className="topline" />
                    <img src="./assets/images/line-bottom.png" alt="" className="btmline" />
                  </a>
                </div>
              </div>
            </div>
            <div className="powered-by">
              <a href=""><img src="./assets/images/powered-by.png" draggable="false" alt="" /></a>
            </div>
          </div>
          <div className="background-video">
            <video width="100%" height="100%" autoPlay muted >
              <source src="./assets/video/video-mi7-plane-inverted.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="sec-our-mission" id="see-benefits">
          <div className="container">
            <div className="row m-0">
              <div className="col-md-4">
                <div className="view-box-video" data-aos="fade-up" data-aos-duration={1000} data-aos-once="true">
                  <p>Get ready for a new <span>mission!</span></p>
                  <div className="trailer-box">
                    <img src="./assets/images/trailer-top-line.png" alt draggable="false" className="trailer-top-line" />
                    <div className="trailer-box-inner">
                      <a href="https://www.youtube.com/watch?v=avz06PDqDbM" target="_blank"><img src="./assets/images/video-preview.png" alt draggable="false" /></a>
                    </div>
                    <img src="./assets/images/trailer-bottom-line.png" alt draggable="false" className="trailer-bottom-line" />
                  </div>
                </div>

              </div>
              <div className="col-md-8">
                <div className="block-figure">
                  <div className="d-md-flex justify-content-center justify-content-lg-end">
                    <div className="card-simple-figure" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                      <div className="card-simple-wrapper">
                        <div className="card-simple-inner">
                          <img src="./assets/images/img-1.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="card-simple-figure" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                      <div className="card-simple-wrapper">
                        <div className="card-simple-inner">
                          <img src="./assets/images/img-2.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-mint-detail" id="press-spacebar">
          <div className="container">
            <div className="d-lg-flex">
              <div className="mint-col-8">
                <div className="blog-mint" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                  <div className="ming-img">
                    <div className="ming-inner">
                      <img src="./assets/images/mint-img.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mint-col-4">
                <div className="aside-mint">
                  <div className="aside-mint-list">
                    <div className="list-item" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                      <div className="list-item-box">
                        <div className="list-item-box-inner">
                          <h4>Gain Early Access</h4>
                          <p>A limited supply of 300 NFTs. With an EY-ZERO1 NFT, you can secure your mint and get a discount!</p>
                        </div>
                      </div>
                    </div>

                    <div className="list-item" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                      <div className="list-item-box">
                        <div className="list-item-box-inner">
                          <h4>Real-World Travel Rewards</h4>
                          <p> Gain premium travel benefits when you fly Etihad Airways, on the ground and in the sky.</p>
                        </div>
                      </div>
                    </div>

                    <div className="list-item" data-aos="fade-up" data-aos-duration="2500" data-aos-once="true">
                      <div className="list-item-box">
                        <div className="list-item-box-inner">
                          <h4>Official Etihad Airways Collection</h4>
                          <p> Our 11th Livery in the digital Etihad Airways fleet, designed after our real life planes!  </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sec-video-trailer" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div className="container">
            <div className="block-header text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              <h2>See Inside the Etihad Horizon Club</h2>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="video-box text-center">
                  <iframe width={560} height={315} src="https://www.youtube.com/embed/4ZHN1k6Y8bc" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade modal-video" id="myModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <button type="button" className="text-white p-0" data-bs-dismiss="modal" aria-label="Close">
                <i className="bi bi-x-lg"></i>
              </button>
              <div className="modal-body p-1">
                <video controls id="video1" autoPlay="" width="100%">
                  <source src="./assets/video/video-mi7-plane-inverted.mp4" type="video/mp4" />
                  Your browser doesn't support HTML5 video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="sec-get-ready">
          <div className="container">
            <div className="block-header text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              <h2>Unlock unmatched benefits with every NFT!</h2>
            </div>
            <div className="feature-row d-flex align-items-center">
              <div className="feature-column" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <div className="d-md-flex flex-wrap feature-wrap">
                  <div className="feature-box">
                    <div className="feature-box-inner">
                      <div className="feature-box-content">
                        <div className="icon-box">
                          <img src="./assets/images/icon-feture.png" alt="" />
                        </div>
                        <div className="lower-content">
                          <h2>Upgrade to Etihad Guest Silver Tier</h2>
                          <p>
                            Get an upgrade to Etihad Guest Silver status and earn priority check-in, lounge access in Abu Dhabi, extra baggage and extra miles, along with
                            <a href="https://www.etihadguest.com/en/our-programme/tiers-and-status.html" target="_blank" className="text-underline"> 6+ other benefits!**</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feature-box">
                    <div className="feature-box-inner">
                      <div className="feature-box-content">
                        <div className="icon-box">
                          <img src="./assets/images/icon-feture.png" alt="" />
                        </div>
                        <div className="lower-content">
                          <h2>Stake-For-Miles
                            Program</h2>
                          <p>Launching in September, stake your Mission: Impossible NFT to earn Etihad Guest Miles, to spend on flights, upgrades, sports game tickets and <a href="https://www.etihadguest.com/en/spend-miles.html" target="_blank" className="text-underline">much more!</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feature-box">
                    <div className="feature-box-inner">
                      <div className="feature-box-content">
                        <div className="icon-box">
                          <img src="./assets/images/icon-feture.png" alt="" />
                        </div>
                        <div className="lower-content">
                          <h2>Join the Etihad Virtual Club</h2>
                          <p>The exclusive identity for NFT buyers. </p>
                          <p>Obtain 10% extra miles, fast-track to Gold status and a custom Etihad loyalty card design! </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animation-column" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-aos-once="true">
                <div className="video-clip">
                  <div className="video-clip-inner">
                    <div className="vido-bg">
                      <video width="365px" height="365px" autoPlay muted loop>
                        <source src="./assets/video/video-nft.mp4" type="video/mp4" />
                        {/* <source src="movie.ogg" type="video/ogg" /> */}
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="livery-section" style={{ backgroundImage: 'url(./assets/images/livery-banner.jpg)' }}>
          <div className="container">
            <div className="block-header">
              <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Mission Impossible Livery</h2>
              <p data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Join Etihad as the official airline partner of Mission: Impossible Dead Reckoning, on our 11th livery NFT release!</p>
            </div>
            <div className="slider-block" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
              <div className="owl-carousel owl-theme video-slider">
                <div className="item-video">
                  <div className="item-single">
                    <iframe width={560} height={315} src="https://www.youtube.com/embed/aXLg7tDsFY8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                  </div>
                </div>
                <div className="item-video">
                  <div className="item-single">
                    <iframe width={560} height={315} src="https://www.youtube.com/embed/-lkzkbk0_1k" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                  </div>
                </div>
                <div className="item-video">
                  <div className="item-single">
                    <iframe width={560} height={315} src="https://www.youtube.com/embed/kxjHx2v5Y_4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                  </div>
                </div>
                <div className="item-video">
                  <div className="item-single">
                    <iframe width={560} height={315} src="https://www.youtube.com/embed/aXLg7tDsFY8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                  </div>
                </div>
                <div className="item-video">
                  <div className="item-single">
                    <iframe width={560} height={315} src="https://www.youtube.com/embed/J1E21f2zqIw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                  </div>
                </div>
              </div>

            </div>
            <div className="sec-widgets">
              <div className="booking-fixed">
                <img src="./assets/images/livery-top-line.png" alt="" draggable="false" className="livery-top-line" />
                <div className="background-layer" style={{ backgroundImage: 'url(./assets/images/layer-bg-2.png)' }}></div>
                <div className="livery-booking">
                  <div className="inner-livery-booking">
                    <div className="livery-box d-flex align-items-center flex-wrap">
                      <div className="livery-item" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        <h3>Lounge Access</h3>
                        <span>In Abu Dhabi*</span>
                      </div>
                      <div className="livery-item" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                        <h3>Priority Check-In</h3>
                        <span>For All Buyers*</span>
                      </div>
                      <div className="livery-item" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                        <h3>Stake-For-Miles</h3>
                        <span>Released Sept '23</span>
                      </div>
                      <div className="livery-item" data-aos="fade-up" data-aos-duration="2500" data-aos-once="true">
                        <h3>25% Extra Miles</h3>
                        <span>On Every Flight*</span>
                      </div>
                    </div>
                  </div>
                </div>
                <img src="./assets/images/livery-bottom-line.png" alt="" draggable="false" className="livery-bottom-line" />
              </div>
            </div>
          </div>
        </div>

        <div className="button-group-layer">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <a href="https://www.etihad.com/en-gb/campaigns/mission-impossible?intcid=mi7-landing-page" target="_blank" className="btn-secondary" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <span className="underline-btn">Etihad Press Release</span>
              </a>
              <a href='https://opensea.io/collection/ey-mi-1' className="btn-secondary btn-fill" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                Checkout Page
              </a>
            </div>
          </div>
        </div>
        <div className="text-middle-lead">
          <div className="container">
            <p>* = Benefits will be received when an Etihad Silver member. ** = Etihad Silver Status will be credited to your account when you book your first flight.</p>
          </div>
        </div>

        <div className="discord-section" id="join-discord">
          <div className="container">
            <div className="inner-outline">
              <div className="inside-outline" style={{ backgroundImage: 'url(./assets/images/discord-bg.jpg)' }}>
                <div className="fixed-outline">
                  <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Join our Discord and become a part of the crew. <br />
                    Gain access to our Holder’s-only channels and giveaways!</p>
                  <a href="https://www.discord.gg/etihad" target="_blank" className="btn-secondary btn-fill" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true"><span className="underline-btn">Join Discord Community</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
