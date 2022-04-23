import React, { useState, useEffect } from 'react'
import { Grid, } from '@mui/material';
import Controls from "../controls/Controls";
import { useForm, Form } from '../useForm';
import * as employeeService from "../../services/employeeService";


const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    id: 0,
    etiquette: '',
    vol: '',
    cycl: '',
    loat: '',
    capacite: '',
    coeff: '',
    isPermanent: false,
}

export default function Add_panneau(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('etiquette' in fieldValues)
            temp.etiquette = fieldValues.etiquette ? "" : "Saisissez l'etiquette"
        if ('vol' in fieldValues)
            temp.vol = fieldValues.vol ? "" : "Saisissez le Nom_vol"
        if ('cycl' in fieldValues)
            temp.cycl = fieldValues.cycl ? "" : "Saisissez le CyclVol"
        if ('loat' in fieldValues)
            temp.loat = fieldValues.loat ? "" : "Saisissez le loat"
        if ('capacite' in fieldValues)
            temp.capacite = fieldValues.capacite ? "" : "Saisissez la capacite"
        if ('coeff' in fieldValues)
            temp.coeff = fieldValues.coeff ? "" : "Saisissez le coeff"
        
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="etiquette"
                        label="Etiquette"
                        value={values.etiquette}
                        onChange={handleInputChange}
                        error={errors.etiquette}
                    />
                    <Controls.Input
                        label="Nom_vol"
                        name="vol"
                        value={values.vol}
                        onChange={handleInputChange}
                        error={errors.vol}
                    />
                    <Controls.Input
                        label="CyclVol"
                        name="cycl"
                        value={values.cycl}
                        onChange={handleInputChange}
                        error={errors.cycl}
                    />
                    <Controls.Input
                        label="LoatVol"
                        name="loat"
                        value={values.loat}
                        onChange={handleInputChange}
                        error={errors.loat}
                    />
                    

                </Grid>
                <Grid item xs={6}>
                    {/*<Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
    />
                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />*/}
                    <Controls.Input
                        label="Capacite"
                        name="capacite"
                        value={values.capacite}
                        onChange={handleInputChange}
                        error={errors.capacite}
                    />
                    <Controls.Input
                        label="Capacite"
                        name="capacite"
                        value={values.capacite}
                        onChange={handleInputChange}
                        error={errors.capacite}
                    />
                    <Controls.Input
                        label="Temp_coeff"
                        name="coeff"
                        value={values.coeff}
                        onChange={handleInputChange}
                        error={errors.coeff}
                    />
                    

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Enregister" />
                        <Controls.Button
                            text="Reinitialiser"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
