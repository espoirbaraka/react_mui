// // Pour la modification de la batterie

// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../../axios';

// const initialFormData = {
//     id: '',
//     description: '',
//     etatDevice: '',
//     normal_voltage: '',
//     cycle_voltage: '',
//     loat_volatge: '',
//     capacity: '',
//     temperature_coefficient: '',
//     isPermanent: false,
// }

// const [formData, updateFormData] = useState(initialFormData);

// 	useEffect(() => {
// 		axiosInstance.get('batterie-detail/' + id).then((res) => {
// 			updateFormData({
// 				...formData,
// 				['description']: res.data.description,
// 				['etatDevice']: res.data.etatDevice,
// 				['normal_voltage']: res.data.normal_voltage,
// 				['cycle_voltage']: res.data.cycle_voltage,
//                 ['loat_voltage']: res.data.loat_volatge,
//                 ['capacity']: res.data.capacity,
//                 ['temperature_coefficient']: res.data.temperature_coefficient,
// 			});
// 			console.log(res.data);
// 		});
// 	}, [updateFormData]);

// const handleChange = (e) => {
//     updateFormData({
//         ...formData,
//         // Trimming any whitespace
//         [e.target.name]: e.target.value.trim(),
//     });
// };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     axiosInstance
//         .post(`batterie-update/` + id + '/', {
//             description: formData.description,
//             etatDevice: formData.etatDevice,
//             normal_voltage: formData.normal_voltage,
//             cycle_voltage: formData.cycle_voltage,
//             loat_volatge: formData.loat_volatge,
//             capacity: formData.capacity,
//             temperature_coefficient: formData.temperature_coefficient,
//             update_by: 1,
//             deviceCategory: 1
//         })
//         .then((res) => {
//             alert(res);
//         });
// };

// // Pour la modification de panneaux

// const initialFormData = {
//     id: '',
//     description: '',
//     etatDevice: '',
//     maximum_power: '',
//     power_voltage: '',
//     power_current: '',
//     circuit_voltage: '',
//     short_voltage: '',
//     max_voltage: '',
//     condition_test: '',
//     temperature: '',
//     size: '',
//     isPermanent: false,
// }

// const [formData, updateFormData] = useState(initialFormData);

// 	useEffect(() => {
// 		axiosInstance.get('panneau-detail/' + id).then((res) => {
// 			updateFormData({
// 				...formData,
// 				['description']: res.data.description,
// 				['etatDevice']: res.data.etatDevice,
// 				['maximum_power']: res.data.maximum_power,
// 				['power_voltage']: res.data.power_voltage,
//                 ['power_current']: res.data.power_current,
//                 ['circuit_voltage']: res.data.circuit_voltage,
//                 ['short_voltage']: res.data.short_voltage,
//                 ['max_voltage']: res.data.max_voltage,
//                 ['condition_test']: res.data.condition_test,
//                 ['temperature']: res.data.temperature,
//                 ['size']: res.data.temperature,
// 			});
// 			console.log(res.data);
// 		});
// 	}, [updateFormData]);

// const handleChange = (e) => {
//     updateFormData({
//         ...formData,
//         // Trimming any whitespace
//         [e.target.name]: e.target.value.trim(),
//     });
// };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     axiosInstance
//         .post(`panneau-update/`, {
//             description: formData.description,
//             etatDevice: formData.etatDevice,
//             maximum_power: formData.maximum_power,
//             power_voltage: formData.power_voltage,
//             power_current: formData.power_current,
//             circuit_voltage: formData.circuit_voltage,
//             short_voltage: formData.short_voltage,
//             max_voltage: formData.max_voltage,
//             condition_test: formData.condition_test,
//             temperature: formData.temperature,
//             size: formData.size,
//             update_by: 1,
//             deviceCategory: 1
//         })
//         .then((res) => {
//             alert(res);
//         });
// };

