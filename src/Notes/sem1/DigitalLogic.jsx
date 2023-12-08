import React from 'react';
import Accordion from '../Accordion';
import Layout from '../../Layout'

const digitalLogic = () => {
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
        <h3 className='text-center'>Digital Logic</h3>
        <Accordion title="CF note" style={{ marginBottom: '10px' }}>
          <iframe
            title="Hand Written Notes"
            src="https://drive.google.com/file/d/1uWyJhjYNRn02NNw19FTYWjze0EoWtQ-s/preview"
            style={embedStyle}
            allowFullScreen
          />


        </Accordion>
        <Accordion title="Presentaion">
          <iframe
            title="Preview Google Slides"
            src="https://docs.google.com/presentation/d/1fVgRwYmQg6BaS7hBEJEUdLFD1cAyhqhI/preview"
            style={embedStyle}
            allowFullScreen
          />
        </Accordion>

        <Accordion title="Hand Written Notes">
          <iframe
            title="Preview Google Drive File"
            src="https://drive.google.com/file/d/1VDmaHmBOlY5eUaYTzxlx4MjzTJia2Twa/preview"
            style={embedStyle}
            allowFullScreen
          />
        </Accordion>

        <Accordion title="Lab work">
        <iframe

        src="https://docs.google.com/document/d/1omhfpP0PxyCujWSDVnDnGUaeqyMXbgpM/edit?usp=sharing"
        style={embedStyle}
        allowFullScreen
      />
        </Accordion>
      </div>
    </Layout>
  );
};

export default digitalLogic;
