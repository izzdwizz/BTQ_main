import React, { useState} from 'react';
import classes from './Grid.module.css';
import {Container,Row, Col} from "react-bootstrap";
import Tab from './Tab'


function Auto() {

  const [Preference, setPreference] = useState('');
  const [leverage, setLeverage] = useState('');
  const text1 = "16dFcd4migQWoP4vwykApVg5EsCGYNd5G1";


  
  return (
    <div className={classes.card}>

        <Row>
                <div className={classes.css_rec}>
                    Recommended parameters are automatically generated based on technical analysis of the symbol price
                <a href="#" target="_blank" class={classes.css_det}> Details</a>
                </div>


        </Row>

            <Row className={classes.css_tp}>
            <div data-bn-type="text" className={classes.css_18k}>Time period</div>

                <div className={classes.css_ego2}>
                <div data-bn-type="text" className={classes.css_ego}>7D</div>
                <div data-bn-type="text" className={classes.css_ego}>30D</div>
                <div data-bn-type="text" className={classes.css_ego}>180D</div>
          </div>
            
            </Row>
            <Container className={classes.css_formcont}>
                <div className={classes.css_1y}>

                <div className={classes.css_formcontainer}>

                            <Row className={classes.css_rowcont}>
                                <span className={classes.css_parname}>Lower Price </span>

                                <span className={classes.css_parval}>51235.23</span>

                                
                            </Row>
                                

                            <Row className={classes.css_rowcont}>

                            <span className={classes.css_parname}>Upper Price </span>

                            <span className={classes.css_parval}>34123.53 </span>

                            

                            </Row>

                            <Row className={classes.css_rowcont}>

                            <span className={classes.css_parname}>Grid Number </span>

                            <span className={classes.css_parval} id={classes.grid_span}>33 </span>


                            </Row>


                            <Row className={classes.css_r8}>
                
                <div className={classes.grid_profit_value_container}>
                <div className={classes.css_75}>
                    <div className={classes.css_bas}>
                    <span>Profit/Grid (fees deducted)</span>
                    </div>
                    <div className={classes.grid_profit_value}> 0.53% - 0.75%</div>
                </div>

                
                </div>

            </Row>  


            <Tab/>

                  <Row className={classes.css_pref}>
                  <div className={classes.css_pref}> 
                    
                    <select  className={classes.select} value={Preference} onChange={(e) => setPreference(e.target.value)}>
                <option  value="bnb"><p className="option">Cross</p></option>
                <option  value="btc"><p className="option">Isolated</p></option>
                
            </select>
            
            </div>

            <div>
                  <select  className={classes.select} value={leverage} onChange={(e) => setLeverage(e.target.value)}>
                <option  value="10X"><p className="option">10X</p></option>
                <option  value="20X"><p className="option">20X</p></option>
                <option  value="30X"><p className="option">30X</p></option>
                <option  value="40X"><p className="option">40X</p></option>
                <option  value="50X"><p className="option">50X</p></option>
                
                
            </select>

            </div>

                    
                  </Row>

                 

                  <Row className={classes.invest_coin}>
                    <div className={classes.invest_coins}><p>Order key</p></div>

                    <div className={classes.Invest_area}><img src='https://cryptologos.cc/logos/binance-usd-busd-logo.png?v=023'/> </div>
                  </Row>


                  <Row className={classes.row_bal}>
                    <div className={classes.balance}>
                      <p>
                        <em>Copy trade order key generated below</em> 
                      </p>

                      </div>

                  </Row>

                  <Row>

                  
                  
                    <div className={classes.css_fky} >
                    <div className={classes.clip}>
                                  <Form.Control
                                  className={classes.input}
                                  type="text"
                                  placeholder="16dFcd4migQWoP4vwykApVg5EsCGYNd5G1"
                                  aria-label="Disabled input example"
                                  readOnly
                                />

                              <button onClick={() => {
                                  navigator.clipboard.writeText(text1);}}>

                              <FiClipboard/>
                              
                              </button>
                       </div>
                    
                    </div>
               

                

                 
                  </Row>
                                    
                  

                  <Row>
                    <div className={classes.footer}>
                      <button type='submit' >Place Order</button>
                    </div>
                  </Row>
                            </div>


                           

                    
                </div>
                
                
            </Container>

          
        </div>
  )
}

export default Auto
