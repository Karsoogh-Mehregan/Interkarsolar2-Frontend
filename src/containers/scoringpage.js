import React from 'react';
import Paper from '@material-ui/core/Paper';
import Appbar2 from '../components/Appbar/Appbar2';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles ,useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

const checklistboxwidth = 300;



function getSteps() {
  return ['سوال 1', ' سوال 2', 'سوال 3','سوال 4','سوال 5'];
}

function getStepContent(step) {

  switch (step) {
    case 0:
      return (
        <div>
          <Grid item >

                <Typography > معیار اول سلام چطوری  ؟ </Typography>
                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent} />
                <Typography > معیار دوم سلام چطوری ؟ </Typography>
                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
                <Typography > معیار سوم سلام چطوری؟ </Typography>
                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
                <Typography > معیار چهارم سلام چطوری؟ </Typography>
                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
                <Typography > معیار پنجم سلام چطوری؟ </Typography>
                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
                <form noValidate autoComplete="off">
                  <TextField id="outlined-basic" label="نظر و پیشنهاد" variant="outlined"  style={{width:'100%'}}/>
                </form>
          </Grid>
        </div>
      );
    case 1:
      return (
        <div>
        <Grid item >

              <Typography > معیار اول سلام چطوری  ؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent} />
              <Typography > معیار دوم سلام چطوری ؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
              <Typography style={{color:'#fefefe' ,textAlign:'center'}}> معیار سوم سلام چطوری؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
              <Typography > معیار چهارم سلام چطوری؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
              <Typography style={{color:'#fefefe' ,textAlign:'center'}}> معیار پنجم سلام چطوری؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
              <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="نظر و پیشنهاد" variant="outlined"  style={{width:'100%'}}/>
              </form>
        </Grid>
      </div>
      );
    case 2:
      return (
        <div>
        <Grid item >

              <Typography > معیار اول سلام چطوری  ؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent} />
              <Typography > معیار دوم سلام چطوری ؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
              <Typography style={{color:'#fefefe' ,textAlign:'center'}}> معیار سوم سلام چطوری؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
              <Typography > معیار چهارم سلام چطوری؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
              <Typography style={{color:'#fefefe' ,textAlign:'center'}}> معیار پنجم سلام چطوری؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
              <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="نظر و پیشنهاد" variant="outlined"  style={{width:'100%'}}/>
              </form>
        </Grid>
      </div>
      );
    case 3:

      return (
        <div>
        <Grid item >

              <Typography > معیار اول سلام چطوری  ؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent} />
              <Typography > معیار دوم سلام چطوری ؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
              <Typography style={{color:'#fefefe' ,textAlign:'center'}}> معیار سوم سلام چطوری؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
              <Typography > معیار چهارم سلام چطوری؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
              <Typography style={{color:'#fefefe' ,textAlign:'center'}}> معیار پنجم سلام چطوری؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
              <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="نظر و پیشنهاد" variant="outlined"  style={{width:'100%'}}/>
              </form>
        </Grid>
      </div>
      );

    case 4:
      return(
        <div>
        <Grid item >

              <Typography > معیار اول سلام چطوری  ؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent} />
              <Typography > معیار دوم سلام چطوری ؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
              <Typography style={{color:'#fefefe' ,textAlign:'center'}}> معیار سوم سلام چطوری؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
              <Typography > معیار چهارم سلام چطوری؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
              <Typography style={{color:'#fefefe' ,textAlign:'center'}}> معیار پنجم سلام چطوری؟ </Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} ValueLabelComponent={ValueLabelComponent}/>
              <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="نظر و پیشنهاد" variant="outlined"  style={{width:'100%'}}/>
              </form>
        </Grid>
      </div>
      );
  }
}


function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement='left-start' title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}









const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(8),
    
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  questionbox:{
    width:'80ch',
    height:'66ch',
    backgroundColor:'#475976',
    marginLeft:theme.spacing(10),
    
    
  },
content: {
    flexGrow: 1,
    padding: theme.spacing(7),
  },

  checklistbox: {
    width:checklistboxwidth ,
  
    marginLeft: theme.spacing(30)
    
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginLeft:theme.spacing(1),
    width:'33%',
    
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
    backgroundColor:'#252b36'
  },
  ID:{
    height:42,
    backgroundColor:'#252b36',
    borderRadius:0,
    textAlign:'center',
    
  },
  text:{
    color:"#f2f4f6"
  },



}));


const PrettoSlider = withStyles({

  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);







export default function FullWidthGrid() {
  const classes = useStyles();
  

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
          
            <CssBaseline />
            <Appbar2/>
        
        </Grid>








        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Grid >
          <main >
                
                <Paper  className={classes.questionbox} >
                    <Grid >
                        <AppBar position="static" style={{backgroundColor:'#252b36'}}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="secondary"
                                textColor="inherit"
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
              
                            >
                                <Tab label="سوال 1" {...a11yProps(0)} />
                                <Tab label="سوال 2" {...a11yProps(1)} />
                                <Tab label="سوال 3" {...a11yProps(2)} />
                                <Tab label="سوال 4" {...a11yProps(3)} />
                                <Tab label="سوال 5" {...a11yProps(4)} />

                            </Tabs>
                        </AppBar>
                        <Grid >
                            <TabPanel value={value} index={0}>
                                سوال 1
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                 سوال 2
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                 سوال 3
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                سوال 4
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                 سوال 5
                           </TabPanel>
                        </Grid>

                    </Grid>
                </Paper>
                
           </main></Grid>
          </Grid>
        





        <Grid item xs={12} sm={6}>
          <Grid >
          <div className={classes.checklistbox}  >
      <Paper className={classes.ID}>
        <Typography style={{ color:'white' }}>
            نام و نام خانوادگی
        </Typography>
      </Paper>
      <Stepper activeStep={activeStep} orientation="vertical"  style={{backgroundColor:'#475976'}}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography className={classes.text}>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                    
                  >
                    قبلی
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'ثبت' : 'بعدی'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer} >
          <Typography className={classes.text}>تصحیح سوالات تموم شد </Typography>
          <Button onClick={handleReset} className={classes.button , classes.text} >
            بازگشت به 1
          </Button>
        </Paper>
      )}
    </div>
          </Grid>
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}