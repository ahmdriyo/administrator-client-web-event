import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BreadCrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';
import Table from '../../components/TableWithAction';
import SearchInput from '../../components/SearchInput';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrganizers, setKeyword } from '../../redux/organizers/actions';
import AlertMessage from '../../components/Alert';
import { accessOrganizers } from '../../const/access';

function OrganizerPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notif = useSelector((state) => state.notif);
  const organizers = useSelector((state) => state.organizers);

  const [access, setAccess] = useState({
    tambah: false,
    hapus: false,
    edit: false,
  });

  const checkAccess = () => {
    let { role } = localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth'))
      : {};
    const access = { tambah: false, hapus: false, edit: false };
    Object.keys(accessOrganizers).forEach(function (key, index) {
      if (accessOrganizers[key].indexOf(role) >= 0) {
        access[key] = true;
      }
    });
    setAccess(access);
  };

  useEffect(() => {
    checkAccess();
  }, []);

  useEffect(() => {
    dispatch(fetchOrganizers());
  }, [dispatch, organizers.keyword]);

  return (
    <Container className='mt-3'>
      <BreadCrumb textSecound={'Organizer'} />
      {access.tambah && (
        <div className='mb-3'>
          <Button action={() => navigate('/organizers/create')}>Tambah</Button>
        </div>
      )}
      <SearchInput
        query={organizers.keyword}
        handleChange={(e) => dispatch(setKeyword(e.target.value))}
      />
      {notif.status && (
        <AlertMessage type={notif.typeNotif} message={notif.message} />
      )}
      <Table
        status={organizers.status}
        thead={['Nama', 'Email', 'Role']}
        data={organizers.data}
        tbody={['name', 'email','role']}
        actionNotDisplay
        withoutPagination
      />
    </Container>
  );
}

export default OrganizerPage;

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchOrganizers } from '../../redux/organizers/actions';

// export default function OrganizerPage () {
//   const dispatch = useDispatch();
//   const organizers = useSelector((state) => state.organizers);

//   console.log("organizers")
//   console.log(organizers)

//   useEffect(() => {
//     dispatch(fetchOrganizers())
//   }, [dispatch]);

//   return <div>Organizer</div>
// }