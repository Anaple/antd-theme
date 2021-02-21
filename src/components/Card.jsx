import {Card ,Avatar,Progress ,Col, Statistic} from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
const {Meta} = Card;
const {Countdown} = Statistic;
const ServerCard = (props) => {

    return (
        <Col>
        <Card
        style={{ width: 300 }}
       
        
        
      >
        <Meta
          avatar={<Avatar src= {props.avatar} />}
          title={props.title}
          description={props.description}
        />
         CPU：
         <Progress disabled={props.disabled} percent={props.cpu} />
         RAM：
         <Progress disabled={props.disabled} percent={props.ram} />
         ROM：
         <Progress disabled={props.disabled} percent={props.rom} />
         <Statistic disabled={props.disabled} title="已使用流量" value={props.network_all} suffix="MB" />
         <Statistic
            disabled={props.disabled}
            title="上传"
            value={props.up}
        
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="KB"
          />
          <Statistic disabled={props.disabled}
            title="下载"
            value={props.down}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="KB"
          />
        <Statistic disabled={props.disabled}
        title="运行时间"
        value={props.date}>
            
        </Statistic>

      </Card>
      </Col>
      
  
  
    );
  
  }

export default ServerCard;