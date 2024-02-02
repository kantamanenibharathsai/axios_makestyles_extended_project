import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Typography } from "@mui/material";
import { useStyles, } from "./Todos.Styles";
import errorImg from "../../assets/error500.png"

interface IState {
    loading: boolean,
    todoList: {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }[];
    error: string,
    currentPage: number
}

const TodoPage = () => {
    const classes = useStyles();
    const [todoList, setTodoData] = useState<IState["todoList"]>([]);


    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );
            setTodoData(response.data);
        } catch (error) {
        }
    };

    return (
        <Container className={classes.container}>
            <Typography variant={"h1"} className={classes.todosText}>{`${todoList.length > 0 ? 'Todos' : 'Error Occurred'}`}</Typography>

            {todoList.length > 0 && (
                <Box className={classes.listContainer}>
                    {todoList.map(todo => (
                        <Box key = {todo.id} className={classes.todoListBox}>
                            <Typography variant="h1" className={classes.idText}>
                                {todo.id}.
                            </Typography>
                            <Typography component="p" className={classes.title}>{todo.title}</Typography>
                        </Box>))}
                </Box>)}

            <Box>
                {todoList.length === 0 && (
                    <Box className={classes.errorContainer}>
                        <Box className={classes.errorImgTextContainer}>
                            <Box component="img" src={errorImg} className={classes.errorImg} />
                            <Typography className={classes.woopsSomethingText}>Woops! Something went wrong</Typography>
                        </Box>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default TodoPage;