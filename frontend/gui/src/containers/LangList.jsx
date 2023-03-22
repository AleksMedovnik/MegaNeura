import LangInfo from "../components/LangInfo";
import { List } from 'antd';


const LangList = props => (
  <List
    itemLayout="horizontal"
    dataSource={props.data}
    renderItem={item => (
      <List.Item>
		    <LangInfo item = {item} />
      </List.Item>
    )}
  />
);

export default LangList;