import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { useHistory, useParams } from 'react-router-dom';
import useForm from 'react-hook-form';
import useConsultationProcess from '../useConsultationProcess';
import { createPatient } from '../../../../graphql/mutations';

const useNewPatient = () => {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ birthdate, setBirthdate ] = useState(new Date());
    const { register, handleSubmit, errors, formState } = useForm();
    const { setCreateNewPatient, createNewPatient } = useConsultationProcess ();

    const newPatient = (object) => {
        API.graphql(graphqlOperation(createPatient, { input: object }));
    };

    return { newPatient, birthdate, setBirthdate, register, handleSubmit, errors, formState, loading, setLoading  };
};

export default useNewPatient;