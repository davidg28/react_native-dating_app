import { StyleSheet, Dimensions } from "react-native";

const PRIMARY_COLOR = "#7444C0";
const SECONDARY_COLOR = "#5636B8";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";

const ONLINE_STATUS = "#46A575";
const OFFLINE_STATUS = "#D04949";

const STAR_ACTIONS = "#FFA200";
const LIKE_ACTIONS = "#B644B2";
const DISLIKE_ACTIONS = "#363636";
const FLASH_ACTIONS = "#5028D7";

const ICON_FONT = "tinderclone";

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;


const PURPLE = "#600EE6";
const ERROR = "#f13a59";
const SURFACE = "#fff";
const SUPER_ALPHA_COLOR = "#E02224";
const TEXT_COLOR = 'rgb(51,39,88)';
const BORDER_COLOR = '#CCCCCC';


export default StyleSheet.create({
	// COMPONENT - CARD ITEM
	containerCardItem: {
		backgroundColor: WHITE,
		borderRadius: 8,
		alignItems: "center",
		margin: 10,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	matchesCardItem: {
		marginTop: -35,
		backgroundColor: PRIMARY_COLOR,
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20
	},
	matchesTextCardItem: {
		fontFamily: ICON_FONT,
		color: WHITE
	},
	descriptionCardItem: {
		color: GRAY,
		textAlign: "center"
	},
	status: {
		paddingBottom: 10,
		flexDirection: "row",
		alignItems: "center"
	},
	statusText: {
		color: GRAY,
		fontSize: 12
	},
	online: {
		width: 6,
		height: 6,
		backgroundColor: ONLINE_STATUS,
		borderRadius: 3,
		marginRight: 4
	},
	offline: {
		width: 6,
		height: 6,
		backgroundColor: OFFLINE_STATUS,
		borderRadius: 3,
		marginRight: 4
	},
	actionsCardItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 30
	},
	button: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: WHITE,
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: DARK_GRAY,
		shadowOffset: { height: 10, width: 0 }
	},
	miniButton: {
		width: 40,
		height: 40,
		borderRadius: 30,
		backgroundColor: WHITE,
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: DARK_GRAY,
		shadowOffset: { height: 10, width: 0 }
	},
	star: {
		fontFamily: ICON_FONT,
		color: STAR_ACTIONS
	},
	like: {
		fontSize: 25,
		fontFamily: ICON_FONT,
		color: LIKE_ACTIONS
	},
	dislike: {
		fontSize: 25,
		fontFamily: ICON_FONT,
		color: DISLIKE_ACTIONS
	},
	flash: {
		fontFamily: ICON_FONT,
		color: FLASH_ACTIONS
	},

	// COMPONENT - CITY
	city: {
		backgroundColor: WHITE,
		padding: 10,
		borderRadius: 20,
		// width: 90,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	cityText: {
		fontFamily: ICON_FONT,
		color: DARK_GRAY,
		fontSize: 13
	},

	// COMPONENT - FILTERS
	filters: {
		backgroundColor: WHITE,
		padding: 10,
		borderRadius: 20,
		// width: 70,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0 },
		display: 'flex',
		flexDirection: 'row',
	},
	filtersText: {
		fontFamily: ICON_FONT,
		color: DARK_GRAY,
		fontSize: 13
	},

	// COMPONENT - MESSAGE
	containerMessage: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
		paddingHorizontal: 10,
		width: DIMENSION_WIDTH - 100
	},
	avatar: {
		borderRadius: 30,
		width: 60,
		height: 60,
		marginRight: 20,
		marginVertical: 15
	},
	message: {
		color: GRAY,
		fontSize: 12,
		paddingTop: 5
	},

	// COMPONENT - PROFILE ITEM
	containerProfileItem: {
		backgroundColor: WHITE,
		paddingHorizontal: 10,
		paddingBottom: 25,
		margin: 20,
		borderRadius: 8,
		marginTop: -65,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	matchesProfileItem: {
		width: 131,
		marginTop: -15,
		backgroundColor: PRIMARY_COLOR,
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20,
		textAlign: "center",
		alignSelf: "center"
	},
	matchesTextProfileItem: {
		fontFamily: ICON_FONT,
		color: WHITE
	},
	name: {
		paddingTop: 25,
		paddingBottom: 5,
		color: DARK_GRAY,
		fontSize: 15,
		textAlign: "center"
	},
	descriptionProfileItem: {
		color: GRAY,
		textAlign: "center",
		paddingBottom: 20,
		fontSize: 13
	},
	info: {
		paddingVertical: 8,
		flexDirection: "row",
		alignItems: "center"
	},
	iconProfile: {
		fontFamily: ICON_FONT,
		fontSize: 12,
		color: DARK_GRAY,
		paddingHorizontal: 10
	},
	infoContent: {
		color: GRAY,
		fontSize: 13
	},

	// CONTAINER - GENERAL
	bg: {
		flex: 1,
		resizeMode: "cover",
		width: DIMENSION_WIDTH,
		height: DIMENSION_HEIGHT
	},
	authMask: {
		backgroundColor: '#A26769',
		opacity: .89,
		width: '100%',
		minHeight: '100%',
	},
	authMaskContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%'
	},
	authBtn: {
		backgroundColor: '#6BC644',
		marginTop: 20,
		width: '80%',
		borderRadius: 30,
		maxWidth: 350,
		paddingHorizontal: 20,
		paddingVertical: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	authSwitch: {
		marginTop: 30,
		marginBottom: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	authSwitchDesc: {
		fontSize: 18,
		color: 'white'
	},
	authSwitchLinkContainer: {
		marginLeft: 10,
		paddingHorizontal: 10,
		borderBottomWidth: 1,
		borderBottomColor: 'white',
		paddingVertical: 3
	},
	authSwitchLink: {
		fontSize: 18,
		color: 'white'
	},
	forgotPasswordContainer: {
		marginTop: 20,
		width: '80%',
		maxWidth: 350,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	socialAuthBtn: {
		backgroundColor: 'rgba(255,255,255,0.35)',
		marginTop: 20,
		width: '80%',
		borderRadius: 30,
		maxWidth: 350,
		paddingHorizontal: 20,
		paddingVertical: 13,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	socialAuthIcon: {
		width: 30,
		height: 30,
		tintColor: 'white',
		position: 'absolute',
		left: 10
	},
	authDivider: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginTop: 20,
		width: '80%',
		maxWidth: 350
	},
	authDividerStick: {
		width: '25%',
		height: 2,
		backgroundColor: 'rgba(255,255,255,0.65)'
	},
	authDividerText: {
		fontSize: 22,
		color: 'rgba(255,255,255,0.65)'
	},
	top: {
		paddingTop: 30,
		marginHorizontal: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	title: { paddingBottom: 10, fontSize: 22, color: DARK_GRAY },
	icon: {
		fontFamily: ICON_FONT,
		fontSize: 20,
		color: DARK_GRAY,
		paddingRight: 10
	},

	// CONTAINER - HOME
	containerHome: {
		marginHorizontal: 10,
	},

	// CONTAINER - MATCHES
	containerMatches: {
		justifyContent: "space-between",
		flex: 1,
		paddingHorizontal: 10
	},

	// CONTAINER - MESSAGES
	containerMessages: {
		justifyContent: "space-between",
		flex: 1,
		paddingHorizontal: 10
	},

	// CONTAINER - PROFILE
	containerProfile: { marginHorizontal: 0 },
	photo: {
		width: DIMENSION_WIDTH,
		height: 450
	},
	topIconLeft: {
		fontFamily: ICON_FONT,
		fontSize: 20,
		color: WHITE,
		paddingLeft: 20,
		// marginTop: -20,
		// transform: [{ rotate: "90deg" }]
	},
	topIconRight: {
		fontFamily: ICON_FONT,
		fontSize: 20,
		color: WHITE,
		paddingRight: 20
	},
	actionsProfile: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		paddingBottom: 30
	},
	iconButton: { fontFamily: ICON_FONT, fontSize: 20, color: WHITE },
	textButton: {
		fontFamily: ICON_FONT,
		fontSize: 15,
		color: WHITE,
		paddingLeft: 5
	},
	circledButton: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: PRIMARY_COLOR,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10
	},
	roundedButton: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 10,
		height: 50,
		borderRadius: 25,
		backgroundColor: SECONDARY_COLOR,
		paddingHorizontal: 20
	},

	// MENU
	tabButton: {
		paddingTop: 20,
		paddingBottom: 30,
		alignItems: "center",
		justifyContent: "center",
		flex: 1
	},
	tabButtonText: {
		textTransform: "uppercase"
	},
	iconMenu: {
		fontFamily: ICON_FONT,
		height: 20,
		paddingBottom: 7
	},

	//Register screen 
	containerRegister: {
		width: '100%',
		marginVertical: 12,
	},
	emailInput: {
		height: 40,
		width: "95%",
		fontSize: 18,
		paddingLeft: 20,
		backgroundColor: SURFACE,
		borderColor: '#999999',
		borderRadius: 4,
		borderWidth: 0.5,
		alignSelf: 'stretch',
		margin: 10,
	},
	label: {
		color: PURPLE,
	},
	genderList: {
		width: '80%',
		marginRight: 75,
		marginVertical: 12,
		fontWeight: 'bold',
		color: PRIMARY_COLOR,
	},
	row: {
		flexDirection: 'row',
		marginTop: 4,
	},
	link: {
		fontWeight: 'bold',
		color: PURPLE,
	},
	signupView: {
		width: '100%',
		marginVertical: 10,
	},
	signupTextHome: {
		color: PURPLE,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 15,
		padding: 20,
		backgroundColor: WHITE,
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: '#757E90',
		shadowOffset: { height: 10, width: 0 }
	},
	signupText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 15,
		padding: 20,
		backgroundColor: PURPLE,
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: '#757E90',
		shadowOffset: { height: 10, width: 0 }
	},
	signupButton: {
		borderRadius: 30,
		borderWidth: 1,
		borderColor: '#fff'
	},
	textInput: {
		// height: 40,
		width: "95%",
		fontSize: 18,
		paddingLeft: 20,
		backgroundColor: SURFACE,
		borderColor: 'gray',
		borderRadius: 4,
		borderWidth: 0.5,
		margin: 10,
	},
	loginView: {
		width: '100%',
		marginVertical: 10,
		borderRadius: 10,
		backgroundColor: PURPLE,
	},
	loginText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 15,
		textAlign: 'center',
		padding: 20,
		backgroundColor: PURPLE,
	},
	loginButton: {
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#fff'
	},
	content: {
		margin: 24
	},
	verifyText: {
		fontSize: 24,
		color: TEXT_COLOR,
		fontWeight: 'bold'
	},
	smsText: {
		fontSize: 18,
		color: 'rgb(91,82,121)',
		marginTop: 12
	},
	signinText: {
		fontSize: 15,
		color: 'white',
		textAlign: 'center'
	},
	termsText: {
		color: PRIMARY_COLOR,
		textDecorationLine: 'underline',
		fontSize: 15,
		color: 'white',
		fontWeight: 'bold'
	},
	nextButton: {
		backgroundColor: PRIMARY_COLOR,
		padding: 14,
		paddingRight: 22,
		paddingLeft: 22,
		marginTop: 46,
		borderRadius: 100,
		alignSelf: 'center',
		elevation: 8,
		width: '80%',
		maxWidth: 350,
		justifyContent: 'center',
		alignItems: 'center'
	},
	footerButton: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	footerButtonText: {
		color: WHITE,
		fontSize: 20,
		fontWeight: '500'
	},
	textInput1: {
		marginTop: 32,
		padding: 8,
		borderColor: BORDER_COLOR,
		borderWidth: 0.5
	},
	load: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	addButton: {
		padding: 12,
		borderRadius: 50,
		backgroundColor: PRIMARY_COLOR,
		position: 'absolute',
		bottom: 24,
		right: 24,
		elevation: 10
	}
});
