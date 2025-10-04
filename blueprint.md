# Blueprint: Simple To-Do List App

## Overview

This document outlines the plan for creating a simple to-do list web application as per the user's technical specification. The application will allow users to add, view, and delete tasks. Data will be stored and synchronized in real-time using Firebase Firestore, and the application will be deployable to Firebase Hosting.

## Project Structure

The project will follow this structure:

```
todo-app/
│── public/
│   │── index.html       # Main application page
│   │── style.css        # Application styles
│   │── app.js           # Logic for Firebase interaction and UI
│── .firebaserc          # Firebase project configuration
│── firebase.json        # Firebase Hosting settings
│── blueprint.md         # This file
│── README.md            # Project description and setup guide
```

## Plan - Current Change

Here is the step-by-step plan for the initial setup:

1.  **Restructure the Project:**
    *   Create a `public` directory.
    *   Move `index.html`, `style.css` into `public/`.
    *   Move and rename `main.js` to `public/app.js`.
    *   Delete the old `GEMINI.md` and `README.md`.

2.  **Configure Firebase:**
    *   Create `firebase.json` to configure Firebase Hosting to use the `public` directory.
    *   Create a `.firebaserc` file to specify the Firebase project (placeholder).
    *   Update `.idx/mcp.json` to enable the Firebase local development server.

3.  **Update `public/index.html`:**
    *   Add the basic HTML structure including an input field, an "Add" button, and an unordered list for tasks.
    *   Include Firebase SDK scripts for app and firestore.
    *   Add a script tag for the local Firebase configuration (`/__/firebase/init.js`).
    *   Link `style.css` and `app.js`.

4.  **Update `public/style.css`:**
    *   Add modern and clean styles for the to-do list application to ensure a good user experience.

5.  **Update `public/app.js`:**
    *   Implement the core application logic:
        *   Initialize the Firebase app.
        *   Get a reference to the Firestore database.
        *   **Add Task:** Create a function to add a new task to the "tasks" collection in Firestore.
        *   **Render Tasks:** Set up a real-time listener (`onSnapshot`) to fetch tasks from Firestore and display them on the page.
        *   **Delete Task:** Create a function to delete a task from Firestore using its ID.
        *   Attach event listeners to the "Add" button and the delete buttons.

6.  **Create `README.md`:**
    *   Generate a new `README.md` file with the project title, a brief description, and instructions for setup and deployment.
