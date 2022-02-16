import './Layout.scss';

import React from 'react';
import { Outlet } from 'react-router-dom';

import { Layout as BitLayout } from '@/index';

const { Col, Row, Container } = BitLayout.Grid;
const Layout: React.FC<any> = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col auto>Header</Col>
        </Row>
        <Row>
          <Col autoSm md={8} lg={4} xl={3} xxl={2}>
            SideBar Nav
          </Col>
          <Col autoSm>
            {/* 渲染Layout子路由 */}
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
