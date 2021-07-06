import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import Swal from 'sweetalert2';

function FormikContainer () {
  const checkboxOptions = [
    { key: '', value: 'true' },
  ]
  const initialValues = {
    number: '',
    birthPlace: '',
    checkboxOption: [],
    birthDate: null,
    expiryDate: null,
  }
  const validationSchema = Yup.object({
    number: Yup.string().required('Required'),
    birthPlace: Yup.string().required('Required'),
    checkboxOption: Yup.array().required('Required'),
    birthDate: Yup.date()
      .required('Required')
      .nullable(),
    expiryDate: Yup.date()
      .required('Required')
      .nullable(),
  })
  const onSubmit = values => {
    console.log('Form data', values)
    console.log('Saved data', JSON.parse(JSON.stringify(values)))
  }

  const handleClick=()=>
  {
    Swal.fire({
      icon: 'success',//success info,question,warning,error
      text: ("Akun telah terverifikasi!"),
      fontFamily: 'Mulish',
      type: 'success',
      timer: 2000,
      showCancelButton: false,//do true to get two button
      confirmButtonColor: 'green',
      cancelButtonColor: 'pink',
      confirmButtonText: 'OK!'
    })
    console.log('berhasil');
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {Formik => (
        <Form>
          <h2>Verifikasi Akun</h2>
          <h3>Input Foto KTP</h3>
          <FormikControl
            control='input'
            type='number'
            label='Nomor KTP'
            name='number'
          />
          <FormikControl
            control='date'
            label='Tanggal Lahir'
            name='birthDate'
          />
          <FormikControl
            control='input'
            type='birthPlace'
            label='Tempat Lahir'
            name='birthPlace'
          />
          <FormikControl
            control='date'
            label='Tanggal Kedaluarsa'
            name='expiryDate'
          />
          <FormikControl
            control='checkbox'
            label='Silakan centang jika Anda sudah memiliki E-KTP'
            name='checkboxOption'
            options={checkboxOptions}
          />
          <button onClick={handleClick} style={{textAlign:'center',
                margin:'100px',
                color: 'black',
                padding:'5px',
                width: "50%",
                height: "5%",
                fontFamily:'Mulish',
                fontSize:'16px',
                fontWeight:'bold'}}
                >Verifikasi Akun Sekarang</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
