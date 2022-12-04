import { Col, Row } from 'antd';
import { useDispatch } from 'react-redux';
import PhotoItem from '../PhotoItem';
import { removePhoto } from '../../redux/reducers/photoSlice';

type PhotoListType = {
    photoList: [
        {
            id: number;
            photo: string;
            title: string;
        },
    ];
};

function PhotoList({ photoList }: PhotoListType) {
    const dispatch = useDispatch();
    const handleRemovePhoto = (photo: Object) => {
        const action = removePhoto(photo);
        dispatch(action);
    };

    return (
        <Row gutter={{ xs: 8, sm: 16 }}>
            {photoList.map((photoItem) => (
                <Col key={photoItem.id} className="gutter-row" sm={{ span: 6 }} xs={{ span: 12 }}>
                    <PhotoItem photoItem={photoItem} onRemovePhoto={handleRemovePhoto} />
                </Col>
            ))}
        </Row>
    );
}

export default PhotoList;
