import {
    Button,
    Cascader,
    Form,
    Select
  } from 'antd';
import { useState } from 'react';

const FormFilter = props => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onFinish = (values) => {
    props.getLangsData(values.country, values.type_employment);
  };
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
        maxWidth: 700,
      }}
      onFinish={onFinish}
    >
      <Form.Item label="Страна" name='country'>
        <Cascader
          options={[
            {
              value: 'russia',
              label: 'Россия',
              children: [
                {
                  value: 'moscow',
                  label: 'Москва',
                },
                {
                  value: 'petersburg',
                  label: 'Санкт-Петербург',
                },
                {
                  value: 'krasnodar',
                  label: 'Краснодар',
                },
                {
                  value: 'rostov',
                  label: 'Ростов-на-Дону',
                },
              ],
            },
            {
              value: 'belarus',
              label: 'Беларусь',
              children: [
                {
                  value: 'brest',
                  label: 'Брест',
                },
                {
                  value: 'vitebsk',
                  label: 'Витебск',
                },
                {
                  value: 'gomel',
                  label: 'Гомель',
                },
                {
                  value: 'minsk',
                  label: 'Минск',
                },
              ],
            },
            {
              value: 'georgia',
              label: 'Грузия', 
              children: [
                {
                  value: 'batumi',
                  label: 'Батуми',
                },
                {
                  value: 'borjomi',
                  label: 'Боржоми',
                },
                {
                  value: 'tbilisi',
                  label: 'Тбилиси',
                },
                {
                  value: 'chiatura',
                  label: 'Чиатура',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Тип занятости" name='type_employment'>
        <Select>
          <Select.Option value="full">Полная занятость</Select.Option>
          <Select.Option value="remote">Удаленная работа</Select.Option>
          <Select.Option value="part_time">Частичная занятость</Select.Option>
          <Select.Option value="project_work">Проектная работа</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="">
        <Button type="primary" htmlType="submit">Применить фильтры</Button>
      </Form.Item>
    </Form>
  );
};
  export default FormFilter;