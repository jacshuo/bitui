import './Layout.scss';

import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Layout as BitLayout, Typography } from '@/index';

const { Col, Row, Container } = BitLayout.Grid;
const Layout: React.FC<any> = () => {
  useEffect(() => {
    console.log('Layout Rendered!');
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col auto>
            <Typography.Title level={1}>BitUI</Typography.Title>
          </Col>
        </Row>
        <Row>
          <Col sm md={8} lg={6} xl={5} xxl={4} className={'sideNav'}>
            <ul>
              <li className={'py-3'}>
                <Link to={'/'}>主页</Link>
              </li>
              <li className={'py-3'}>
                <Link to={'typography'}>文字排印</Link>
              </li>
              <li className={'py-3'}>
                <Link to={'layout'}>布局排版</Link>
              </li>
            </ul>
          </Col>
          <Col sm>
            {/* 渲染Layout子路由 */}
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
