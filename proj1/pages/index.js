

import React from 'react';
import Layout from 'app/Layout'; 
import LoginForm from 'components/LoginForm';
import CompanyLogo from 'components/CompanyLogo';
import Picture from 'components/Picture';
import Logindetails from'components/Logindetails';


const HomePage = () => {
  return (
    <Layout>
      <div className="content">
        <CompanyLogo  />
        <LoginForm />
        <Picture/>
        <Logindetails/>
      </div>
     </Layout>
  );
};

export default HomePage;
