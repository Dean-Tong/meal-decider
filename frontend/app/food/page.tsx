"use client";

import { List } from "antd";

export default function Page() {
    const data : String[] = ['Bad dog do not wakeup forenoon.', 'Bad dog do not sleep midnight.', 'But still a cute dog.', 'And a cute dog.', 'Luv luv.'];
    return (

        <div className="w-full h-full">
            <div>Food Page To Do</div>
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                pagination={{align: 'center', pageSize: 10, position: 'bottom'}}
                itemLayout="vertical"
                dataSource={data}
                renderItem={(item) => (
                <List.Item>{item}</List.Item>
            
            )}
            />
            
        </div>
    );
}