// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <>
      <form className="text-center border rounded col-lg-5 mx-auto mb-3 pb-3 bg-dark text-light mt-2"
        onSubmit={this.submitForm}
        action="https://formspree.io/xoqkgkpd"
        method="POST"
      >
        
        <div className="form-group">
                            <h2 className="text-center font-weight-bold">Contact Form</h2>
                        </div>
                        <div className="form-group">
                            <label>
                                Your email:
                                <input className="form-control" type="email" name="_replyto"/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Your message:
                                <textarea className="form-control" name="message" rows="6" cols="40"></textarea>
                            </label>
                        </div>
        {status === "SUCCESS" ? <p>Thanks!</p> : <div className="form-group">
                            <button className="btn btn-primary" type="submit">Send</button>
                        </div>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>

      <div className="col-lg-12 text-center mb-5 pb-5">
            <button onClick={this.props.hide} className="btn btn-danger">Go back</button>
      </div>

      

      
      </>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}