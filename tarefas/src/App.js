import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
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
                  <Sidebar />
                  <div className="content-area">
                      <h2>Controle de Tarefas</h2>
                      <TaskForm />
                      <TaskList />
                  </div>
              </div>
              <Footer />
          </div>
        </TasksProvider>
    );
}

export default App;