import Square from "./components/index.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    board: {
        display: "flex",
        marginTop: "10vw",
        marginLeft: "30vw",
    },
    square: {
        marginTop: "1vw",
        marginLeft: "1vw",
    }
}));

const Board = () => {
    const styles = useStyles();
    return (
        <div className={styles.board}>
            <div>
                <div className={styles.square}>
                    <Square/>
                </div>
                <div className={styles.square}>
                    <Square/>
                </div>
                <div className={styles.square}>
                    <Square/>
                </div>
            </div>
            <div>
                <div className={styles.square}>
                    <Square/>
                </div>
                <div className={styles.square}>
                    <Square/>
                </div>
                <div className={styles.square}>
                    <Square/>
                </div>
            </div>
            <div>
                <div className={styles.square}>
                    <Square/>
                </div>
                <div className={styles.square}>
                    <Square/>
                </div>
                <div className={styles.square}>
                    <Square/>
                </div>
            </div>
        </div>
    );
}

export default Board;