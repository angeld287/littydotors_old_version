import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import useForm from 'react-hook-form';
import {    createPhysicalExploration, 
            updatePhysicalExploration,
            createVitalSign,
            updateVitalSign,
            createRegionalExploration,
            updateRegionalExploration,
        } from '../../../../../graphql/mutations';

const usePhysicalExploration = (global, setGlobalData) => {
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    let { consultation, patient } = useParams();
    const { register, handleSubmit, errors, formState } = useForm();


    useEffect(() => {
        let didCancel = false;

        const fetch = async () => {
            try {
                /* API.graphql(graphqlOperation(createMedicalHistory, {input: input}))
                .then((r) => {
                    
                }).catch((err) => { 
                    console.log("Ocurrio un error: ",err); 
                    setError(true) 
                    setLoading(false);
                });  */
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };

        fetch();

        return () => {
            didCancel = true;
        };
    }, []);

    const onSubmit = (i) => {
        setLoading(true);
        //createsPhysicalExploration(i);

        console.log(global);
    }

    const createsPhysicalExploration = async (o) => {
        //const _items = global.medicalConsultation.medicalHistory.familyHistory.items;
        
        const vsinput = {}
        const reinput = {};
        const peinput = {};

        //signos vitales
        if(o.blood_pressure !== ""){vsinput.blood_pressure = o.blood_pressure}
        if(o.breathing !== ""){vsinput.breathing = o.breathing}
        if(o.pulse !== ""){vsinput.pulse = o.pulse}
        if(o.temperature !== ""){vsinput.temperature = o.temperature}
        const cvs = await API.graphql(graphqlOperation(createVitalSign, {input: vsinput} )).catch( e => { throw new SyntaxError("Error GraphQL"); console.log(e); setLoading(false); });


        //exploracion regional
        if(o.head !== ""){reinput.head = o.head}
        if(o.neck !== ""){reinput.neck = o.neck}
        if(o.thorax !== ""){reinput.thorax = o.thorax}
        if(o.abdomen !== ""){reinput.abdomen = o.abdomen}
        if(o.members !== ""){reinput.members = o.members}
        if(o.genitals !== ""){reinput.genitals = o.genitals}
        if(o.others !== ""){reinput.others = o.others}
        const crx = await API.graphql(graphqlOperation(createRegionalExploration, {input: reinput} )).catch( e => { throw new SyntaxError("Error GraphQL"); console.log(e); setLoading(false); });

        //exploracion fisica
        if(o.general_exploration !== ""){peinput.general_exploration = o.general_exploration}

        peinput.physicalExplorationVitalsignId = cvs.data.createVitalSign.id;
        peinput.physicalExplorationRegionalExplorationId = crx.data.createRegionalExploration.id;

        const cpe = await API.graphql(graphqlOperation(createPhysicalExploration, {input: peinput} )).catch( e => { throw new SyntaxError("Error GraphQL"); console.log(e); setLoading(false); });
        

        //const cfamilyh = await API.graphql(graphqlOperation(createFamilyHistoryForGlobal, {input: input} )).catch( e => { throw new SyntaxError("Error GraphQL"); console.log(e); setLoading(false); });

        //_items.push(_familyHistory);
        
        //global.patient.patientHistory.familyHistory.items = _items;

        setGlobalData(global);
        
        setTimeout(() => {  
            //setList();
            setLoading(false);
        }, 2000);

    }

    const actions = {
        onSubmit: onSubmit,
        loading: loading,
        error: error,
        register: register,
        handleSubmit: handleSubmit,
        formState: formState
    }

    return { actions, errors};
};

export default usePhysicalExploration;