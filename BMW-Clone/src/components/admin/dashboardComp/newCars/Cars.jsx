import  {React,useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './Cars.css'

function Cars(props) { 

      const [price,setPrice]=useState("")

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'brand',
    headerName: 'Brand',
    width: 150,
    editable: true,
  },
  {
    field: 'model',
    headerName: 'Model',
    width: 150,
    editable: true,
  },


  

  {
    field: 'color',
    headerName: 'Color',
    width: 150,
    editable: true,
  },

  {
    field: 'price',

    
    headerName: 'Price',
    width: 150,
    editable: true,

   

  },


  {
    renderCell: (cellValues) => {
      
      return (
       
        <IconButton aria-label="share"   onClick={()=> {props.update(props.map.price)}} >
           
          <EditIcon 
          />
        </IconButton>
      
      ); 
    }
    
  },

  {
    field: "",
    type: 'actions',
    renderCell: (cellValues) => {
      return (
    
      
        <IconButton aria-label="delete"   type="submit"    onClick={()=> {props.delete(props.map.id); console.log("id",props.map.id)}} >
          <DeleteIcon />
        </IconButton>
     
     
      ); 
    }
    }
 
  
  
   
    
 

]



const rows = props.data;


  return (
    <div className='statistics '>
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
  );
}
export default Cars