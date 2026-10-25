# ShiftFind — live part-time job portal

## Setup
1. Install Node.js 20+ and run MongoDB locally (or use MongoDB Atlas).
2. Run `npm install`.
3. Copy `.env.example` to `.env`; configure `MONGO_URI`, `SESSION_SECRET`, and admin credentials.
4. Generate a password hash: `node -e "console.log(require('bcryptjs').hashSync('YourStrongPassword',12))"` and set `ADMIN_PASSWORD_HASH` to the result.
5. Run `npm run dev`, open http://localhost:5000 and sign in at /admin/login.

Public clients refetch jobs on `jobs:changed`; the admin refetches applications on `applications:changed`. Socket notifications do not contain private applicant data. Resume downloads require an authenticated admin session. Uploaded PDFs are stored on local disk, outside the public static directory; use durable object storage for multi-instance/cloud deployment. Add CSRF protection, PDF signature/content scanning, strict CSP, and distributed Socket.IO adapter before production deployment. Admin login is a single environment-configured account. Use HTTPS and a reverse proxy in production.
