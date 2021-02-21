import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const Header =()=>{
    return(
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['logo']}>
        <Menu.Item key="logo"  >Server Status</Menu.Item>
    </Menu>
    )

}
export default Header