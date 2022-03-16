import React, { useState } from "react";
import { AppBar, Toolbar, SwipeableDrawer, List, ListItem, IconButton, Divider, Avatar } from "@mui/material";
import styled from "styled-components";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// styled components
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 95%;
	margin: auto;
`;

const LogoWrapper = styled.div`
	flex-grow: 1;
`;

const Logo = styled.a`
	color: var(--mainText);
	font: 2rem Nunito;
	font-weight: 700;
	letter-spacing: 1px;
	text-decoration: none;
`;

const CtaWrapper = styled.div`
	/* @media (max-width: 1024px) {
		display: none;
	} */
`;

const AvatarWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const AvatarName = styled.p`
	color: var(--mainText);
	font: 1.25rem Nunito;
	font-weight: 700;
	margin-right: 2rem;
`;

const MobileWrapper = styled.div`
	display: none;
	@media (max-width: 1024px) {
		display: block;
	}
`;

const MobileButton = styled.button`
	font: 1rem Nunito;
	font-weight: 500;
	background: transparent;
	display: flex;
	justify-content: flex-start;
	border: none;
	letter-spacing: 0.5px;
	margin: 0.5rem 0;
	padding: 0.5rem 0;
	width: 100%;
	cursor: pointer;
`;

export default function NavBar({ props }) {
	const [drawer, setDrawer] = useState(false);

	const drawerHandler = () => {
		setDrawer(!drawer);
	};

	return (
		<AppBar
			position='fixed'
			elevation={2}
			sx={{
				height: 64,
				background: "var(--mainBlack)",
			}}
		>
			<Toolbar>
				<Wrapper>
					<LogoWrapper>
						<Logo href='/'>Edvora</Logo>
					</LogoWrapper>

					<CtaWrapper>
						<AvatarWrapper>
							<AvatarName>{props.name}</AvatarName>
							<Avatar alt='User Image' src={props.url} />
						</AvatarWrapper>
					</CtaWrapper>

					<MobileWrapper onClick={drawerHandler} style={{ cursor: "pointer" }}>
						<MenuIcon sx={{ fontSize: "2rem", color: "var(--blackTheme)" }} />
					</MobileWrapper>
				</Wrapper>

				<SwipeableDrawer anchor='right' open={drawer} onOpen={drawerHandler} onClose={drawerHandler}>
					<List sx={{ width: 280 }}>
						<ListItem sx={{ justifyContent: "flex-end" }}>
							<IconButton onClick={drawerHandler}>
								<CloseIcon sx={{ color: "var(--blackTheme)", fontSize: "2rem" }} />
							</IconButton>
						</ListItem>
						<Divider />
						<ListItem>
							<MobileButton>Home</MobileButton>
						</ListItem>
						<Divider />
					</List>
				</SwipeableDrawer>
			</Toolbar>
		</AppBar>
	);
}
