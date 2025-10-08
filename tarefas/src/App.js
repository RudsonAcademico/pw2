import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TasksProvider } from "./contexts/TasksContext";
import "./App.css";

function App() {
    return (
        <TasksProvider>
          <div className="app-container">
              <Header />
              <div className="main-content">
                    <TaskForm />
                    <TaskList />
                    
              </div>
              <Footer />
          </div>
        </TasksProvider>
    );
}

export default App;