import React, { useState, useEffect } from "react";
import { Popover, TextField, MenuItem } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

// data and components
import { citiesName, statesName } from "./CityState.js";
import { dateCheckHandler } from "./dataChecker.js";

// image
import VectorImage from "../../public/assets/Vector.png";

// styles
import styles from "../../styles/Home.module.css";

const Container = styled.div`
	padding-top: 7rem;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 94%;
	margin: auto;
`;

const ButtonTheme = styled.button`
	background-color: transparent;
	border: 1px transparent solid;
	border-radius: 0.5rem;
	padding: 0.5rem 0.7rem;

	&:hover {
		cursor: pointer;
		border: 1px var(--secondText) solid;
	}
`;

const TabWrapper = styled.div`
	flex-grow: 1;
`;

const TabFlex = styled.div`
	display: flex;
	align-items: center;
`;

const TabText = styled(ButtonTheme)`
	color: var(--mainText);
	font-size: 1.3rem;
	margin-inline: 1rem;
`;

const FilterWrapper = styled.div``;

const FilterButton = styled(ButtonTheme)`
	display: flex;
	align-items: center;
`;

const FilterButtonText = styled.span`
	color: var(--mainText);
	font-size: 1rem;
	letter-spacing: 1px;
	margin-left: 1rem;
`;

export default function Tab({ setSearch, search, setNearRide, nearRide }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const [city, setCity] = useState("");
	const [state, setState] = useState("");

	// handle popper target place
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	// handle popper close
	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	// change Search handler
	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};

	// change City handler
	const handleCityChange = (event) => {
		setSearch(event.target.value);
	};

	// change State handler
	const handleStateChange = (event) => {
		setSearch(event.target.value);
	};

	const dateCheckHandler = () => {
		const dateValue = new Date();
		const currentDate = dateValue.getMonth();
		const showDate = currentDate + 1;
		console.log(showDate);
		return showDate;
	};

	useEffect(() => {
		dateCheckHandler();
	}, [state, city]);

	return (
		<Container>
			<Wrapper>
				<TabWrapper>
					<TabFlex>
						<TabText
							onClick={() => {
								setNearRide(!nearRide);
								console.log("clicked");
							}}
						>
							Nearest rides
						</TabText>
						<TabText>Upcoming rides</TabText>
						<TabText>Past rides</TabText>
					</TabFlex>
				</TabWrapper>
				<FilterWrapper>
					<FilterButton onClick={handleClick}>
						<Image src={VectorImage} width='25' height='15' className={styles.imageprops} />
						<FilterButtonText>Filter</FilterButtonText>
					</FilterButton>
				</FilterWrapper>
				<Popover
					id={id}
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
					sx={{}}
				>
					{/* City Input */}
					<div>
						<TextField
							label='Filter'
							variant='standard'
							value={search.toLowerCase()}
							onChange={handleSearchChange}
							fullWidth={true}
						/>
					</div>

					{/* State Selector */}
					<div>
						<TextField
							select
							label='State'
							value={state.toLowerCase()}
							variant='filled'
							onChange={handleStateChange}
							fullWidth={true}
						>
							{statesName.map((item, id) => (
								<MenuItem key={id} value={item.value}>
									{item.label}
								</MenuItem>
							))}
						</TextField>
					</div>
					{/* State Selector */}
					<div>
						<TextField
							select
							label='City'
							value={city.toLowerCase()}
							variant='filled'
							onChange={handleCityChange}
							fullWidth={true}
						>
							{citiesName.map((item, id) => (
								<MenuItem key={id} value={item.value}>
									{item.label}
								</MenuItem>
							))}
						</TextField>
					</div>
				</Popover>
			</Wrapper>
		</Container>
	);
}
