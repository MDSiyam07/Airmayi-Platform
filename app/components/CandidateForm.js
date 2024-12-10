/***
 * Formulaire candidat
 ***/
"use client";

import React from 'react';
import { Button, Select, Form, Input, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addCandidate } from '@/redux/store';

const { Option } = Select;

const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
};

const CandidateForm = () => {
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >
            <Option value="86">+86</Option>
            <Option value="87">+262</Option>
            <Option value="87">+33</Option>
          </Select>
        </Form.Item>
    );

    const dispatch = useDispatch(); // Initialiser useDispatch
    const router = useRouter(); // Initialiser useRouter

    const onFinish = (values) => {
        const { Input, name, gender, email, phone, TextArea, dragger } = values;

        const newCandidate = {
            id: Date.now(),
            firstName: Input,
            name: name,
            gender: gender,
            email: email,
            phone: phone,
            motivation: TextArea,
            resume: dragger[0]?.originFileObj,
        };
        // Dispatch l'action pour ajouter le candidat au store
        dispatch(addCandidate(newCandidate)); 
        console.log('Success:', newCandidate);
        router.push('/thanks');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="form-container">
            <Form
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                style={{
                maxWidth: 600,
                }}
                initialValues={{
                remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
            
            <Form.Item
                label="First Name"
                name="Input"
                rules={[
                {
                    required: true,
                    message: 'Please input!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Name"
                name="name"
                rules={[
                {
                    required: true,
                    message: 'Please input!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="gender"
                label="Gender"
                rules={[
                {
                    required: true,
                    message: 'Please select gender!',
                },
                ]}
            >
                <Select placeholder="select your gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {
                    type: 'email',
                    },
                ]}
                >
                <Input />
            </Form.Item>

            <Form.Item
                label="Phone Number"
                name="phone"
                rules={[
                {
                    required: true,
                    message: 'Please input your phone number!',
                },
                ]}
            >
                <Input
                    addonBefore={prefixSelector}
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>

            <Form.Item label="My Resume">
                <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                    <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    </Upload.Dragger>
                </Form.Item>
            </Form.Item>

            <Form.Item
                label="Text Motivation"
                name="TextArea"
                rules={[
                {
                    required: true,
                    message: 'Please input!',
                },
                ]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item label={null} className="form-button">
                <Button type="primary" htmlType="submit">
                    Send my application!
                </Button>
            </Form.Item>

            </Form>
        </div>
    );
};

export default CandidateForm;