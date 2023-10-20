

import React from 'react';

const Redirection = () => {
  const redirectToGoogle = () => {
    fetch('/redirect-url') // Change the endpoint
      .then((response) => response.json())
      .then((data) => {
        if (data.url) {
          window.open(data.url, '_blank');
        } else {
          console.error('Invalid URL received from the server');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Redirect to Google</h1>
      <button onClick={redirectToGoogle}>Go to Google</button>
    </div>
  );
};

export default Redirection;
