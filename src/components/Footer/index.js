import {
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';

import InstitutionCard from './InstitutionCard'
import Institutions from './Institutions';
import Media from './socialMedias';

const Footer = () => {
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      spacing={2}
    >
      <Grid item style={{ marginBottom: '15px' }}>
        <Typography
          component="h2"
          variant="h2"
          align='center'>
          دوستان و آشنایان
        </Typography>
      </Grid>
      <Grid container item direction='row' justify='center' sm={6}>
        {Institutions.map((institution) => {
          return (
            <InstitutionCard
              img_src={institution.img_src}
              name={institution.name}
              site_url={institution.site_url}
            />
          )
        })}
      </Grid>
      <Grid item>
        <Media />
      </Grid>
      <Grid item xs={12} justify='center' alignItems='center'>
        تمامی حقوق برای کارسوق ریاضی مهرگان محفوظ است. ۱۳۹۹-۱۴۰۰
      </Grid>
    </Grid>
  );
}


export default Footer;