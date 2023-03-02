import React, { useState } from 'react'
import FormHome1 from './FormHome1'
import FormHome2 from './FormHome2'

const CreditApplication = () => {
    const [formNone, setFormNone] = useState(true)
    const displayNone = () => {
        setFormNone(!formNone)
    }
    return (
        <div>
            <div className='row fondo ' style={{ minHeight: '100vh', backgroundColor: '#BDD4C8' }}>
                <div className='col-12 col-md-4 col-lg-4' id='seccion1' ></div>
                <div className='col-12 col-md-4 col-lg-4 box2 '>
                    <h4 className='text-mediun' >Es momento de</h4>
                    <h4 className='text-mediun' >impulsar tu proyecto</h4>

                    <h2 className='text-big' >proyecto</h2>
                    <h2 className='text-big' >agropecuario.</h2>
                </div>
                <div className='col-12 col-md-4 col-lg-4'>
                    {formNone ? <FormHome1 displayNone={displayNone} />
                        :
                        <FormHome2 displayNone={displayNone} />
                    }
                </div>
            </div>
            <div className='row m-0 seccion4' >
                <div className='col-4' style={{ backgroundColor: '#F5A712', height: '10px' }}></div>
                <div className='col-4' style={{ backgroundColor: '#006D31', height: '10px' }}></div>
                <div className='col-4' style={{ backgroundColor: '#76B52A', height: '10px' }}></div>
            </div>
        </div>

    )
}

export default CreditApplication