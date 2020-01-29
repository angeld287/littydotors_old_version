import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { useHistory, useParams } from 'react-router-dom';
import { listMedicalConsultations } from '../../../../graphql/queries';
import moment from 'moment';


const UsePatientDetails = (childProps, patient) => {
    const [ loadingHistory, setLoadingHistory ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ patientData, setPatientData ] = useState({});
    const [ data, setData ] = useState([]);

    useEffect(() => {
        let didCancel = false;
        var _patientData = {};

        const fetch = async () => {
            try {
                API.graphql(graphqlOperation(listMedicalConsultations, { filter: {
                    doctorname: {eq: childProps.state.doctorusername},
                    patientname: {eq: patient.username}
                }}))
                .then((r) => {
                    const rows = [];

                    var items = r.data.listMedicalConsultations.items;
                    items.forEach(e => {
                        var row = { date: moment(e.createdAt).format('DD-MM-YYYY'), reason: "e.medicalHistory.reason" };
                        rows.push(row);
                    });
                    
                    const data = {
                        columns: [
                            {label: 'Fecha', field: 'date', sort: 'asc', width: 150 },
                            {label: 'Razon', field: 'reason', sort: 'asc', width: 270 }
                        ],
                        rows: rows
                    };
                    setData(data);
                    setLoadingHistory(false);
                }).catch((err) => { 
                    console.log("Ocurrio un error: ",err);
                    setLoadingHistory(false);
                });
                
            } catch (error) {
                setLoadingHistory(false);
                setError(true);
            }

            if (!didCancel) {
                setPatientData(_patientData);
            }
        };

        fetch();

        return () => {
            didCancel = true;
        };
    }, []);

    return { loadingHistory, data };
};

export default UsePatientDetails;