import { React} from "react";
import TextField from "@mui/material/TextField";

const SearchBar = () => {
  return (
    <>
    <TextField
          id="outlined-basic"
          variant="outlined"
          label="Search"
          sx={{width:200}}
        />
    </>
  )
}

export default SearchBar;