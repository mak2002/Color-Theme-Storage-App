import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px'
    },
    form: {
        display: 'flex',
        width: '20%',
        justifyContent:'space-around',
    }
})


export default function AddColor({ addColor }) {

    const[color, setcolor] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(color);
        // console.log(color)
    }    

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <form action="" className={classes.form} onSubmit={handleSubmit}>

            <TextField id="standard-basic" label="Standard" onChange={(e) => {setcolor(e.target.value)}}/>

                <Button type="submit" variant="contained" color="primary">
                    Add Color
                </Button>
            </form>
        </div>
    )
}
