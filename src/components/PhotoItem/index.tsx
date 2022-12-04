import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './PhotoItem.scss';

interface PhotoItemType {
    photoItem: {
        id: number;
        title: string;
        photo: string;
    };
    onRemovePhoto: (photo: Object) => void;
}

function PhotoItem({ photoItem, onRemovePhoto }: PhotoItemType) {
    const navigate = useNavigate();

    return (
        <div className="photo-item">
            <img src={photoItem.photo} alt="" />
            <div className="photo_overlay">
                <div className="photo_content">
                    <h3>{photoItem.title}</h3>
                    <div className="photo_actions">
                        <Button className="button" onClick={() => navigate(`/photos/${photoItem.id}`)}>
                            Edit
                        </Button>
                        <Button className="button" onClick={() => onRemovePhoto(photoItem)} danger>
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoItem;
