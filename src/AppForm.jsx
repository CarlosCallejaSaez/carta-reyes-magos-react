import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import './AppForm.css';

const AppForm = () => {
  const [step, setStep] = useState(1);
  const [childName, setChildName] = useState('');
  const [letter, setLetter] = useState('');

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const generatePdf = () => {
    const pdfContent = `
      <h1>Carta a los Reyes Magos</h1>
      <p><strong>Nombre del niño:</strong> ${childName}</p>

      <p><strong>Carta:</strong></p>
      <p>${letter}</p>
      <p>Developed with ♥ by Carlos Calleja</p>
    `;

    const element = document.createElement('div');
    element.innerHTML = pdfContent;

    html2pdf(element, {
      margin: 10,
      filename: 'carta_reyes_magos_©CarlosCallejaSaez.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    });
  };

  const handleSubmit = () => {
    console.log('Child name:', childName);
    console.log('Letter:', letter);

    generatePdf();

    setStep(3);
    setChildName('');
    setLetter('');
  };

  return (
    <div className="container">
      {step === 1 && (
        <div className="formStep">
          <label className="label">Dinos tu nombre para comprobar que estás en la lista de niños/as que se han portado bien este año</label>
          <input
            className="input"
            type="text"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
          />
          <button className="button" onClick={handleNextStep}>
            Continuar
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="formStep">
          <label className="label"> 👌 {childName}, hemos comprobado que te has portado MUY BIEN, escribe qué regalos quieres :</label>
          <textarea
            className="textarea"
            value={letter}
            rows={8}
            onChange={(e) => setLetter(e.target.value)}
          />
          <button className="button" onClick={handleSubmit}>
            Enviar carta
          </button>
        </div>
      )}
      {step === 3 && (
        <div className="formStep successStep">
          <p>✅✅ Carta enviada con éxito a sus majestades de Oriente ✅✅</p>
        </div>
      )}
    </div>
  );
};

export default AppForm;
