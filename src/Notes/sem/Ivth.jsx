import React from 'react'
import Accordion from '../Accordion'
import Layout from '../../Layout'
import Bar from '../Bar';

const IVth = () => {

    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '700px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const embedStyle = {
        width: '100%',
        height: '400px',
        border: 'none',
    };

    return (
        <div className="app-container">
        <Layout>
            <Bar />
            <h3 style={{textAlign:'center', fontWeight:'bold', margin:'20px'}}>Forth Semester</h3>
            <div style={containerStyle}>
                <Accordion title="DBMS">
                    <Accordion title="Note" className="nested-accordion" style={{ marginBottom: '10px' }}>

                        <iframe
                            src="https://drive.google.com/file/d/1LScM4Jd_-7jf1ONpoIcz-CTTb_1jx9IB/preview"
                            style={embedStyle}
                            allowFullScreen
                        />
                        <iframe
                            src="https://drive.google.com/file/d/1pTjVSODk6YSVZxUQmH7YAQBd2hRhRRv_/preview"
                            style={embedStyle}
                            allowFullScreen
                        />
                       
                    </Accordion>

                </Accordion>

                <Accordion title="Numerical Method">
                <Accordion title="HandWritten Notes" className="nested-accordion" style={{ marginBottom: '10px' }}>
                        <iframe
                            src="https://drive.google.com/file/d/1c29zi55c1WJPWUYKWiRN_dlI8xwb_bpn/preview"
                            style={embedStyle}
                            allowFullScreen
                        />
                        <iframe
                            src="https://drive.google.com/file/d/1_JCGY8A62tkDJwfrVLWS8mSTMiQuJsYu/preview"
                            style={embedStyle}
                            allowFullScreen
                        />
                   

                    </Accordion>
                    <Accordion title="Lab Report" className="nested-accordion" style={{ marginBottom: '10px' }}>
                    <iframe
                            src="https://drive.google.com/file/d/1Vs6McRYuuNJKTKxO25n19QIaxFSmPMoX/preview"
                            style={embedStyle}
                            allowFullScreen
                        />
                 
                     

                    </Accordion>

                </Accordion>

                <Accordion title="Operating System">
                    <Accordion title="Note" className="nested-accordion" style={{ marginBottom: '10px' }}>
                    <iframe
                            src="https://drive.google.com/file/d/1sg0Irozc9_1eXD82bbYJxgctalKW4MaK/preview"
                            style={embedStyle}
                            allowFullScreen
                        />
                       
                    </Accordion>
                    <Accordion title="QNS" className="nested-accordion" style={{ marginBottom: '10px' }}>
                    <iframe
                            src="https://drive.google.com/file/d/1nRIzpYJ4tAS_YDhlxwEv44KFzNEK7zjU/preview"
                            style={embedStyle}
                            allowFullScreen
                        />                 
                    </Accordion>

                </Accordion>

                <Accordion title="Scripting Language">
                    <Accordion title="QNs" className="nested-accordion" style={{ marginBottom: '10px' }}>
                        <iframe
                            src="https://drive.google.com/file/d1wFuFVtlfLE7Jd5Z0zBTTpH2XQwTVwc5O/preview"
                            style={embedStyle}
                            allowFullScreen
                        />
                    
                    </Accordion>

                </Accordion>

                <Accordion title="Subject">
                    <Accordion title="Notes" className="nested-accordion" style={{ marginBottom: '10px' }}>
                     <p>Nothing to show.</p>
                    </Accordion>

                </Accordion>

            </div>
        </Layout>
        </div>
    )
}

export default IVth
