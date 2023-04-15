/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 1234567.89,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    };
  }

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
  }

  // Create Routes and React elements to be rendered using React components
  render() {
    // Create React elements and pass input props to components
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />)
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    )
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditsComponent = () => (<Credits credits={this.state.creditList} addCredit={this.addCredit} accountBalance={this.state.accountBalance}/>) 
    const DebitsComponent = () => (<Debits debits={this.state.debitList} addDebit={this.addDebit} accountBalance={this.state.accountBalance} />) 

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/bank-of-react-example-code-gh-pages">
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
        </div>
      </Router>
    );
  }

  //Add credit to credit array and update accountBalance
  addCredit = (e) => {
    e.preventDefault()
    let creditInfo = e.target
    //Create credit object to be added to array
    let credit = {
      id: this.state.creditList.length,
      amount: creditInfo.amount.value,
      description: creditInfo.description.value
    };
    //Format date and add to obj
    let date = new Date()
    credit.date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    //Update balance and array
    this.setState({
      accountBalance: (this.state.accountBalance + credit.amount)
    });
    this.state.creditList.push(credit);
  }

  //Add debit to debit array & update accountBalance
  addDebit = (e) => {
    e.preventDefault()
    let debitInfo = e.target
    //Create debit object to be added to array
    let debit = {
      id: this.state.debitList.length,
      amount: debitInfo.amount.value,
      description: debitInfo.description.value
    };
    //Format date and add to obj
    let date = new Date()
    debit.date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    //Update balance and array
    this.setState({
      accountBalance: (this.state.accountBalance - debit.amount)
    });
    this.state.debitList.push(debit);
  }

  //Load existing credits/debits from specified api endpoints
  async componentDidMount(){
    //Call api
    let creditList = await (await fetch('https://johnnylaicode.github.io/api/credits.json')).json();
    let debitList = await (await fetch('https://johnnylaicode.github.io/api/debits.json')).json();
    //Load total value of credits
    let credits = 0
    for(let x = 0; x < creditList.length; x++){
      credits += creditList[x].amount
    }
    //Load total value of debits
    let debits = 0
    for(let x = 0; x < debitList.length; x++){
      debits += debitList[x].amount
    }
    //Update state with existing values
    this.setState({
      accountBalance: this.state.accountBalance + credits - debits,
      creditList: creditList,
      debitList: debitList
    })
  }

}

export default App;