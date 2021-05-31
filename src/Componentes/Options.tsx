import { makeStyles,Grid, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import CardVenta from './CardVenta'
import Filters from './Filters' 
import Data from '../Datos/Electronica.json'

const styles = makeStyles({
    icono:{
        height:"25px",
        width:"25px",
        alignSelf:"center"
    },
    texto:{
        fontSize:"7px",
        marginTop:"6px"
    },
    bodyButton:{
        justifyContent:"center",
        height:"85%"
    },
    bodyOpcion:{
        display:"flex",
        flexDirection:"column"
    },
    divFiltros:{
        
    },
    divCard:{
        width:"100%",
        border:"1px solid grey",
        marginLeft:"10px",
        borderRadius:10
    },
    divResultado:{
        display:"flex"
    }
})

function Options() {
    const estilos = styles()
    const [data, setData] = useState(Data)
    return (
        <div style={{backgroundColor:"white",marginTop:"15px"}}>
            <Grid container>
                <Grid item xs={2} xl={1} sm={1} md={1} lg={1}>
                    <Button className={estilos.bodyButton}>
                        <div className={estilos.bodyOpcion}>
                            <img className={estilos.icono} src="https://image.flaticon.com/icons/png/128/3159/3159614.png"/>
                            <p className={estilos.texto}>Clothing & shoes</p>
                        </div>
                    </Button>
                </Grid>
                <Grid item xs={2} xl={1} sm={1} md={1} lg={1}>
                    <Button className={estilos.bodyButton}>
                        <div className={estilos.bodyOpcion}>
                            <img className={estilos.icono} src="https://image.flaticon.com/icons/png/512/633/633600.png"/>
                            <p className={estilos.texto}>Entertainment</p>
                        </div>
                    </Button>
                </Grid>
                <Grid item xs={2} xl={1} sm={1} md={1} lg={1}>
                    <Button className={estilos.bodyButton}>
                        <div className={estilos.bodyOpcion}>
                            <img className={estilos.icono} src="https://image.flaticon.com/icons/png/512/727/727204.png"/>
                            <p className={estilos.texto}>Music</p>
                        </div>
                    </Button>
                </Grid>
                <Grid item xs={2} xl={1} sm={1} md={1} lg={1}>
                    <Button className={estilos.bodyButton}>
                        <div className={estilos.bodyOpcion}>
                            <img className={estilos.icono} src="https://image.flaticon.com/icons/png/512/882/882150.png"/>
                            <p className={estilos.texto}>Sport</p>
                        </div>
                    </Button>
                </Grid>
                <Grid item xs={2} xl={1} sm={1} md={1} lg={1}>
                    <Button className={estilos.bodyButton}>
                        <div className={estilos.bodyOpcion}>
                            <img className={estilos.icono} src="https://image.flaticon.com/icons/png/512/884/884183.png"/>
                            <p className={estilos.texto}>Pets</p>
                        </div>
                    </Button>
                </Grid>
                <Grid item xs={2} xl={1} sm={1} md={1} lg={1}>
                    <Button className={estilos.bodyButton}>
                        <div className={estilos.bodyOpcion}>
                            <img className={estilos.icono} src="https://image.flaticon.com/icons/png/512/2700/2700546.png"/>
                            <p className={estilos.texto}>Kitchen accesories</p>
                        </div>
                    </Button>
                </Grid>
                <Grid item xs={2} xl={1} sm={1} md={1} lg={1}>
                    <Button className={estilos.bodyButton}>
                        <div className={estilos.bodyOpcion}>
                            <img className={estilos.icono} src="https://image.flaticon.com/icons/png/512/931/931314.png"/>
                            <p className={estilos.texto}>Travel equipment</p>
                        </div>
                    </Button>
                </Grid>
                <Grid item xs={2} xl={1} sm={1} md={1} lg={1}>
                    <Button className={estilos.bodyButton}>
                        <div className={estilos.bodyOpcion}>
                            <img className={estilos.icono} src="https://image.flaticon.com/icons/png/512/1973/1973742.png"/>
                            <p className={estilos.texto}>Garden</p>
                        </div>
                    </Button>
                </Grid>
                <Grid item xs={2} xl={1} sm={1} md={1} lg={1}>
                    <Button className={estilos.bodyButton}>
                        <div className={estilos.bodyOpcion}>
                            <img className={estilos.icono} src="https://image.flaticon.com/icons/png/512/1086/1086581.png"/>
                            <p className={estilos.texto}>Electrical tools</p>
                        </div>
                    </Button>
                </Grid>
                <Grid item xs={2} xl={1} sm={1} md={1} lg={1}>
                    <Button className={estilos.bodyButton}>
                        <div className={estilos.bodyOpcion}>
                            <img className={estilos.icono} src="https://image.flaticon.com/icons/png/512/3557/3557853.png"/>
                            <p className={estilos.texto}>Mother care</p>
                        </div>
                    </Button>
                </Grid>
                <Grid item xs={2} xl={1} sm={1} md={1} lg={1}>
                    <Button className={estilos.bodyButton}>
                        <div className={estilos.bodyOpcion}>
                            <img className={estilos.icono} src="https://image.flaticon.com/icons/png/512/1973/1973851.png"/>
                            <p className={estilos.texto}>Toys & entertainment</p>
                        </div>
                    </Button>
                </Grid>
                <Grid item xs={2} xl={1} sm={1} md={1} lg={1}>
                    <Button className={estilos.bodyButton}>
                        <div className={estilos.bodyOpcion}>
                            <img className={estilos.icono} src="https://image.flaticon.com/icons/png/512/4268/4268790.png"/>
                            <p className={estilos.texto}>Vintage</p>
                        </div>
                    </Button>
                </Grid>
            </Grid>
            <div className={estilos.divResultado}>
                <div className={estilos.divFiltros}>
                    <Filters/>
                </div>
                <div className={estilos.divCard}>
                    <Grid container>
                        {data.map(mapeo=>(
                            <Grid item xs={12} sm={3} md={3} lg={3} xl={3} style={{backgroundColor:"white"}}>
                            <CardVenta 
                            src={mapeo.src}
                            descripcion={mapeo.descripcion}
                            precio={mapeo.precio}
                            off={mapeo.off}
                            stock={mapeo.stock}
                            promedio={mapeo.promedio}
                            />
                        </Grid>
                        ))} 
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Options
