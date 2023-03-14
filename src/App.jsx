import { useState, useRef, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';
import { LoginForm } from './components/LoginForm';

function App() {
  const count = useRef(0);
  const [userName, setUserName] = useState('');
  const inputName = useRef();
  const prevName = useRef();
  const [formValues, setFormValues] = useState({
    nickname: '',
    email: '',
    zipcode: '',
  });

  const registerForm = () => {
    setFormValues({
      nickname: 'Achilles',
      email: 'achilles@gmail.com',
      zipcode: 'AZ012345',
    });
  };

  useEffect(() => {
    count.current = count.current + 1;
  });

  useEffect(() => {
    prevName.current = userName;
  }, [userName]);

  function focus() {
    inputName.current.focus();
  }

  const send2Post = () => {
    setUserName('Peleus');
  };

  return (
    <div className="App">
      <div>
        <LoginForm registerForm={formValues} />
        <div>
          <button onClick={() => registerForm()}>Register</button>
        </div>
      </div>
      {/* <div>
        <input
          ref={inputName}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <div>
          My name is: {userName} and it used to be {prevName.current}
        </div>
        <button onClick={focus}>Focus</button>
        <Post send2Post={userName} />
        <button onClick={() => send2Post()}>Send2Post</button>
      </div>
      */}
      <GlobalProvider>
        <Header theTitle="HEADER TITLE" />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
