import { useState, useEffect } from 'react';
import {listPatients} from './../../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify';


const useConsultations = () => {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ patients, setPatients ] = useState([]);
    const [ patient, setPatient ] = useState({});

    useEffect(() => {
        let didCancel = false;

        const fetchPatients = async () => {
            var patients = [];
            var patient = {
                name: "N/A",
                age: "00", 
                image: "https://asociaciondenutriologia.org/img/default_user.png", 
                email: "N/A", 
                phone: "N/A"
            }

            try {
                
                var patientsApi = await API.graphql(graphqlOperation(listPatients));
                
                if(patientsApi.data.listPatients.items.length > 0){
                    patientsApi.data.listPatients.items.forEach(element => {
                        const pdata = {name: element.name, age: element.age, image: "https://asociaciondenutriologia.org/img/default_user.png", email: element.email, phone: element.phone};
                        patients.push(pdata);
                    });
                }else{
                    patients = [
                        {name: "Bartolo Antonio de Jesús Valerio", age: "34", image: "https://www.morpht.com/sites/morpht/files/styles/landscape/public/dalibor-matura_1.jpg", email: "bjesus@gmail.com", phone: "809-232-3344"},
                        {name: "Bernarda Abreu Santos", age: "28", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOHBYH5MlqZjhBsNIZTm66VE7nCfsyuat9wUEi8wIgzlbVJ2E&s", email: "babreu@gmail.com", phone: "829-345-2288"},
                        {name: "Damaris María Amparo", age: "25", image: "https://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg", email: "bjesus@gmail.com", phone: "809-455-3344"},
                        {name: "Danilo Miguel Gil Burgos", age: "29", image: "https://www.evolutionsociety.org/userdata/news_picupload/pic_sid189-0-norm.jpg", email: "dgil@gmail.com", phone: "809-232-3344"},
                        {name: "Erickson Miguel Moronta Santos", age: "34", image: "https://www.morpht.com/sites/morpht/files/styles/landscape/public/dalibor-matura_1.jpg", email: "bjesus@gmail.com", phone: "809-232-3344"},
                        {name: "Dayana Miguelina Mena Gil", age: "28", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOHBYH5MlqZjhBsNIZTm66VE7nCfsyuat9wUEi8wIgzlbVJ2E&s", email: "babreu@gmail.com", phone: "829-345-2288"},
                        {name: "Jaqueline Inmaculada Ovalles Valentín", age: "25", image: "https://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg", email: "bjesus@gmail.com", phone: "809-455-3344"},
                        {name: "Félix Blanco", age: "29", image: "https://www.evolutionsociety.org/userdata/news_picupload/pic_sid189-0-norm.jpg", email: "dgil@gmail.com", phone: "809-232-3344"}
                    ];
                }
                
            } catch (error) {
                setLoading(false);
                setError(true);
            }

            if (!didCancel) {
                setPatients(patients);
                setPatient(patient);
                setLoading(false);
            }
        };

        fetchPatients();

        return () => {
            didCancel = true;
        };
    }, []);

    return { patients, error, loading, setPatients, patient, setPatient };
};

export default useConsultations;