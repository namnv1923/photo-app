import { Routes, Route } from 'react-router-dom';
import AddEditPhoto from '../AddEditPhoto';
import MainPage from '../MainPage';

function Photo() {
    return (
        <Routes>
            <Route path="*" element={<MainPage />} />
            <Route path="add" element={<AddEditPhoto />} />
            <Route path=":photoId" element={<AddEditPhoto />} />
        </Routes>
    );
}

export default Photo;
