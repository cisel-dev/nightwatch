import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertMessage = (props) => {

    return (
      <div className="AlertMessage">

        <Alert variant="danger" >
          <p>
            {props.message}
          </p>
        </Alert>

      </div>
    );
  
};

export default AlertMessage;