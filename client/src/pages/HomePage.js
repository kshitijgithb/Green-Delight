import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'

const HomePage = () => {
   const [auth,setAuth]=useAuth()
  return (
   
    <Layout title="Green-Delight">
    <h1>Home Page</h1>
    <pre>{JSON.stringify(auth,null,4)}</pre>
    {/* <pre>{JSON.stringify(auth)}</pre> */}
    </Layout>
  )
}

export default HomePage