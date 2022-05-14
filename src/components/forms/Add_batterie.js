import React, { useEffect, useState } from 'react'
import { Grid, Select, MenuItem } from '@mui/material';
import Controls from "../controls/Controls";
import { useForm, Form } from '../useForm';
import axiosInstance from '../../axios';


export default function Add_batterie(props) {
    const initialFormData = {
        description: '',
        etatDevice: '',
        normal_voltage: '',
        cycle_voltage: '',
        loat_volatge: '',
        capacity: '',
        temperature_coefficient: '',
        // deviceCategory: '',
        isPermanent: false,
    }


    const [formData, updateFormData] = useState(initialFormData);

    

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

    let [category, setCategory] = useState()
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/category-list/')
            .then(response => response.json())

            .then(category => setCategory(category))
    }, [])

    // useEffect(() => {
    //     if (recordForEdit != null)
    //         setValues({
    //             ...recordForEdit
    //         })
    // }, [recordForEdit])

    const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.post(`batterie-create/`, {
                description: formData.description,
                etatDevice: formData.etatDevice,
                normal_voltage: formData.normal_voltage,
                cycle_voltage: formData.cycle_voltage,
                loat_volatge: formData.loat_volatge,
                capacity: formData.capacity,
                temperature_coefficient: formData.temperature_coefficient,
                create_by: 1,
                deviceCategory: 1
			})
			.then((res) => {
				alert(res);
			});
	};

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
                        label="Normal vaoltage"
                        name="normal_voltage"
                        value={formData.normal_voltage}
                        onChange={handleChange}
                        error={errors.normal_voltage}
                    />
                    <Controls.Input
                        label="Cycle de voltage"
                        name="cycle_voltage"
                        value={formData.cycle_voltage}
                        onChange={handleChange}
                        error={errors.cycle_voltage}
                    />
                    <Controls.Input
                        label="Loat voltage"
                        name="loat_volatge"
                        value={formData.loat_volatge}
                        onChange={handleChange}
                        error={errors.loat_volatge}
                    />
                    

                </Grid>
                <Grid item xs={6}>
                    
                    <Controls.Input
                        label="Capacite normal"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                        error={errors.capacity}
                    />
                    <Controls.Input
                        label="Capacite"
                        name="capacite"
                        value={values.capacite}
                        onChange={handleChange}
                        error={errors.capacite}
                    />
                    <Controls.Input
                        label="Temperature du coefficient"
                        name="temperature_coefficient"
                        value={formData.temperature_coefficient}
                        onChange={handleChange}
                        error={errors.temperature_coefficient}
                    />
                      {/* <Select
                            labelId="Categorie de l'equipement"
                            id="deviceCategory"
                            value={formData.deviceCategory}
                            onChange={handleChange}
                            >
                            {
                                category.map(categories =>(
                                    <MenuItem key={categories.categoryId}>{categories.designationDevice}</MenuItem>
                                ))
                            }
                     </Select> */}

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Enregister" 
                            onClick={handleSubmit}
                            />
                        {}
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
