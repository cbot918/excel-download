// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))


function downloadExcelFile() {
  fetch('http://localhost:3001/download', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.ms-excel',
    },
  })
    .then(response => response.blob())
    .then(blob => {
      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'file.xlsx';

      // Programmatically click the link to initiate the download
      a.click();

      // Clean up the URL object after the download
      window.URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error('Error downloading the Excel file:', error);
    });
}

// Call the function to trigger the download
downloadExcelFile();