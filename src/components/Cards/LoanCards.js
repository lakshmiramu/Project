import React from 'react'
import {Link} from 'react-router-dom'



const LoanCards = () => {
    return <React.Fragment>
<h1 className='text-center text-danger text-capitalize'>
    {" "}
    Welcome to make loan {" "}
    </h1>
<div className="container">
  <div className="row">
    <div className="col-sm">
    <div class="card" >
  <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Car Loan</h5>
    <p class="card-text">Car loan is a financial assistance taken to purchase a car with minimal initial payment from your own pocket. The borrowed money from the lender can be repaid in equal monthly instalments over a period of time with an agreed rate of interest.A consumer borrows in order to purchase a car.</p>
    
    
  </div>
</div>
    </div>
    <div className="col-sm">
    <div class="card" >
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Home Loan</h5>
    <p class="card-text">A house loan or home loan simply means a sum of money borrowed from a financial institution or bank to purchase a house. Home loans consist of an adjustable or fixed interest rate and payment terms. ... The property is mortgaged to the lender as a security till the repayment of the loan.</p>
   
    
  </div>
</div>
    </div>
    <div className="col-sm">
    <div class="card" >
  <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Education loan</h5>
    <p >An education loan is a sum of money borrowed to finance post-secondary education or higher education-related expenses. Education loans are intended to cover the cost of tuition, books and supplies, and living expenses while the borrower is in the process of pursuing a degree.</p>
    
    
  </div>
</div>
    </div>
  </div>
</div>
    </React.Fragment>
};
export default LoanCards;