const express = require('express');
const fs = require('fs');
const cors = require('cors')
const app = express();
const port = 3001;
app.use(cors())
// Endpoint to download the Excel file
app.get('/download', (req, res) => {
  const filePath = './excel-download.xlsx';

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Set the response headers for Excel file download
    res.setHeader('Content-Type', 'application/vnd.ms-excel');
    res.setHeader('Content-Disposition', 'attachment; filename=excel-download.xlsx');

    // Create a read stream of the file and pipe it to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } else {
    res.status(404).send('File not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});