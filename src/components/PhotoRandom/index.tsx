import { Fragment } from 'react';
import { Button, Form } from 'antd';

type PhotoRandomType = {
    onRandomPhoto: () => void;
};

function PhotoRandom({ onRandomPhoto }: PhotoRandomType) {
    const form = Form.useFormInstance();

    return (
        <Fragment>
            <Button onClick={onRandomPhoto}>Random</Button>
            <div style={{ width: '300px', height: '300px', marginTop: '8px' }}>
                <img
                    style={{ display: 'block', borderRadius: '4px', objectFit: 'cover' }}
                    src={form.getFieldValue('photo')}
                    alt=""
                    onError={onRandomPhoto}
                />
            </div>
        </Fragment>
    );
}

export default PhotoRandom;
