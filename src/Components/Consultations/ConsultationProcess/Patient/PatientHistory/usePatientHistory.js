import React, { useState, useEffect, Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import useForm from 'react-hook-form';
import { listFamilyHistorys, listNonPathologicalHistorys, listPathologicalHistorys } from '../../../../../graphql/queries';

import { MDBBtn, MDBIcon } from 'mdbreact';
import Swal from 'sweetalert2';

const usePatientHistory = (global, setGlobalData) => {
    const [ loading, setLoading ] = useState(false);
    const [ loadingButton, setLoadingButton ] = useState(false);
    const [ error, setError ] = useState(false);
    const { register, handleSubmit, errors, formState } = useForm();




    useEffect(() => {
        let didCancel = false;
		let api = {};

        const fetch = async () => {
            try {
				//const _family = await API.graphql(graphqlOperation(listMedicines, {limit: 400}));
				//const _nonpath = await API.graphql(graphqlOperation(listMedicines, {limit: 400}));
				//const _path = await API.graphql(graphqlOperation(listMedicines, {limit: 400}));
                
                setLoadingButton(false);
            } catch (error) {
                setError(true);
                setLoading(false);
                setLoadingButton(false);
            }
        };

        
        fetch();
        

        return () => {
            didCancel = true;
        };
    }, []);

    return { };
    
};

export default usePatientHistory;