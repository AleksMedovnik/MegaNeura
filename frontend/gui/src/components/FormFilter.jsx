import {
    Button,
    Cascader,
    Form,
  } from 'antd';
  import { useState } from 'react';


  const FormFilter = props => {
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
    const handleFormSubmit = event => {
      const title = event.target.elements.title.value
      console.log(title)
    }
    return (
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{
          maxWidth: 1300,
        }}
        onSubmitCapture={handleFormSubmit}
      >
        <Form.Item label="Country">
          <Cascader
            name='title'
            options={[
              {
                value: 'russia',
                label: 'Russia',
              },
              {
                value: 'ukraine',
                label: 'Ukraine',
              },
              {
                value: 'belarus',
                label: 'Belarus',
              },
              {
                value: 'georgia',
                label: 'Georgia', 
              },
              {
                value: 'kazakhstan',
                label: 'Kazakhstan', 
              },
              {
                value: 'azerbaijan',
                label: 'Azerbaijan', 
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Programming language">
          <Cascader
            options={[
              {
                value: 'javascript',
                label: 'JavaScript',
                children: [
                  {
                    value: 'react',
                    label: 'React',
                  },
                  {
                    value: 'angular',
                    label: 'Angular',
                  },
                  {
                    value: 'vue',
                    label: 'Vue.js',
                  },
                  {
                    value: 'node',
                    label: 'Node.js',
                  },
                ],
              },
              {
                value: 'python',
                label: 'Python',
                children: [
                  {
                    value: 'backend',
                    label: 'Backend',
                  },
                  {
                    value: 'all',
                    label: 'Show all',
                  },
                ],
              },
              {
                value: 'c_sharp',
                label: 'C#',
                children: [
                  {
                    value: 'unity',
                    label: 'Unity',
                  },
                  {
                    value: 'dot_net',
                    label: '.net ',
                  },
                ],
              },
              {
                value: 'go',
                label: 'Go',
              },
              {
                value: 'java',
                label: 'Java',
              },
              {
                value: 'cpp',
                label: 'C++',
              },
              {
                value: 'kotlin',
                label: 'Kotlin',
              },
              {
                value: 'swift',
                label: 'Swift',
              },
              {
                value: 'rust',
                label: 'Rust',
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Search">
          <Button type="primary" htmlType="submit">Search</Button>
        </Form.Item>
      </Form>
    );
  };
  export default FormFilter;