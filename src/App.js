import logo from './assets/paymentspring_logo.svg';
import callFlow from './assets/crypto-callflow.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div class="py-5">
          <div class="container">
            <div class="row">
              <div class="text-center col-md-7 mx-auto">
                <h2><b>Conquer Crypto Payments</b></h2>
                <p class="lead">Enable customers to accept new forms of payment&nbsp;<br />Innovate in an emerging payment space</p>
              </div>
            </div>
          </div>
        </div>


      <div class="">
        <div class="container">
          <div class="row">
            
            
            <div class="col-md-4 order-md-2 border border-success bg-warning">
                <ul class="nav nav-tabs">
                  <li class="nav-item"> <a href="" class="active nav-link" data-toggle="pill" data-target="#tabone"> Login </a> </li>
                  <li class="nav-item"> <a class="nav-link" href="" data-toggle="pill" data-target="#tabtwo"> Pledge </a> </li>
                  <li class="nav-item"><a class="nav-link" href="" data-toggle="pill" data-target="#tabthree" > Donate </a></li>
                </ul>
         
		            <div class="tab-content mt-2">
            <div class="tab-pane fade show active" id="tabone" role="tabpanel" >
              <p class="">login</p>			  
			      </div>
            <div class="tab-pane fade" id="tabtwo" role="tabpanel">
              <h4 class="d-flex justify-content-between mb-3"> <span class="text-muted">Enter Your Donation Amount</span> </h4>
                    <div class="row text-center"></div>
                    <div class="row">
                      <div class="col-md-12 text-right">
                        <form class="form-inline text-center">
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="0.25" />
                            <div class="input-group-append">
                              <div class="btn-group">
                                <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown"> Bitcoin</button>
                                <div class="dropdown-menu"> <a class="dropdown-item" href="#">Action</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="row">
                          <div class="col-md-6">
                            <p class="text-monospace">&nbsp;</p>
                          </div>
                          <div class="col-md-6">
                            <p class="text-monospace"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 text-right"><a class="btn btn-primary" href="#">Continue</a></div>
                    </div>
                    <div class="row">
                      <div class="col-md-12" >
                        <form class="form-inline">
                          <div class="input-group">
                          </div>
                        </form>
                      </div>
                    </div>
            </div>
            <div class="tab-pane fade" id="tabthree" role="tabpanel">
			        <p class="text-center">Use the address below to donate 0.25 BTC from your wallet.</p><img class="img-fluid d-block rounded-circle" src="https://static.pingendo.com/img-placeholder-3.svg" />
              <p class="text-center">edr2t45afs423fdgdfsdf</p>
              <p class="text-center">Please note that your donation will clear even if you donate a different amount than you pledged.</p>
            </div>
          </div>          
            </div>

            
            <div class="col-md-8 order-md-1">
            <h4 class="mb-3"><b>Presentation</b></h4>
            <div class="row">
              <div class="col-md-12"><img class="img-fluid d-block" src={callFlow} />
                <ul class="pagination">
                  <li class="page-item"> <a class="page-link" href="#"> <span>«</span></a> </li>
                  <li class="page-item active"> <a class="page-link" href="#">1</a> </li>
                  <li class="page-item"> <a class="page-link" href="#">2</a> </li>
                  <li class="page-item"> <a class="page-link" href="#">3</a> </li>
                  <li class="page-item"> <a class="page-link" href="#">4</a> </li>
                  <li class="page-item"> <a class="page-link" href="#"> <span>»</span></a> </li>
                </ul>
              </div>
            </div>
            </div>
      
      
          </div>
        </div>
      </div>  

    </div>





  );
}

export default App;
