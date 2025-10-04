# Simple To-Do List App

This is a simple web application that allows users to manage a to-do list. The app is built with Vanilla JavaScript, HTML, and CSS, and it uses Firebase for real-time data storage and hosting.

## Features

- Add new tasks.
- View all tasks in real-time.
- Delete tasks.
- Data is synchronized across all open devices.

## Tech Stack

- **Frontend:**
  - HTML5
  - CSS3
  - Vanilla JavaScript
- **Backend & Database:**
  - Firebase Firestore
  - Firebase Hosting

## Getting Started

### Prerequisites

- A Firebase account.
- Node.js and npm installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/todo-app.git
    cd todo-app
    ```

2.  **Install Firebase Tools:**
    ```bash
    npm install -g firebase-tools
    ```

3.  **Connect to your Firebase project:**
    - Log in to your Firebase account:
      ```bash
      firebase login
      ```
    - Initialize Firebase in the project directory. When prompted, select your existing Firebase project.
      ```bash
      firebase init
      ```
    - In the `.firebaserc` file, replace `"your-firebase-project-id"` with your actual Firebase project ID.

4.  **Run the app locally:**
    - Start the Firebase local development server:
      ```bash
      firebase emulators:start
      ```
    - Open your browser and navigate to `http://localhost:5000`.

### Deployment

1.  **Build the project** (if you have a build step, which this simple project does not).

2.  **Deploy to Firebase Hosting:**
    ```bash
    firebase deploy --only hosting
    ```

3.  After deployment, Firebase will provide you with a URL to your live application.

## Live Application URL

- You can view the deployed application at: [Your Firebase Hosting URL](https://your-firebase-project-id.web.app)
