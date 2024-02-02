import { makeStyles } from "@mui/styles";
import Theme from "../../theme/Theme";

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: "60px",
        paddingTop: "50px",
    },

    listContainer: {
        display: "flex",
        flexDirection: 'column',
        gap: "14px",
        marginTop: "40px",
        [Theme.breakpoints.down("sm")]: {
            background: "#000",
            backgroundColor: "#baf1f5",
            color: "gray",
            height: "80vh",
            overflowY: "scroll"
        },
    },

    todoListBox: {
        display: "flex",
        background: "#e8edd5",
        borderRadius: 10,
        color: "#fff",
        padding: "20px 30px",
        "& :hover": {
            color: "white",
            mixBlendMode: "difference",
        },
        [Theme.breakpoints.down("sm")]: {
            background: "#000",
            padding: "10px 15px",
            backgroundColor: "#baf1f5",
            // backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
            color: "gray",
        },
        [Theme.breakpoints.only("sm")]: {
            backgroundColor: "#baf1f5",
            // backgroundImage: "linear-gradient(45deg, #A9C9FF 0%, #FFBBEC 100%)",
        },
        [Theme.breakpoints.only("md")]: {
            backgroundColor: "#baf1f5",
            // backgroundImage: "linear-gradient(45deg, #08AEEA 0%, #2AF598 100%)",
        },
        [Theme.breakpoints.up("xl")]: {
            backgroundColor: "#baf1f5",
            // backgroundImage: "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
            color: "black",
        },
    },

    idText: {
        paddingRight: "20px",
        [Theme.breakpoints.down("sm")]: {
            color: "gray",
        },
    },

    title : {
        fontSize: "14px"
    },

    todosText: {
        fontSize: "30px",
        color: "black",
        fontWeight: "800",
        alignSelf: "center",
        textAlign: "center",
    },

    errorContainer: {
        display: "flex",
        flexDirection: 'column',
        gap: '30px',
        alignItems: "center",
        border: "3px solid red",
        height: "700px",
        justifyContent: "center"
    },

    errorImgTextContainer: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center"
    },

    errorImg: {
        width: "400px",
        height: "400px",
        [Theme.breakpoints.only("xs")]: {
            width: "200px",
            height: "200px",
        },
    },

    woopsSomethingText: {
        fontSize: "30px",
        fontWeight: "600",
        color: 'black'
    }
});

const styles = {
    paginationContainer: {
        display: "flex",
        justifyContent: "center",
        my: 3,
    },
};

export { useStyles, styles };