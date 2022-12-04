import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addPhoto, editPhoto } from '../../redux/reducers/photoSlice';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import './AddEditPhoto.scss';
import PhotoForm from '../../components/PhotoForm';
import { randomNumber } from '../../utils/randomNumber';
import images from '../../assets/images';

function AddEditPhoto() {
    const photoList = useSelector((state: any) => state.photos);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { photoId } = useParams();
    const isEditMode = !!photoId;

    const photoEdited = photoList.find((photo: any) => photo.id === Number(photoId));

    const initialValues = isEditMode
        ? { ...photoEdited }
        : { id: null, title: '', category: '', photo: `https://picsum.photos/id/0/300/300` };

    const handleSubmit = (values: Object) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (isEditMode) {
                    const newPhoto = {
                        ...values,
                        id: randomNumber(10000, 99999),
                    };
                    const action = editPhoto({
                        photoEdited,
                        newPhoto,
                    });
                    dispatch(action);
                } else {
                    const newPhoto = {
                        ...values,
                        id: randomNumber(10000, 99999),
                    };
                    const action = addPhoto(newPhoto);
                    dispatch(action);
                }
                navigate('/photos');
                resolve(true);
            }, 1000);
        });
    };

    return (
        <div className="add-edit">
            <Header />
            <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={images.banner} />
            <div className="container">
                <PhotoForm initialValues={initialValues} isEditMode={isEditMode} onSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export default AddEditPhoto;
