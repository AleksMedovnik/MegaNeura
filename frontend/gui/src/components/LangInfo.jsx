import { Descriptions, Avatar } from 'antd';
import StaticticVacancies from './StaticticVacancies';

const LangInfo = props => (
  <Descriptions 
    title={props.item.title} 
    avatar={<Avatar 
      src='https://avatars.mds.yandex.net/i?id=2b96d868c97ef160b760a3a5d2ca26cbf542f96a-4231455-images-thumbs&n=13' 
      />}>
    <Descriptions.Item label="Рейтинг">{props.item.rating}</Descriptions.Item>
    <Descriptions.Item label="Количество вакансий">
        {props.item.vacancies}
    </Descriptions.Item>
    <Descriptions.Item label="Сравнение с прошлым месяцем в вакансиях">
        <StaticticVacancies dataChange={props.item.change} />
    </Descriptions.Item>
  </Descriptions>
);
export default LangInfo;