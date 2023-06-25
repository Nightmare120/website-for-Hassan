import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage from "./pages/User";
import DataPage from "./pages/Data";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetailPage from "./pages/ProjectDetail";
import { useState } from "react";

function App() {
    let [darkToggle, setDarkToggle] = useState(true);
    return (
        <div className={`${darkToggle ? "dark" : ""}`}>
            <div className={`flex dark:bg-slate-900 `}>
                <Router>
                    <Sidebar
                        darkToggle={darkToggle}
                        setDarkToggle={setDarkToggle}
                    />
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <div className="w-[80%]">
                                        <Navbar />
                                        <Dashboard />
                                    </div>
                                </>
                            }
                        ></Route>
                        <Route
                            exact
                            path="/user"
                            element={
                                <div className="w-[80%]">
                                    {" "}
                                    <Navbar /> <UserPage />{" "}
                                </div>
                            }
                        ></Route>
                        <Route
                            exact
                            path="/data"
                            element={
                                <div className="w-[80%]">
                                    {" "}
                                    <Navbar /> <DataPage />{" "}
                                </div>
                            }
                        ></Route>
                        <Route
                            exact
                            path="/project"
                            element={
                                <div className="w-[80%]">
                                    {" "}
                                    <ProjectPage />{" "}
                                </div>
                            }
                        ></Route>
                        <Route
                            path="/project/detail"
                            element={
                                <div className="w-[80%]">
                                    {" "}
                                    <ProjectDetailPage />{" "}
                                </div>
                            }
                        ></Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
