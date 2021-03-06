    
import React, {useState, useEffect} from 'react'
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    // Legend,
  } from "bizcharts";

interface ProType {
    chinaDayAddList: Array<{
        date: string,
        confirm: string,
        suspect: string,
        dead: string,
        heal: string
    }>,
    chinaDayList: Array<{
        date: string,
        confirm: string,
        suspect: string,
        dead: string,
        heal: string
    }>
}

const Hospital = (props: ProType)=>{
    console.log('props...', props);
    // debugger;

    const scale = {
        value: {
            type: 'linear',
        }
    }
    let dayAddList:Array<{}> = [], dayList:Array<{}> = [], dayDeadList:Array<{}> = [];
    props.chinaDayAddList.forEach(item=>{
        dayAddList.push({
            date:item.date,
            type: '确诊人数',
            value: item.confirm
        },{
            date:item.date,
            type: '疑似人数',
            value: item.suspect
        })
    })
    props.chinaDayList.forEach(item=>{
        dayList.push({
            date:item.date,
            type: '确诊人数',
            value: item.confirm
        },{
            date:item.date,
            type: '疑似人数',
            value: item.suspect
        })
        dayDeadList.push({
            date:item.date,
            type: '治愈人数',
            value: item.heal
        },{
            date:item.date,
            type: '死亡人数',
            value: item.dead
        })
    })
    return <>
        {/* 疫情新增趋势（人） */}
        <section>
            <h4>&emsp;&emsp;&emsp;疫情新增趋势（人）</h4>
            <Chart height={259} data={dayAddList} scale={scale} forceFit>
             
                <Axis name="date"
                    label={{
                        formatter: val =>{
                            let arr = val.slice(1).split('.');
                            return `${arr[0]}-${arr[1]}`
                        } 
                    }}
                />
                <Tooltip crosshairs={{type: "y"}}/>
                <Geom
                    type="line"
                    position="date*value"
                    size={2}
                    color="type"
                    shape={"smooth"}
                />
                <Geom
                    type="point"
                    position="date*value"
                    size={4}
                    color="type"
                    style={{
                        stroke: "#fff",
                        lineWidth: 1
                    }}
                />
            </Chart>
        </section>
        {/* 累计确诊疑似趋势（人） */}
        <section>
        <h4>&emsp;&emsp;&emsp;累计确诊疑似趋势（人）</h4>
            <Chart height={259} data={dayList} scale={scale} forceFit>
               
                <Axis name="date"
                    label={{
                        formatter: val =>{
                            let arr = val.slice(1).split('.');
                            return `${arr[0]}-${arr[1]}`
                        } 
                    }}
                />
                <Tooltip crosshairs={{type: "y"}}/>
                <Geom
                    type="line"
                    position="date*value"
                    size={2}
                    color="type"
                    shape={"smooth"}
                />
                <Geom
                    type="point"
                    position="date*value"
                    size={4}
                    color="type"
                    style={{
                        stroke: "#fff",
                        lineWidth: 1
                    }}
                />
            </Chart>
        </section>
        {/* 累计治愈死亡趋势（人） */}
        <section>
        <h4>&emsp;&emsp;&emsp;疫情新增趋势</h4>
            <Chart height={259} data={dayDeadList} scale={scale} forceFit>
               
                <Axis name="date"
                    label={{
                        formatter: val =>{
                            let arr = val.slice(1).split('.');
                            return `${arr[0]}-${arr[1]}`
                        } 
                    }}
                />
                <Tooltip crosshairs={{type: "y"}}/>
                <Geom
                    type="line"
                    position="date*value"
                    size={2}
                    color="type"
                    shape={"smooth"}
                />
                <Geom
                    type="point"
                    position="date*value"
                    size={4}
                    color="type"
                    style={{
                        stroke: "#fff",
                        lineWidth: 1
                    }}
                />
            </Chart>
              <span>&emsp;&emsp;&emsp;&nbsp;
                  数据来源：国家卫健委官网发布，每日更新一次
              </span>
        </section>
        
    </>
}


export default Hospital