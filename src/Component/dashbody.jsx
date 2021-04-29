import React from 'react'
import ReactDOM from "react-dom";
import Lady from './../assets/images/lady.png'
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

charts(FusionCharts);

const dataSource = {
    chart: {
      caption: "Traffic/Conversion Chart",
      xaxisname: "Years",
      yaxisname: "Total number of Traffic",
      formatnumberscale: "1",
      plottooltext:
        "<b>$dataValue</b> <b>$seriesName</b> in $label",
      theme: "fusion",
      drawcrossline: "1"
    },
    categories: [
      {
        category: [
          {
            label: "2012"
          },
          {
            label: "2013"
          },
          {
            label: "2014"
          },
          {
            label: "2015"
          },
          {
            label: "2016"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "Traffic",
        data: [
          {
            value: "100000"
          },
          {
            value: "300000"
          },
          {
            value: "500000"
          },
          {
            value: "800000"
          },
          {
            value: "1400000"
          }
        ]
      },
      {
        seriesname: "Conversion",
        data: [
          {
            value: "50000"
          },
          {
            value: "150000"
          },
          {
            value: "480000"
          },
          {
            value: "700000"
          },
          {
            value: "1100000"
          }
        ]
      },
      
    ]
  };
class Dashbody extends React.Component{
    render(){
        return(
            <div className='dashbody-con'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='row'>
                                <div className='col-sm-1 lady-con'>
                                    <img src={Lady} className='' />
                                </div>                                
                                <div className="col-sm-5 mb-3 chatbody-con mt-5">
                                    <div className='dash-chat mb-3 ml-5'>
                                        Good Morning Username   
                                        <span className="chat-time">12:45pm</span>
                                    </div>
                                    <div className='dash-chat mb-3 ml-5'>
                                        Hope you are having a nice time with me today  
                                        <span className="chat-time">12:45pm</span>
                                    </div>
                                    <div className='dash-chat mb-3 ml-5'>
                                        Click the button below to start your journey by creating a sales funnel.   
                                        <span className="chat-time">12:45pm</span>
                                    </div>
                                    <a href='/salesFunnel' className='btn btn-funnel ml-5'style>Create Sales Funnel Now</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mt-5'>
                            <ReactFusioncharts
                                type="mscolumn2d"
                                width="100%"
                                height="100%"
                                dataFormat="JSON"
                                dataSource={dataSource}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashbody;