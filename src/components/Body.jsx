import ServerCard from './Card';
import React from 'react'
import axios from 'axios';
import { Row} from 'antd';
import Header from'./Header';
import Table from  './table';
import './body.css';
React.Component.prototype.$axios=axios
class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            server:[],
        }
    }
    render(){
        return(
            <div>
            <Header/>
            {this.createtable()}
            <Row  justify="center" gutter={[8, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            {this.createcard()}
            </Row>
            </div>
        )
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.getjson();
            
        }, 2000);

    }

    getjson(){
        axios.get('json/stats.json').then((res)=>{
            this.setState({
                server:res.data.servers,
            })
            
        })
        
    }
    createtable(){
        var data =[];
        var c =0
        this.state.server.map(item =>{
            const network_all = Math.round(((item.network_in+item.network_out)/1024/1024));
            data=[...data, {key: c++,name:item.name,status:item.online4,address:item.location,uptime:item.uptime,load:item.load,network:item.network_rx+"|"+item.network_tx,network_in:network_all}]   
        })
        return <Table data={data}></Table>
        
    }
    createcard(){
        return this.state.server.map(item =>{
            const ram =Math.round((item.memory_used / item.memory_total * 100));
            const rom =Math.round((item.hdd_used / item.hdd_total * 100));
            const up = Math.round((item.network_rx /1024));
            const down = Math.round((item.network_tx /1024));
            const network_all = Math.round(((item.network_in+item.network_out)/1024/1024));
            const avatar = "/clients/"+item.region+".png"
            if(item.online4&&item.online6 === false){
                //在线机器
                return(
                <ServerCard avatar={avatar}title={item.name} cpu={item.cpu} ram={ram} rom={rom} description={item.type} up={up} down={down} network_all={network_all} date={item.uptime}/>
                )
            }
            else{
                //掉线机器
            return(
                <ServerCard avatar={avatar} title={item.name} cpu={item.cpu} ram={ram} rom={rom} description={item.type} disabled={true} up={up} down={down} network_all={network_all} date={item.uptime}/>
            )
            }
            
        }
        )
    }
  
}
export default Body;