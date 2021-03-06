import React from 'react'
import ColorThemeRows from './ColorThemeRows'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    main: {
        display: 'flex',
        // justifyContent: 'center',
        // justifyContent:'space-around',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: '50px',
    }
})

export default function ShowColor({ colors }) {

    const classes = useStyles()

    return (
        <div className={classes.main}>
            {colors.map((color) => (
                <ColorThemeRows color={color} />
            ))}
        </div>
    )
}
