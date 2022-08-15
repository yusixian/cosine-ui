import React from 'react'
import { Space, Button } from 'cosine-ui'

const Demo = () => (
  <Space direction="vertical">
    <Space>
      <Button type="default" loading={true}>
        Default
      </Button>
      <Button type="primary" loading={true}>
        Primary
      </Button>
      <Button type="link" loading={true}>
        Link
      </Button>
      <Button type="unstyle" loading={true}>
        Unstyle
      </Button>
    </Space>
    <Space align="center">
      <Button size="small" loading={true}>
        Small
      </Button>
      <Button loading={true}>Middle</Button>
      <Button size="large" loading={true}>
        Large
      </Button>
    </Space>
    <Space>
      <Button danger loading={true}>
        Default
      </Button>
      <Button type="primary" danger loading={true}>
        Primary
      </Button>
      <Button type="link" danger loading={true}>
        Link
      </Button>
    </Space>
    <Space style={{ background: '#000', padding: '15px' }}>
      <Button ghost loading={true}>
        Default
      </Button>
      <Button type="primary" ghost loading={true}>
        Primary
      </Button>
      <Button type="link" ghost loading={true}>
        Link
      </Button>
      <Button ghost danger loading={true}>
        Default
      </Button>
      <Button type="primary" ghost danger loading={true}>
        Primary
      </Button>
      <Button type="link" ghost danger loading={true}>
        Link
      </Button>
    </Space>
  </Space>
)
export default Demo
