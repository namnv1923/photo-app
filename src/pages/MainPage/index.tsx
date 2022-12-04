import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import images from '../../assets/images';
import './MainPage.scss';
import PhotoList from '../../components/PhotoList';

function MainPage() {
    const photoList = useSelector((state: any) => state.photos);

    return (
        <div className="main">
            <Header />
            <Banner title="🎉 Your awesome photos 🎉" />
            <div className="container">
                <div className="button-wrap">
                    <Link to="/photos/add">
                        <Button className="button" type="primary">
                            Add a new photo
                        </Button>
                    </Link>
                </div>
                <PhotoList photoList={photoList} />
            </div>
        </div>
    );
}

export default MainPage;
