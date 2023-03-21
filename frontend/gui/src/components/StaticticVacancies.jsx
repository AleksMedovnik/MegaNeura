import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

const StaticticVacancies = props => (
  <Row gutter={16}>
    <Col span={24}>
      <Card bordered={false}>

      {

      props.dataChange > 0 ?

        <Statistic
          value={props.dataChange}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<ArrowUpOutlined />}
        />

        : props.dataChange < 0 ?

        <Statistic
          value={Math.abs(props.dataChange)}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<ArrowDownOutlined />}
        />

        :

        <Statistic
          value={props.dataChange}
          valueStyle={{
            color: '#310fcb',
          }}
        />

      }
      
      </Card>
    </Col> 
</Row>
);
export default StaticticVacancies;