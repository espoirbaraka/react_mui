import React, { useEffect,useState } from 'react'
import { Grid, Select, MenuItem } from '@mui/material';
import Controls from "../controls/Controls";
import { useForm, Form } from '../useForm';
import axiosInstance from '../../axios';


const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

// const initialFValues = {
//     id: 0,
//     description: '',
//     pmax: '',
//     vmp: '',
//     mpc: '',
//     isc: '',
//     msv: '',
//     test: '',
//     tc: '',
//     size: '',
//     isPermanent: false,
// }

export default function Add_panneau(props) {
    // 'description','etatDevice','','','','','','','','','','create_by','deviceCategory'
    const initialFormData = {
        description: '',
        etatDevice: '',
        maximum_power: '',
        power_voltage: '',
        power_current: '',
        circuit_voltage: '',
        short_voltage: '',
        max_voltage: '',
        condition_test: '',
        temperature: '',
        size: '',
        isPermanent: false,
    }

    const [formData, updateFormData] = useState(initialFormData);

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
    } = useForm(initialFormData, true, validate);

    const handleChange = (e) => {
		if ([e.target.name] == 'description') {
			updateFormData({
				...formData,
				// Trimming any whitespace
				[e.target.name]: e.target.value.trim(),
				// ['deviceCategory']: slugify(e.target.value.trim()),
			});
		} else {
			updateFormData({
				...formData,
				// Trimming any whitespace
				[e.target.name]: e.target.value.trim(),
			});
		}
	};

    const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.post(`panneau-create/`, {
                description: formData.description,
                etatDevice: formData.etatDevice,
                maximum_power: formData.maximum_power,
                power_voltage: formData.power_voltage,
                power_current: formData.power_current,
                circuit_voltage: formData.circuit_voltage,
                short_voltage: formData.short_voltage,
                max_voltage: formData.max_voltage,
                condition_test: formData.condition_test,
                temperature: formData.temperature,
                size: formData.size,
                create_by: 1,
                deviceCategory: 2
			})
			.then((res) => {
				alert(res);
			});
	};

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
                        name="description"
                        label="Description de l'equipement"
                        autoComplete="description"
                        value={formData.description}
                        onChange={handleChange}
                        error={errors.description}
                    />
                    <Select
                            labelId="Etat de la batterie"
                            id="etatDevice"
                            name="etatDevice"
                            value={formData.etatDevice}
                            onChange={handleChange}
                            >
                            <MenuItem value="1">Bonne</MenuItem>
                            <MenuItem value="0">Mauvaise</MenuItem>
                    </Select>
                    <Controls.Input
                        name="maximum_power"
                        label="Maximum de power"
                        value={formData.maximum_power}
                        onChange={handleChange}
                        error={errors.maximum_power}
                    />
                    <Controls.Input
                        label="Power voltage"
                        name="power_voltage"
                        value={formData.power_voltage}
                        onChange={handleChange}
                        error={errors.power_voltage}
                    />
                    <Controls.Input
                        label="Power current"
                        name="power_current"
                        value={formData.power_current}
                        onChange={handleChange}
                        error={errors.power_current}
                    />
                    <Controls.Input
                        label="Circuit"
                        name="circuit_voltage"
                        value={formData.circuit_voltage}
                        onChange={handleChange}
                        error={errors.circuit_voltage}
                    />
                    <Controls.Input
                        label="Sjort voltage"
                        name="short_voltage"
                        value={formData.short_voltage}
                        onChange={handleChange}
                        error={errors.short_voltage}
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
                        label="Max voltage"
                        name="max_voltage"
                        value={formData.max_voltage}
                        onChange={handleChange}
                        error={errors.max_voltage}
                    />
                    <Controls.Input
                        label="Condition test"
                        name="condition_test"
                        value={formData.condition_test}
                        onChange={handleChange}
                        error={errors.condition_test}
                    />
                    <Controls.Input
                        label="Temperature"
                        name="temperature"
                        value={formData.temperature}
                        onChange={handleChange}
                        error={errors.temperature}
                    />
                    <Controls.Input
                        label="Size"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        error={errors.size}
                    />

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Enregister" 
                            onClick={handleSubmit}
                            />
                        {/*<Controls.Button
                            text="Reinitialiser"
                            color="default"
                onClick={resetForm} />*/}
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
