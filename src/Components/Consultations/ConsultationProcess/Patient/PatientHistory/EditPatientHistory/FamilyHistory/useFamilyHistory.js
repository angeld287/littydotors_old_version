import React, { useState, useEffect, Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import useForm from 'react-hook-form';
import { listDiseases, listCategorys } from '../../../../../../../graphql/queries';
import { createFamilyHistoryForGlobal, createFamilyDetailsDiseasesForGlobal } from '../../../../../../../graphql/custom-mutations';

import { MDBBtn, MDBIcon } from 'mdbreact';
import Swal from 'sweetalert2';
import useEditPatientHistory from '../useEditPatientHistory';


const useFamilyHistory = (global, setGlobalData, setList, toggleFamily, familyActions) => {

    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    const [ family, setFamily ] = useState([]);
	const [ familyTable, setFamilyTable ] = useState([]);
	const [ familyModal, setFamilyModal ] = useState(false);
	const [ familyEditObject, setFamilyEditObject ] = useState({});
	const [ api, setApi ] = useState({});
	const [ edit, setEdit ] = useState(false);
    
    useEffect(() => {
        let didCancel = false;
		let api = {};

        const fetch = async () => {
            try {
				const _diseases = await API.graphql(graphqlOperation(listDiseases, {limit: 400}));
				const _category = await API.graphql(graphqlOperation(listCategorys, {filter: { module: { eq: "FamilyHistory"} }} ));                

                api = {
                    diseases: _diseases.data.listDiseases.items,
                    familytypes: _category.data.listCategorys.items,
                };

                setApi(api);
                setList();
                
                setGlobalData(global);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };

        if(global.patientHistory.notEmpty !== true){
            fetch();
        }else{
            setApi(global.patientHistory.api);
            setFamily(global.patientHistory.family.items);
            setFamilyTable(global.patientHistory.family.table);
        }

        return () => {
            didCancel = true;
        };
    }, []);

    const createFamily = async (o) => {
        familyActions.setlb_family(true);
        const _items = global.patient.patientHistory.familyHistory.items;
        
        const input = {};

        input.alive = o.alive;
        if(o.comment !== ""){input.comment = o.comment;}
        input.patientHistoryFamilyHistoryId = global.patient.patientHistory.id;
        input.familyHistoryRelationshipId = o.relationship.value;

        const cfamilyh = await API.graphql(graphqlOperation(createFamilyHistoryForGlobal, {input: input} )).catch( e => { throw new SyntaxError("Error GraphQL"); console.log(e); familyActions.setlb_family(false); });
        
        const _familyHistory = cfamilyh.data.createFamilyHistory;
        const _diseases = [];
        o.diseases.forEach(async (d) => {
            const input = {
                familyDetailsDiseasesFamilyId: cfamilyh.data.createFamilyHistory.id,
                familyDetailsDiseasesDiseasesId: d.value,
            };
            const phdiseases = await API.graphql(graphqlOperation(createFamilyDetailsDiseasesForGlobal, {input: input} )).catch( e => { throw new SyntaxError("Error GraphQL"); console.log(e); familyActions.setlb_family(false);  });
            const _disease = phdiseases.data.createFamilyDetailsDiseases;
            _diseases.push(_disease);
        });

        _familyHistory.diseases = {
            items:_diseases
        };

        _items.push(_familyHistory);
        
        global.patient.patientHistory.familyHistory.items = _items;

        setGlobalData(global);
        
        setTimeout(() => {  
            setList();
            familyActions.setlb_family(false);   
        }, 2000);

    }

    const removeFamily = async (id) => {
        const result = await Swal.fire({ title: '¿Desea eliminar el elemento?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Eliminar', cancelButtonText: 'Cancelar'});
        if (result.value) {
            const _items = family;
            _items.splice(_items.findIndex(v => v.id === id), 1);
            setFamily(_items);
            setList();
        }
    }

    const openFamilyModalToEdit = (o) => {
        setEdit(true);
        setFamilyModal(true);
        setFamilyEditObject(o);
    }

    const editFamily = (o) => {
        const _items = family;

        _items.splice(_items.findIndex(v => v.imedicalPrescriptionMedicationsId === o.medicalPrescriptionMedicationsId), 1);

        _items.push(o);
        setFamily(_items);
        setEdit(false);
        setList();
    }

    return { api, createFamily };
    
};

export default useFamilyHistory;