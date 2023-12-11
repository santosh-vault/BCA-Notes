import React from 'react'
import Accordion from '../Accordion'
import Layout from '../../Layout';


const Qns = () => {
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

                <h3 style={{ textAlign: 'center', fontWeight: 'bold', margin: '20px' }}>Old Question Papers</h3>
                <div style={containerStyle}>

                    <Accordion title="1st Semester">
                        <Accordion title="1st Upload" className="nested-accordion" style={{ marginBottom: '10px' }}>
                            <iframe
                                src="https://drive.google.com/file/d/1MaYdWkJXoLmHNpzRJedTSpVjlCoLQ6xY/preview"
                                style={embedStyle}
                                allowFullScreen
                            />
                        </Accordion>

                        <Accordion title="Upload no 2" className="nested-accordion">
                            <p>We'll Upload Soon</p>
                        </Accordion>
                    </Accordion>

                    <Accordion title="2nd Semester">

                        <Accordion title="Upload No 1" className="nested-accordion" style={{ marginBottom: '10px' }}>
                            <iframe
                                src="https://drive.google.com/file/d/1jOOdUYWYRlRJnJwVzrUESodD3adIAnGq/preview"
                                style={embedStyle}
                                allowFullScreen
                            />
                        </Accordion>

                        <Accordion title="Upload no 2" className="nested-accordion">
                            <p>We'll Upload Soon</p>
                        </Accordion>
                    </Accordion>

                    <Accordion title="3rd Semester">

                        <Accordion title="Upload 1" className="nested-accordion" style={{ marginBottom: '10px' }}>
                            <iframe
                                src="https://drive.google.com/file/d/14jcR1ysB1yaDY7NLHypCldFto9p3ShiO/preview"
                                style={embedStyle}
                                allowFullScreen
                            />
                        </Accordion>


                    </Accordion>

                    <Accordion title="4th Semster">

                        <Accordion title="Upload 1" className="nested-accordion" style={{ marginBottom: '10px' }}>
                            <p>We'll upload soon</p>
                        </Accordion>

                    </Accordion>


                    <Accordion title="5th Semster">

                        <Accordion title="Upload 1" className="nested-accordion" style={{ marginBottom: '10px' }}>
                            <p>We'll upload soon</p>
                        </Accordion>

                    </Accordion>

                    <Accordion title="6th Semster">

                        <Accordion title="Upload 1" className="nested-accordion" style={{ marginBottom: '10px' }}>
                            <p>We'll upload soon</p>
                        </Accordion>

                    </Accordion>

                    <Accordion title="7th Semster">

                        <Accordion title="Upload 1" className="nested-accordion" style={{ marginBottom: '10px' }}>
                            <p>We'll upload soon</p>
                        </Accordion>

                    </Accordion>

                    
                    <Accordion title="8th Semster">

                        <Accordion title="Upload 1" className="nested-accordion" style={{ marginBottom: '10px' }}>
                            <p>We'll upload soon</p>
                        </Accordion>

                    </Accordion>

                </div>
            </Layout>
        </div>
    )
}

export default Qns
