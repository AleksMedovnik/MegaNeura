import { Descriptions } from 'antd';
import StaticticVacancies from './StaticticVacancies';

const LangInfo = props => (
  <Descriptions 
    title={props.item.title}
    className='lang__info'>
    <Descriptions.Item>
      <img 
        src={props.item.image.url} 
        alt={props.item.title}
        className='lang__icon' />
      </Descriptions.Item>
    <Descriptions.Item label="Рейтинг">{props.item.rating}</Descriptions.Item>
    <Descriptions.Item label="Количество вакансий">
        {props.item.vacancies}
    </Descriptions.Item>
    <Descriptions.Item label="Сравнение с прошлым месяцем в вакансиях">
        <StaticticVacancies 
          dataChange={props.item.change} />
    </Descriptions.Item>
  </Descriptions>
);
export default LangInfo;