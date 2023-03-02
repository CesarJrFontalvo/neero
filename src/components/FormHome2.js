import React from 'react'
import {ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const FormHome2 = ({displayNone}) => {
    const initialValues={
        typeBusiness: '',
        typeProduction: '',
        assetToFinance: '',
        requestedInPesos: '',
        observations: '',
    }
    const schema = Yup.object().shape({
        typeBusiness: Yup.string().required('Campo obligatorio'),
        typeProduction: Yup.string().required('Campo obligatorio'),
        assetToFinance: Yup.number().required('Campo obligatorio'),
        requestedInPesos: Yup.number().required('Campo obligatorio'),
        // observations: Yup.string().required('Campo obligatorio'),
    
    });
    const volver = () =>{
        displayNone()
    }
    return (
        <div className='text-center pt-3 pb-2 ' style={{ paddingRight: '10vh' }}>
            {/* <h1 style={{ fontSize: '60px' }}><span style={{ color: '#FFF' }}>Finso</span><span style={{ color: '#F7B029' }}>Campo</span></h1> */}
            <img src='img/logoFinso.png' alt='logo' className='logoFinso' />
            <div style={{ color: '#FFF' }}>
                <p className='text-mediunForm'>Inicia tu solicitud de crédito</p>
                <p className='text-mediunForm'>Completando el formulario</p>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                   volver()
                }}

            >
                <Form className='formulario1 mt-3 mb-5 ' >

                    <div className='row mb-2'>
                        <div className='col'>
                            <Field as="select" className='form-control inputRadius' name="typeBusiness" placeholder='Tipo de negocio'>
                                <option value="mineria">Mineria</option>
                                <option value="turismo">Turismo Rural</option>
                                <option value="artesanias">Artesanias</option>
                                <option value="comercializacion">Comercialización</option>
                                <option value="transformacion">Transformación</option>
                                <option value="produccion">Producción Agropecuaria</option>
                                <option value="servicios">Servicios Apoyo</option>
                            </Field>
                            <ErrorMessage name="typeBusiness" />
                        </div>
                    </div>

                    <div className='row mb-2'>
                        <div className='col'>
                            <Field as="select" className='form-control inputRadius' name="typeProduction" placeholder='Tipo de Producción'>
                                <option value="primaria">Primaria</option>
                                <option value="transformacion">Transformación</option>
                                <option value="comercializador">Comercializador</option>
                                <option value="servicio">Servicio de Apoyo</option>
                            </Field>
                            <ErrorMessage name="typeProduction" />
                        </div>
                    </div>

              
                    <div className='row mb-2'>
                        <div className='col'>
                            <Field className='form-control inputRadius' type='number' id="assetToFinance" name="assetToFinance" placeholder="Activo a financiar:" />
                            <ErrorMessage name="assetToFinance" />
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col'>
                            <Field className='form-control inputRadius' type='number' id="requestedInPesos" name="requestedInPesos" placeholder="Monto solicitado en pesos:" />
                            <ErrorMessage name="requestedInPesos" />
                        </div>
                    </div>

                  
                    <div className='row mb-2'>
                        <div className='col'>
                            <Field as='textarea' className='form-control inputRadiusArea' id="observations" name="observations" placeholder="Observaciones:" />
                            {/* <ErrorMessage name="observations" /> */}
                        </div>
                    </div>
                    <button id='btn' className='btn btn-success float-start  text-white mb-5' onClick={volver}>Volver</button>
                    <button className='btn btn-warning float-end  text-success mb-5' type="submit">Enviar</button>
                </Form>
            </Formik>
        </div>
    )
}

export default FormHome2