import React, { useState } from 'react'
import Add_batterie from '../components/forms/Add_batterie';
import PageHeader from "../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
import { Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@mui/material';
import useTable from "../components/useTable";
import * as employeeService from "../services/employeeService";
import Controls from "../components/controls/Controls";
import { Search } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import Popup from "../components/Popup";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';
import {makeStyles} from '@mui/styles'

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
        right: '10px'
    }
}))


const headCells = [
    { id: 'Etiquette', label: 'Etiquette' },
    { id: 'Nom_vol', label: 'Nom_vol' },
    { id: 'CyclVol', label: 'CyclVol' },
    { id: 'LoatVol', label: 'LoatVol' },
    { id: 'Capacite', label: 'Capacite' },
    { id: 'Temp_coef', label: 'Temp_coef' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]

export default function UI_liste_batterie() {

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

    return (
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
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.fullName}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                    <TableCell>{item.department}</TableCell>
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
                title="Nouvelle batterie"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <Add_batterie 
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
            </Popup>
        </>
    )
}
