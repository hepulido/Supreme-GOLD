import React from 'react';
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

export default function Footer () {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
          <h1>SupremeGOLD</h1>
            <span className="ml-4 h5 mb-0 font-weight-bold"></span>
          </a>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">&copy; SupremeGOLD, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};