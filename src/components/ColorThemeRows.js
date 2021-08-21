import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    main: {
        display: 'flex',
        // height: '100vh',
    },
    p:{
        width:'150px',
        height: '150px',
    }
})

export default function ColorThemeRows({ color }) {

    const classes = useStyles()

    return (
        <div >
            <div className={classes.main}>
                <p className={classes.p} style={{ backgroundColor: `${color}`}}>{color}</p>
            </div>
        </div>
    )
}
