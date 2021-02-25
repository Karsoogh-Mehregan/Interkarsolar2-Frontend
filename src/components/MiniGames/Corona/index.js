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
import { Society, TESTS } from './script';
import React, { useState, useEffect } from 'react';
import { Stage, Layer } from 'react-konva';
import PersonView from './person';
import { toPersianNumber } from '../../../utils/translateNumber'

const useStyles = makeStyles((theme) => ({
	container: {
		overflow: 'hidden',
		minHeight: '100vh',
		paddingBottom: theme.spacing(2),
	},
	budget: {
		position: 'fixed',
		top: theme.spacing(2),
		left: theme.spacing(2),
		textShadow: '-2px 2px 5px #d3d3d3',
		zIndex: 10,
	}
}))

function CoronaTest({ }) {
	const classes = useStyles();
	const [_, updateComponent] = useState();
	const [society, setSociety] = useState(new Society(updateComponent));
	const [mode, setMode] = useState(0);

	const doTakeTest = () => {
		if (society.selectedPeople.length === 0) {
			toast.error('یه چند نفر رو برای انجام آزمایش انتخاب کن!');
			return;
		}
		if (society.selectedTest === '') {
			toast.error('یه تست رو برای انجام آزمایش انتخاب کن!');
			return;
		}
		society.takeTest();
		setMode(1);
	}

	const roadToHospital = () => {
		setMode(2);
	}

	const doSendToHospital = () => {
		if (society.selectedPeople.length === 0) {
			toast.error('یه چند نفر رو برای فرستادن به بیمارستان انتخاب کن!');
			return;
		}
		// todo: build "send to hospital" function 
	}

	const getReadyForAnotherTest = () => {
		setMode(0);
		society.reset();
	}

	console.log(society)

	return (
		<Container className={classes.container}>
			<div className={classes.budget}>
				<Typography variant='h4'>
					{`بودجه باقی‌مانده: ${toPersianNumber(society.budget)}`}
				</Typography>
			</div>
			<div className={classes.budget}>
				<Typography variant='h4'>
					{`بودجه باقی‌مانده: ${toPersianNumber(society.budget)}`}
				</Typography>
			</div>
			<Grid container justify='center' spacing={2}>
				<Grid item>
					<Stage width={window.innerWidth} height={window.innerHeight * 2} >
						<Layer>
							{society.people.map((person) => {
								return (
									<PersonView
										id={person.id} x={person.x} y={person.y}
										name={person.firstName + ' ' + person.lastName}
										patience={person.patience}
										isSelected={person.isSelected}
										imageType={person.imageType}
										selectPerson={society.selectPerson.bind(society)}
										unselectPerson={society.unselectPerson.bind(society)} />
								)
							})}
						</Layer>
					</Stage >
				</Grid>
				{mode === 0 &&
					<Grid container item spacing={2} justify='center' alignItems='center'>
						<Grid item xs={12} sm={6} container justify='center' alignItems='center'>
							<FormControl variant="outlined" fullWidth >
								<InputLabel id="demo-simple-select-required-label">تست‌ها</InputLabel>
								<Select
									fullWidth
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									name='test'
									label='تست‌ها'
									onChange={(event) => { society.selectTest(event.target.value) }}
								>
									{TESTS.map((test, index) => {
										return (
											<MenuItem value={index}>{`تست شماره ${toPersianNumber(index + 1)} با درصد‌تشخیص ${toPersianNumber(test.diagnosis)} و دشواری ${toPersianNumber(test.difficulty)}. هزینه‌ی این تست ${toPersianNumber(test.cost)} تومان است.`}</MenuItem>
										)
									})}
								</Select>
							</FormControl >
						</Grid>
						<Grid item xs={12} sm={3} container justify='center' alignItems='center'>
							<Button variant='contained' color='primary' fullWidth onClick={doTakeTest}>
								انجام تست
						</Button>
						</Grid>
						<Grid item xs={12} sm={3} container justify='center' alignItems='center'>
							<Button variant='contained' color='primary' fullWidth onClick={roadToHospital}>
								به سوی بیمارستان...
						</Button>
						</Grid>
					</Grid>
				}
				{mode === 1 &&
					<Grid container item spacing={2} justify='center' alignItems='center'>
						<Grid item xs={12} sm={6} container justify='center' alignItems='center'>
							<Button variant='contained' color='primary' fullWidth onClick={getReadyForAnotherTest}>
								انجام تست مجدد
							</Button>
						</Grid>
						<Grid item xs={12} sm={6} container justify='center' alignItems='center'>
							<Button variant='contained' color='primary' fullWidth onClick={roadToHospital}>
								به سوی بیمارستان...
						</Button>
						</Grid>
					</Grid>
				}
				{mode === 2 &&
					<Grid container item spacing={2} justify='center' alignItems='center'>
						<Grid item xs={12} container justify='center' alignItems='center'>
							<Button variant='contained' color='primary' fullWidth onClick={doSendToHospital}>
								افرادی رو که فکر می‌کنی بیمار هستند، انتخاب کن و به بیمارستان معرفیشون کن!
							</Button>
						</Grid>
					</Grid>
				}
				{mode === 3 &&
					<Grid container item spacing={2} justify='center' alignItems='center'>
						<Grid item xs={12} container justify='center' alignItems='center'>
							<Typography variant='h4'>
								{`امتیاز شما: ${toPersianNumber(society.budget)}`}
							</Typography>
						</Grid>
					</Grid>
				}
			</Grid>
		</Container>
	)
}


export default CoronaTest;
