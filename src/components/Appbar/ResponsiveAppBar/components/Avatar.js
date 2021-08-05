import { Avatar, makeStyles, Tooltip } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

import { stringToColor } from '../../../../utils/stringToColor';

const useStyles = makeStyles(() => ({
  avatar: {},
}));

function AvatarComponent({ player }) {


  console.log(player)

  const firstName = player?.user?.first_name || 'نام';
  const lastName = player?.user?.last_name || 'نام خانوادگی'

  const classes = useStyles();
  return (
    <Tooltip title={`${firstName} ${lastName}`} arrow>
      <Avatar
        // src={process.env.PUBLIC_URL + '/logo.png'}
        style={{ backgroundColor: stringToColor(firstName) }}
        alt="logo"
        className={classes.avatar}>
        {firstName[0]}
      </Avatar>
    </Tooltip>
  );
}

const mapStateToProps = (state) => ({
  player: state.game.player,
})

export default connect(mapStateToProps, {})(AvatarComponent);
