import React from 'react'
import Accordion from '../Accordion'
import Layout from '../../Layout'

const Iiird = () => {

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
        <Layout>
            <div style={containerStyle}>
                <Accordion title="Web technology">
                    <Accordion title="Pdfs" className="nested-accordion" style={{ marginBottom: '10px' }}>
                        <iframe
                            src="https://drive.google.com/file/d/1WnjPnCKce6OPMfyP9hUsrxtua8q5p7xQ/preview"
                            style={embedStyle}
                            allowFullScreen
                        />
                        <iframe
                            src="https://drive.google.com/file/d/1L23gluKJxNiAzy0B1-UF6bgjQoKRLz9m/preview"
                            style={embedStyle}
                            allowFullScreen
                        />
                        <iframe
                            src="https://drive.google.com/file/d/1OBUCL2bZKt1_xb6Pl34Ok8QM_CvY-Msp/preview"
                            style={embedStyle}
                            allowFullScreen
                        />
                        <iframe

                            src="https://drive.google.com/file/d1PmoAHqixjV1EjO8MLfTQON6AJN6rsnCm/preview"
                            style={embedStyle}
                            allowFullScreen
                        />
                    </Accordion>

                </Accordion>

                <Accordion title="DSA">
                <Accordion title="Old Questions" className="nested-accordion" style={{ marginBottom: '10px' }}>
                        <iframe
                            src="https://drive.google.com/file/d/1s_JAg55sCNETkt7MGVTzxjkdKico7bP5/preview"
                            style={embedStyle}
                            allowFullScreen
                        />
                 

                    </Accordion>
                    <Accordion title="Notes" className="nested-accordion" style={{ marginBottom: '10px' }}>
                        <iframe
                            src="https://drive.google.com/file/d/1Kz4_mDs4IGA7spVJBRIEpJpFWULFAzPi/preview"
                            style={embedStyle}
                            allowFullScreen
                        />
                        <iframe
                        
                            src="https://drive.google.com/file/d/1Ugh4uALhncdO7oqbGUTS25y1XI-WWDiX/preview"
                            style={embedStyle}
                            allowFullScreen
                        />

                    </Accordion>

                </Accordion>

                <Accordion title="Java">
                    <Accordion title="Pdfs" className="nested-accordion" style={{ marginBottom: '10px' }}>
                        <p>Nothing to show</p>
                    </Accordion>

                </Accordion>

                <Accordion title="SAD">
                    <Accordion title="Pdfs" className="nested-accordion" style={{ marginBottom: '10px' }}>
                        <iframe
                            src="https://drive.google.com/file/d/12-gQ4If9QtA0jH46xPa88qR7-K2RB3vo/preview"
                            style={embedStyle}
                            allowFullScreen
                        />
                        <iframe

                            src="https://drive.google.com/file/d/1OZ_igY7T3aPXa2oA2sCMQv-9KaxRN9-R/preview"
                            style={embedStyle}
                            allowFullScreen
                        />
                    </Accordion>

                </Accordion>

                <Accordion title="Probability and Statstics">
                    <Accordion title="Notes" className="nested-accordion" style={{ marginBottom: '10px' }}>
                        <iframe
                            src="https://drive.google.com/file/d/1x6d3ohmc6-R_tIa6dQCjvSQa3j7yZxfM/preview"
                            style={embedStyle}
                            allowFullScreen
                        />
                        <iframe
                            src="https://drive.google.com/file/d/1rW82nj40o6iZPvWxKBPoWy3ALRN-Rcue/preview"
                            style={embedStyle}
                            allowFullScreen
                        />
                    </Accordion>

                </Accordion>

            </div>
        </Layout>
    )
}

export default Iiird
