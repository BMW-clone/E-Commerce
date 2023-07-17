import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
const seller = () => {


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: ' firstname',
          headerName: 'FirstName',
          width: 150,
          editable: true,
        },


        {
            field: ' lastname',
            headerName: 'LastName',
            width: 150,
            editable: true,
          },
        {
          field: 'username',
          headerName: 'UserName',
          width: 150,
          editable: true,
        },
      
      
        
      
        {
          field: 'role',
          headerName: 'Role',
          width: 150,
          editable: true,
        },
      
  
      
      
      
      
      
        {
          field: "",
          type: 'actions',
          renderCell: (cellValues) => {
            return (
            
            
              <IconButton aria-label="delete"   type="submit"    onClick={()=> {props.delete(data.id); console.log("id",props.data.id)}} >
                <DeleteIcon />
              </IconButton>
           
           
            ); 
          }
          }
       
      
      ]
      



      const rows = props.seller;

      
        return (
          <div className='seller'>
          <Box sx={{ height: 400, width: '100%' }}>
         
            <DataGrid
          
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                   
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
          </div>
        
    )
}

export default seller