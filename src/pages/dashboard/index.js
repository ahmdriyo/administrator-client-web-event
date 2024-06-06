import React from 'react'
import Container from 'react-bootstrap/Container';
import SBreadCrumb from '../../components/Breadcrumb';
function Dashboard() {
  return (
    <>
      <Container className='mt-3' style={{ width : '80%',marginLeft:100}}>
        <SBreadCrumb/>
        <h1>Dashboard</h1>
      </Container>
    </>
  )
}

export default Dashboard
