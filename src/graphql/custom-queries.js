export const listConsultingRoomsSecretary = `query ListConsultingRooms(
  $filter: ModelConsultingRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listConsultingRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      doctor {
        id
        name
        username
        email
        speciality
        sex
        image
      }
      secretary
      location {
        id
        name
      }
    }
    nextToken
  }
}
`;

export const listMedicalAppointmentReports = `query listMedicalAppointments(
  $filter: ModelMedicalAppointmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listMedicalAppointments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      createdAt
    }
  }
}`;

export const listMedicalAppointments = `query listMedicalAppointments(
  $filter: ModelMedicalAppointmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listMedicalAppointments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      location {
        id
        name
      }
      doctor {
        id
        name
        username
        email
        speciality
        sex
      }
      doctorname
      patient {
        id
        name
        username
        email
        phone
        phone_id
      }
      rejection {
        items {
          id
          description
          doctor
          secretary
          patient
          createdAt
        }
        nextToken
      }
      cancelation {
        id
        description
      }
      notification {
        items {
          id
          state
          doctor
          secretary
          patient
          createdAt
        }
        nextToken
      }
      confirmation {
        id
      }
      secretary
      details
      date_created
      date_of_medical_appointment
      state
      position
      consult_cost
      read_secretary
      read_company
      createdAt
    }
    nextToken
  }
}
`;

export const getMedicalConsultation = /* GraphQL */ `
  query GetMedicalConsultation($id: ID!) {
    getMedicalConsultation(id: $id) {
      id
      state
      patient {
        id
        name
        username
        email
        phone
        weight
        height
        birthdate
        patientHistory {
          id
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
              createdAt
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
                createdAt
              }
            }
            patientMedications {
              items {
                id
                medications {
                  id
                  name
                }
                createdAt
                drug_concentration
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
                createdAt
              }
            }
          }
          familyHistory {
            items {
              id
              alive
              comment
              createdAt
              diseases {
                items {
                  id
                  diseases {
                    id
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
      postConsultationsActivity {
        id
        medicalpres {
          items {
            id
            date
            frequency
            duration
            comment
            createdAt
            medications {
              id
              name
            }
          }
        }
        medicalAnalysis {
          items {
            id
            state
            date
            medicalAnalysis{
              id
              name
            }
          }
        }
        surgicalIntervention {
          items {
            id
            state
            date
            surgicalIntervention{
              id
              name
            }
          }
        }
      }
      medicalHistory {
        id
        reason
        physicalExploration {
          id
          general_exploration
          vitalsign {
              id
              blood_pressure
              breathing
              pulse
              temperature
              doctor
              secretary
              patient
              owner
          }
          regionalExploration {
              id
              head
              neck
              thorax
              abdomen
              members
              genitals
              others
              doctor
              secretary
              patient
              owner
            }
          doctor
          secretary
          patient
        }
      }
      createdAt
    }
  }
`;


export const listMedicalConsultationsForHistory = /* GraphQL */ `
  query ListMedicalConsultations(
    $filter: ModelMedicalConsultationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedicalConsultations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        medicalHistory {
          id
          reason
        }
        state  
        createdAt 
        postConsultationsActivity {
          id
          medicalpres {
            items {
              id
              date
              frequency
              duration
              comment
              medications {
                id
                name
              }
            }
          }
          medicalAnalysis {
            items {
              id
              state
              date
              medicalAnalysis{
                id
                name
              }
            }
          }
          surgicalIntervention {
            items {
              id
              state
              date
              surgicalIntervention{
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;