import React from 'react'
import DashboardNav from '../Component/dashboardNav'
import Icon from '../Component/Icon'
import DataTable, { createTheme } from 'react-data-table-component'
import funnelr from './../assets/images/funnelr.png'


createTheme('solarized', {
    background: {
      default: '#fff',
    },
    context: {
      background: '#00D005',
      text: '#FFFFFF',
    },
    divider: {
      default: '#f5f5f5',
    },
   
  });
  const data = [{ id: 1, name: 'Red Shoe Form', shortCode: '23efig', impression: '103', reach:'75', conversion:'50', cR:'10%', date:'06/06/2020' },
  { id: 2, name: 'Red Shoe Form', shortCode: '23efig', impression: '103', reach:'75', conversion:'50', cR:'10%', date:'06/06/2020' },
  { id: 3, name: 'Red Shoe Form', shortCode: '23efig', impression: '103', reach:'75', conversion:'50', cR:'10%', date:'06/06/2020' },
  { id: 4, name: 'Red Shoe Form', shortCode: '23efig', impression: '103', reach:'75', conversion:'50', cR:'10%', date:'06/06/2020' },
  { id: 5, name: 'Red Shoe Form', shortCode: '23efig', impression: '103', reach:'75', conversion:'50', cR:'10%', date:'06/06/2020' },
  { id: 6, name: 'Red Shoe Form', shortCode: '23efig', impression: '103', reach:'75', conversion:'50', cR:'10%', date:'06/06/2020' },
  { id: 7, name: 'Red Shoe Form', shortCode: '23efig', impression: '103', reach:'75', conversion:'50', cR:'10%', date:'06/06/2020' },
  { id: 8, name: 'Red Shoe Form', shortCode: '23efig', impression: '103', reach:'75', conversion:'50', cR:'10%', date:'06/06/2020' },
  { id: 9, name: 'Red Shoe Form', shortCode: '23efig', impression: '103', reach:'75', conversion:'50', cR:'10%', date:'06/06/2020' },
];
  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Short Code',
      selector: 'shortCode',
      sortable: true,
      right: true,
    },
    {
    name: 'Impression',
    selector: 'impression',
    sortable: true,
    right: true,
  },
  {
  name: 'Reach',
  selector: 'reach',
  sortable: true,
  right: true,
},
{
name: 'Conversion',
selector: 'conversion',
sortable: true,
right: true,
},
{
name: 'C.R',
selector: 'cR',
sortable: true,
right: true,
},
{
name: 'Date',
selector: 'date',
sortable: true,
right: true,
},
  ];
  
  const customStyles = {
    rows: {
      style: {
        minHeight: '60px', // override the row height
        padding:'2px'
      }
    },
    headCells: {
      style: {
        color: '#222222',
        fontWeight:'bold',
        fontSize:'16px'
      },
    },
    cells: {
      style: {
       color:'#707070'
      },
    },
  }; 
  const highlightOnHover ={
    rows: {
   
    }
  };
  const pointerOnHover ={
    rows: {

    }
  }
  const pagination ={

  }
  const handleChange = (state) => {
    // You can use setState or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', state.selectedRows);
  };
   

class FormsPage extends React.Component{
    render(){
        return(
            <div>
                <DashboardNav />
                <div className='salesbody-con'>
                    <div className='container'> 
                        <a href="/formCreation"  className='btn btn-start float-right mt-5'><Icon icon='plus-solid' fill="#fff" />
                        <span className="ml-2"> Create New Form</span>
                        </a>
                        <p className='float-left' style={{color:'#707070',fontSize:'20px',fontWeight:'bold',marginTop:'10%'}}>All Forms</p>
                             
                            <DataTable
                             columns={columns}
                               theme="solarized"
                               data={data}
                               selectableRows // add for checkbox selection
                               Clicked
                               Selected={handleChange}
                              customStyles={customStyles}
                              highlightOnHover={highlightOnHover}
                              pointerOnHover={pointerOnHover}
                              pagination={pagination}
                              paginationPerPage={6}
                              paginationRowsPerPageOptions={[2,3,4,6]}
                              />
                        </div>
                        <div className='dashfooter-con'>
                            <img src={funnelr} className='funnelr-logo'/>
                            <p className='text-center' style={{color:'#707070',fontSize:'12px'}}> &#169; 2020 Funnellr All rights reserved. Designed by Nerdy Eye powered by Dungada Tech Ltd.</p> 
                    </div>
                    </div>
                </div>
          
        )
    }
}


export default FormsPage;