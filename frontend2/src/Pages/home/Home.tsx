import {
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import { NavBar } from "../../components/navbar/Navbar";
import SearchIcon from "@material-ui/icons/Search";
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import { Center } from "./sectionsComponents/Center";
interface PropsType {}

const classesss = withStyles({
  root: {
    borderRadius: "31px",
  },
  label: {
    textTransform: "capitalize",
  },
})(TextField);
export const Home: React.FC<PropsType> = () => {
 
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid container item xs={2}>
          <section className="col">
            <NavBar />
          </section>
        </Grid>
        <Grid className='vh-100' container item xs={6}>
          <section className="col border-left border-right">

           <Center />
          </section>
        </Grid>
        <Grid container item xs={3}>
          <section className="col">
            <div className='position-fixed top-0'>
            <TextField
            fullWidth
            style={{ borderRadius: "19px" }}
              variant="filled"
              InputProps={{ 
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <div className='mt-3 p-2' style={{backgroundColor: '#f4f0f0', borderRadius: '20px'}}>
              <Typography className='font-weight-bold' variant='h5'>Актуальные темы</Typography>


              {/* выделить в компонент */}
              <div className='border-top border-bottom mt-1'>
                <p className='m-0 font-weight-bold'>MOSCOW</p>
                <p className='m-0'>Твитов: 121</p>
              </div>
              <div className='border-top border-bottom mt-2'>
                <p className='m-0 font-weight-bold'>MOSCOW</p>
                <p className='m-0'>Твитов: 121</p>
              </div>
                {/* выделить в компонент */}



            </div>
            </div>
          </section>
        </Grid>
      </Grid>
    </Container>
  );
};
