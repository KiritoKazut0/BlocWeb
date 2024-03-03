import GoogleIcon from '@mui/icons-material/Google';
import styled from 'styled-components';
const Button = styled.button`
  
`;
export function Button_Google(){
    return(
        <Button>
            <GoogleIcon
                sx={{
                    fontSize: "19px",
                    margin: "5px"
                }}
            />
        </Button>
    )
}
