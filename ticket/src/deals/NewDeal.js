import React, { Component } from 'react';
// import $ from 'jquery';
var MDL = require('mdl-reactjs');
var Button = MDL.Button;

class NewDeal extends Component{

  constructor(props) {
    super(props);
    this.state = {
      req_username: '',
      req_useremail: '',
      req_userphone: '',
      req_usersocialname: '',
      description: '',
    };

  this.handleSubmit = this.handleSubmit.bind(this);
  // this.sendData = this.sendData.bind(this);
  }

 
handleSubmit(event) {
  // this.sendData();
    console.log(this.state.req_username);
    alert('A name was submitted: ' + this.state.req_username);
    event.preventDefault();
  }

 onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }

  render(){
    return(
      <div> 
        


        <h1> Create A New Deal </h1>

        {this.NewDealPanel()}
      
        
      </div>
      );
  }

  NewDealPanel(){
    return <div>
                <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <header className="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">
              
            </header>
            <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
              <div className="mdl-card__supporting-text">

                <form onSubmit={this.handleSubmit}>
      
                    <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input" type="text" id="sample1" name ="req_username" value={this.state.req_username} onChange={this.onChange}></input>
                        <label className="mdl-textfield__label" htmlFor="sample1">Name</label>
                    </div>
                    <br/>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input" type="email" id="req_useremail" name ="req_useremail" value={this.state.req_useremail} onChange={this.onChange} ></input>
                        <label className="mdl-textfield__label" htmlFor="req_useremail">email</label>
                    </div>
                    <br/>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input" type="text" id="req_usersocialname" name ="req_usersocialname" value={this.state.req_usersocialname} onChange={this.onChange}></input>
                        <label className="mdl-textfield__label" htmlFor="req_usersocialname">social media name</label>
                    </div>
                    <br/>
                    <div className="mdl-textfield mdl-js-textfield">
                      <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="req_userphone" name="req_userphone" value={this.state.req_userphone} onChange={this.onChange}></input>
                      <label className="mdl-textfield__label" htmlFor="req_userphone">Phone Number</label>
                      <span className="mdl-textfield__error">Input is not a number!</span>
                    </div>
                    <br/>
                    <label> Description</label>
                    <textarea className="mdl-textfield__input" name="description"   value={this.state.description} onChange={this.onChange}> </textarea><br/>
                    <Button > Submit</Button>
                </form>
              </div>
            </div>
          </section>

        </div> 
  }

  // sendData(){
  //   var formData = new formData();
  //   formData.append("name",this.state.req_username);
  //   formData.append("email",this.state.req_useremail);
  //   formData.append("phone",this.state.req_userphone);
  //   formData.append("socialName",this.state.req_usersocialname);
  //   formData.append("description",this.state.description);



  //   $.ajax({
  //     data: formData,
  //     method: 'post',
  //     url: "/post/url",
  //     cache: false,
  //     processData: false,

  //     success:function(data){
  //       console.log(data);
  //     },
  //     error: function(xhr,status,err){
  //       console.log(err);
  //     }
  //   });
  // }
}
 
export default NewDeal;