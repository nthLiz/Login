import React from 'react'
import { Layout } from 'antd'
import { useNavigate } from 'react-router-dom'
function Content2() {
  
  const navigate2 = useNavigate();
  
  return (
    <Layout>
    <h3>Content2</h3>
    
    <h1 style={{color:"green"}}>GeeksForGeeks</h1>
    <button onClick={()=>navigate2("/Content3")}>About</button>
    </Layout>
  )
}

export default Content2