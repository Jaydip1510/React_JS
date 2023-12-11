import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Footer =(()=>{
    return(
    <footer>
    <hr className="mt-5 mb-4" />
    <p className="text-muted text-center">
    ©2023 Company, Inc.All rights reserved.
    </p>
  </footer>
    )
})

export default Footer;