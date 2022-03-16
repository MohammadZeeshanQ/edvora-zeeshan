import React, { useEffect } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

// style
const Container = styled.section`
	padding-block: 1rem;
`;

const Wrapper = styled.div`
	width: 94%;
	margin: auto;
`;

const BoxContainer = styled.div`
	background-color: var(--mainBlack);
	margin-block: 1rem;
	padding: 1.5rem 0.5rem;
	border-radius: 1rem;
`;

const BoxWrapper = styled.div`
	color: var(--mainText);
`;

const ImageWrapper = styled.div``;

const ImageProp = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	aspect-ratio: 14/9;
	border-radius: 1rem;
`;

const InfoWrapper = styled.div``;

const InfoIDBox = styled.div`
	display: flex;
	flex: wrap;
	align-items: center;
	margin-block: 1rem;
`;

const InfoBoxPush = styled.div`
	display: flex;
	flex: wrap;
	align-items: center;
	flex-grow: 1;
`;

const InfoBox = styled.div`
	display: flex;
	flex: wrap;
	flex-grow: 1;
	align-items: center;
	margin-block: 1rem;
`;

const LabelText = styled.p`
	color: var(--secondText);
	font-size: 1.2rem;
`;

const PropText = styled.p`
	color: var(--mainText);
	font-size: 1.2rem;
`;

const FloatingWrapper = styled.div`
	position: relative;
	top: -1rem;
	display: flex;
`;

const FloatingTextTheme = styled.p`
	background: rgba(0, 0, 0, 0.56);
	margin-inline: 1rem;
	padding: 0.3rem;
	border-radius: 0.5rem;
`;

const FloatingCityText = styled(FloatingTextTheme)``;

const FloatingStateText = styled(FloatingTextTheme)``;

export default function MainIndex({ props, search, nearRide }) {
	return (
		<Container>
			<Wrapper>
				{props
					.filter((element) => {
						if (element.city === "") {
							return element;
						} else if (element.city.toLowerCase().includes(search.toLowerCase())) {
							return element;
						} else if (element.state.toLowerCase().includes(search.toLowerCase())) {
							return element;
						}
					})
					.map((item, id) => (
						<BoxContainer key={id}>
							<BoxWrapper>
								<Grid container alignItems='center' justifyContent='space-around'>
									<Grid item xs={12} sm={3} md={3}>
										<ImageWrapper>
											<ImageProp alt='Map Image' src={item.map_url} />
										</ImageWrapper>
									</Grid>
									<Grid item xs={12} sm={8} md={8}>
										{/* ID Props */}
										<InfoWrapper>
											<InfoIDBox>
												<InfoBoxPush>
													<LabelText>Ride Id :&nbsp;</LabelText>
													<PropText>{item.id}</PropText>
												</InfoBoxPush>

												<FloatingWrapper>
													<FloatingCityText>{item.city}</FloatingCityText>
													<FloatingStateText>{item.state}</FloatingStateText>
												</FloatingWrapper>
											</InfoIDBox>
											{/* Origin State Props */}
											<InfoBox>
												<LabelText>Origin Station :&nbsp;</LabelText>
												<PropText>{item.origin_station_code}</PropText>
											</InfoBox>
											{/* Station Path Props */}
											<InfoBox>
												<LabelText>Station-path: &nbsp;</LabelText>
												<PropText>
													{/* Start From Here */}[
													{item.station_path
														.filter((stationNumber) => {
															if (nearRide === false) {
																return stationNumber;
															} else if (nearRide === true) {
																return stationNumber;
															}
														})
														.map((element, id) => (
															<span key={id}>{element}, </span>
														))}
													]
												</PropText>
											</InfoBox>
											{/* Date Props */}
											<InfoBox>
												<LabelText>Date : &nbsp;</LabelText>
												<PropText>{item.date}</PropText>
											</InfoBox>
											{/* Distance Props */}
											<InfoBox>
												<LabelText>Distance :&nbsp;</LabelText>
												<PropText>Check this</PropText>
											</InfoBox>
										</InfoWrapper>
									</Grid>
								</Grid>
							</BoxWrapper>
						</BoxContainer>
					))}
			</Wrapper>
		</Container>
	);
}
