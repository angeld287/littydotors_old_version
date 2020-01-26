import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { useHistory, useParams } from 'react-router-dom';


const useNewPatient = () => {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ username, setUsername ] = useState("");
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ weight, setWeight ] = useState("");
    const [ height, setHeight ] = useState("");
    const [ birthdate, setBirthdate ] = useState(new Date());

    const createPatient = () => {
        const patient = {
            name: name,
            username: username,
            email: email,
            phone: phone,
            weight: weight,
            height: height,
            birthdate: birthdate
        };
        console.log(patient);
    }

    return { createPatient, setBirthdate, username, setUsername, name, setName, email, setEmail, phone, setPhone, weight, setWeight, height, setHeight };
};

export default useNewPatient;