import { FormControl, makeStyles } from '@material-ui/core'
import React from 'react'
import { Navbar,NavDropdown,Form,Button,Nav } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';

const styles = makeStyles({
    imagen:{
        height:"25px",
        width:"130px"
    },
    iconoBusqueda:{
        height:"20px",
        width:"20px",
        marginLeft:"5px"
    },
    busqueda:{
        border:"0px",
        marginLeft:"10px"
    },
    bodyBusqueda:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#ECECEC",
        borderRadius:40,
    },
    dentroBusqueda:{
        margin:"5px",
    },
    botonConsumer:{
        color:"#3E49FE",
        border:"0px",
        "&:hover":{
            backgroundColor:"white",
            color:"blue",
        }
    },
    botonSign:{
        color:"#3E49FE",
        borderColor:"#3E49FE",
        marginRight:"20px",
        "&:hover":{
            backgroundColor:"white",
            color:"blue",
            borderColor:"#3E49FE",
        }
    },
    botonCart:{
        color:"#3E49FE",
        borderColor:"#3E49FE",
        marginRight:"20px",
        "&:hover":{
            backgroundColor:"white",
            color:"blue",
            borderColor:"#3E49FE",
        }
    },
    bodyNav:{
        backgroundColor:"white"
    },
    brand:{
        fontSize:"18px"
    },
    register:{
        fontSize:"18px",
        marginRight:"18px"
    }
})

function NavBar() {
    const estilos = styles()
    return (
        <div>
            <Navbar className={estilos.bodyNav} expand="lg">
                <Navbar.Brand href="#home"><img className={estilos.imagen} src='http://www.einstituto.org/site/wp-content/uploads/2012/03/Institucional.jpg'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Navbar.Brand className={estilos.brand}>Sell on eccomerce</Navbar.Brand>
                        <Nav.Link href="#home" className={estilos.register}>Register</Nav.Link>
                        <div className={estilos.bodyBusqueda}>
                            <div className={estilos.dentroBusqueda}>
                                <img src="https://image.flaticon.com/icons/png/512/482/482631.png" className={estilos.iconoBusqueda}/> 
                                <TextField style={{width:"350px"}} className={estilos.busqueda} id="standard-basic" InputProps={{ disableUnderline: true }}/>
                            </div>
                        </div>
                        <Button className={estilos.botonConsumer} variant="outline-success">Consumer electronics</Button>
                    </Nav>
                    <Form inline>
                        <Button className={estilos.botonSign} variant="outline-success">Sign in</Button>
                        <Button className={estilos.botonCart} variant="outline-success">My cart</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
        </div>
    )
}

export default NavBar
