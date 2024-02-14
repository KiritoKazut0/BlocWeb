import Alert from '@mui/material/Alert';

function MessageError ({message}){

    return (
        <>
         <Alert
            sx={{
                width: "100%",
                fontSize: "12px",
                display: "flex",
                padding: "0",
                margin: "1px 0 0 0",
                border: "none",
                color: "red"
                
            }}
            variant='outlined' severity='error'
         > {message} </Alert>
        </>
    )
   
}

export default MessageError;
