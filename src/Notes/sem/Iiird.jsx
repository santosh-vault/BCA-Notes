import React from 'react'
import Accordion from '../Accordion'
import Layout from '../../Layout'
import Bar from '../Bar';
import { Helmet } from 'react-helmet';

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
        <>
            <Helmet>
                <title>BCA 3rd Semester Subjects - Master Data Structures, Probability, OOP in Java, and More</title>
                <meta name="description" content="Explore the dynamic courses offered in BCA 3rd Semester, featuring Data Structures and Algorithms, Probability and Statistics, System Analysis and Design, OOP in Java, and Web Technology. Access comprehensive study materials, notes, and resources tailored to the third semester of the Bachelor of Computer Application program at BCA Notes Nepal." />
                <meta name="keywords" content="BCA 3rd sem, BCA subjects 3rd year, BCA third semester, BCA 3rd year subjects, BCA 3rd semester subjects, BCA 3rd semester, BCA third semester subject, BCA 3rd sem subjects, 3rd sem BCA, 3rd sem BCA subjects, BCA 3 sem, BCA 3 sem Data Structures and Algorithms, BCA 3 sem Probability and Statistics, BCA 3 sem System Analysis and Design, BCA 3 sem OOP in Java, BCA 3 sem Web Technology, BCA 3rd sem course, BCA 3rd sem subjects, BCA 3rd year, BCA 3rd year 3rd semester, BCA 3rd year all subject, BCA 3rd year OOP in Java, BCA 3rd year semester, BCA 3rd year subject, BCA third sem, BCA third sem subjects, BCA third semester System Analysis and Design, BCA 3rd sem OOP in Java, BCA semester 3 subjects, BCA subjects 3 sem, BCA subjects 3rd sem, BCA subjects third semester, BCA subjects for 3rd sem, BCA subjects in 3rd sem, BCA subjects sem 3, Course of BCA 3rd year, Third year 3rd sem BCA subjects, Data Structures and Algorithms for BCA 3rd sem, Probability and Statistics in BCA 3rd sem, System Analysis and Design in BCA 3rd sem, OOP in Java for BCA 3rd sem, Web Technology in BCA 3rd sem, Subjects for BCA 3rd year, Subjects in BCA 3rd semester." />
            </Helmet>
            <div className="app-container">
                <Layout>
                    <Bar />
                    <h3 style={{ textAlign: 'center', fontWeight: 'bold', margin: '20px' }}>Third Semester</h3>
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
            </div>
        </>
    )
}

export default Iiird
