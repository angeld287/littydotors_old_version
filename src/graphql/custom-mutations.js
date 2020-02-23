export const updatePatientaddPatientHistory = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
        id
        patientHistory {
          nonPathologicalHistory {
              items {
                id
                frequency
                comment
                type {
                  id
                  name
                }
                owner
              }
              nextToken
          }
          pathologicalHistory {
              id
              surgicalInterventions {
                items {
                  id
                  surgicalIntervention {
                    id
                    name
                    description
                  }
                }
              }
              patientMedications {
                items {
                  id
                  medications {
                    id
                    name
                  }
                }
              }
              patientAllergies {
                items {
                  id
                  allergies {
                    id
                    name
                    description
                  }
                }
              }
          }
          familyHistory {
            items {
              id
              alive
              comment
              diseases {
                items {
                  diseases {
                    name
                  }
                }
                nextToken
              }
              relationship {
                id
                name
              }
            }
            nextToken
          }
        }
      }
    }
`;