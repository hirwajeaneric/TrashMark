/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
    {
        field: 'firstName',
        headerName: 'First name',
        width: 200,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 200,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 200,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 150,
    },
    {
        field: 'province',
        headerName: 'Province',
        width: 200,
    },
    {
        field: 'district',
        headerName: 'District',
        width: 200,
    },
];

export default function UsersTable(props) {
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