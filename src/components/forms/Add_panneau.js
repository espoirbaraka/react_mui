import React, { useEffect } from 'react'
import { Grid, } from '@mui/material';
import Controls from "../controls/Controls";
import { useForm, Form } from '../useForm';


const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    id: 0,
    etiquette: '',
    pmax: '',
    vmp: '',
    mpc: '',
    isc: '',
    msv: '',
    test: '',
    tc: '',
    size: '',
    isPermanent: false,
}

export default function Add_panneau(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('etiquette' in fieldValues)
            temp.etiquette = fieldValues.etiquette ? "" : "Saisissez l'etiquette"
        if ('pmax' in fieldValues)
            temp.pmax = fieldValues.pmax ? "" : "Saisissez le pmax"
        if ('vmp' in fieldValues)
            temp.vmp = fieldValues.vmp ? "" : "Saisissez le vmp"
        if ('mpc' in fieldValues)
            temp.mpc = fieldValues.mpc ? "" : "Saisissez le mpc"
        if ('isc' in fieldValues)
            temp.isc = fieldValues.isc ? "" : "Saisissez l'isc"
        if ('msv' in fieldValues)
            temp.msv = fieldValues.msv ? "" : "Saisissez le msv"
        if ('test' in fieldValues)
            temp.test = fieldValues.test ? "" : "Saisissez le test"
        if ('tc' in fieldValues)
            temp.tc = fieldValues.tc ? "" : "Saisissez le tc"
        if ('size' in fieldValues)
            temp.size = fieldValues.size ? "" : "Saisissez le size"
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
                        label="Pmax"
                        name="pmax"
                        value={values.pmax}
                        onChange={handleInputChange}
                        error={errors.pmax}
                    />
                    <Controls.Input
                        label="Vmp"
                        name="vmp"
                        value={values.vmp}
                        onChange={handleInputChange}
                        error={errors.vmp}
                    />
                    <Controls.Input
                        label="Mpc"
                        name="mpc"
                        value={values.mpc}
                        onChange={handleInputChange}
                        error={errors.mpc}
                    />
                    <Controls.Input
                        label="Isc"
                        name="isc"
                        value={values.city}
                        onChange={handleInputChange}
                        error={errors.isc}
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
                        label="Msv"
                        name="msv"
                        value={values.msv}
                        onChange={handleInputChange}
                        error={errors.msv}
                    />
                    <Controls.Input
                        label="Test_cond"
                        name="test"
                        value={values.test}
                        onChange={handleInputChange}
                        error={errors.test}
                    />
                    <Controls.Input
                        label="Tc"
                        name="tc"
                        value={values.tc}
                        onChange={handleInputChange}
                        error={errors.tc}
                    />
                    <Controls.Input
                        label="Size"
                        name="size"
                        value={values.size}
                        onChange={handleInputChange}
                        error={errors.size}
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
