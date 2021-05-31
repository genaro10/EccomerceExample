import React from 'react'
import {Button,makeStyles,Accordion,AccordionSummary, Typography,AccordionDetails,RadioGroup} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = makeStyles({
    icono:{
        height:"25px",
        width:"25px"
    },
    boton:{
        width:"100%",
        display:"flex",
        justifyContent:"space-between",
        border:"2px solid blue",
        height:"50px"
    },
    text:{
        fontSize:"12px",
        marginTop:"14px",
        marginLeft:"10px",
        color:"blue"
    },
    botonAllDepartments:{
        fontSize:"10px",
        border:"1px solid blue",
        color:"blue",
        margin:"5px"
    },
    divAcordion:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    },
    radioButton:{
        display:"flex"
    },
    textRadio:{
        fontSize:"14px",
    }
})

function Filters() {
    const estilos = styles()
    return (
        <div>
            <Button className={estilos.boton}>
                <img className={estilos.icono} src="https://image.flaticon.com/icons/png/512/60/60954.png"/>
                <p className={estilos.text}>Departments</p>
            </Button>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography style={{fontSize:"12px"}}>All departmens</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={estilos.divAcordion}>
                        <Button className={estilos.botonAllDepartments}>Electronics</Button>
                        <Button className={estilos.botonAllDepartments}>Music</Button>
                        <Button className={estilos.botonAllDepartments}>Pets</Button>
                        <Button className={estilos.botonAllDepartments}>Sport</Button>
                        <Button className={estilos.botonAllDepartments}>Travel equipment</Button>
                        <Button className={estilos.botonAllDepartments}>Garden</Button>
                        <Button className={estilos.botonAllDepartments}>Toys</Button>
                        <Button className={estilos.botonAllDepartments}>Entertainment</Button>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{backgroundColor:"#EDEDED"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography style={{fontSize:"12px"}}>Expanded filters</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <RadioGroup defaultValue="Male" aria-label="gender" name="customized-radios">
                        <Button className={estilos.radioButton}>
                            <input type='radio' value="Male" name="gender" />
                            <p className={estilos.textRadio}>Recommended</p>
                        </Button>
                        <div className={estilos.radioButton}>
                            <input type='radio' value="Male" name="gender" />
                            <p className={estilos.textRadio}>Recently added</p>
                        </div>
                        <div className={estilos.radioButton}>
                            <input type='radio' value="Male" name="gender" />
                            <p className={estilos.textRadio}>Expired soon</p>
                        </div>
                        <div className={estilos.radioButton}>
                            <input type='radio' value="Male" name="gender" />
                            <p className={estilos.textRadio}>Most rated</p>
                        </div>
                    </RadioGroup>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}




export default Filters
