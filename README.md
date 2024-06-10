[![Forks](https://img.shields.io/github/forks/galgardev/SQLFormatter?style=for-the-badge)](https://github.com/galgardev/SQLFormatter/forks)
[![Watchers](https://img.shields.io/github/watchers/galgardev/SQLFormatter?style=for-the-badge)](https://github.com/galgardev/SQLFormatter/watchers)
[![Stars](https://img.shields.io/github/stars/galgardev/SQLFormatter?style=for-the-badge)](https://github.com/galgardev/SQLFormatter/stargazers)
[![Contributors](https://img.shields.io/github/contributors/galgardev/SQLFormatter?style=for-the-badge)](https://github.com/galgardev/SQLFormatter/graphs/contributors)

# SQLFormatter

Welcome to `SQLFormatter`, a tool for standardizing and formatting SQL scripts comfortably. This application is compatible with MariaDB, MySQL, SQL Server, PostgreSQL, and SQLite.

![SQLFormatter Preview](./public/assets/img/featured-image.png)

[![Static Badge](https://img.shields.io/badge/Open-SQLFormatter-ffc629?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZmZmZiIgY2xhc3M9InNpemUtNiI+DQogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuNSA1LjY1M2MwLTEuNDI3IDEuNTI5LTIuMzMgMi43NzktMS42NDNsMTEuNTQgNi4zNDdjMS4yOTUuNzEyIDEuMjk1IDIuNTczIDAgMy4yODZMNy4yOCAxOS45OWMtMS4yNS42ODctMi43NzktLjIxNy0yLjc3OS0xLjY0M1Y1LjY1M1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz4NCjwvc3ZnPg0K)](https://sqlformatter.galgar.dev)
[![Static Badge](https://img.shields.io/badge/Run%20in-StackBlitz-blue?style=for-the-badge&logo=stackblitz)](https://stackblitz.com/github.com/galgardev/SQLFormatter)

## Table of Contents

- [SQLFormatter](#sqlformatter)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Getting Started](#getting-started)
    - [Previous considerations](#previous-considerations)
    - [Usage](#usage)
  - [Tech Stack](#tech-stack)
    - [Key Dependencies](#key-dependencies)
  - [Project Structure](#project-structure)
    - [Key Directories and Files](#key-directories-and-files)
  - [Styling](#styling)
    - [Components](#components)
      - [Header](#header)
      - [Formatter](#formatter)
      - [Footer](#footer)
  - [Hooks](#hooks)
  - [Utilities](#utilities)
  - [Contributing](#contributing)
  - [License](#license)

## Project Overview

`SQLFormatter` is a tool designed to help developers standardize and format their SQL scripts with ease. It supports various SQL dialects and provides options for both minified and formatted output.

## Getting Started

### Previous considerations

As already mentioned in the application, when you minify a script, both single-line and multi-line **comments will be removed**.

### Usage

1. Access the application URL:

   [https://sqlformatter.galgar.dev](https://sqlformatter.galgar.dev)

2. Paste your SQL script in the text area.

3. Select the desired format in the “Format Options” selector.

4. Click on the “Format the Script” button.

5. And volià! It's that simple.

> **Note:** Optionally, you can copy the output to the clipboard by clicking the “Copy to Clipboard” button.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework.
- **Material Tailwind**: Tailwind components library inspired by Material Design.

### Key Dependencies

- **sql-formatter**: SQL Formatter is a JavaScript library for pretty-printing SQL queries.
- **@heroicons/react**: Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.

## Project Structure

```plaintext
sqlformatter/
┣ public/
┃ ┣ assets/
┃ ┃ ┣ fonts/
┃ ┃ ┃ ┗ ...
┃ ┃ ┗ img/
┃ ┃   ┗ ...
┣ src/
┃ ┣ assets/
┃ ┣ components/
┃ ┃ ┣ FooterComponents/
┃ ┃ ┃ ┗ Copyright.jsx
┃ ┃ ┣ FormatterComponents/
┃ ┃ ┃ ┣ AlertMessage.jsx
┃ ┃ ┃ ┣ FormatOptions.jsx
┃ ┃ ┃ ┣ FormatterButtons.jsx
┃ ┃ ┃ ┗ ScriptTextarea.jsx
┃ ┃ ┣ Icons/
┃ ┃ ┃ ┣ AlertIcon.jsx
┃ ┃ ┃ ┣ CopyIcon.jsx
┃ ┃ ┃ ┣ GitHubIcon.jsx
┃ ┃ ┃ ┗ StartIcon.jsx
┃ ┃ ┣ Footer.jsx
┃ ┃ ┣ Formatter.jsx
┃ ┃ ┣ Header.jsx
┃ ┃ ┗ SocialLinks.jsx
┃ ┣ hooks/
┃ ┃ ┣ useCopy.js
┃ ┃ ┗ useFormat.js
┃ ┣ layouts/
┃ ┃ ┗ BaseLayout.jsx
┃ ┣ styles/
┃ ┃ ┣ components/
┃ ┃ ┃ ┣ footer.css
┃ ┃ ┃ ┣ formatter.css
┃ ┃ ┃ ┗ header.css
┃ ┃ ┗ global.css
┃ ┣ utils/
┃ ┃ ┗ MetaTags.jsx
┃ ┣ App.jsx
┃ ┣ consts.js
┃ ┗ main.jsx
┣ index.html
┗ ...
```

### Key Directories and Files

- **public/**: Contains static assets used in the application.
- **src/**: Main source code directory.
  - **components/**: Contains reusable React components.
  - **hooks/**: Custom React hooks for managing state and logic.
  - **layouts/**: Layout components for different sections of the application.
  - **styles/**: CSS files for styling components.
  - **utils/**: Utility functions and components.

## Styling

This project uses Tailwind CSS for styling. Global styles are defined in `src/styles/global.css`, while component-specific styles are located in the `src/styles/components` directory.

### Components

#### Header

The Header component displays the title and description of the application.

#### Formatter

The Formatter component provides options for formatting and minifying SQL scripts.

#### Footer

The Footer component contains copyright information.

## Hooks

- **useCopy**: Custom hook for handling script copying functionality.
- **useFormat**: Custom hook for formatting SQL scripts.

## Utilities

- **MetaTags**: Utility component for setting meta tags dynamically.
- **consts.js**: Contains site-wide constants such as the site title and description.

## Contributing

Contributions to this project are welcome! Feel free to fork the repository and submit a pull request. Please ensure your code follows the established conventions and passes all linting checks.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Happy SQL formatting! 🎉
