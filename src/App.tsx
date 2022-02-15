import './App.scss';

import React from 'react';

import Typography from '@/components/General/Typography';
function App() {
  return (
    <>
      <Typography.Title level={1}>
        <Typography.Text type={'success'} theme={'dark'}>
          Success!
        </Typography.Text>
      </Typography.Title>
    </>
  );
}

export default App;
