import React from 'react';
import Accordion from '../Accordion';
import Layout from '../../Layout';

const Iframe = () => {
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
        {/* Main Accordion */}
        <Accordion title="Computer Fundamental">
          {/* Nested Accordions */}
          {/* Notes Section */}
          <Accordion title="CF Notes" className="nested-accordion" style={{ marginBottom: '10px' }}>
            <iframe
              title="Hand Written Notes"
              src="https://drive.google.com/file/d/1uWyJhjYNRn02NNw19FTYWjze0EoWtQ-s/preview"
              style={embedStyle}
              allowFullScreen
            />
          </Accordion>

          {/* Presentation Section */}
          <Accordion title="Presentation" className="nested-accordion">
            <iframe
              title="Preview Google Slides"
              src="https://docs.google.com/presentation/d/1fVgRwYmQg6BaS7hBEJEUdLFD1cAyhqhI/preview"
              style={embedStyle}
              allowFullScreen
            />
          </Accordion>

          {/* Hand Written Notes Section */}
          <Accordion title="Hand Written Notes" className="nested-accordion">
            <iframe
              title="Preview Google Drive File"
              src="https://drive.google.com/file/d/1VDmaHmBOlY5eUaYTzxlx4MjzTJia2Twa/preview"
              style={embedStyle}
              allowFullScreen
            />
          </Accordion>

          {/* Lab Work Section */}
          <Accordion title="Lab Work">
            <iframe
              src="https://docs.google.com/document/d/1omhfpP0PxyCujWSDVnDnGUaeqyMXbgpM/edit?usp=sharing"
              style={embedStyle}
              allowFullScreen
            />
          </Accordion>
        </Accordion>

        <Accordion title="Digital Logic">

          <Accordion title="Hand Written Notes" className="nested-accordion" style={{ marginBottom: '10px' }}>
            <iframe
              title="Hand Written Notes"
              src="https://drive.google.com/file/d/1pqOXHaoC8Oq_FnHxEyxsOg2RTFV4gdZW/preview"
              style={embedStyle}
              allowFullScreen
            />
          </Accordion>

          <Accordion title="Book" className="nested-accordion">
            <iframe
              title="Embedded Google Docs Document"
              src="https://drive.google.com/file/d/1ddAAaY26BJfhOCvVrXNYCwaedU9UFJaA/preview"

              width="640"
              height="480"
              allowFullScreen
            ></iframe>

          </Accordion>


        </Accordion>

        <Accordion title="English I">

          <Accordion title="Notes" className="nested-accordion" style={{ marginBottom: '10px' }}>
            <iframe
              title="Hand Written Notes"
              src="https://drive.google.com/file/d/1fr-7mjOkdf7TtysLLZ-2eYxcol5k5cos/preview"
              style={embedStyle}
              allowFullScreen
            />
            <br />
            <iframe
              src="https://drive.google.com/file/d/1q9MiptO1VdTq8Lv5saeK7DuotdZioJpt/preview"
              style={embedStyle}
              allowFullScreen
            />
            <iframe

              src="https://drive.google.com/file/d/18nDKxN5pjsOP-TCBw5vV5LEAj_eJxBSe/preview"
              style={embedStyle}
              allowFullScreen
            />
          </Accordion>


        </Accordion>

        <Accordion title="Math">

          <Accordion title="Book Note" className="nested-accordion" style={{ marginBottom: '10px' }}>
            <iframe

              src="https://drive.google.com/file/d/1pyYK9IMGDlbc_CHivXH2-AiJU5ADEiI4/preview"
              style={embedStyle}
              allowFullScreen
            />


          </Accordion>
          
          <Accordion title='Matlab'>
              <iframe
                src="https://drive.google.com/file/d/17aY3coKiDcdq3YmjPbO79drqFsI-77YQ/preview"
                style={embedStyle}
                allowFullScreen
              />
              <iframe
                src="https://drive.google.com/file/d/1cxZzRrw6ENkFpL2ScoqzVmtynN14P0kt/preview"
                style={embedStyle}
                allowFullScreen
              />
              <iframe
                src="https://drive.google.com/file/d/17rwOKZyjsdcgVQR6LLBiY2ucldIzlxxg/preview"
                style={embedStyle}
                allowFullScreen
              />
                <iframe
             
                src="https://drive.google.com/file/d/17obHK9vLVp14zxopKM44dQwEWUZ-lVvS/preview"
                style={embedStyle}
                allowFullScreen
              />

            </Accordion>


        </Accordion>

        <Accordion title="Society">

          <Accordion title="Book Note" className="nested-accordion" style={{ marginBottom: '10px' }}>
            <p>nothing to show</p>


          </Accordion>


        </Accordion>
      </div>
    </Layout>
  );
};

export default Iframe;
