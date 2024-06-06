import React from 'react';
import { Form } from 'react-bootstrap';
import SButton from '../../components/Button';
import TextInputWithLabel from '../../components/TextInputWithLabel';

export default function CategoriesForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
}) {
  return (
    <Form>
      <TextInputWithLabel
        placeholder={'Masukan nama Organizer'}
        label={'Nama Organizer'}
        name='organizer'
        value={form.organizer}
        type='text'
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={'Masukan nama'}
        label={'Nama'}
        name='name'
        value={form.name}
        type='text'
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={'Masukan Role'}
        label={'Role'}
        name='role'
        value={form.role}
        type='text'
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={'Masukan Email'}
        label={'Email'}
        name='email'
        value={form.email}
        type='text'
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={'Masukan Password'}
        label={'Password'}
        name='password'
        value={form.password}
        type='password'
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={'Masukan Konfirmasi Password'}
        label={'Konfirmasi Password'}
        name='confirmPassword'
        value={form.confirmPassword}
        type='password'
        onChange={handleChange}
      />
      <SButton className='mt-2' variant='primary' action={handleSubmit} loading={isLoading}>
        {edit ? 'Ubah' : 'Simpan'}
      </SButton>
    </Form>
  );
}
