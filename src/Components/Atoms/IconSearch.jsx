import SearchIcon from '@mui/icons-material/Search';

function IconSearch (){
    return (
        <>
            <SearchIcon
                sx={{
                   gridColumn: "1/1",
                   gridRow: "1/1",
                   color: "#d3cdcd",
                   background: "none",
                   height: "100%",
                   zIndex: "999",
                   marginLeft: "5px",
                   fontSize: "28px"
                }}
            />
        </>
    );
}

export default IconSearch;