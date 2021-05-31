import { Button, Grid, makeStyles,Box,Typography } from '@material-ui/core'
import {Rating} from '@material-ui/lab'
import React from 'react'

const styles = makeStyles({
    body:{
        margin:"20px"
    },
    imagen:{
        width:"75%"
    },
    descripcion:{
        textAlign:"left",
        color:"black"
    },
    bodyPrecio:{
        display:"flex",
        justifyContent:"space-between"
    },
    precio:{
       color:"black",
       fontWeight:"bold",
       fontSize:"22px"
    },
    off:{
        color:"green",
        
    },
    divOff:{
        backgroundColor:"#84EDC8",
        height:"30px",
        width:"40%"
    },
    stock:{
        textAlign:"left",
        color:"grey",
        fontStyle:"italic"
    },
    bodyEstrellas:{
        display:"flex",
        justifyContent:"space-between"
    },
    estrellas:{
        
    },
    watch:{
        height:"28px",
        color:"blue"
    },
    promedio:{
        textAlign:"left"
    }
})

function CardVenta(props: { src: string; descripcion: string; precio: number; off: number; stock: string; promedio: number }) {
    const estilos = styles()
    const {src,descripcion,precio,off,stock,promedio} = props
    return (
        <div className={estilos.body}>
            <img className={estilos.imagen} src={src}/>
            <p className={estilos.descripcion}>{descripcion}</p>
            <div className={estilos.bodyPrecio}>
                <p className={estilos.precio}>${precio}</p>
                <div className={estilos.divOff}>
                    <p className={estilos.off}>{off}% OFF</p>   
                </div>
            </div>
            <p className={estilos.stock}>{stock}</p>
            <div className={estilos.bodyEstrellas}>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="pristine" value={null} />
                </Box>
                <p className={estilos.promedio}>{promedio}</p>
                <Button className={estilos.watch}>watch</Button>
            </div>
        </div>
    )
}

export default CardVenta
