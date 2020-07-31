import React from 'react';
import UploadForm from './UploadForm';
import Board from './Board';

const HomePage = () => (
  <div className="home-page">
    <UploadForm />
    <Board />
  </div>
);

export default HomePage;