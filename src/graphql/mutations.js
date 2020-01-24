/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConsultingRoom = /* GraphQL */ `
  mutation CreateConsultingRoom(
    $input: CreateConsultingRoomInput!
    $condition: ModelConsultingRoomConditionInput
  ) {
    createConsultingRoom(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        speciality
        sex
        consultingroom {
          id
          secretary
          owner
        }
        image
        owner
      }
      secretary
      location {
        id
        name
        owner
      }
      owner
    }
  }
`;
export const updateConsultingRoom = /* GraphQL */ `
  mutation UpdateConsultingRoom(
    $input: UpdateConsultingRoomInput!
    $condition: ModelConsultingRoomConditionInput
  ) {
    updateConsultingRoom(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        speciality
        sex
        consultingroom {
          id
          secretary
          owner
        }
        image
        owner
      }
      secretary
      location {
        id
        name
        owner
      }
      owner
    }
  }
`;
export const deleteConsultingRoom = /* GraphQL */ `
  mutation DeleteConsultingRoom(
    $input: DeleteConsultingRoomInput!
    $condition: ModelConsultingRoomConditionInput
  ) {
    deleteConsultingRoom(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        speciality
        sex
        consultingroom {
          id
          secretary
          owner
        }
        image
        owner
      }
      secretary
      location {
        id
        name
        owner
      }
      owner
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      name
      owner
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      name
      owner
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      name
      owner
    }
  }
`;
export const createDoctor = /* GraphQL */ `
  mutation CreateDoctor(
    $input: CreateDoctorInput!
    $condition: ModelDoctorConditionInput
  ) {
    createDoctor(input: $input, condition: $condition) {
      id
      name
      username
      email
      speciality
      sex
      consultingroom {
        id
        doctor {
          id
          name
          username
          email
          speciality
          sex
          image
          owner
        }
        secretary
        location {
          id
          name
          owner
        }
        owner
      }
      image
      owner
    }
  }
`;
export const updateDoctor = /* GraphQL */ `
  mutation UpdateDoctor(
    $input: UpdateDoctorInput!
    $condition: ModelDoctorConditionInput
  ) {
    updateDoctor(input: $input, condition: $condition) {
      id
      name
      username
      email
      speciality
      sex
      consultingroom {
        id
        doctor {
          id
          name
          username
          email
          speciality
          sex
          image
          owner
        }
        secretary
        location {
          id
          name
          owner
        }
        owner
      }
      image
      owner
    }
  }
`;
export const deleteDoctor = /* GraphQL */ `
  mutation DeleteDoctor(
    $input: DeleteDoctorInput!
    $condition: ModelDoctorConditionInput
  ) {
    deleteDoctor(input: $input, condition: $condition) {
      id
      name
      username
      email
      speciality
      sex
      consultingroom {
        id
        doctor {
          id
          name
          username
          email
          speciality
          sex
          image
          owner
        }
        secretary
        location {
          id
          name
          owner
        }
        owner
      }
      image
      owner
    }
  }
`;
export const createRejection = /* GraphQL */ `
  mutation CreateRejection(
    $input: CreateRejectionInput!
    $condition: ModelRejectionConditionInput
  ) {
    createRejection(input: $input, condition: $condition) {
      id
      description
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const updateRejection = /* GraphQL */ `
  mutation UpdateRejection(
    $input: UpdateRejectionInput!
    $condition: ModelRejectionConditionInput
  ) {
    updateRejection(input: $input, condition: $condition) {
      id
      description
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const deleteRejection = /* GraphQL */ `
  mutation DeleteRejection(
    $input: DeleteRejectionInput!
    $condition: ModelRejectionConditionInput
  ) {
    deleteRejection(input: $input, condition: $condition) {
      id
      description
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const createCancelation = /* GraphQL */ `
  mutation CreateCancelation(
    $input: CreateCancelationInput!
    $condition: ModelCancelationConditionInput
  ) {
    createCancelation(input: $input, condition: $condition) {
      id
      description
      owner
    }
  }
`;
export const updateCancelation = /* GraphQL */ `
  mutation UpdateCancelation(
    $input: UpdateCancelationInput!
    $condition: ModelCancelationConditionInput
  ) {
    updateCancelation(input: $input, condition: $condition) {
      id
      description
      owner
    }
  }
`;
export const deleteCancelation = /* GraphQL */ `
  mutation DeleteCancelation(
    $input: DeleteCancelationInput!
    $condition: ModelCancelationConditionInput
  ) {
    deleteCancelation(input: $input, condition: $condition) {
      id
      description
      owner
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      id
      state
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      id
      state
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
      id
      state
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const createConfirmation = /* GraphQL */ `
  mutation CreateConfirmation(
    $input: CreateConfirmationInput!
    $condition: ModelConfirmationConditionInput
  ) {
    createConfirmation(input: $input, condition: $condition) {
      id
      owner
    }
  }
`;
export const updateConfirmation = /* GraphQL */ `
  mutation UpdateConfirmation(
    $input: UpdateConfirmationInput!
    $condition: ModelConfirmationConditionInput
  ) {
    updateConfirmation(input: $input, condition: $condition) {
      id
      owner
    }
  }
`;
export const deleteConfirmation = /* GraphQL */ `
  mutation DeleteConfirmation(
    $input: DeleteConfirmationInput!
    $condition: ModelConfirmationConditionInput
  ) {
    deleteConfirmation(input: $input, condition: $condition) {
      id
      owner
    }
  }
`;
export const createMedicalAppointment = /* GraphQL */ `
  mutation CreateMedicalAppointment(
    $input: CreateMedicalAppointmentInput!
    $condition: ModelMedicalAppointmentConditionInput
  ) {
    createMedicalAppointment(input: $input, condition: $condition) {
      id
      location {
        id
        name
        owner
      }
      doctor {
        id
        name
        username
        email
        speciality
        sex
        consultingroom {
          id
          secretary
          owner
        }
        image
        owner
      }
      doctorname
      patient {
        id
        name
        username
        email
        phone
        phone_id
        weight
        height
        size
        age
        birthdate
        patientHistory {
          id
          owner
        }
        owner
      }
      rejection {
        items {
          id
          description
          doctor
          secretary
          patient
          createdAt
          owner
        }
        nextToken
      }
      cancelation {
        id
        description
        owner
      }
      notification {
        items {
          id
          state
          doctor
          secretary
          patient
          createdAt
          owner
        }
        nextToken
      }
      confirmation {
        id
        owner
      }
      secretary
      details
      date_created
      date_of_medical_appointment
      state
      position
      consult_cost
      read_secretary
      read_doctor
      read_client
      createdAt
    }
  }
`;
export const updateMedicalAppointment = /* GraphQL */ `
  mutation UpdateMedicalAppointment(
    $input: UpdateMedicalAppointmentInput!
    $condition: ModelMedicalAppointmentConditionInput
  ) {
    updateMedicalAppointment(input: $input, condition: $condition) {
      id
      location {
        id
        name
        owner
      }
      doctor {
        id
        name
        username
        email
        speciality
        sex
        consultingroom {
          id
          secretary
          owner
        }
        image
        owner
      }
      doctorname
      patient {
        id
        name
        username
        email
        phone
        phone_id
        weight
        height
        size
        age
        birthdate
        patientHistory {
          id
          owner
        }
        owner
      }
      rejection {
        items {
          id
          description
          doctor
          secretary
          patient
          createdAt
          owner
        }
        nextToken
      }
      cancelation {
        id
        description
        owner
      }
      notification {
        items {
          id
          state
          doctor
          secretary
          patient
          createdAt
          owner
        }
        nextToken
      }
      confirmation {
        id
        owner
      }
      secretary
      details
      date_created
      date_of_medical_appointment
      state
      position
      consult_cost
      read_secretary
      read_doctor
      read_client
      createdAt
    }
  }
`;
export const deleteMedicalAppointment = /* GraphQL */ `
  mutation DeleteMedicalAppointment(
    $input: DeleteMedicalAppointmentInput!
    $condition: ModelMedicalAppointmentConditionInput
  ) {
    deleteMedicalAppointment(input: $input, condition: $condition) {
      id
      location {
        id
        name
        owner
      }
      doctor {
        id
        name
        username
        email
        speciality
        sex
        consultingroom {
          id
          secretary
          owner
        }
        image
        owner
      }
      doctorname
      patient {
        id
        name
        username
        email
        phone
        phone_id
        weight
        height
        size
        age
        birthdate
        patientHistory {
          id
          owner
        }
        owner
      }
      rejection {
        items {
          id
          description
          doctor
          secretary
          patient
          createdAt
          owner
        }
        nextToken
      }
      cancelation {
        id
        description
        owner
      }
      notification {
        items {
          id
          state
          doctor
          secretary
          patient
          createdAt
          owner
        }
        nextToken
      }
      confirmation {
        id
        owner
      }
      secretary
      details
      date_created
      date_of_medical_appointment
      state
      position
      consult_cost
      read_secretary
      read_doctor
      read_client
      createdAt
    }
  }
`;
export const createMedicalConsultation = /* GraphQL */ `
  mutation CreateMedicalConsultation(
    $input: CreateMedicalConsultationInput!
    $condition: ModelMedicalConsultationConditionInput
  ) {
    createMedicalConsultation(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        speciality
        sex
        consultingroom {
          id
          secretary
          owner
        }
        image
        owner
      }
      postConsultationsActivities {
        id
        medicalPrescriptions {
          nextToken
        }
        medicalAnalysis {
          nextToken
        }
        surgicalIntervention {
          nextToken
        }
        doctor
        secretary
        patient
        owner
      }
      medicalHistory {
        id
        reason
        patient {
          id
          name
          username
          email
          phone
          phone_id
          weight
          height
          size
          age
          birthdate
          owner
        }
        physicalExploration {
          id
          general_exploration
          doctor
          secretary
          patient
          owner
        }
        doctor
        secretary
        patientname
        owner
      }
      doctorname
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const updateMedicalConsultation = /* GraphQL */ `
  mutation UpdateMedicalConsultation(
    $input: UpdateMedicalConsultationInput!
    $condition: ModelMedicalConsultationConditionInput
  ) {
    updateMedicalConsultation(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        speciality
        sex
        consultingroom {
          id
          secretary
          owner
        }
        image
        owner
      }
      postConsultationsActivities {
        id
        medicalPrescriptions {
          nextToken
        }
        medicalAnalysis {
          nextToken
        }
        surgicalIntervention {
          nextToken
        }
        doctor
        secretary
        patient
        owner
      }
      medicalHistory {
        id
        reason
        patient {
          id
          name
          username
          email
          phone
          phone_id
          weight
          height
          size
          age
          birthdate
          owner
        }
        physicalExploration {
          id
          general_exploration
          doctor
          secretary
          patient
          owner
        }
        doctor
        secretary
        patientname
        owner
      }
      doctorname
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const deleteMedicalConsultation = /* GraphQL */ `
  mutation DeleteMedicalConsultation(
    $input: DeleteMedicalConsultationInput!
    $condition: ModelMedicalConsultationConditionInput
  ) {
    deleteMedicalConsultation(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        speciality
        sex
        consultingroom {
          id
          secretary
          owner
        }
        image
        owner
      }
      postConsultationsActivities {
        id
        medicalPrescriptions {
          nextToken
        }
        medicalAnalysis {
          nextToken
        }
        surgicalIntervention {
          nextToken
        }
        doctor
        secretary
        patient
        owner
      }
      medicalHistory {
        id
        reason
        patient {
          id
          name
          username
          email
          phone
          phone_id
          weight
          height
          size
          age
          birthdate
          owner
        }
        physicalExploration {
          id
          general_exploration
          doctor
          secretary
          patient
          owner
        }
        doctor
        secretary
        patientname
        owner
      }
      doctorname
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const createMedicalHistory = /* GraphQL */ `
  mutation CreateMedicalHistory(
    $input: CreateMedicalHistoryInput!
    $condition: ModelMedicalHistoryConditionInput
  ) {
    createMedicalHistory(input: $input, condition: $condition) {
      id
      reason
      patient {
        id
        name
        username
        email
        phone
        phone_id
        weight
        height
        size
        age
        birthdate
        patientHistory {
          id
          owner
        }
        owner
      }
      physicalExploration {
        id
        general_exploration
        vitalsigns {
          id
          blood_pressure
          Breathing
          Pulse
          Temperature
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
        owner
      }
      doctor
      secretary
      patientname
      owner
    }
  }
`;
export const updateMedicalHistory = /* GraphQL */ `
  mutation UpdateMedicalHistory(
    $input: UpdateMedicalHistoryInput!
    $condition: ModelMedicalHistoryConditionInput
  ) {
    updateMedicalHistory(input: $input, condition: $condition) {
      id
      reason
      patient {
        id
        name
        username
        email
        phone
        phone_id
        weight
        height
        size
        age
        birthdate
        patientHistory {
          id
          owner
        }
        owner
      }
      physicalExploration {
        id
        general_exploration
        vitalsigns {
          id
          blood_pressure
          Breathing
          Pulse
          Temperature
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
        owner
      }
      doctor
      secretary
      patientname
      owner
    }
  }
`;
export const deleteMedicalHistory = /* GraphQL */ `
  mutation DeleteMedicalHistory(
    $input: DeleteMedicalHistoryInput!
    $condition: ModelMedicalHistoryConditionInput
  ) {
    deleteMedicalHistory(input: $input, condition: $condition) {
      id
      reason
      patient {
        id
        name
        username
        email
        phone
        phone_id
        weight
        height
        size
        age
        birthdate
        patientHistory {
          id
          owner
        }
        owner
      }
      physicalExploration {
        id
        general_exploration
        vitalsigns {
          id
          blood_pressure
          Breathing
          Pulse
          Temperature
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
        owner
      }
      doctor
      secretary
      patientname
      owner
    }
  }
`;
export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    createPatient(input: $input, condition: $condition) {
      id
      name
      username
      email
      phone
      phone_id
      weight
      height
      size
      age
      birthdate
      patientHistory {
        id
        nonPathologicalHistory {
          id
          owner
        }
        pathologicalHistory {
          id
          owner
        }
        familyHistory {
          id
          owner
        }
        gynecoObstetricHistory {
          id
          menarche
          sexual_development
          menstrual_rhythm
          sex_life
          deliveries
          abortions
          caesarean_sections
          contraceptive_method
          owner
        }
        owner
      }
      owner
    }
  }
`;
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
      id
      name
      username
      email
      phone
      phone_id
      weight
      height
      size
      age
      birthdate
      patientHistory {
        id
        nonPathologicalHistory {
          id
          owner
        }
        pathologicalHistory {
          id
          owner
        }
        familyHistory {
          id
          owner
        }
        gynecoObstetricHistory {
          id
          menarche
          sexual_development
          menstrual_rhythm
          sex_life
          deliveries
          abortions
          caesarean_sections
          contraceptive_method
          owner
        }
        owner
      }
      owner
    }
  }
`;
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
      id
      name
      username
      email
      phone
      phone_id
      weight
      height
      size
      age
      birthdate
      patientHistory {
        id
        nonPathologicalHistory {
          id
          owner
        }
        pathologicalHistory {
          id
          owner
        }
        familyHistory {
          id
          owner
        }
        gynecoObstetricHistory {
          id
          menarche
          sexual_development
          menstrual_rhythm
          sex_life
          deliveries
          abortions
          caesarean_sections
          contraceptive_method
          owner
        }
        owner
      }
      owner
    }
  }
`;
export const createPatientHistory = /* GraphQL */ `
  mutation CreatePatientHistory(
    $input: CreatePatientHistoryInput!
    $condition: ModelPatientHistoryConditionInput
  ) {
    createPatientHistory(input: $input, condition: $condition) {
      id
      nonPathologicalHistory {
        id
        alcohol {
          id
          active
          frequency
          comment
          owner
        }
        smoking {
          id
          active
          frequency
          comment
          owner
        }
        drugs {
          id
          active
          frequency
          comment
          owner
        }
        immunizations {
          id
          active
          frequency
          comment
          owner
        }
        owner
      }
      pathologicalHistory {
        id
        surgicalInterventions {
          nextToken
        }
        patientMedications {
          nextToken
        }
        patientAllergies {
          nextToken
        }
        owner
      }
      familyHistory {
        id
        father {
          id
          alive
          relationship
          comment
          owner
        }
        mother {
          id
          alive
          relationship
          comment
          owner
        }
        brothers {
          id
          alive
          relationship
          comment
          owner
        }
        grandfather {
          id
          alive
          relationship
          comment
          owner
        }
        grandmother {
          id
          alive
          relationship
          comment
          owner
        }
        other {
          id
          alive
          relationship
          comment
          owner
        }
        owner
      }
      gynecoObstetricHistory {
        id
        menarche
        sexual_development
        menstrual_rhythm
        sex_life
        deliveries
        abortions
        caesarean_sections
        contraceptive_method
        owner
      }
      owner
    }
  }
`;
export const updatePatientHistory = /* GraphQL */ `
  mutation UpdatePatientHistory(
    $input: UpdatePatientHistoryInput!
    $condition: ModelPatientHistoryConditionInput
  ) {
    updatePatientHistory(input: $input, condition: $condition) {
      id
      nonPathologicalHistory {
        id
        alcohol {
          id
          active
          frequency
          comment
          owner
        }
        smoking {
          id
          active
          frequency
          comment
          owner
        }
        drugs {
          id
          active
          frequency
          comment
          owner
        }
        immunizations {
          id
          active
          frequency
          comment
          owner
        }
        owner
      }
      pathologicalHistory {
        id
        surgicalInterventions {
          nextToken
        }
        patientMedications {
          nextToken
        }
        patientAllergies {
          nextToken
        }
        owner
      }
      familyHistory {
        id
        father {
          id
          alive
          relationship
          comment
          owner
        }
        mother {
          id
          alive
          relationship
          comment
          owner
        }
        brothers {
          id
          alive
          relationship
          comment
          owner
        }
        grandfather {
          id
          alive
          relationship
          comment
          owner
        }
        grandmother {
          id
          alive
          relationship
          comment
          owner
        }
        other {
          id
          alive
          relationship
          comment
          owner
        }
        owner
      }
      gynecoObstetricHistory {
        id
        menarche
        sexual_development
        menstrual_rhythm
        sex_life
        deliveries
        abortions
        caesarean_sections
        contraceptive_method
        owner
      }
      owner
    }
  }
`;
export const deletePatientHistory = /* GraphQL */ `
  mutation DeletePatientHistory(
    $input: DeletePatientHistoryInput!
    $condition: ModelPatientHistoryConditionInput
  ) {
    deletePatientHistory(input: $input, condition: $condition) {
      id
      nonPathologicalHistory {
        id
        alcohol {
          id
          active
          frequency
          comment
          owner
        }
        smoking {
          id
          active
          frequency
          comment
          owner
        }
        drugs {
          id
          active
          frequency
          comment
          owner
        }
        immunizations {
          id
          active
          frequency
          comment
          owner
        }
        owner
      }
      pathologicalHistory {
        id
        surgicalInterventions {
          nextToken
        }
        patientMedications {
          nextToken
        }
        patientAllergies {
          nextToken
        }
        owner
      }
      familyHistory {
        id
        father {
          id
          alive
          relationship
          comment
          owner
        }
        mother {
          id
          alive
          relationship
          comment
          owner
        }
        brothers {
          id
          alive
          relationship
          comment
          owner
        }
        grandfather {
          id
          alive
          relationship
          comment
          owner
        }
        grandmother {
          id
          alive
          relationship
          comment
          owner
        }
        other {
          id
          alive
          relationship
          comment
          owner
        }
        owner
      }
      gynecoObstetricHistory {
        id
        menarche
        sexual_development
        menstrual_rhythm
        sex_life
        deliveries
        abortions
        caesarean_sections
        contraceptive_method
        owner
      }
      owner
    }
  }
`;
export const createNonPathologicalHistory = /* GraphQL */ `
  mutation CreateNonPathologicalHistory(
    $input: CreateNonPathologicalHistoryInput!
    $condition: ModelNonPathologicalHistoryConditionInput
  ) {
    createNonPathologicalHistory(input: $input, condition: $condition) {
      id
      alcohol {
        id
        active
        frequency
        comment
        owner
      }
      smoking {
        id
        active
        frequency
        comment
        owner
      }
      drugs {
        id
        active
        frequency
        comment
        owner
      }
      immunizations {
        id
        active
        frequency
        comment
        owner
      }
      owner
    }
  }
`;
export const updateNonPathologicalHistory = /* GraphQL */ `
  mutation UpdateNonPathologicalHistory(
    $input: UpdateNonPathologicalHistoryInput!
    $condition: ModelNonPathologicalHistoryConditionInput
  ) {
    updateNonPathologicalHistory(input: $input, condition: $condition) {
      id
      alcohol {
        id
        active
        frequency
        comment
        owner
      }
      smoking {
        id
        active
        frequency
        comment
        owner
      }
      drugs {
        id
        active
        frequency
        comment
        owner
      }
      immunizations {
        id
        active
        frequency
        comment
        owner
      }
      owner
    }
  }
`;
export const deleteNonPathologicalHistory = /* GraphQL */ `
  mutation DeleteNonPathologicalHistory(
    $input: DeleteNonPathologicalHistoryInput!
    $condition: ModelNonPathologicalHistoryConditionInput
  ) {
    deleteNonPathologicalHistory(input: $input, condition: $condition) {
      id
      alcohol {
        id
        active
        frequency
        comment
        owner
      }
      smoking {
        id
        active
        frequency
        comment
        owner
      }
      drugs {
        id
        active
        frequency
        comment
        owner
      }
      immunizations {
        id
        active
        frequency
        comment
        owner
      }
      owner
    }
  }
`;
export const createNonPathologicalActivities = /* GraphQL */ `
  mutation CreateNonPathologicalActivities(
    $input: CreateNonPathologicalActivitiesInput!
    $condition: ModelNonPathologicalActivitiesConditionInput
  ) {
    createNonPathologicalActivities(input: $input, condition: $condition) {
      id
      active
      frequency
      comment
      owner
    }
  }
`;
export const updateNonPathologicalActivities = /* GraphQL */ `
  mutation UpdateNonPathologicalActivities(
    $input: UpdateNonPathologicalActivitiesInput!
    $condition: ModelNonPathologicalActivitiesConditionInput
  ) {
    updateNonPathologicalActivities(input: $input, condition: $condition) {
      id
      active
      frequency
      comment
      owner
    }
  }
`;
export const deleteNonPathologicalActivities = /* GraphQL */ `
  mutation DeleteNonPathologicalActivities(
    $input: DeleteNonPathologicalActivitiesInput!
    $condition: ModelNonPathologicalActivitiesConditionInput
  ) {
    deleteNonPathologicalActivities(input: $input, condition: $condition) {
      id
      active
      frequency
      comment
      owner
    }
  }
`;
export const createPathologicalHistory = /* GraphQL */ `
  mutation CreatePathologicalHistory(
    $input: CreatePathologicalHistoryInput!
    $condition: ModelPathologicalHistoryConditionInput
  ) {
    createPathologicalHistory(input: $input, condition: $condition) {
      id
      surgicalInterventions {
        items {
          id
          name
          owner
        }
        nextToken
      }
      patientMedications {
        items {
          id
        }
        nextToken
      }
      patientAllergies {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const updatePathologicalHistory = /* GraphQL */ `
  mutation UpdatePathologicalHistory(
    $input: UpdatePathologicalHistoryInput!
    $condition: ModelPathologicalHistoryConditionInput
  ) {
    updatePathologicalHistory(input: $input, condition: $condition) {
      id
      surgicalInterventions {
        items {
          id
          name
          owner
        }
        nextToken
      }
      patientMedications {
        items {
          id
        }
        nextToken
      }
      patientAllergies {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const deletePathologicalHistory = /* GraphQL */ `
  mutation DeletePathologicalHistory(
    $input: DeletePathologicalHistoryInput!
    $condition: ModelPathologicalHistoryConditionInput
  ) {
    deletePathologicalHistory(input: $input, condition: $condition) {
      id
      surgicalInterventions {
        items {
          id
          name
          owner
        }
        nextToken
      }
      patientMedications {
        items {
          id
        }
        nextToken
      }
      patientAllergies {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const createFamilyHistory = /* GraphQL */ `
  mutation CreateFamilyHistory(
    $input: CreateFamilyHistoryInput!
    $condition: ModelFamilyHistoryConditionInput
  ) {
    createFamilyHistory(input: $input, condition: $condition) {
      id
      father {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      mother {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      brothers {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      grandfather {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      grandmother {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      other {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      owner
    }
  }
`;
export const updateFamilyHistory = /* GraphQL */ `
  mutation UpdateFamilyHistory(
    $input: UpdateFamilyHistoryInput!
    $condition: ModelFamilyHistoryConditionInput
  ) {
    updateFamilyHistory(input: $input, condition: $condition) {
      id
      father {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      mother {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      brothers {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      grandfather {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      grandmother {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      other {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      owner
    }
  }
`;
export const deleteFamilyHistory = /* GraphQL */ `
  mutation DeleteFamilyHistory(
    $input: DeleteFamilyHistoryInput!
    $condition: ModelFamilyHistoryConditionInput
  ) {
    deleteFamilyHistory(input: $input, condition: $condition) {
      id
      father {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      mother {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      brothers {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      grandfather {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      grandmother {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      other {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      owner
    }
  }
`;
export const createFamilyDetails = /* GraphQL */ `
  mutation CreateFamilyDetails(
    $input: CreateFamilyDetailsInput!
    $condition: ModelFamilyDetailsConditionInput
  ) {
    createFamilyDetails(input: $input, condition: $condition) {
      id
      alive
      relationship
      diseases {
        items {
          id
        }
        nextToken
      }
      comment
      owner
    }
  }
`;
export const updateFamilyDetails = /* GraphQL */ `
  mutation UpdateFamilyDetails(
    $input: UpdateFamilyDetailsInput!
    $condition: ModelFamilyDetailsConditionInput
  ) {
    updateFamilyDetails(input: $input, condition: $condition) {
      id
      alive
      relationship
      diseases {
        items {
          id
        }
        nextToken
      }
      comment
      owner
    }
  }
`;
export const deleteFamilyDetails = /* GraphQL */ `
  mutation DeleteFamilyDetails(
    $input: DeleteFamilyDetailsInput!
    $condition: ModelFamilyDetailsConditionInput
  ) {
    deleteFamilyDetails(input: $input, condition: $condition) {
      id
      alive
      relationship
      diseases {
        items {
          id
        }
        nextToken
      }
      comment
      owner
    }
  }
`;
export const createFamilyDetailsDiseases = /* GraphQL */ `
  mutation CreateFamilyDetailsDiseases(
    $input: CreateFamilyDetailsDiseasesInput!
    $condition: ModelFamilyDetailsDiseasesConditionInput
  ) {
    createFamilyDetailsDiseases(input: $input, condition: $condition) {
      id
      family {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      diseases {
        id
        name
        familyDetails {
          nextToken
        }
        owner
      }
    }
  }
`;
export const updateFamilyDetailsDiseases = /* GraphQL */ `
  mutation UpdateFamilyDetailsDiseases(
    $input: UpdateFamilyDetailsDiseasesInput!
    $condition: ModelFamilyDetailsDiseasesConditionInput
  ) {
    updateFamilyDetailsDiseases(input: $input, condition: $condition) {
      id
      family {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      diseases {
        id
        name
        familyDetails {
          nextToken
        }
        owner
      }
    }
  }
`;
export const deleteFamilyDetailsDiseases = /* GraphQL */ `
  mutation DeleteFamilyDetailsDiseases(
    $input: DeleteFamilyDetailsDiseasesInput!
    $condition: ModelFamilyDetailsDiseasesConditionInput
  ) {
    deleteFamilyDetailsDiseases(input: $input, condition: $condition) {
      id
      family {
        id
        alive
        relationship
        diseases {
          nextToken
        }
        comment
        owner
      }
      diseases {
        id
        name
        familyDetails {
          nextToken
        }
        owner
      }
    }
  }
`;
export const createDiseases = /* GraphQL */ `
  mutation CreateDiseases(
    $input: CreateDiseasesInput!
    $condition: ModelDiseasesConditionInput
  ) {
    createDiseases(input: $input, condition: $condition) {
      id
      name
      familyDetails {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const updateDiseases = /* GraphQL */ `
  mutation UpdateDiseases(
    $input: UpdateDiseasesInput!
    $condition: ModelDiseasesConditionInput
  ) {
    updateDiseases(input: $input, condition: $condition) {
      id
      name
      familyDetails {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const deleteDiseases = /* GraphQL */ `
  mutation DeleteDiseases(
    $input: DeleteDiseasesInput!
    $condition: ModelDiseasesConditionInput
  ) {
    deleteDiseases(input: $input, condition: $condition) {
      id
      name
      familyDetails {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const createGynecoObstetricHistory = /* GraphQL */ `
  mutation CreateGynecoObstetricHistory(
    $input: CreateGynecoObstetricHistoryInput!
    $condition: ModelGynecoObstetricHistoryConditionInput
  ) {
    createGynecoObstetricHistory(input: $input, condition: $condition) {
      id
      menarche
      sexual_development
      menstrual_rhythm
      sex_life
      deliveries
      abortions
      caesarean_sections
      contraceptive_method
      owner
    }
  }
`;
export const updateGynecoObstetricHistory = /* GraphQL */ `
  mutation UpdateGynecoObstetricHistory(
    $input: UpdateGynecoObstetricHistoryInput!
    $condition: ModelGynecoObstetricHistoryConditionInput
  ) {
    updateGynecoObstetricHistory(input: $input, condition: $condition) {
      id
      menarche
      sexual_development
      menstrual_rhythm
      sex_life
      deliveries
      abortions
      caesarean_sections
      contraceptive_method
      owner
    }
  }
`;
export const deleteGynecoObstetricHistory = /* GraphQL */ `
  mutation DeleteGynecoObstetricHistory(
    $input: DeleteGynecoObstetricHistoryInput!
    $condition: ModelGynecoObstetricHistoryConditionInput
  ) {
    deleteGynecoObstetricHistory(input: $input, condition: $condition) {
      id
      menarche
      sexual_development
      menstrual_rhythm
      sex_life
      deliveries
      abortions
      caesarean_sections
      contraceptive_method
      owner
    }
  }
`;
export const createAllergies = /* GraphQL */ `
  mutation CreateAllergies(
    $input: CreateAllergiesInput!
    $condition: ModelAllergiesConditionInput
  ) {
    createAllergies(input: $input, condition: $condition) {
      id
      name
      patients {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const updateAllergies = /* GraphQL */ `
  mutation UpdateAllergies(
    $input: UpdateAllergiesInput!
    $condition: ModelAllergiesConditionInput
  ) {
    updateAllergies(input: $input, condition: $condition) {
      id
      name
      patients {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const deleteAllergies = /* GraphQL */ `
  mutation DeleteAllergies(
    $input: DeleteAllergiesInput!
    $condition: ModelAllergiesConditionInput
  ) {
    deleteAllergies(input: $input, condition: $condition) {
      id
      name
      patients {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const createPatientAllergies = /* GraphQL */ `
  mutation CreatePatientAllergies(
    $input: CreatePatientAllergiesInput!
    $condition: ModelPatientAllergiesConditionInput
  ) {
    createPatientAllergies(input: $input, condition: $condition) {
      id
      pathologicalHistory {
        id
        surgicalInterventions {
          nextToken
        }
        patientMedications {
          nextToken
        }
        patientAllergies {
          nextToken
        }
        owner
      }
      allergies {
        id
        name
        patients {
          nextToken
        }
        owner
      }
    }
  }
`;
export const updatePatientAllergies = /* GraphQL */ `
  mutation UpdatePatientAllergies(
    $input: UpdatePatientAllergiesInput!
    $condition: ModelPatientAllergiesConditionInput
  ) {
    updatePatientAllergies(input: $input, condition: $condition) {
      id
      pathologicalHistory {
        id
        surgicalInterventions {
          nextToken
        }
        patientMedications {
          nextToken
        }
        patientAllergies {
          nextToken
        }
        owner
      }
      allergies {
        id
        name
        patients {
          nextToken
        }
        owner
      }
    }
  }
`;
export const deletePatientAllergies = /* GraphQL */ `
  mutation DeletePatientAllergies(
    $input: DeletePatientAllergiesInput!
    $condition: ModelPatientAllergiesConditionInput
  ) {
    deletePatientAllergies(input: $input, condition: $condition) {
      id
      pathologicalHistory {
        id
        surgicalInterventions {
          nextToken
        }
        patientMedications {
          nextToken
        }
        patientAllergies {
          nextToken
        }
        owner
      }
      allergies {
        id
        name
        patients {
          nextToken
        }
        owner
      }
    }
  }
`;
export const createPatientMedications = /* GraphQL */ `
  mutation CreatePatientMedications(
    $input: CreatePatientMedicationsInput!
    $condition: ModelPatientMedicationsConditionInput
  ) {
    createPatientMedications(input: $input, condition: $condition) {
      id
      pathologicalHistory {
        id
        surgicalInterventions {
          nextToken
        }
        patientMedications {
          nextToken
        }
        patientAllergies {
          nextToken
        }
        owner
      }
      medications {
        id
        name
        patients {
          nextToken
        }
        code
        drug_concentration
        chemical_composition
        mp {
          nextToken
        }
        owner
      }
    }
  }
`;
export const updatePatientMedications = /* GraphQL */ `
  mutation UpdatePatientMedications(
    $input: UpdatePatientMedicationsInput!
    $condition: ModelPatientMedicationsConditionInput
  ) {
    updatePatientMedications(input: $input, condition: $condition) {
      id
      pathologicalHistory {
        id
        surgicalInterventions {
          nextToken
        }
        patientMedications {
          nextToken
        }
        patientAllergies {
          nextToken
        }
        owner
      }
      medications {
        id
        name
        patients {
          nextToken
        }
        code
        drug_concentration
        chemical_composition
        mp {
          nextToken
        }
        owner
      }
    }
  }
`;
export const deletePatientMedications = /* GraphQL */ `
  mutation DeletePatientMedications(
    $input: DeletePatientMedicationsInput!
    $condition: ModelPatientMedicationsConditionInput
  ) {
    deletePatientMedications(input: $input, condition: $condition) {
      id
      pathologicalHistory {
        id
        surgicalInterventions {
          nextToken
        }
        patientMedications {
          nextToken
        }
        patientAllergies {
          nextToken
        }
        owner
      }
      medications {
        id
        name
        patients {
          nextToken
        }
        code
        drug_concentration
        chemical_composition
        mp {
          nextToken
        }
        owner
      }
    }
  }
`;
export const createMedicines = /* GraphQL */ `
  mutation CreateMedicines(
    $input: CreateMedicinesInput!
    $condition: ModelMedicinesConditionInput
  ) {
    createMedicines(input: $input, condition: $condition) {
      id
      name
      patients {
        items {
          id
        }
        nextToken
      }
      code
      drug_concentration
      chemical_composition
      mp {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const updateMedicines = /* GraphQL */ `
  mutation UpdateMedicines(
    $input: UpdateMedicinesInput!
    $condition: ModelMedicinesConditionInput
  ) {
    updateMedicines(input: $input, condition: $condition) {
      id
      name
      patients {
        items {
          id
        }
        nextToken
      }
      code
      drug_concentration
      chemical_composition
      mp {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const deleteMedicines = /* GraphQL */ `
  mutation DeleteMedicines(
    $input: DeleteMedicinesInput!
    $condition: ModelMedicinesConditionInput
  ) {
    deleteMedicines(input: $input, condition: $condition) {
      id
      name
      patients {
        items {
          id
        }
        nextToken
      }
      code
      drug_concentration
      chemical_composition
      mp {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const createPostConsultationsActivities = /* GraphQL */ `
  mutation CreatePostConsultationsActivities(
    $input: CreatePostConsultationsActivitiesInput!
    $condition: ModelPostConsultationsActivitiesConditionInput
  ) {
    createPostConsultationsActivities(input: $input, condition: $condition) {
      id
      medicalPrescriptions {
        items {
          id
          state
          date
        }
        nextToken
      }
      medicalAnalysis {
        items {
          id
          state
          date
        }
        nextToken
      }
      surgicalIntervention {
        items {
          id
          state
          date
        }
        nextToken
      }
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const updatePostConsultationsActivities = /* GraphQL */ `
  mutation UpdatePostConsultationsActivities(
    $input: UpdatePostConsultationsActivitiesInput!
    $condition: ModelPostConsultationsActivitiesConditionInput
  ) {
    updatePostConsultationsActivities(input: $input, condition: $condition) {
      id
      medicalPrescriptions {
        items {
          id
          state
          date
        }
        nextToken
      }
      medicalAnalysis {
        items {
          id
          state
          date
        }
        nextToken
      }
      surgicalIntervention {
        items {
          id
          state
          date
        }
        nextToken
      }
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const deletePostConsultationsActivities = /* GraphQL */ `
  mutation DeletePostConsultationsActivities(
    $input: DeletePostConsultationsActivitiesInput!
    $condition: ModelPostConsultationsActivitiesConditionInput
  ) {
    deletePostConsultationsActivities(input: $input, condition: $condition) {
      id
      medicalPrescriptions {
        items {
          id
          state
          date
        }
        nextToken
      }
      medicalAnalysis {
        items {
          id
          state
          date
        }
        nextToken
      }
      surgicalIntervention {
        items {
          id
          state
          date
        }
        nextToken
      }
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const createMedicalPrescriptions = /* GraphQL */ `
  mutation CreateMedicalPrescriptions(
    $input: CreateMedicalPrescriptionsInput!
    $condition: ModelMedicalPrescriptionsConditionInput
  ) {
    createMedicalPrescriptions(input: $input, condition: $condition) {
      id
      date
      frequency
      duration
      medications {
        items {
          id
        }
        nextToken
      }
      pca {
        id
        state
        date
        pcActivities {
          id
          doctor
          secretary
          patient
          owner
        }
        medicalPrescriptions {
          id
          date
          frequency
          duration
          doctor
          secretary
          patient
          owner
        }
      }
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const updateMedicalPrescriptions = /* GraphQL */ `
  mutation UpdateMedicalPrescriptions(
    $input: UpdateMedicalPrescriptionsInput!
    $condition: ModelMedicalPrescriptionsConditionInput
  ) {
    updateMedicalPrescriptions(input: $input, condition: $condition) {
      id
      date
      frequency
      duration
      medications {
        items {
          id
        }
        nextToken
      }
      pca {
        id
        state
        date
        pcActivities {
          id
          doctor
          secretary
          patient
          owner
        }
        medicalPrescriptions {
          id
          date
          frequency
          duration
          doctor
          secretary
          patient
          owner
        }
      }
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const deleteMedicalPrescriptions = /* GraphQL */ `
  mutation DeleteMedicalPrescriptions(
    $input: DeleteMedicalPrescriptionsInput!
    $condition: ModelMedicalPrescriptionsConditionInput
  ) {
    deleteMedicalPrescriptions(input: $input, condition: $condition) {
      id
      date
      frequency
      duration
      medications {
        items {
          id
        }
        nextToken
      }
      pca {
        id
        state
        date
        pcActivities {
          id
          doctor
          secretary
          patient
          owner
        }
        medicalPrescriptions {
          id
          date
          frequency
          duration
          doctor
          secretary
          patient
          owner
        }
      }
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const createPostConsultActMedicalPres = /* GraphQL */ `
  mutation CreatePostConsultActMedicalPres(
    $input: CreatePostConsultActMedicalPresInput!
    $condition: ModelPostConsultActMedicalPresConditionInput
  ) {
    createPostConsultActMedicalPres(input: $input, condition: $condition) {
      id
      state
      date
      pcActivities {
        id
        medicalPrescriptions {
          nextToken
        }
        medicalAnalysis {
          nextToken
        }
        surgicalIntervention {
          nextToken
        }
        doctor
        secretary
        patient
        owner
      }
      medicalPrescriptions {
        id
        date
        frequency
        duration
        medications {
          nextToken
        }
        pca {
          id
          state
          date
        }
        doctor
        secretary
        patient
        owner
      }
    }
  }
`;
export const updatePostConsultActMedicalPres = /* GraphQL */ `
  mutation UpdatePostConsultActMedicalPres(
    $input: UpdatePostConsultActMedicalPresInput!
    $condition: ModelPostConsultActMedicalPresConditionInput
  ) {
    updatePostConsultActMedicalPres(input: $input, condition: $condition) {
      id
      state
      date
      pcActivities {
        id
        medicalPrescriptions {
          nextToken
        }
        medicalAnalysis {
          nextToken
        }
        surgicalIntervention {
          nextToken
        }
        doctor
        secretary
        patient
        owner
      }
      medicalPrescriptions {
        id
        date
        frequency
        duration
        medications {
          nextToken
        }
        pca {
          id
          state
          date
        }
        doctor
        secretary
        patient
        owner
      }
    }
  }
`;
export const deletePostConsultActMedicalPres = /* GraphQL */ `
  mutation DeletePostConsultActMedicalPres(
    $input: DeletePostConsultActMedicalPresInput!
    $condition: ModelPostConsultActMedicalPresConditionInput
  ) {
    deletePostConsultActMedicalPres(input: $input, condition: $condition) {
      id
      state
      date
      pcActivities {
        id
        medicalPrescriptions {
          nextToken
        }
        medicalAnalysis {
          nextToken
        }
        surgicalIntervention {
          nextToken
        }
        doctor
        secretary
        patient
        owner
      }
      medicalPrescriptions {
        id
        date
        frequency
        duration
        medications {
          nextToken
        }
        pca {
          id
          state
          date
        }
        doctor
        secretary
        patient
        owner
      }
    }
  }
`;
export const createMedicalPrescriptionsMedications = /* GraphQL */ `
  mutation CreateMedicalPrescriptionsMedications(
    $input: CreateMedicalPrescriptionsMedicationsInput!
    $condition: ModelMedicalPrescriptionsMedicationsConditionInput
  ) {
    createMedicalPrescriptionsMedications(
      input: $input
      condition: $condition
    ) {
      id
      medicalPrescriptions {
        id
        date
        frequency
        duration
        medications {
          nextToken
        }
        pca {
          id
          state
          date
        }
        doctor
        secretary
        patient
        owner
      }
      medications {
        id
        name
        patients {
          nextToken
        }
        code
        drug_concentration
        chemical_composition
        mp {
          nextToken
        }
        owner
      }
    }
  }
`;
export const updateMedicalPrescriptionsMedications = /* GraphQL */ `
  mutation UpdateMedicalPrescriptionsMedications(
    $input: UpdateMedicalPrescriptionsMedicationsInput!
    $condition: ModelMedicalPrescriptionsMedicationsConditionInput
  ) {
    updateMedicalPrescriptionsMedications(
      input: $input
      condition: $condition
    ) {
      id
      medicalPrescriptions {
        id
        date
        frequency
        duration
        medications {
          nextToken
        }
        pca {
          id
          state
          date
        }
        doctor
        secretary
        patient
        owner
      }
      medications {
        id
        name
        patients {
          nextToken
        }
        code
        drug_concentration
        chemical_composition
        mp {
          nextToken
        }
        owner
      }
    }
  }
`;
export const deleteMedicalPrescriptionsMedications = /* GraphQL */ `
  mutation DeleteMedicalPrescriptionsMedications(
    $input: DeleteMedicalPrescriptionsMedicationsInput!
    $condition: ModelMedicalPrescriptionsMedicationsConditionInput
  ) {
    deleteMedicalPrescriptionsMedications(
      input: $input
      condition: $condition
    ) {
      id
      medicalPrescriptions {
        id
        date
        frequency
        duration
        medications {
          nextToken
        }
        pca {
          id
          state
          date
        }
        doctor
        secretary
        patient
        owner
      }
      medications {
        id
        name
        patients {
          nextToken
        }
        code
        drug_concentration
        chemical_composition
        mp {
          nextToken
        }
        owner
      }
    }
  }
`;
export const createPostConsultActMedAnalysis = /* GraphQL */ `
  mutation CreatePostConsultActMedAnalysis(
    $input: CreatePostConsultActMedAnalysisInput!
    $condition: ModelPostConsultActMedAnalysisConditionInput
  ) {
    createPostConsultActMedAnalysis(input: $input, condition: $condition) {
      id
      state
      date
      pcActivities {
        id
        medicalPrescriptions {
          nextToken
        }
        medicalAnalysis {
          nextToken
        }
        surgicalIntervention {
          nextToken
        }
        doctor
        secretary
        patient
        owner
      }
      medicalAnalysis {
        id
        name
        code
        medicalAnalysis {
          nextToken
        }
        owner
      }
    }
  }
`;
export const updatePostConsultActMedAnalysis = /* GraphQL */ `
  mutation UpdatePostConsultActMedAnalysis(
    $input: UpdatePostConsultActMedAnalysisInput!
    $condition: ModelPostConsultActMedAnalysisConditionInput
  ) {
    updatePostConsultActMedAnalysis(input: $input, condition: $condition) {
      id
      state
      date
      pcActivities {
        id
        medicalPrescriptions {
          nextToken
        }
        medicalAnalysis {
          nextToken
        }
        surgicalIntervention {
          nextToken
        }
        doctor
        secretary
        patient
        owner
      }
      medicalAnalysis {
        id
        name
        code
        medicalAnalysis {
          nextToken
        }
        owner
      }
    }
  }
`;
export const deletePostConsultActMedAnalysis = /* GraphQL */ `
  mutation DeletePostConsultActMedAnalysis(
    $input: DeletePostConsultActMedAnalysisInput!
    $condition: ModelPostConsultActMedAnalysisConditionInput
  ) {
    deletePostConsultActMedAnalysis(input: $input, condition: $condition) {
      id
      state
      date
      pcActivities {
        id
        medicalPrescriptions {
          nextToken
        }
        medicalAnalysis {
          nextToken
        }
        surgicalIntervention {
          nextToken
        }
        doctor
        secretary
        patient
        owner
      }
      medicalAnalysis {
        id
        name
        code
        medicalAnalysis {
          nextToken
        }
        owner
      }
    }
  }
`;
export const createMedicalAnalysis = /* GraphQL */ `
  mutation CreateMedicalAnalysis(
    $input: CreateMedicalAnalysisInput!
    $condition: ModelMedicalAnalysisConditionInput
  ) {
    createMedicalAnalysis(input: $input, condition: $condition) {
      id
      name
      code
      medicalAnalysis {
        items {
          id
          state
          date
        }
        nextToken
      }
      owner
    }
  }
`;
export const updateMedicalAnalysis = /* GraphQL */ `
  mutation UpdateMedicalAnalysis(
    $input: UpdateMedicalAnalysisInput!
    $condition: ModelMedicalAnalysisConditionInput
  ) {
    updateMedicalAnalysis(input: $input, condition: $condition) {
      id
      name
      code
      medicalAnalysis {
        items {
          id
          state
          date
        }
        nextToken
      }
      owner
    }
  }
`;
export const deleteMedicalAnalysis = /* GraphQL */ `
  mutation DeleteMedicalAnalysis(
    $input: DeleteMedicalAnalysisInput!
    $condition: ModelMedicalAnalysisConditionInput
  ) {
    deleteMedicalAnalysis(input: $input, condition: $condition) {
      id
      name
      code
      medicalAnalysis {
        items {
          id
          state
          date
        }
        nextToken
      }
      owner
    }
  }
`;
export const createPostConsultActSurgicalInt = /* GraphQL */ `
  mutation CreatePostConsultActSurgicalInt(
    $input: CreatePostConsultActSurgicalIntInput!
    $condition: ModelPostConsultActSurgicalIntConditionInput
  ) {
    createPostConsultActSurgicalInt(input: $input, condition: $condition) {
      id
      state
      date
      pcActivities {
        id
        medicalPrescriptions {
          nextToken
        }
        medicalAnalysis {
          nextToken
        }
        surgicalIntervention {
          nextToken
        }
        doctor
        secretary
        patient
        owner
      }
      surgicalIntervention {
        id
        name
        surgicalIntervention {
          nextToken
        }
        owner
      }
    }
  }
`;
export const updatePostConsultActSurgicalInt = /* GraphQL */ `
  mutation UpdatePostConsultActSurgicalInt(
    $input: UpdatePostConsultActSurgicalIntInput!
    $condition: ModelPostConsultActSurgicalIntConditionInput
  ) {
    updatePostConsultActSurgicalInt(input: $input, condition: $condition) {
      id
      state
      date
      pcActivities {
        id
        medicalPrescriptions {
          nextToken
        }
        medicalAnalysis {
          nextToken
        }
        surgicalIntervention {
          nextToken
        }
        doctor
        secretary
        patient
        owner
      }
      surgicalIntervention {
        id
        name
        surgicalIntervention {
          nextToken
        }
        owner
      }
    }
  }
`;
export const deletePostConsultActSurgicalInt = /* GraphQL */ `
  mutation DeletePostConsultActSurgicalInt(
    $input: DeletePostConsultActSurgicalIntInput!
    $condition: ModelPostConsultActSurgicalIntConditionInput
  ) {
    deletePostConsultActSurgicalInt(input: $input, condition: $condition) {
      id
      state
      date
      pcActivities {
        id
        medicalPrescriptions {
          nextToken
        }
        medicalAnalysis {
          nextToken
        }
        surgicalIntervention {
          nextToken
        }
        doctor
        secretary
        patient
        owner
      }
      surgicalIntervention {
        id
        name
        surgicalIntervention {
          nextToken
        }
        owner
      }
    }
  }
`;
export const createSurgicalIntervention = /* GraphQL */ `
  mutation CreateSurgicalIntervention(
    $input: CreateSurgicalInterventionInput!
    $condition: ModelSurgicalInterventionConditionInput
  ) {
    createSurgicalIntervention(input: $input, condition: $condition) {
      id
      name
      surgicalIntervention {
        items {
          id
          state
          date
        }
        nextToken
      }
      owner
    }
  }
`;
export const updateSurgicalIntervention = /* GraphQL */ `
  mutation UpdateSurgicalIntervention(
    $input: UpdateSurgicalInterventionInput!
    $condition: ModelSurgicalInterventionConditionInput
  ) {
    updateSurgicalIntervention(input: $input, condition: $condition) {
      id
      name
      surgicalIntervention {
        items {
          id
          state
          date
        }
        nextToken
      }
      owner
    }
  }
`;
export const deleteSurgicalIntervention = /* GraphQL */ `
  mutation DeleteSurgicalIntervention(
    $input: DeleteSurgicalInterventionInput!
    $condition: ModelSurgicalInterventionConditionInput
  ) {
    deleteSurgicalIntervention(input: $input, condition: $condition) {
      id
      name
      surgicalIntervention {
        items {
          id
          state
          date
        }
        nextToken
      }
      owner
    }
  }
`;
export const createPhysicalExploration = /* GraphQL */ `
  mutation CreatePhysicalExploration(
    $input: CreatePhysicalExplorationInput!
    $condition: ModelPhysicalExplorationConditionInput
  ) {
    createPhysicalExploration(input: $input, condition: $condition) {
      id
      general_exploration
      vitalsigns {
        id
        blood_pressure
        Breathing
        Pulse
        Temperature
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
      owner
    }
  }
`;
export const updatePhysicalExploration = /* GraphQL */ `
  mutation UpdatePhysicalExploration(
    $input: UpdatePhysicalExplorationInput!
    $condition: ModelPhysicalExplorationConditionInput
  ) {
    updatePhysicalExploration(input: $input, condition: $condition) {
      id
      general_exploration
      vitalsigns {
        id
        blood_pressure
        Breathing
        Pulse
        Temperature
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
      owner
    }
  }
`;
export const deletePhysicalExploration = /* GraphQL */ `
  mutation DeletePhysicalExploration(
    $input: DeletePhysicalExplorationInput!
    $condition: ModelPhysicalExplorationConditionInput
  ) {
    deletePhysicalExploration(input: $input, condition: $condition) {
      id
      general_exploration
      vitalsigns {
        id
        blood_pressure
        Breathing
        Pulse
        Temperature
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
      owner
    }
  }
`;
export const createVitalSigns = /* GraphQL */ `
  mutation CreateVitalSigns(
    $input: CreateVitalSignsInput!
    $condition: ModelVitalSignsConditionInput
  ) {
    createVitalSigns(input: $input, condition: $condition) {
      id
      blood_pressure
      Breathing
      Pulse
      Temperature
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const updateVitalSigns = /* GraphQL */ `
  mutation UpdateVitalSigns(
    $input: UpdateVitalSignsInput!
    $condition: ModelVitalSignsConditionInput
  ) {
    updateVitalSigns(input: $input, condition: $condition) {
      id
      blood_pressure
      Breathing
      Pulse
      Temperature
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const deleteVitalSigns = /* GraphQL */ `
  mutation DeleteVitalSigns(
    $input: DeleteVitalSignsInput!
    $condition: ModelVitalSignsConditionInput
  ) {
    deleteVitalSigns(input: $input, condition: $condition) {
      id
      blood_pressure
      Breathing
      Pulse
      Temperature
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const createRegionalExploration = /* GraphQL */ `
  mutation CreateRegionalExploration(
    $input: CreateRegionalExplorationInput!
    $condition: ModelRegionalExplorationConditionInput
  ) {
    createRegionalExploration(input: $input, condition: $condition) {
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
  }
`;
export const updateRegionalExploration = /* GraphQL */ `
  mutation UpdateRegionalExploration(
    $input: UpdateRegionalExplorationInput!
    $condition: ModelRegionalExplorationConditionInput
  ) {
    updateRegionalExploration(input: $input, condition: $condition) {
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
  }
`;
export const deleteRegionalExploration = /* GraphQL */ `
  mutation DeleteRegionalExploration(
    $input: DeleteRegionalExplorationInput!
    $condition: ModelRegionalExplorationConditionInput
  ) {
    deleteRegionalExploration(input: $input, condition: $condition) {
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
  }
`;
