# 1. TodoList App 

A simple TodoList application built using React. Tasks can be marked as done or deleted. The user can see the tasks remaining to be done.

## 2. Functionalities

* **Add Tasks** : Create new tasks with a description

* **Mark Tasks as Done** : Toggle the completion status of each task

* **Delete Tasks** : 
    * Delete individual task (only if done)
    * Delete all done tasks

**Task Counter**: Real-time counter shows remaining tasks

## 3. Technologies Used
- **React**: The frontend library used for building the UI.
- **Vite.js**: A fast build tool and development server used for better development experience.
- **Bootstrap** (Optional): Used for styling components. Can be swapped with custom CSS.
- **localStorage**: Used for persisting tasks across page reloads.

## 4. Installation and setup

1. **Clone the Repository :**

```bash
git clone https://github.com/vincianenahimana/todolist-React.git
```
2. **Install Dependencies :**

```bash
npm install
```
This will install Vite along with any necessary React and related dependencies.

3. Run the Development Server

```bash
npm run dev
```
Open http://localhost:5173 in your browser to see the app in action.

## 5. **Usage**
### **Adding a Task**
1. Type the task description into the input field.
2. Click the "Add" button to create the task.
### **Managing Tasks**
* **Mark as done:** Click the checkbox next to a task to toggle its status.
* **Delete done Tasks:** Use the trash icon next to a task to delete it (only if marked as done).
* **Click "Delete All done Tasks"** to remove all done tasks.
### Counter
A live counter at the bottom updates in real-time to show the number of tasks left to complete.

## 6.  Deployement

The TodoList app is deployed on GitHub Pages and Netlify

https://vincianenahimana.github.io/todolist-React/

https://vinci-todolist.netlify.app/