import 'antd/dist/antd.less'
import './App.less';
import image from './images/illustration.png';
import { ArrowDownOutlined } from '@ant-design/icons'

import { Layout, Button, Row, Col } from 'antd'

import Card from './Components/Card/Card'

function App() {
  return (
    <>
      <Layout className="App">
        <Row className="header" justify={`space-between`} align={`middle`}>
          <span className="Logo">Together Fun</span>
          <Button type={`primary`} size={`large`} >Зареєструватись</Button>
        </Row>
        <Row justify={`space-between`} align={`middle`}>
          <Col span={10}>
            <h1>FunBook</h1>
            <h2>Сервіс для онлайн читання книг</h2>
            <p>Ми розробили сервіс, який допоможе вам читати улюблені книги в будь-якому місці. Повна синхронізація та перегляд без доступу до мережі.</p>
            <Button type={`primary`} size={`large`} >Перейти на сервіс</Button>
          </Col>
          <Col span={11}><img className={`image`} src={image} alt={`alt`} /></Col>
        </Row>
        <footer className={`footerHome`}>
          <Row justify={`center`}>
            <span className={`scrollDownText`}>Scroll down</span>
          </Row>
          <Row justify={`center`}>
            <ArrowDownOutlined className={`scrollDownIcon`} />
          </Row>
        </footer>
      </Layout>
      <div className={`divider`}></div>
      <Layout className={`App featured`}>
          <Card icon={`sad`} name={`asd`} description={`asdas`}/>
      </Layout>
    </>
  );
}

export default App;
