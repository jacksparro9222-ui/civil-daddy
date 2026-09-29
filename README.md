# Civil Daddy — Render deployment

This is the Render-ready version of the Civil Daddy website. It uses Next.js and Render Postgres so project enquiries remain stored across deploys.

## Deploy

1. Push this folder to a Git repository connected to your Render account.
2. Create a Render Blueprint from that repository. `render.yaml` provisions the web service and Postgres in Singapore. The Blueprint uses free plans for the review deployment; free Postgres expires after 30 days. Upgrade the database before collecting real customer enquiries.
3. Wait for the web service deploy to succeed. Render provides a `civil-daddy.onrender.com` URL, or another suffix if that name is taken.
4. Submit one test enquiry and verify the row in Render Postgres using `SELECT id, name, phone, email, location, service, details, created_at FROM inquiries ORDER BY id DESC LIMIT 5;`. Remove the test row afterward.

The contact phone and WhatsApp links currently point to +91 78881 11024, sourced from a public Civil Daddy profile. Confirm with the company before relying on it. The portfolio uses illustrative stock photography and is labeled accordingly.

There is no owner lead dashboard or automatic notification in this version. Enquiries are saved to Postgres; visitors can additionally choose the WhatsApp handoff. Add an authenticated owner view or email notifications before treating this as a complete lead operations system.
