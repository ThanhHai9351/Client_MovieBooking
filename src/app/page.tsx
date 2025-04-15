import { Button, DatePicker } from 'antd';

export default function Page() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Ant Design with Next.js</h1>
      <Button type="default">Primary Button</Button>
      <DatePicker />
    </div>
  );
}