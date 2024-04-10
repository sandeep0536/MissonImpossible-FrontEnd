import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/Navbar';
const ErrorComp = () => {

  return (
    <>
    <NavigationBar/>
      <div>
        <div className="pt-110 gray__bg">
          <div className="container" >
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-md-6">
                <div className="order_form_section">
                  <div className=" billing_detail_head">
                    Message
                  </div>
                  <code id="msg">
                  </code>
                  <div id="err">
                  </div>
                  <div className="billing_form">
                    <div className="text-center bg-white "
                      key={"Danger"}>
                      <Card.Header className='text-danger card-title h5'>404 Error</Card.Header>
                      <Card.Body>
                        <Card.Text className='text-danger'>
                          Something Went Wrong Please Try After Some Time.
                        </Card.Text>
                        <div className='row justify-content-center'>
                          <Button className='btn' ><Link to={'/'} >Back To Checkout Page</Link></Button>
                        </div>
                      </Card.Body>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErrorComp;

