import { Layout, theme } from 'antd';
const { Header, Content, Footer } = Layout;


const CustomLayout = props => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
        }}
      >
        <h1
          style={{
            color: 'rgba(255, 255, 255, 0.6 )',
            textAlign: 'center'
          }}
        >MegaNeura</h1>
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 10px',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          {props.children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Контакты:
      </Footer>
    </Layout>
  );
};
export default CustomLayout;