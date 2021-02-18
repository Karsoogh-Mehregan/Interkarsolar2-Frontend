import Konva from 'konva';
import {
	Typography,
	Grid,
	Button,
	makeStyles,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Container,
} from '@material-ui/core';
import { toast } from 'react-toastify';
import { Society } from './script';
import React, { useState, useEffect } from 'react';
import { Stage, Layer, Rect, Text, Image } from 'react-konva';
import PersonView from './person';

const useStyles = makeStyles((theme) => ({
	container: {
		overflow: 'hidden',
		minHeight: '100vh',
		paddingBottom: theme.spacing(2),
	},
}))

function CoronaTest({ }) {
	const classes = useStyles();
	const [society, setSociety] = useState(new Society());
	const [mode, setMode] = useState(1);

	console.log(society)

	const doTakeTest = () => {
		if (society.selectedPeople.length === 0) {
			toast.error('یه چند نفر رو برای انجام آزمایش انتخاب کن!');
			return;
		}
		if (!society.selectedTest) {
			toast.error('یه تست رو برای انجام آزمایش انتخاب کن!');
			return;
		}
		society.takeTest().bind(society);
	}

	const doSendToHospital = () => {
		if (society.selectedPeople.length === 0) {
			toast.error('یه چند نفر رو برای فرستادن به بیمارستان انتخاب کن!');
			return;
		}
		// todo: build "send to hospital" function 
	}

	return (
		<Container className={classes.container}>
			<Grid container justify='center' spacing={2}>
				<Grid item>
					<Stage width={window.innerWidth} height={window.innerHeight}>
						{society.people.map((person) => {
							return (
								<PersonView
									id={person.id} x={person.x} y={person.y}
									name={person.firstName + ' ' + person.lastName}
									patience={person.patience}
									isSelected={person.isSelected}
									selectPerson={society.selectPerson.bind(society)}
									unselectPerson={society.unselectPerson.bind(society)} />
							)
						})}
					</Stage >
				</Grid>
				{mode === 0 &&
					<Grid container item spacing={2} justify='center' alignItems='center'>
						<Grid item xs={12} sm={3} container justify='center' alignItems='center'>
							<Typography variant='h4'>
								{`بودجه باقی‌مانده: ${society.budget}`}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={3} container justify='center' alignItems='center'>
							<FormControl variant="outlined" fullWidth >
								<InputLabel id="demo-simple-select-required-label">تست‌ها</InputLabel>
								<Select
									fullWidth
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									name='test'
									label='تست‌ها'
								>
									<MenuItem value={'7'}>{'تست روسی - میزان درستی: ۹۰٪ - قدرت تشخیص: ۷۹٪'}</MenuItem>
									<MenuItem value={'7'}>{'تست چینی - میزان درستی: ۷۰٪ - قدرت تشخیص: ۶۰٪'}</MenuItem>
									<MenuItem value={'7'}>{'تست آلمانی - میزان درستی: ۸۰٪ - قدرت تشخیص: ۹۰٪'}</MenuItem>
									<MenuItem value={'7'}>{'تست ایرانی - میزان درستی: ۷۵٪ - قدرت تشخیص: ۸۵٪'}</MenuItem>
								</Select>
							</FormControl >
						</Grid>
						<Grid item xs={12} sm={3} container justify='center' alignItems='center'>
							<Button variant='contained' color='primary' fullWidth onClick={doTakeTest}>
								انجام تست
						</Button>
						</Grid>
						<Grid item xs={12} sm={3} container justify='center' alignItems='center'>
							<Button variant='contained' color='primary' fullWidth>
								ثبت نهایی
						</Button>
						</Grid>
					</Grid>
				}
				{mode === 1 &&
					<Grid container item spacing={2} justify='center' alignItems='center'>
						<Grid item xs={12} container justify='center' alignItems='center'>
							<Button variant='contained' color='primary' fullWidth onClick={doSendToHospital}>
								ارسال نتایج به بیمارستان
							</Button>
						</Grid>
					</Grid>
				}
				{mode === 2 &&
					<Grid container item spacing={2} justify='center' alignItems='center'>
						<Grid item xs={12} container justify='center' alignItems='center'>
							<Typography variant='h4'>
								{`امتیاز شما: ${society.budget}`}
							</Typography>
						</Grid>
					</Grid>
				}
			</Grid>
		</Container>
	)
}

export default CoronaTest;
