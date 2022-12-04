import { Button, Form, Input, Select } from 'antd';
import images from '../../assets/images';
import PhotoRandom from '../PhotoRandom';

type PhotoFormType = {
    initialValues: Object;
    isEditMode: boolean;
    onSubmit: (value: Object) => void;
};

function PhotoForm({ initialValues, isEditMode, onSubmit }: PhotoFormType) {
    const [form] = Form.useForm();

    const handleRandomPhoto = async () => {
        const randomId = Math.floor(Math.random() * 2000);
        const randomUrl = `https://picsum.photos/id/${randomId}/300/300`;
        form.setFieldValue('photo', randomUrl);
    };

    return (
        <Form form={form} initialValues={initialValues} layout="vertical" colon={false} onFinish={(e) => onSubmit(e)}>
            <Form.Item
                name="title"
                label="Title"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please, Enter your title!',
                    },
                    {
                        whitespace: true,
                        message: "'Title' is not empty!",
                    },
                    {
                        min: 3,
                    },
                ]}
            >
                <Input placeholder="What's your title?" />
            </Form.Item>
            <Form.Item name="category" label="Category" requiredMark="optional" hasFeedback>
                <Select placeholder="What's your category?">
                    <Select.Option value="nature">Nature</Select.Option>
                    <Select.Option value="human">Human</Select.Option>
                    <Select.Option value="animals">Animals</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item name="photo">
                <PhotoRandom onRandomPhoto={handleRandomPhoto} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    {isEditMode ? 'Update' : 'Submit'}
                </Button>
            </Form.Item>
        </Form>
    );
}

export default PhotoForm;
