# Google Sheets Integration Setup Guide

This guide will help you set up the Google Sheets integration for your portfolio contact forms.

## 📋 Prerequisites

1. A Google account
2. Access to your Google Sheets: https://docs.google.com/spreadsheets/d/1EeRXG1cMEwJD5Ds6ediqm2VkWL4btbPJ8TAeV_vClrs/edit?usp=sharing

## 🚀 Step-by-Step Setup

### Step 1: Set up Google Apps Script

1. **Go to Google Apps Script**

   - Visit: https://script.google.com/
   - Sign in with your Google account

2. **Create a new project**

   - Click "New Project"
   - Name it "Portfolio Contact Forms"

3. **Replace the default code**

   - Delete the existing code in the editor
   - Copy and paste the contents of `google-apps-script.js` file

4. **Save the project**
   - Click "Save" (Ctrl+S)
   - Give it a name like "Portfolio Contact Forms"

### Step 2: Deploy as Web App

1. **Click "Deploy"**

   - In the Apps Script editor, click the "Deploy" button
   - Select "New deployment"

2. **Configure deployment**

   - **Type**: Web app
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
   - Click "Deploy"

3. **Authorize the app**

   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" → "Go to Portfolio Contact Forms (unsafe)"
   - Click "Allow"

4. **Copy the Web App URL**
   - After deployment, copy the Web App URL
   - It will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`

### Step 3: Update Your Portfolio

1. **Open `script.js`**

   - Find the line: `const googleSheetsUrl = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';`
   - Replace `YOUR_SCRIPT_ID` with your actual script ID from the URL

2. **Enable Google Sheets integration**
   - Find the commented code block starting with `/*`
   - Uncomment it (remove `/*` and `*/`)
   - Comment out the simulation code (add `/*` and `*/` around the setTimeout block)

### Step 4: Set up Google Sheets Headers

1. **Run the setup function**

   - In Google Apps Script, go to the "Functions" dropdown
   - Select "setupHeaders"
   - Click the "Run" button
   - This will create the proper headers in your spreadsheet

2. **Verify the setup**
   - Go to your Google Sheets
   - You should see headers in the first row
   - The headers should be formatted with purple background

## 🔧 Testing the Integration

### Test 1: Basic Connection

1. In Google Apps Script, run the `testConnection` function
2. Check the logs to see if it connects successfully

### Test 2: Form Submission

1. Open your portfolio website
2. Fill out any of the contact forms
3. Submit the form
4. Check your Google Sheets to see if the data appears

## 📊 Data Structure

Your Google Sheets will have these columns:

| Column           | Description                                |
| ---------------- | ------------------------------------------ |
| Timestamp        | When the form was submitted                |
| Service Type     | Type of service requested                  |
| Name             | Contact person's name                      |
| Email            | Contact email                              |
| Company          | Company name (if provided)                 |
| Subject          | Subject line (for general inquiries)       |
| Message          | Main message content                       |
| Project Type     | Type of project (for consultant form)      |
| Budget Range     | Budget information                         |
| Timeline         | Project timeline                           |
| Project Name     | Name of existing project (for maintenance) |
| Maintenance Type | Type of maintenance needed                 |
| Urgency          | How urgent the request is                  |
| Work Type        | Type of work (for hourly rate)             |
| Estimated Hours  | Estimated hours needed                     |
| Start Date       | Preferred start date                       |

## 🛠️ Troubleshooting

### Common Issues:

1. **"Script not found" error**

   - Make sure you copied the correct script ID
   - Verify the deployment was successful

2. **"Access denied" error**

   - Check that the web app is set to "Anyone" access
   - Re-authorize the app if needed

3. **Data not appearing in sheets**

   - Check the Apps Script logs for errors
   - Verify the spreadsheet ID is correct
   - Make sure you have edit permissions on the spreadsheet

4. **CORS errors**
   - The current setup uses `mode: 'no-cors'` to handle CORS
   - If you still get errors, you may need to use a different approach

## 🔒 Security Notes

- The web app is set to "Anyone" access, which means anyone can submit forms
- Consider adding CAPTCHA or rate limiting for production use
- The script ID is visible in your code, so keep your Google account secure

## 📱 Form Types

Your portfolio now has 4 different form types:

1. **General Inquiry** - Basic contact form
2. **Project Consultant** - For project consultation requests
3. **Project Maintenance** - For existing project maintenance
4. **Hourly Rate** - For hourly work inquiries

Each form will be clearly labeled in the Google Sheets with the appropriate service type.

## 🎯 Next Steps

1. Test all form types
2. Customize the form fields if needed
3. Set up email notifications (optional)
4. Add data validation rules in Google Sheets
5. Create automated responses (optional)

## 📞 Support

If you encounter any issues:

1. Check the Google Apps Script logs
2. Verify all URLs and IDs are correct
3. Test with a simple form submission first
4. Check browser console for JavaScript errors

---

**Your portfolio is now ready to collect and manage inquiries through Google Sheets!** 🎉
