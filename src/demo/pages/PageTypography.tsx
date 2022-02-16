import React from 'react';

import { Layout, Typography } from '@/index';

const { Row, Col } = Layout.Grid;
const PageTypography: React.FC<any> = () => {
  return (
    <>
      <Row>
        <Col>
          <Row justifyContentCenter>
            <Col sm={24} style={{ textAlign: 'center' }}>
              <Typography.Title level={4}>赠汪伦</Typography.Title>
              <Typography.Paragraph>
                李白乘舟将欲行，忽闻岸上踏歌声。
              </Typography.Paragraph>
              <Typography.Paragraph>
                桃花潭水深千尺，不及汪伦送我情。
              </Typography.Paragraph>
            </Col>
          </Row>
          <Typography.Paragraph>
            这是一首千古传诵的告别诗。李白正要乘船离开桃花潭，好友汪伦深情地唱着歌赶来送行。
          </Typography.Paragraph>
          <Typography.Paragraph>
            天宝十四载（755），李白从秋浦（今安徽贵池）前往泾县（今属安徽）游桃花潭，当地人汪伦常酿美酒款待他。临走时，汪伦又来送行，李白作了这首诗留别。
          </Typography.Paragraph>
          <Typography.Paragraph>
            诗的前半是叙事：先写要离去者，继写送行者，展示一幅离别的画面。起句「乘舟」表明是循水道；「将欲行」表明是在轻舟待发之时。这句使我们仿佛见到李白在正要离岸的小船上向人们告别的情景。
          </Typography.Paragraph>
          <Typography.Paragraph>
            送行者是谁呢？次句却不象首句那样直叙，而用了曲笔，只说听见歌声。一群村人踏地为节拍，边走边唱前来送行了。这似出乎李白的意料，所以说「忽闻」而不用「遥闻」。这句诗虽说得比较含蓄，只闻其声，不见其人，但人已呼之欲出。
          </Typography.Paragraph>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography.Title level={1}>标题1</Typography.Title>
          <Typography.Title level={2}>标题2</Typography.Title>
          <Typography.Title level={3}>标题3</Typography.Title>
          <Typography.Title level={4}>标题4</Typography.Title>
          <Typography.Title level={5}>标题5</Typography.Title>
        </Col>
        <Col>
          <Typography.Paragraph>
            <Typography.Text code>var abc='hello world!';</Typography.Text>
          </Typography.Paragraph>
          <Typography.Paragraph>
            <Typography.Text keyboard>shift</Typography.Text> key
          </Typography.Paragraph>
        </Col>
      </Row>
    </>
  );
};

export default PageTypography;
