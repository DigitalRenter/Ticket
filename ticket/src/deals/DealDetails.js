import React, {Component} from 'react';

class DealDetails extends Component{
	render(){
		return(
			<div>
				<section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
		            <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
		              <div className="mdl-card__supporting-text">
		                <h4>Request Title</h4>
		                <h6>Full  description</h6>
		                  The description o the request given goes here in full details with nothing left out so that comment below can relate to it properly 
		              </div>
		            </div>
		            <button className="mdl-button mdl-js-button mdl-js-ripple-effect" id=dealid>
		             <a>purchase</a>        
		            </button>
		            <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right" for=dealid>
		              <li className="mdl-menu__item">Delete</li>
		              <li className="mdl-menu__item" disabled>Remove</li>
		              <li className="mdl-menu__item">View</li>
		            </ul>
	            </section>

			</div>
		)
	}
}