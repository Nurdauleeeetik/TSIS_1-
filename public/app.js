document.addEventListener('DOMContentLoaded', () => {
    // Initialize Firebase
    const app = firebase.app();
    const db = firebase.firestore();

    // Get DOM elements
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    // Add a new task to Firestore
    const addTask = async () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            try {
                await db.collection('tasks').add({
                    text: taskText,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                });
                taskInput.value = '';
            } catch (error) {
                console.error("Error adding task: ", error);
            }
        }
    };

    // Render tasks in real-time
    db.collection('tasks').orderBy('createdAt', 'desc').onSnapshot(snapshot => {
        taskList.innerHTML = '';
        snapshot.forEach(doc => {
            const task = doc.data();
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${task.text}</span>
                <button class="delete-task" data-id="${doc.id}">Delete</button>
            `;
            taskList.appendChild(li);
        });
    });

    // Delete a task
    const deleteTask = async (e) => {
        if (e.target.classList.contains('delete-task')) {
            const id = e.target.getAttribute('data-id');
            try {
                await db.collection('tasks').doc(id).delete();
            } catch (error) {
                console.error("Error deleting task: ", error);
            }
        }
    };

    // Event Listeners
    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', deleteTask);

    // Optional: Add task on Enter key press
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
