import React from 'react'
import Accordion from '../Accordion'
import Layout from '../../Layout';

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
        <Layout>
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
    )
}

export default Iind
