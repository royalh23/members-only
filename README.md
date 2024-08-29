# Members Only

Members Only is an Express.js web application implementing user authentication, authorization, and role-based access control, allowing only registered users to view or manage certain content.

## Features

- User Registration and Authentication: Secure login for registered users using Passport and Passport-Local strategies.
- Role-based Authorization: Restricts access to certain content based on user roles (e.g., member, admin).
- Session Management: Utilizes PostgreSQL to manage user sessions with connect-pg-simple.
- Content Management: Admin users can delete and manage content.
- Secure Password Storage: User passwords are hashed for secure storage.

## Tech Stack

- Backend: Node.js, Express.js
- Frontend: EJS
- Database: PostgreSQL
- Session Management: connect-pg-simple
- Authentication: Passport.js, Passport-Local
- Database Library: pg (node-postgres)

## Project Structure

```bash
/configs # Configuration files (e.g., database, authentication settings)
/controllers # Application logic for handling requests
/middlewares # Custom middleware functions for request processing (e.g., validation, admin authorization)
/public # Static files (CSS, JS, images)
/routes # Application routes
/views # Template files (e.g., EJS files for rendering views)
.gitignore # Files and directories to be ignored by Git
.prettierrc # Configuration for Prettier code formatting
app.js # Main application entry point
eslint.config.mjs # ESLint configuration for code linting
package.json # Project dependencies and scripts
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/royalh23/members-only.git
cd members-only
```

2. Install the required dependencies:

```bash
npm install
```

3. Set up environment variables by creating a .env file in the root directory:

```bash
DATABASE_URL=<your_postgresql_connection_string>
SESSION_SECRET=<your_session_secret>
```

4. Initialize the database with the required schema.

5. Run the application:

```bash
npm run preview
```

The app will run at http://localhost:3000.

## Usage

- Visit the home page and register as a new user.
- Log in with your credentials to be able to add new messages.
- Enter either the member or admin pass-code to gain additional access.
- Member users can view the author and timestamp of messages.
- Admin users can delete or manage content via the admin dashboard.
