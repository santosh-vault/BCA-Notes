import React from 'react'
import Accordion from '../Accordion'
import Layout from '../../Layout'
import Bar from '../Bar';
import { Helmet } from 'react-helmet';

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
        <>
            <Helmet>
                <title>BCA 4th Semester Subjects - Explore Operating Systems, Software Engineering, DBMS and More</title>
                <meta name="description" content="Delve into the courses offered in BCA 4th Semester, featuring Operating System, Numerical Methods, Software Engineering, Scripting Language, Database Management System, and Project I. Access comprehensive study materials, notes, and resources tailored to the fourth semester of the Bachelor of Computer Application program at BCA Notes Nepal." />
                <meta name="keyword" content="BCA 4th sem, BCA subjects 4th year, BCA fourth semester, BCA 4th year subjects, BCA 4th semester subjects, BCA 4th semester, BCA fourth semester subject, BCA 4th sem subjects, 4th sem BCA, 4th sem BCA subjects, BCA 4 sem, BCA 4 sem Operating System, BCA 4 sem Numerical Methods, BCA 4 sem Software Engineering, BCA 4 sem Scripting Language, BCA 4 sem Database Management System, BCA 4 sem Project I, BCA 4th sem course, BCA 4th sem subjects, BCA 4th year, BCA 4th year 4th semester, BCA 4th year all subject, BCA 4th year Software Engineering, BCA 4th year semester, BCA 4th year subject, BCA fourth sem, BCA fourth sem subjects, BCA fourth semester Scripting Language, BCA 4th sem Database Management System, BCA semester 4 subjects, BCA subjects 4 sem, BCA subjects 4th sem, BCA subjects fourth semester, BCA subjects for 4th sem, BCA subjects in 4th sem, BCA subjects sem 4, Course of BCA 4th year, Fourth year 4th sem BCA subjects, Operating System for BCA 4th sem, Numerical Methods in BCA 4th sem, Software Engineering in BCA 4th sem, Scripting Language for BCA 4th sem, Database Management System in BCA 4th sem, Project I for BCA 4th sem, Subjects for BCA 4th year, Subjects in BCA 4th semester." />
            </Helmet>
            <div className="app-container">
                <Layout>
                    <Bar />
                    <h3 style={{ textAlign: 'center', fontWeight: 'bold', margin: '20px' }}>Forth Semester</h3>
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
        </>
    )
}

export default IVth
