# Connecting Your Custom Domain to Google Sites

This guide provides detailed steps for connecting your purchased domain to your Google Sites website.

## Prerequisites
- A published Google Site
- A domain purchased from a domain registrar (GoDaddy, Namecheap, Google Domains, etc.)
- Admin access to your domain's DNS settings

## Step 1: Publish Your Google Site

Before connecting a custom domain, you need to publish your site:

1. Open your Google Site in edit mode
2. Click the "Publish" button in the top-right corner
3. Set a Google Sites URL (this will be your temporary URL)
4. Click "Publish" to make your site live

## Step 2: Access Custom Domain Settings

1. While viewing your published site, click the three-dot menu (⋮) in the top-right corner
2. Select "Settings"
3. Click on "Custom domains"
4. Click "Add custom domain"

## Step 3: Enter Your Domain

1. Enter your purchased domain name
2. You'll have two options:
   - Use your entire domain (e.g., yourcompany.com)
   - Use a subdomain (e.g., www.yourcompany.com)
3. Choose your preferred option and click "Next"

## Step 4: Verify Domain Ownership

Google will need you to verify you own the domain. This typically involves one of these methods:

### Method 1: Adding a TXT Record (Recommended)
1. Google will provide a TXT record value
2. Log in to your domain registrar (where you purchased the domain)
3. Access the DNS settings for your domain
4. Add a new TXT record:
   - Host/Name: usually @ or leave blank (follow Google's instructions)
   - Value/Data: the verification code Google provided
   - TTL: Default or 3600 (1 hour)
5. Save the changes
6. Return to Google Sites and click "Verify"

### Method 2: HTML Verification
1. Upload an HTML file to your domain's root directory
2. This requires your domain to be already set up with web hosting

## Step 5: Configure Domain Mapping (DNS Settings)

After verification, you'll need to set up your domain to point to Google Sites:

1. Google will provide you with CNAME record information
2. Log in to your domain registrar again
3. Access the DNS settings
4. Add a new CNAME record:
   - Host/Name: www or @ (follow Google's instructions)
   - Value/Target: the provided Google Sites address
   - TTL: Default or 3600 (1 hour)
5. Save the changes

## Step 6: Additional DNS Settings (If Required)

### For Root Domain (yourcompany.com)
If you're using the root domain, you may need to set up an A record:
1. Add an A record:
   - Host/Name: @ 
   - Value/IP Address: provided by Google
   - TTL: Default or 3600 (1 hour)

### For Domain Forwarding
If you want both www and non-www versions to work:
1. Set up domain forwarding or URL redirection in your domain registrar
2. Typically point the root domain to www.yourdomain.com or vice versa

## Step 7: Wait for DNS Propagation

1. DNS changes can take 24-48 hours to fully propagate
2. Google will verify your DNS settings automatically
3. Once verified, your site will be accessible via your custom domain

## Step 8: Verify Your Domain is Connected

1. Visit your domain in a web browser
2. Ensure your Google Site loads correctly
3. Check that all pages and functionality work as expected

## Step 9: Set Up SSL (Secure Connection)

Google Sites automatically enables SSL for your custom domain, providing:
- A secure HTTPS connection
- The padlock icon in browsers
- Improved search engine ranking

## Troubleshooting

### Domain Not Connecting
1. Verify all DNS records are entered correctly
2. Check for typos in record names or values
3. Ensure you've waited at least 24 hours for propagation
4. Try accessing the site in an incognito/private browser window

### Error Messages
- If Google shows verification issues, double-check your TXT record
- If you see "Server not found," DNS may still be propagating
- If you see "This site can't be reached," check your CNAME/A records

### Google Sites Settings Issues
- Make sure you're using a Google account with admin access
- Verify your Google Site is published before attempting to connect a domain

## Domain Registrar-Specific Instructions

### GoDaddy
1. Log in to your GoDaddy account
2. Go to "My Products" → "Domains"
3. Select your domain
4. Click "DNS" or "Manage DNS"
5. Add the required records in the "Records" section

### Namecheap
1. Log in to your Namecheap account
2. Go to "Domain List" and click "Manage" for your domain
3. Go to "Advanced DNS"
4. Add the required records in the "Host Records" section

### Google Domains
1. Log in to Google Domains
2. Select your domain
3. Go to "DNS"
4. Add the required records in the "Custom resource records" section

## Additional Tips

1. **Set up email forwarding**
   - Many domain registrars offer email forwarding services
   - This allows you to use professional email addresses (you@yourdomain.com)
   - Emails can be forwarded to your existing email address

2. **Domain privacy**
   - Consider enabling domain privacy protection if offered by your registrar
   - This keeps your personal information private in the WHOIS database

3. **Domain renewal**
   - Set up auto-renewal for your domain to prevent expiration
   - Consider registering for multiple years if you plan to use the domain long-term 