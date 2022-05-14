import React, { useState, useEffect  } from 'react'
import Add_batterie from '../components/forms/Add_batterie';
import PageHeader from "../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
import { Paper, Box, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@mui/material';
import useTable from "../components/useTable";
import * as employeeService from "../services/employeeService";
import Controls from "../components/controls/Controls";
import { Search } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import Popup from "../components/Popup";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles'
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
    { id: 'Etiquette', label: 'Etiquette' },
    { id: 'Description', label: 'Description' },
    { id: 'Etat de la batterie', label: 'Etat de la batterie' },
    { id: 'Voltage', label: 'Voltage' },
    { id: 'Cycle', label: 'Cycle' },
    { id: 'Createur', label: 'Createur' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]





export default function UI_liste_batterie() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const [data, setData] = useState();

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
                if (target.value == "")
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



    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, [1000]);
    let [batteries, setBatteries] = useState()
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/batterie-list/')
            .then(response => response.json())

            .then(batteries => setBatteries(batteries))
    }, [])

    return (
        <Box flex={4} p={{ xs: 0, md: 2 }}>
            {loading ? (
                <Feed />
            ) : (
                <>

                    <PageHeader
                        title="Batterie"
                        subTitle="Liste des batteries"
                        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
                    />
                    <Paper className={classes.pageContent}>

                        <Toolbar>
                            <Controls.Input
                                label="Recherchez une batterie"
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
                                    batteries.map(batterie =>
                                    (<TableRow key={batterie.listId}>
                                        <TableCell key={batterie.listId}><img src={"http://127.0.0.1:8000" + batterie.image} style={{width:35,height:35,boderRadius:'5px!important'}}/></TableCell>
                                        <TableCell>{batterie.detail}</TableCell>
                                        <TableCell>{batterie.etat}</TableCell>
                                        <TableCell>{batterie.normal}</TableCell>
                                        <TableCell>{batterie.cycle}</TableCell>
                                        <TableCell>{batterie.login}</TableCell>
                                        <TableCell>
                                            <Controls.ActionButton
                                                color="primary"
                                                onClick={() => { openInPopup(batterie) }}>
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
                        title="Nouvelle batterie"
                        openPopup={openPopup}
                        setOpenPopup={setOpenPopup}
                    >
                        <Add_batterie
                            recordForEdit={recordForEdit}
                            addOrEdit={addOrEdit} />
                    </Popup>

                </>
            )}
        </Box>

    )
}
