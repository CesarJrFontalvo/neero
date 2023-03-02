import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';


const FormHome1 = ({ displayNone }) => {
    const initialValues = {
        typeDocument: '',
        numberDocument: '',
        firstName: '',
        movil: '',
        email: '',
        city: '',
    }

    const schema = Yup.object().shape({
        typeDocument: Yup.string().required('Campo obligatorio'),
        numberDocument: Yup.number().required('Campo obligatorio'),
        firstName: Yup.string().required('Campo obligatorio'),
        movil: Yup.string().required('Campo obligatorio'),
        email: Yup.string().email('Email Invalido').required('Campo obligatorio'),
        city: Yup.string().required('Campo obligatorio'),

    });


    const cambia = () => {
        displayNone()
    }
    return (
        <div className='text-center pt-3 pb-2 ' style={{ paddingRight: '10vh' }}>
            {/* <h1 style={{ fontSize: '60px' }}><span style={{ color: '#FFF' }}>Finso</span><span style={{ color: '#F7B029' }}>Campo</span></h1> */}
            <img src='img/logoFinso.png' alt='logo' className='logoFinso' />
            <div style={{ color: '#FFF' }}>
                <p className='text-mediunForm' >Inicia tu solicitud de crédito</p>
                <p className='text-mediunForm' >Completando el formulario</p>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    cambia()
                }}
            >
                <Form className='formulario1 mt-3 mb-5 ' >

                    <div className='row mb-2'>
                        <div className='col'>
                            <Field as="select" className='form-control inputRadius' name="typeDocument" placeholder='Tipo de documento'>
                                <option value="cc">C.C.</option>
                                <option value="passport">Pasaporte</option>
                                <option value="nit">NIT</option>
                            </Field>
                            <ErrorMessage name="typeDocument" />

                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col'>
                            <Field className='form-control inputRadius' type='number' id="numberDocument" name="numberDocument" placeholder="Número de documento" />
                            <ErrorMessage name="numberDocument" />
                        </div>

                    </div>
                    <div className='row mb-2'>
                        <div className='col'>
                            <Field className='form-control inputRadius' id="firstName" name="firstName" placeholder="Nombre:" />
                            <ErrorMessage name="firstName" />
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col'>
                            <Field className='form-control inputRadius' type='number' id="movil" name="movil" placeholder="Celular:" />
                            <ErrorMessage name="movil" />

                        </div>
                    </div>

                    <div className='row mb-2'>
                        <div className='col'>
                            <Field className='form-control inputRadius'
                                id="email"
                                name="email"
                                placeholder="Correo electronico:"
                                type="email"
                            />
                            <ErrorMessage name="email" />

                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col'>
                            <Field className='form-control inputRadius' id="city" name="city" placeholder="Municipio/Ciudad" />
                            <ErrorMessage name="city" className='text-danger' />

                        </div>
                    </div>
                    <button className='btn btn-warning float-end btn-lg text-white mb-5 btnSiguiente' type="submit">Siguiente</button>

                </Form>
            </Formik>
        </div>
    )
}

export default FormHome1