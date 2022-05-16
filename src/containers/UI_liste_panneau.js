import React, { useState, useEffect } from 'react';
import Add_panneau from '../components/forms/Add_panneau';
import PageHeader from "../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
import { Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment, Box } from '@mui/material';
import useTable from "../components/useTable";
import * as employeeService from "../services/employeeService";
import Controls from "../components/controls/Controls";
import { Search } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import Popup from "../components/Popup";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import Feed from '../components/Feed';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '-30px'
    }
}))


const headCells = [
    {id: 'Etiquette', label: 'Etiquette' },
    { id: 'Description', label: 'Description' },
    { id: 'Etat du panneau', label: 'Etat du panneaux' },
    { id: 'Max power', label: 'Max power' },
    { id: 'Voltage power', label: 'Voltage power' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]

export default function UI_liste_panneau() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

    const addOrEdit = (employee, resetForm) => {
        if (employee.id == 0)
            employeeService.insertEmployee(employee)
        else
            employeeService.updateEmployee(employee)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(employeeService.getAllEmployees())
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    let [panneaux, setPanneaux] = useState()
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/panneau-list/')
            .then(response => response.json())

            .then(panneaux => setPanneaux(panneaux))
    }, [])



    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, [1000]);
    return (
        <Box flex={4} p={{ xs: 0, md: 2 }}>
            {loading ? (
                <Feed />
            ) : (
                <>
                    <PageHeader
                        title="Panneau solaire"
                        subTitle="Liste des panneaux solaires"
                        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
                    />
                    <Paper className={classes.pageContent}>

                        <Toolbar>
                            <Controls.Input
                                label="Recherchez un panneau"
                                className={classes.searchInput}
                                InputProps={{
                                    startAdornment: (<InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>)
                                }}
                                onChange={handleSearch}
                            />
                            <Controls.Button
                                text="Nouveau"
                                variant="outlined"
                                startIcon={<AddIcon />}
                                className={classes.newButton}
                                onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                            />
                        </Toolbar>
                        <TblContainer>
                            <TblHead />
                            <TableBody>
                                {
                                    panneaux.map(item =>
                                    (<TableRow key={item.id}>
                                        <TableCell key={item.id}><img src={"http://127.0.0.1:8000" + item.image} style={{width:35,height:35,boderRadius:'5px!important'}}/></TableCell>
                                        <TableCell>{item.description}</TableCell>
                                        <TableCell>{item.etatDevice}</TableCell>
                                        <TableCell>{item.maximum_power}</TableCell>
                                        <TableCell>{item.power_voltage}</TableCell>
                                        <TableCell>
                                            <Controls.ActionButton
                                                color="primary"
                                                onClick={() => { openInPopup(item) }}>
                                                <EditOutlinedIcon fontSize="small" />
                                            </Controls.ActionButton>
                                            <Controls.ActionButton
                                                color="secondary">
                                                <CloseIcon fontSize="small" />
                                            </Controls.ActionButton>
                                        </TableCell>
                                    </TableRow>)
                                    )
                                }
                            </TableBody>
                        </TblContainer>
                        <TblPagination />
                    </Paper>
                    <Popup
                        title="Nouveau panneau"
                        openPopup={openPopup}
                        setOpenPopup={setOpenPopup}
                    >
                        <Add_panneau
                            recordForEdit={recordForEdit}
                            addOrEdit={addOrEdit} />
                    </Popup>
                </>
            )}
        </Box>

    )
}
