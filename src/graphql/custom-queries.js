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

export const listMedicalConsultationsReports = `query ListMedicalConsultations(
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
      createdAt
    }
  }
}`;

export const listMedicalConsultations = `query ListMedicalConsultations(
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
      date_of_medical_consultation
      state
      consultation_position
      consult_cost
      read_secretary
      read_company
      createdAt
    }
    nextToken
  }
}
`;