import React from 'react';
import CreateAccountForm from './components/CreateAccountForm';

const FormWrapper = () => (
  <div className="account" style={{
    minHeight: "0",
    height: "100%"
  }}>
   
      <div className="account__card">
        <div className="account__head">
          <h4 className="account__subhead subhead">New account</h4>
          <p>Fill the fields below to create a new account</p>
        </div>
        <CreateAccountForm />
      </div>
    
  </div>
);

export default FormWrapper;

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
