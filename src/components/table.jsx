import { Table, Tag, Space } from 'antd';
const columns = [
    {
      title: '运行状态',
      dataIndex: 'status',
      key: 'status',
      render: status => {if(status===false){
          return <Tag color='red'>维护中</Tag>
          
      }else{
          return <Tag color='geekblue'>正在运行</Tag>
      }
    },
      
     
    },
    {
      title: '节点名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '服务器位置',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title:'在线时间',
      dataIndex:'uptime',
      key:'uptime',
    },
    {
      title:'负载',
      dataIndex:'load',
      key:'load',
        
    },
    { title:'网络 B/s',
      dataIndex:'network',
      key:'network',
    },
    {
      title:'已使用流量',
      dataIndex:'network_in',
      key:'network_in',
    },
    /*{
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },*/
    
    ];
const table =(props)=>{
    return <Table columns={columns} scroll={{ x: 'max-content' }}dataSource={props.data}></Table>
}
export default table;
    