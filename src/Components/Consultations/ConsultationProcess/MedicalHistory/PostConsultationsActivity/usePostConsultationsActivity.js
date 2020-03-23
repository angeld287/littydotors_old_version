import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import useForm from 'react-hook-form';


const usePostConsultationsActivity = (global, setGlobalData) => {
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    let { consultation, patient } = useParams();
    const { register, handleSubmit, errors, formState } = useForm();

  const [ _new, setNew ] = useState(global.medicalConsultation.postConsultationsActivity === null);
  const [ _edit, setEdit ] = useState(false);
  const [ editLoading, setEditLoading ] = useState(false);

  const physicalexploration = global.medicalConsultation.medicalHistory.physicalExploration;

  const vs = physicalexploration === null ? null : physicalexploration.vitalsign;
  const re = physicalexploration === null ? null : physicalexploration.regionalExploration;

  //fields
  const [ general_exploration, setgeneral_exploration ] = useState(
            physicalexploration === null ? "" :
            (physicalexploration.general_exploration === null ? "" :  physicalexploration.general_exploration)
        );

  //vs
  const [ breathing, setbreathing ] = useState(vs === null ? "" : (vs.breathing === null ? "" : vs.breathing));
  const [ pulse, setpulse ] = useState(vs === null ? "" : (vs.pulse === null ? "" : vs.pulse));
  const [ blood_pressure, setblood_pressure ] = useState(vs === null ? "" : (vs.blood_pressure === null ? "" : vs.blood_pressure));
  const [ temperature, settemperature ] = useState(vs === null ? "" : (vs.temperature === null ? "" : vs.temperature));

  //re
  const [ head, sethead ] = useState(re === null ? "" : (re.head === null ? "" : re.head));
  const [ neck, setneck ] = useState(re === null ? "" : (re.neck === null ? "" : re.neck));
  const [ thorax, setthorax ] = useState(re === null ? "" : (re.thorax === null ? "" : re.thorax));
  const [ abdomen, setabdomen ] = useState(re === null ? "" : (re.abdomen === null ? "" : re.abdomen));
  const [ members, setmembers ] = useState(re === null ? "" : (re.members === null ? "" : re.members));
  const [ genitals, setgenitals ] = useState(re === null ? "" : (re.genitals === null ? "" : re.genitals));
  const [ others, setothers ] = useState(re === null ? "" : (re.others === null ? "" : re.others));


  const fields = {
    general_exploration: {
        general_exploration, setgeneral_exploration
    },
    breathing: {
        breathing, setbreathing
    },
    pulse:{
        pulse, setpulse
    },
    blood_pressure:{
        blood_pressure, setblood_pressure
    },
    temperature:{
        temperature, settemperature
    },
    head:{
        head, sethead
    },
    neck:{
        neck, setneck
    },
    thorax:{
        thorax, setthorax
    },
    abdomen:{
        abdomen, setabdomen
    },
    members:{
        members, setmembers
    },
    genitals:{
        genitals, setgenitals
    },
    others:{
        others, setothers
    }
  }


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
        createsPhysicalExploration(i);
    }

    const createsPhysicalExploration = async (o) => {
    }

    const editPhysicalExploration = async () => {
    }

    const actions = {
        onSubmit: onSubmit,
        loading: loading,
        error: error,
        register: register,
        handleSubmit: handleSubmit,
        formState: formState
    }

    return { actions, errors, setNew, _new, _edit, setEdit, editLoading, fields, editPhysicalExploration};
};

export default usePostConsultationsActivity;