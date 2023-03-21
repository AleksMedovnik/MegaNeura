import { Descriptions } from 'antd';
import StaticticVacancies from './StaticticVacancies';

const LangInfo = props => (
  <Descriptions title={props.item.title}>
    <Descriptions.Item label="Rating">{props.item.rating}</Descriptions.Item>
    <Descriptions.Item label="Number of vacancies">
        {props.item.vacancies}
    </Descriptions.Item>
    <Descriptions.Item label="Change">
        <StaticticVacancies dataChange={props.item.change} />
    </Descriptions.Item>
  </Descriptions>
);
export default LangInfo;