import { useState, useEffect } from 'react';

import { listCategorys } from '../../../../../../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';


const useNonPathologicalHistory = (global, setGlobalData, setList, toggleNonPath, nonPathActions) => {
    const [ loading, setLoading ] = useState(false);
    const [ error, setError] = useState(false);
    const [ api, setApi ] = useState({});


    useEffect(() => {
        let didCancel = false;
        let api = {};

        const fetch = async () => {            
            try {

				const _nonpath = await API.graphql(graphqlOperation(listCategorys, {limit: 400}, {filter: { or: [{module: {eq: "NonPathFrequency"}}, {module: {eq: "NonPathType"}}]}} ));                              

                api = {
                    nonpathfrequencies: _nonpath.data.listCategorys.items.filter(x => x.module === "NonPathFrequency"),
                    nonpathtypes: _nonpath.data.listCategorys.items.filter(x => x.module === "NonPathType"),
                };

                setApi(api);
                setList();
                
                setGlobalData(global);
                setLoading(false);

            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };

        setLoading(true);
        fetch();

        return () => {
            didCancel = true;
        };
    }, []);

    const createNonPath = async (o) => {
        /* familyActions.setlb_family(true);
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
        }, 2000); */

    }

    const editNonPath = async (o) => {
        /* familyActions.setlb_family(true);
        const objectToEdit = {}
        
        const _items = global.patient.patientHistory.familyHistory.items;
        objectToEdit.id = o.id;
        

        const item = _items[_items.findIndex(v => v.id === o.id)];
        const _diseases = item.diseases.items;
        
        if(o.comment !== item.comment){objectToEdit.comment = o.comment;}
        if(o.alive !== item.alive){objectToEdit.alive = o.alive;}

        if (o.diseases.items === undefined) {
            
            item.diseases.items.forEach( async (e) => {
                const diseasesIndex = o.diseases.findIndex(x => x.value === e.diseases.id);
				if(diseasesIndex === -1){
                    const deletedfd = await API.graphql(graphqlOperation(deleteFamilyDetailsDiseasesForGlobal, {input: {id: e.id}} ));
                    _diseases.splice(_diseases.findIndex(v => v.id === e.id), 1);
				}
            });

            o.diseases.forEach(async (e) => {
                const diseasesIndex = item.diseases.items.findIndex(x => x.diseases.id === e.value);
                if(diseasesIndex === -1){
                    const input = {
                        familyDetailsDiseasesFamilyId: item.id,
                        familyDetailsDiseasesDiseasesId: e.value,
                    };
                    
                    const phdiseases = await API.graphql(graphqlOperation(createFamilyDetailsDiseasesForGlobal, {input: input} )).catch( e => { throw new SyntaxError("Error GraphQL"); console.log(e); familyActions.setlb_family(false);  });
                    const _disease = phdiseases.data.createFamilyDetailsDiseases;
                    _diseases.push(_disease);                    
                }
            });
        }

        if (o.relationship.value !== undefined) {
            if (o.relationship.value !== item.relationship.id) {
                objectToEdit.familyHistoryRelationshipId = o.relationship.value
            }
        }

        const ufamilyh = await API.graphql(graphqlOperation(updateFamilyHistoryForGlobal, {input: objectToEdit} )).catch( e => { throw new SyntaxError("Error GraphQL"); console.log(e); familyActions.setlb_family(false); });

        _items.splice(_items.findIndex(v => v.id === o.id), 1);
        _items.push(ufamilyh.data.updateFamilyHistory);
        
        global.patient.patientHistory.familyHistory.items = _items;

        setGlobalData(global);
        
        setTimeout(() => {  
            setList();
            familyActions.setlb_family(false);   
        }, 2000); */
    }


    return { editNonPath, createNonPath, api, loading };
    
};

export default useNonPathologicalHistory;