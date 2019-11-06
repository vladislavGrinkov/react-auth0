import React from 'react';
import './PrivatePage.css';

const PrivatePage = () => {
    const tokenOut = () => {
      localStorage.clear();
      window.location.reload();
    };

  return(
      <div className={'center'}>
          <div>
              <h2>Successfully logged</h2>
          </div>
          <p>
              <button className={'form-submit'} onClick={tokenOut}>Logout</button>
          </p>
      </div>
  )
};

export default PrivatePage;