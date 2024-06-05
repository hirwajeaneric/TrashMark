/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
    // { 
    //     field: 'id', 
    //     headerName: 'ID', 
    //     width: 90,
    // },
    {
        field: 'name',
        headerName: 'Name',
        width: 200,
    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        width: 150,
    },
    {
        field: 'sellerName',
        headerName: 'Seller',
        width: 200,
    },
    {
        field: 'addressLine1',
        headerName: 'Location',
        width: 300,
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 150,
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 200,
    },
];

export default function TrashTable(props) {
    const { data } = props;
    
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
                slots={{ toolbar: GridToolbar }}
            />
        </Box>
    );
}