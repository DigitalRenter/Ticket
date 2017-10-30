import React, { Component } from 'react';

class ClosedDeal extends Component{
  constructor(props){
  super(props);

  this.state ={
    deals:[]
  }

}
  render(){

    var result =  this.state.deals.map(deal=>{
      return  ( <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
              <div className="mdl-card__supporting-text">
                <h4>{deal.title}</h4>
                <h6>small description</h6>
                  {deal.description}
              </div>
              <div className="mdl-card__actions">
                <a href="/details{deal.id}" className="mdl-button">View Full Discursion</a>
              </div>
            </div>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect" id={deal.id}>
             <a>options</a>
              
            </button>
            <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right" for={deal.id}>
              <li className="mdl-menu__item">Delete</li>
              <li className="mdl-menu__item" disabled>Remove</li>
              <li className="mdl-menu__item">View</li>
            </ul>
          </section>);

    });

    return(
      <div>
        Closed Deals<br />
         Closed Deals<br />
          Closed Deals<br />
         {result}
        
      </div>
    );
  }

  componentDidMount(){
      this.setState({deals:[
          {
            id:1,
            title: "house needed",
            description: "Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse."
          },
          {
            id:2,
            title: "house Wanted at malingo",
            description: "Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse."
          },

          {
            id:3,
            title: "house needed at checkpoint",
            description: "Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse."
          },
          {
            id:4,
            title: "urgent search of Empty room",
            description: "Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse."
          }
          ],
        })
  }

}
export default ClosedDeal;