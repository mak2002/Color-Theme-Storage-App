import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    main: {
        display: 'flex',
        // height: '100vh',
    },
    p:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '150px',
        width:'200px',
        margin:'1em 2em',
        border:'none',
    }
})

export default function ColorThemeRows({ color }) {

    const [alert, setAlert] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
          setAlert(false)
        }, 3000)
        return () => clearTimeout(timeout)
      }, [alert])

    const copyToClipboard = () => {
        navigator.clipboard.writeText(color);
        setAlert(true);
    }

    const classes = useStyles()

    return (
        <div >
            <div className={classes.main}>
                <article onClick={copyToClipboard} className={classes.p} style={{ backgroundColor: `${color}`}}>
                    {color}
                    {alert && <span className={classes.alert}>copied to clipboard</span>}
                
                </article>
            </div>
        </div>  
    )
}
