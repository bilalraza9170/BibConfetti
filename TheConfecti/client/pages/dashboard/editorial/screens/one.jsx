import { useState } from 'react';
import { Modal, Input, Button, Form } from 'antd';
import { createReviewer } from '../../../../api/api';
import { useAuth } from '../../../../authContext';

const ReviewerForm = () => {

  const { currentUser } = useAuth()
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('');

  const initialValues = {
    Oname: currentUser ? currentUser.Oname : null,
    // CFPid: '12345',
  };

  const handleSubmit = async (values) => {
    console.log('Form Values:', values);
    const  username = values.username
    const email = values.email
    const field = values.field
    try {
      const response = await createReviewer({username,email,field})
      console.log("response: ", response)
       setModalMessage('Reviewer added successfully!');
    setModalType('success');
    setIsModalVisible(true);
    form.resetFields();
    } catch (error) {
      console.log(error)
    }
   
  };

  const handleFailedSubmit = (errorInfo) => {
    console.log('Failed:', errorInfo);
    
    setModalMessage('There was an error submitting the form.');
    setModalType('error');
    setIsModalVisible(true);
  };

  return (
    <div style={{backgroundColor: 'white', height: '500px', marginTop: "70px"}} className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <Form
        style={{backgroundColor: 'white'}}
          form={form}
          name="reviewerForm"
          layout="vertical"
          initialValues={initialValues}
          onFinish={handleSubmit}
          onFinishFailed={handleFailedSubmit}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Field"
            name="field"
            rules={[{ required: true, message: 'Please input your field!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Organization Name" name="Oname">
            <Input disabled />
          </Form.Item>
          {/* <Form.Item label="CFP ID" name="CFPid">
            <Input disabled />
          </Form.Item> */}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Modal
        title={modalType === 'success' ? 'Success' : 'Error'}
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        okButtonProps={{ style: { backgroundColor: modalType === 'success' ? 'green' : 'red' } }}
      >
        <p>{modalMessage}</p>
      </Modal>
    </div>
  );
};

export default ReviewerForm;
