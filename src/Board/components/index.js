//material-ui
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    square: {        
        width: "10vw",
        height: "20vh",
        backgroundColor: "white",
    },
}));

const Square = () => {
    const styles = useStyles();
    return (
        <div className={styles.square}></div>
    );
}

export default Square;