# Google Forms Implementation Guide

This guide explains how to create and integrate Google Forms into your Google Sites website to collect contact information and manage form submissions.

## Setting Up Contact Forms

### Step 1: Create a New Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click "+ Blank" to create a new form
3. Click "Untitled form" to rename it (e.g., "Contact Form")
4. In the top-right, click "Settings" (gear icon)
5. Under "General":
   - Toggle on "Collect email addresses" 
   - Toggle on "Limit to 1 response" if appropriate
   - Toggle on "Show progress bar" for longer forms
6. Under "Presentation":
   - Add a confirmation message: "Thank you for contacting us! We'll get back to you soon."
7. Click "Save"

### Step 2: Design Your Form

1. Add a form description explaining the purpose of the form
2. Add the required fields from the contact-page.md specification:
   - Full Name (Short answer) - Mark as required
   - Company Name (Short answer) - Mark as required
   - Email Address (Short answer) - Mark as required
     - Click "More" (three dots) → "Validation" → Email
   - Phone Number (Short answer)
     - Optional: Add phone number validation
   - Subject (Short answer) - Mark as required
   - Message (Paragraph) - Mark as required
   - How did you hear about us? (Multiple choice or Dropdown)
     - Options: Google Search, Social Media, Referral, Advertisement, Other
   - Would you like to subscribe to our newsletter? (Multiple choice)
     - Options: Yes, No
   - I agree to the privacy policy (Checkbox) - Mark as required
     - Add link to your privacy policy page

3. Customize the form appearance:
   - Click the "Customize theme" icon (palette)
   - Set colors to match your website's branding
   - Upload your logo
   - Choose an appropriate font

### Step 3: Set Up Response Collection

1. Click "Responses" at the top of the form
2. Click the three dots menu (⋮)
3. Select "Select response destination"
4. Choose "Create a new spreadsheet"
5. Name your spreadsheet (e.g., "Website Contact Form Responses")
6. Click "Create"

### Step 4: Set Up Email Notifications

1. In Google Sheets, open the spreadsheet connected to your form
2. Click "Tools" → "Notification rules"
3. Configure when you want to be notified:
   - "When spreadsheet changes"
   - "A user submits a form"
4. Choose notification delivery method:
   - "Email - daily digest"
   - "Email - right away"
5. Click "Save"

### Step 5: Create Form Automation (Optional)

For automatic responses to form submissions:

1. In your Google Form, click "More" (three dots) → "Add-ons"
2. Search for and install "Form Publisher" or "Form Notifications"
3. Configure the add-on to send automatic responses to form submitters
4. Or use Google Apps Script:
   - In your response spreadsheet, click "Extensions" → "Apps Script"
   - Create a trigger that sends an email when a new form is submitted

## Embedding Forms in Google Sites

### Step 1: Get Your Form Embed Code

1. Open your Google Form
2. Click the "Send" button
3. Select the embed tab (< >)
4. Customize the width and height as needed
5. Copy the embed HTML code

### Step 2: Embed Form in Google Sites

1. Open your Google Site in edit mode
2. Navigate to the page where you want to add your form (e.g., Contact page)
3. Click the location where you want to insert the form
4. Click "Insert" → "Embed" → "Embed code"
5. Paste the copied embed code
6. Click "Insert"
7. Resize the embedded form as needed

### Step 3: Alternative Method: Direct Form Embedding

1. Open your Google Site in edit mode
2. Navigate to your Contact page
3. Click where you want to insert the form
4. Click "Insert" → "Google Drive" → "Forms"
5. Select your contact form
6. Click "Insert"
7. Resize as needed

## Managing Form Responses

### Viewing Responses

1. Access responses in two ways:
   - Directly in Google Forms: Open your form and click "Responses"
   - In Google Sheets: Open the connected spreadsheet

### Organizing Responses

1. In Google Sheets, you can:
   - Add conditional formatting to highlight urgent inquiries
   - Create filters to sort submissions
   - Add status columns (e.g., "Pending," "Contacted," "Resolved")

### Response Workflow

Create a workflow for handling form submissions:

1. **Review**: Check new submissions daily
2. **Categorize**: Tag or categorize based on inquiry type
3. **Assign**: Delegate to appropriate team members
4. **Respond**: Contact the person within your established timeframe
5. **Track**: Update status in your spreadsheet
6. **Follow-up**: Schedule follow-ups as needed
7. **Archive**: Move completed inquiries to an archive sheet

## Advanced Form Features

### Creating Different Types of Forms

1. **Service Request Form**:
   - Create a separate form for specific service requests
   - Include fields for service type, budget range, timeline, etc.
   - Connect to a different spreadsheet for easier tracking

2. **Newsletter Signup Form**:
   - Create a simple form with name and email
   - Connect to a mailing list spreadsheet

### Adding Form Logic

1. Add conditional questions using "Section" and "Go to section based on answer":
   - Click "More" (three dots) on a question → "Add section"
   - Create different paths based on user responses
   - For example, if they select "Mobile App Development" service, show mobile-specific questions

### Enhancing Forms with Third-Party Tools

If Google Forms is too limiting, consider these alternatives that work with Google Sites:

1. **Typeform**: More interactive forms with better design
   - Create your form on Typeform
   - Embed the form in Google Sites using the embed code

2. **JotForm**: More powerful form features
   - Create your form on JotForm
   - Embed using the HTML embed option

## Best Practices for Contact Forms

1. **Keep it simple**: Only ask for essential information
2. **Be clear about expectations**: Let users know when they can expect a response
3. **Make required fields obvious**: Clearly mark which fields are mandatory
4. **Test your form**: Submit test entries to ensure everything works
5. **Mobile optimization**: Ensure forms work well on mobile devices
6. **GDPR compliance**: Include privacy notices and consent checkboxes
7. **Prevent spam**: Add CAPTCHA if spam becomes an issue (Google Forms has built-in spam protection)
8. **Regular checks**: Monitor your form responses regularly

## Troubleshooting

### Form Not Displaying Correctly

1. Check if the embed code is properly inserted
2. Try adjusting the height and width in the embed code
3. Ensure you have published your Google Site after adding the form

### Not Receiving Form Submissions

1. Verify your form is properly connected to a spreadsheet
2. Check notification settings in Google Sheets
3. Look for submissions in the "Spam" folder of your email

### Form Appearance Issues

1. Use the "Preview" button in Google Forms to test your form
2. Check how it appears on different devices
3. Adjust theme settings for better contrast and readability 