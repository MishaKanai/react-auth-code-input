import React, { useState } from 'react';

import AuthCode from 'react-auth-code-input';
import './index.css';

const App = () => {
  const [inputCode, setInputCode] = useState('')
  return (
    <div className='main'>
      <h1>React Auth Code Input</h1>
      <div className='badges'>
        <img
          alt=''
          src='https://img.shields.io/npm/v/react-auth-code-input.svg'
        />
        <img
          alt='code style standard'
          src='https://img.shields.io/badge/code_style-standard-brightgreen.svg'
        />
        <img
          alt='license MIT'
          src='https://img.shields.io/badge/license-MIT-brightgreen.svg'
        />
        <img
          alt=''
          src='https://img.shields.io/npm/dt/react-auth-code-input.svg'
        />
        <img
          alt=''
          src='https://img.shields.io/npm/dw/react-auth-code-input.svg'
        />
      </div>
      <p>
        <a href='https://github.com/drac94/react-auth-code-input'>
          View documentation on GitHub
        </a>
      </p>
      <h2>Default</h2>
      <AuthCode internalLabelPrefix="authorization code" onChange={() => null} />
      <code>
        {`
import React from 'react'
import AuthCode from 'react-auth-code-input'

const App = () => <AuthCode internalLabelPrefix="authorization code" />
        `}
      </code>
      <h2>Custom Styles</h2>
      <p>
        Try writing and then deleting characters using backspace.
        <br />
        Copying and pasting also works, as long as the text copied matches the
        allowed characters.
      </p>
      <AuthCode
        internalLabelPrefix="authorization code"
        onChange={setInputCode}
        characters={5}
        containerClassName='container'
        inputClassName='input'
        RequiredErrorMessage={inputCode.length !== 5 ? <div style={{ color: 'darkred'}}>Required</div> : null}
      />
      <p>index.tsx</p>
      <code>
        {`
import React from 'react'
import AuthCode from 'react-auth-code-input'

const App = () => {
  return (<AuthCode
    internalLabelPrefix="authorization code"
    characters={5}
    containerClassName='container'
    inputClassName='input'
  />)
}
        `}
      </code>
      <p>styles.css</p>
      <code>
        {`
.container {
  padding: 16px;
}

.input {
  width: 2ch;
  padding: 8px;
  border-radius: 8px;
  font-size: 40px;
  text-align: center;
  margin-right: 12px;
  border: 1px solid white;
  text-transform: uppercase;
}
        `}
      </code>
    </div>
  );
};

export default App;
