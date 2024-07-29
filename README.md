# Blog App

A simple blog application built with Node.js and Express.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Aftabkld/blog-app.git
    cd blog-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables by creating a `.env` file in the root directory. Refer to `.env.example` for the required variables.

## Usage

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and go to `http://localhost:3000`

## Features

- User authentication (signup/signin)
- Create, read, update, and delete blog posts
- Comment on blog posts
- Upload images for blog posts

## Project Structure

```plaintext
blog-app/
├── .env
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
├── middelwares/
│   └── authentication.js
├── models/
│   ├── blog.js
│   ├── comment.js
│   └── user.js
├── public/
│   ├── images/
│   └── uploads/
├── routes/
│   ├── blog.js
│   └── user.js
├── services/
│   └── authentication.js
├── views/
│   ├── addBlog.ejs
│   ├── blog.ejs
│   ├── home.ejs
│   ├── signin.ejs
│   ├── signup.ejs
│   └── partials/
│       ├── head.ejs
│       ├── nav.ejs
│       └── script.ejs
└── .git/

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.


# blog-app
