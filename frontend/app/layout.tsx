"use client"

import "./globals.css";
import type { MenuProps } from 'antd';
import { Breadcrumb, ConfigProvider, Divider, Layout, Menu, theme } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { useState } from 'react';
import Link from 'next/link';
import { DatabaseTwoTone, HeartTwoTone, RobotOutlined, SmileTwoTone } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';

type MenuItem = Required<MenuProps>['items'][number];

const { Header, Content, Sider } = Layout;
const { useToken } = theme;

// Navigation options
const naviItem : MenuItem[] = [
    {key: 'decide', label: <Link href="/decide">Decide!</Link>, icon: <SmileTwoTone />},
    {key: 'food', label: <Link href="/food">Food</Link>, icon: <HeartTwoTone />},
    {key: 'tags', label: <Link href="/tags">Tags</Link>, icon: <DatabaseTwoTone />}
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const [collapsed, setCollapsed] = useState(false);
    const { token } = useToken();
    
    return (
        <html lang="en">
            <body>
                <AntdRegistry>
                <Layout style={{ minHeight: '100vh'}}>
                    
                    <Header className="flex items-center gap-2" style={{paddingLeft: '1vw'}}>
                        <RobotOutlined className="text-2xl" spin style={{color: 'white'}}>Pick</RobotOutlined>
                        <h1 className="text-2xl" style={{color: 'white'}}>Pick My Meal</h1>
                    </Header>
                    <Layout>
                    <Sider theme="dark" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                        
                        <Menu theme="dark" mode='inline' items={naviItem}/>

                    </Sider>

                    <Content>
                        {children}
                    </Content>
                    </Layout>
                    
                </Layout>
            </AntdRegistry>
            </body>
        </html>
    )
}
