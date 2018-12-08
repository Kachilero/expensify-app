/**
 * Static HTML help page
 */
import React from 'react';
import { connect } from "react-redux";
import Header from './Header';

export const HelpPage = (state) => (
  <div>
    <Header/>
    <h2>Help</h2>
    <p>This will one day be a help page.</p>
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});


export default connect(mapStateToProps)(HelpPage);
