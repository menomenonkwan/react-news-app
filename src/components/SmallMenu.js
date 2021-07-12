import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: none;
  background: var(--secondary);
  margin: 1rem auto;
  padding: 0.25rem 1rem;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  border-radius: 4px;
  -webkit-box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
          box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
  
  @media (max-width: 800px) {
    display: block;
  }

  button {
    color: var(--white, white);
    font-family: inherit;
  }
`;

const useStyles = makeStyles(theme => ({
  paperMenu: {
    color: "var(--secondary, blue)",
    background: 'var(--white, white)',
  },
}));


export default function SmallMenu({ setTopic, options }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <Wrapper>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Search Topics
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ paper: classes.paperMenu }}
      >
        {options?.map((option, i) => (
          <MenuItem onClick={() => { handleClose(); setTopic(`${option.search}`) }} key={i}>{option.name}</MenuItem>
        ))}
      </Menu>
    </Wrapper>
  );
}
