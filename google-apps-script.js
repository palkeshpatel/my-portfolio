// Google Apps Script for Portfolio Contact Forms
// Deploy this as a web app to handle form submissions

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const spreadsheet = SpreadsheetApp.openById('1EeRXG1cMEwJD5Ds6ediqm2VkWL4btbPJ8TAeV_vClrs');
    const sheet = spreadsheet.getActiveSheet();
    
    // Prepare row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.service_type || 'General Inquiry',
      data.name || '',
      data.email || '',
      data.company || '',
      data.subject || '',
      data.message || '',
      data.project_type || '',
      data.budget_range || '',
      data.timeline || '',
      data.project_name || '',
      data.maintenance_type || '',
      data.urgency || '',
      data.work_type || '',
      data.estimated_hours || '',
      data.start_date || ''
    ];
    
    // Add data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Portfolio Contact Form Handler is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Function to set up the spreadsheet headers (run once)
function setupHeaders() {
  const spreadsheet = SpreadsheetApp.openById('1EeRXG1cMEwJD5Ds6ediqm2VkWL4btbPJ8TAeV_vClrs');
  const sheet = spreadsheet.getActiveSheet();
  
  const headers = [
    'Timestamp',
    'Service Type',
    'Name',
    'Email',
    'Company',
    'Subject',
    'Message',
    'Project Type',
    'Budget Range',
    'Timeline',
    'Project Name',
    'Maintenance Type',
    'Urgency',
    'Work Type',
    'Estimated Hours',
    'Start Date'
  ];
  
  // Clear existing data and set headers
  sheet.clear();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.getRange(1, 1, 1, headers.length).setBackground('#667eea');
  sheet.getRange(1, 1, 1, headers.length).setFontColor('white');
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
}

// Function to test the connection
function testConnection() {
  const spreadsheet = SpreadsheetApp.openById('1EeRXG1cMEwJD5Ds6ediqm2VkWL4btbPJ8TAeV_vClrs');
  const sheet = spreadsheet.getActiveSheet();
  
  Logger.log('Spreadsheet connected successfully!');
  Logger.log('Sheet name: ' + sheet.getName());
  Logger.log('Last row: ' + sheet.getLastRow());
  
  return 'Connection successful!';
} 