// import React, { useState, useEffect } from 'react';
// import { Table, Button, Modal, Form, Input, Popconfirm } from 'antd';
// import { getReviewersByCFPid, deleteReviewer } from '../../../../api/api';
// import { useAuth } from '../../../../authContext';

// const ReviewersTable = () => {
//   const { currentUser } = useAuth()
//   const [dataSource, setDataSource] = useState([]);
//   const [editingRecord, setEditingRecord] = useState(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const CFPid = currentUser ? currentUser.CFPid : null
//   const [form] = Form.useForm();

//   useEffect(() => {
//     const fetchReviewers = async () => {
//       try {
//         const reviewers = await getReviewersByCFPid(CFPid);
//         console.log("CFP id: ", CFPid, " response: ", reviewers)
//         setDataSource(reviewers.map((reviewer, index) => ({
//           key: reviewer._id,
//           ...reviewer
//         })));
//       } catch (error) {
//         console.error('Failed to fetch reviewers:', error);
//       }
//     };

//     fetchReviewers();
//   }, [CFPid]);

//   const handleEdit = (record) => {
//     setEditingRecord(record);
//     form.setFieldsValue(record);
//     setIsModalVisible(true);
//   };

//   const handleDelete = (key) => {
//     setDataSource(dataSource.filter(item => item.key !== key));
//   };

//   const handleUpdate = (values) => {
//     setDataSource(dataSource.map(item => (item.key === editingRecord.key ? { ...item, ...values } : item)));
//     setIsModalVisible(false);
//     setEditingRecord(null);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//     setEditingRecord(null);
//   };

//   const getColumnSearchProps = (dataIndex) => ({
//     filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//       <div style={{ padding: 8 }}>
//         <Input
//           placeholder={`Search ${dataIndex}`}
//           value={selectedKeys[0]}
//           onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//           onPressEnter={() => confirm()}
//           style={{ marginBottom: 8, display: 'block' }}
//         />
//         <Button type="primary" onClick={() => confirm()} size="small" style={{ width: 90, marginRight: 8 }}>
//           Search
//         </Button>
//         <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
//           Reset
//         </Button>
//       </div>
//     ),
//     filterIcon: (filtered) => <span>{filtered ? '🔍' : '🔍'}</span>,
//     onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
//   });

//   const columns = [
//     {
//       title: 'Username',
//       dataIndex: 'username',
//       key: 'username',
//       ...getColumnSearchProps('username'),
//     },
//     {
//       title: 'Email',
//       dataIndex: 'email',
//       key: 'email',
//       ...getColumnSearchProps('email'),
//     },
//     {
//       title: 'Organization Name',
//       dataIndex: 'Oname',
//       key: 'Oname',
//       ...getColumnSearchProps('Oname'),
//     },
//     {
//       title: 'Field',
//       dataIndex: 'field',
//       key: 'field',
//       ...getColumnSearchProps('field'),
//     },
//     {
//       title: 'Update',
//       key: 'update',
//       render: (_, record) => (
//         <Button type="link" onClick={() => handleEdit(record)}>
//           Update
//         </Button>
//       ),
//     },
//     {
//       title: 'Delete',
//       key: 'delete',
//       render: (_, record) => (
//         <Popconfirm title="Are you sure?" onConfirm={() => handleDelete(record.key)}>
//           <Button type="link" danger>
//             Delete
//           </Button>
//         </Popconfirm>
//       ),
//     },
//   ];

//   return (
//     <>
//       <Table columns={columns} dataSource={dataSource} />

//       <Modal
//         title="Edit Reviewer"
//         visible={isModalVisible}
//         onCancel={handleCancel}
//         footer={null}
//       >
//         <Form form={form} onFinish={handleUpdate} layout="vertical">
//           <Form.Item
//             label="Username"
//             name="username"
//             rules={[{ required: true, message: 'Please input the username!' }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             label="Email"
//             name="email"
//             rules={[
//               { required: true, message: 'Please input the email!' },
//               { type: 'email', message: 'Please enter a valid email!' },
//             ]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             label="Organization Name"
//             name="Oname"
//             rules={[{ required: true, message: 'Please input the organization name!' }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             label="Field"
//             name="field"
//             rules={[{ required: true, message: 'Please input the field!' }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" className="w-full">
//               Update
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </>
//   );
// };

// export default ReviewersTable;


import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, Popconfirm, message } from 'antd';
import { getReviewersByCFPid, deleteReviewer } from '../../../../api/api';
import { useAuth } from '../../../../authContext';

const ReviewersTable = () => {
  const [dataSource, setDataSource] = useState([]);
  const [editingRecord, setEditingRecord] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

   const { currentUser } = useAuth()
  const CFPid = currentUser ? currentUser.CFPid : null

  useEffect(() => {
    const fetchReviewers = async () => {
      try {
        const reviewers = await getReviewersByCFPid(CFPid);
        setDataSource(reviewers.map((reviewer) => ({
          key: reviewer._id,
          ...reviewer
        })));
      } catch (error) {
        console.error('Failed to fetch reviewers:', error);
      }
    };

    fetchReviewers();
  }, [CFPid]);

  const handleEdit = (record) => {
    setEditingRecord(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleDelete = async (key) => {
    try {
      await deleteReviewer(key);
      setDataSource(dataSource.filter(item => item.key !== key));
      message.success('Reviewer deleted successfully');
    } catch (error) {
      message.error('Failed to delete reviewer');
    }
  };

  const handleUpdate = (values) => {
    setDataSource(dataSource.map(item => (item.key === editingRecord.key ? { ...item, ...values } : item)));
    setIsModalVisible(false);
    setEditingRecord(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingRecord(null);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => confirm()}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Button type="primary" onClick={() => confirm()} size="small" style={{ width: 90, marginRight: 8 }}>
          Search
        </Button>
        <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered) => <span>{filtered ? '🔍' : '🔍'}</span>,
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  });

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      ...getColumnSearchProps('username'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Organization Name',
      dataIndex: 'Oname',
      key: 'Oname',
      ...getColumnSearchProps('Oname'),
    },
    {
      title: 'Field',
      dataIndex: 'field',
      key: 'field',
      ...getColumnSearchProps('field'),
    },
    {
      title: 'Update',
      key: 'update',
      render: (_, record) => (
        <Button type="link" onClick={() => handleEdit(record)}>
          Update
        </Button>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (_, record) => (
        <Popconfirm title="Are you sure?" onConfirm={() => handleDelete(record.key)}>
          <Button type="link" danger>
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={dataSource} />

      <Modal
        title="Edit Reviewer"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleUpdate} layout="vertical">
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input the username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input the email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Organization Name"
            name="Oname"
            rules={[{ required: true, message: 'Please input the organization name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Field"
            name="field"
            rules={[{ required: true, message: 'Please input the field!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ReviewersTable;
