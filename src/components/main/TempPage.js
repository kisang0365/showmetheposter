import React from 'react';
import axios from 'axios';
import config from '../../config';

const TempPage = ({ params }) => {

  axios.get('/api/ad/'+params.id)
    .then(res => {
        window.location.href= res.data.ad.url;
  });
  return (
    <div>사이트에 연결중입니다...!</div>
  );
}

export default TempPage;
