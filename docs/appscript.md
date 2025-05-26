# Google Sheets Apps Script Integration Guide

## 📋 STEP-BY-STEP USAGE GUIDE (for Google Sheets)

1. Open your Google Sheet.
2. Rename the sheets (tabs) as needed. For example:
   - ContactForm1
   - ContactForm2
   - ContactForm3
   - ... (as many as your form handles)
3. Go to Extensions → Apps Script.
4. Delete any existing code inside `Code.gs`.
5. Paste this entire code (including these comment instructions).
6. Click the floppy disk icon (💾) or File → Save. You can name the project "Form Handler".
7. Go to the top menu and click **Deploy → Test deployments** (for internal testing).
   OR click **Deploy → Manage deployments → + New Deployment**.
8. Choose “Web app” as the deployment type.
9. Set the access to: “Anyone” or “Anyone with the link” (depending on your use case).
10. Click **Deploy** and copy the Web App URL.
11. Use this Web App URL as the endpoint for your contact form submissions.
12. Every time a user submits the form, the data will be saved in the relevant sheet.
13. If your form includes identifying which product or sheet to save to, handle that logic in the script.

✅ Done! Your Google Sheet is now ready to receive contact form submissions via Apps Script.

```js

function doPost(e) {
    try {
        const data = JSON.parse(e.postData.contents);

        const targetSheetName = data.sheetName; pass this from your frontend
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(targetSheetName);
        if (!sheet) {
            return ContentService.createTextOutput("Sheet not found").setMimeType(ContentService.MimeType.TEXT);
        }

        const email = data.email;
        if (!email) {
            return ContentService.createTextOutput("Missing email").setMimeType(ContentService.MimeType.TEXT);
        }

        const lastRow = sheet.getLastRow();
        let emails = [];

        if (lastRow > 1) {
            emails = sheet.getRange(2, 1, lastRow - 1, 1).getValues().flat();
        }

        if (emails.includes(email)) {
            return ContentService.createTextOutput("Duplicate email").setMimeType(ContentService.MimeType.TEXT);
        }

        Add timestamp details
        const now = new Date();
        const date = Utilities.formatDate(now, Session.getScriptTimeZone(), "yyyy-MM-dd");
        const day = Utilities.formatDate(now, Session.getScriptTimeZone(), "EEEE");
        const time = Utilities.formatDate(now, Session.getScriptTimeZone(), "HH:mm:ss");

        Define the expected field structure per sheet
        const sheetSchemaMap = {
            "ContactForm1": ["email", "name", "mobile", "product", "message"],
            "ContactForm2": ["email", "name", "mobile", "product", "message"],
            "ContactForm3": ["email", "name", "mobile", "product.id", "product.name", "product.category", "message"]
        };

        const schema = sheetSchemaMap[targetSheetName];
        if (!schema) {
            return ContentService.createTextOutput("Schema not defined for sheet").setMimeType(ContentService.MimeType.TEXT);
        }

        Convert nested fields like product.id
        const rowData = schema.map(field => {
            const keys = field.split(".");
            let value = data;
            for (let key of keys) {
                if (value && key in value) {
                    value = value[key];
                } else {
                    value = ""; if missing
                    break;
                }
            }
            return value;
        });

        Add timestamp info to the end
        rowData.push(date, day, time);

        sheet.appendRow(rowData);

        return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
    } catch (error) {
        return ContentService.createTextOutput("Error: " + error.message).setMimeType(ContentService.MimeType.TEXT);
    }
}
