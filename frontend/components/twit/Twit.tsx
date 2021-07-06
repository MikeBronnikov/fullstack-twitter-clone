import {
  Avatar,
  Container,
  Grid,
  IconButton,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CommentIcon from "@material-ui/icons/Comment";
import SharingWindow from "./sharingWindow";
import {CSSTransition} from 'react-transition-group'

import stylessss from './styles.module.scss'
import Link from 'next/link'

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

interface Props {
  _id: string;
  id?: number;
  text: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export const Twit: React.FC<Props> = ({ id, _id, text, user, ...rest }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sharing, setSharing] = useState(false);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const shareHandleClick = () => {
    setSharing((prev) => !prev)
    console.log(sharing)
  }
  return (
    <Link href={`/${user.username}/${_id}`} > 
    <div className="p-2 border-top border-bottom">
      <Container maxWidth="md">
        <Grid className="" container spacing={1}>
          <Grid className="pt-2" container item xs={1}>
            <Avatar alt="Remy Sharp" src={user.avatarUrl} />
          </Grid>
          <Grid container item xs={11}>
            <div data-info="text" className="d-flex flex-column pl-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row">
                  <Typography variant="h6" className="font-weight-bold">
                    {user.fullname}
                  </Typography>
                  <Typography variant="h6" className="pl-2 text-secondary">
                    @{user.username}
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
                <IconButton size="small">
                  <CommentIcon color="primary" />
                  <span className="ml-2">1</span>
                </IconButton>
                <div className="position-relative">
                  <IconButton size="small" onClick={shareHandleClick}>
                    <ShareIcon color="primary" />
                    <span className="ml-2">1</span>
                  </IconButton>
                 
                   <CSSTransition in={sharing} timeout={1000} key='fsd' unmountOnExit classNames={stylessss} >
                    <div className="position-absolute" style={{ marginLeft: "-21px" }}>
                      <SharingWindow />
                    </div>
                    </CSSTransition>
                  
                </div>
                <IconButton size="small">
                  <LikeIcon color="primary" />
                  <span className="ml-2">1</span>
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
    </Link >
  );
};
