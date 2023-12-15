import React from 'react'
import Accordion from '../Accordion'
import Layout from '../../Layout';
import Bar from '../Bar';
import { Helmet } from 'react-helmet';

const Iind = () => {

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
                <title>BCA 2nd Semester Subjects - Explore Advanced Courses in C Programming and More</title>
                <meta name="description" content="Dive into BCA 2nd Semester subjects, featuring advanced courses like C Programming, Financial Accounting, English II, Mathematics II, and Microprocessor and Computer Architecture. Discover in-depth study materials, notes, and resources tailored to the second semester of the Bachelor of Computer Application program at BCA Notes Nepal." />
                <meta name="keyword" content="BCA 2nd sem, BCA subjects 2nd year, BCA second semester, BCA 2nd year subjects, BCA 2nd semester subjects, BCA 2nd semester, BCA second semester subject, BCA 2nd sem subjects, 2nd sem BCA, 2nd sem BCA subjects, BCA 2 sem, BCA 2 sem C programming, BCA 2 sem Financial Accounting, BCA 2 sem English II, BCA 2 sem Mathematics II, BCA 2 sem Microprocessor and Computer Architecture, BCA 2nd sem course, BCA 2nd sem subjects, BCA 2nd year, BCA 2nd year 2nd semester, BCA 2nd year all subject, BCA 2nd year English II, BCA 2nd year semester, BCA 2nd year subject, BCA second sem, BCA second sem subjects, BCA second semester Mathematics II, BCA 2nd sem Microprocessor and Computer Architecture, BCA semester 2 subjects, BCA subjects 2 sem, BCA subjects 2nd sem, BCA subjects second semester, BCA subjects for 2nd sem, BCA subjects in 2nd sem, BCA subjects sem 2, Course of BCA 2nd year, Second year 2nd sem BCA subjects, C Programming for BCA 2nd sem, Financial Accounting in BCA 2nd sem, English II in BCA 2nd sem, Mathematics II for BCA 2nd sem, Microprocessor and Computer Architecture in BCA 2nd sem, Subjects for BCA 2nd year, Subjects in BCA 2nd semester." />
            </Helmet>
            <div className="app-container">
                <Layout>
                    <Bar />
                    <h3 style={{ textAlign: 'center', fontWeight: 'bold', margin: '20px' }}>Second Semester</h3>
                    <div style={containerStyle}>
                        <Accordion title="Account">
                            <Accordion title="Handwritten Notes" className="nested-accordion" style={{ marginBottom: '10px' }}>
                                <iframe
                                    src="https://drive.google.com/file/d/17m3LSbRlI4yZftKP81VwSJdxFPBZ-Td8/preview"
                                    style={embedStyle}
                                    allowFullScreen
                                />
                            </Accordion>
                            <Accordion title="PDF" className="nested-accordion" style={{ marginBottom: '10px' }}>
                                <iframe
                                    src="https://drive.google.com/file/d/1xwCdf0ZsJIzxgxr3_RmGESj3MNcFm9p_/preview"
                                    style={embedStyle}
                                    allowFullScreen
                                />
                            </Accordion>
                        </Accordion>

                        <Accordion title="C Programming">
                            <Accordion title="Handwritten Notes" className="nested-accordion" style={{ marginBottom: '10px' }}>
                                <iframe
                                    src="https://drive.google.com/file/d/1PmHcrzZcbKI0MkElF3FOYPc-Y3QHmJIu/preview"
                                    style={embedStyle}
                                    allowFullScreen
                                />
                            </Accordion>
                            <Accordion title="IMP Questions" className="nested-accordion" style={{ marginBottom: '10px' }}>
                                <iframe
                                    src="https://drive.google.com/file/d/1EPLAesoWFsUCRXLAhNcGYYdQsjEtb6Wo/preview"
                                    style={embedStyle}
                                    allowFullScreen
                                />
                            </Accordion>
                            <Accordion title="Programming Questions" className="nested-accordion" style={{ marginBottom: '10px' }}>
                                <iframe
                                    src="https://drive.google.com/file/d/1XzSKHzTnj51xcZ-EFYYbckfCmqyTSM9L/preview"
                                    style={embedStyle}
                                    allowFullScreen
                                />
                            </Accordion>
                        </Accordion>

                        <Accordion title="English II">
                            <Accordion title="Notes" className="nested-accordion" style={{ marginBottom: '10px' }}>
                                <iframe
                                    src="https://drive.google.com/file/d/1TmtvFscwrTiqDOZLkHtmUWv5pWlPL_gc/preview"
                                    style={embedStyle}
                                    allowFullScreen
                                />
                                <iframe
                                    src="https://drive.google.com/file/d/1tpSOxFTgxcbFmewjXzPeW98XkI_wBFXD/preview"
                                    style={embedStyle}
                                    allowFullScreen
                                />
                            </Accordion>

                        </Accordion>

                        <Accordion title="Mathematics II">
                            <Accordion title="Notes" className="nested-accordion" style={{ marginBottom: '10px' }}>
                                <iframe
                                    src="https://drive.google.com/file/d/1sONx0_p_MeR0h1f6PV5z2ExjHU0MjSY3/preview"
                                    style={embedStyle}
                                    allowFullScreen
                                />
                                <iframe
                                    src="https://drive.google.com/file/d/11qGcxiZwb9ehbuYPVmhgGKESPums2GR5/preview"
                                    style={embedStyle}
                                    allowFullScreen
                                />
                                <iframe
                                    src="https://drive.google.com/file/d/11qGcxiZwb9ehbuYPVmhgGKESPums2GR5/preview"
                                    style={embedStyle}
                                    allowFullScreen
                                />
                            </Accordion>

                            <Accordion title="Math Imp" className="nested-accordion" style={{ marginBottom: '10px' }}>
                                <iframe

                                    src="https://drive.google.com/file/d/1GW6hXZ8zCD-mwRVD4MsZQ7aohJbjQD85/preview"
                                    style={embedStyle}
                                    allowFullScreen
                                />

                                <iframe
                                    src="https://drive.google.com/file/d/1u8blvv8bfgDke6C8LaHhKAIBgCvKQMS_/preview"
                                    style={embedStyle}
                                    allowFullScreen
                                />
                            </Accordion>

                        </Accordion>

                        <Accordion title="MicroProcessor">
                            <Accordion title="Notes" className="nested-accordion" style={{ marginBottom: '10px' }}>
                                <iframe
                                    src="https://drive.google.com/file/d/1Ek4S14CgOFxzGLX3yC1Twq_1xzoixbIm/preview"
                                    style={embedStyle}
                                    allowFullScreen
                                />
                                <iframe
                                    src="https://drive.google.com/file/d/1TQP4-FBRfvvXvtR8qeKV-5YPSS3FJX9v/preview"
                                    style={embedStyle}
                                    allowFullScreen
                                />
                                <iframe
                                    src="https://drive.google.com/file/d/1nvo1HnclqoazVE80zD87g9OXFHvRDxKb/preview"
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

export default Iind
