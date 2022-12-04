import { createSlice } from '@reduxjs/toolkit';

type initialPhotosType = {
    id: number;
    title: string;
    category: string;
    photo: string;
};

const initialPhotos: Array<initialPhotosType> = [];

const photo = createSlice({
    name: 'photos',
    initialState: initialPhotos,
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload);
        },
        editPhoto: (state, action) => {
            const { photoEdited, newPhoto } = action.payload;
            const photoIndex = state.findIndex((photo) => photo.id === photoEdited.id);
            state[photoIndex] = newPhoto;
        },
        removePhoto: (state, action) => {
            return state.filter((photo) => photo.id !== action.payload.id);
        },
    },
});

const { reducer, actions } = photo;
export const { addPhoto, editPhoto, removePhoto } = actions;
export default reducer;
