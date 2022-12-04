import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Photo from './pages/Photo';

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading ...</div>}>
                <Router>
                    <Routes>
                        <Route path="/*" element={<Navigate to="/photos" />} />
                        <Route path="/photos/*" element={<Photo />} />
                    </Routes>
                </Router>
            </Suspense>
        </div>
    );
}

export default App;
