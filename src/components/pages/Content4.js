import { Layout } from 'antd'
import React from 'react'
import Content1 from './Content1';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState,  useEffect } from 'react';
/// cha
function Content4() {
  // const [datas, setDatas] = useState('hello')
  const [searchParams, setSearchParams] = useSearchParams({});

 useEffect(()=>{
  setSearchParams({ hello: "world"  });
  console.log(searchParams);
 })
  return (
    <Layout>
      <h3>Content4</h3>
     <div>{searchParams}</div>


    </Layout>
  )
}

export default Content4