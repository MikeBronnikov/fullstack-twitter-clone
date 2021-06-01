import {
  Avatar,
  Container,
  Grid,
  IconButton,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CommentIcon from '@material-ui/icons/Comment';

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export const Twit = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="p-2 border-top border-bottom">
      <Container maxWidth="md">
        <Grid className="" container spacing={1}>
          <Grid className="pt-2" container item xs={1}>
            <Avatar
              alt="Remy Sharp"
              src="https://sun9-58.userapi.com/impf/c852032/v852032076/15efb7/Pg73WOlBJnk.jpg?size=1440x2160&quality=96&sign=2d032784bb2204eceeaf081a9f049ac3&type=album"
            />
          </Grid>
          <Grid container item xs={11}>
            <div data-info="text" className="d-flex flex-column pl-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row">
                  <Typography variant="h6" className="font-weight-bold">
                    Name
                  </Typography>
                  <Typography variant="h6" className="pl-2 text-secondary">
                    @nik
                  </Typography>
                  <Typography variant="h6" className="pl-2 text-muted">
                    @time
                  </Typography>
                </div>
                <ExpandMoreIcon
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                  className="mt-1"
                />
              </div>
              <Typography>
                MAIN TWITTER TEXT LALALALAL fdsfdsf dsfds fd Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Temporibus eaque
                aliquam, ab, culpa eum corporis alias doloremque iusto atque hic
                dolorem id aliquid voluptatem accusantium repellat fuga, placeat
                non. Perferendis?
              </Typography>
              <div className="d-flex mt-2 justify-content-between">
              <IconButton size='small'>
               <CommentIcon color='primary'/>  
               <span className='ml-2'>1</span>
               </IconButton> 
               <IconButton size='small'>
               <ShareIcon color='primary'/>   
               <span className='ml-2'>1</span>
               </IconButton> 
               <IconButton size='small'>
               <LikeIcon color='primary'/>  
               <span className='ml-2'>1</span>
               </IconButton> 
             </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>Send</ListItemIcon>
          Share
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>Send</ListItemIcon>
          <ListItemText primary="GEGE" />
        </StyledMenuItem>
        <StyledMenuItem></StyledMenuItem>
      </StyledMenu>
    </div>
  );
};
