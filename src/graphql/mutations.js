/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConsultingRoom = `mutation CreateConsultingRoom($input: CreateConsultingRoomInput!) {
  createConsultingRoom(input: $input) {
    id
    modules {
      items {
        id
        name
        image
        description
      }
      nextToken
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
      }
      image
    }
    stripe {
      id
      source_token
      plan_id
      plan_name
      customer_id
      subscription_id
    }
    secretary
    location {
      id
      name
    }
  }
}
`;
export const updateConsultingRoom = `mutation UpdateConsultingRoom($input: UpdateConsultingRoomInput!) {
  updateConsultingRoom(input: $input) {
    id
    modules {
      items {
        id
        name
        image
        description
      }
      nextToken
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
      }
      image
    }
    stripe {
      id
      source_token
      plan_id
      plan_name
      customer_id
      subscription_id
    }
    secretary
    location {
      id
      name
    }
  }
}
`;
export const deleteConsultingRoom = `mutation DeleteConsultingRoom($input: DeleteConsultingRoomInput!) {
  deleteConsultingRoom(input: $input) {
    id
    modules {
      items {
        id
        name
        image
        description
      }
      nextToken
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
      }
      image
    }
    stripe {
      id
      source_token
      plan_id
      plan_name
      customer_id
      subscription_id
    }
    secretary
    location {
      id
      name
    }
  }
}
`;
export const createLocation = `mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
    id
    name
  }
}
`;
export const updateLocation = `mutation UpdateLocation($input: UpdateLocationInput!) {
  updateLocation(input: $input) {
    id
    name
  }
}
`;
export const deleteLocation = `mutation DeleteLocation($input: DeleteLocationInput!) {
  deleteLocation(input: $input) {
    id
    name
  }
}
`;
export const createStripe = `mutation CreateStripe($input: CreateStripeInput!) {
  createStripe(input: $input) {
    id
    source_token
    plan_id
    plan_name
    customer_id
    subscription_id
  }
}
`;
export const updateStripe = `mutation UpdateStripe($input: UpdateStripeInput!) {
  updateStripe(input: $input) {
    id
    source_token
    plan_id
    plan_name
    customer_id
    subscription_id
  }
}
`;
export const deleteStripe = `mutation DeleteStripe($input: DeleteStripeInput!) {
  deleteStripe(input: $input) {
    id
    source_token
    plan_id
    plan_name
    customer_id
    subscription_id
  }
}
`;
export const createDoctor = `mutation CreateDoctor($input: CreateDoctorInput!) {
  createDoctor(input: $input) {
    id
    name
    username
    email
    speciality
    sex
    consultingroom {
      id
      modules {
        nextToken
      }
      doctor {
        id
        name
        username
        email
        speciality
        sex
        image
      }
      stripe {
        id
        source_token
        plan_id
        plan_name
        customer_id
        subscription_id
      }
      secretary
      location {
        id
        name
      }
    }
    image
  }
}
`;
export const updateDoctor = `mutation UpdateDoctor($input: UpdateDoctorInput!) {
  updateDoctor(input: $input) {
    id
    name
    username
    email
    speciality
    sex
    consultingroom {
      id
      modules {
        nextToken
      }
      doctor {
        id
        name
        username
        email
        speciality
        sex
        image
      }
      stripe {
        id
        source_token
        plan_id
        plan_name
        customer_id
        subscription_id
      }
      secretary
      location {
        id
        name
      }
    }
    image
  }
}
`;
export const deleteDoctor = `mutation DeleteDoctor($input: DeleteDoctorInput!) {
  deleteDoctor(input: $input) {
    id
    name
    username
    email
    speciality
    sex
    consultingroom {
      id
      modules {
        nextToken
      }
      doctor {
        id
        name
        username
        email
        speciality
        sex
        image
      }
      stripe {
        id
        source_token
        plan_id
        plan_name
        customer_id
        subscription_id
      }
      secretary
      location {
        id
        name
      }
    }
    image
  }
}
`;
export const createRejection = `mutation CreateRejection($input: CreateRejectionInput!) {
  createRejection(input: $input) {
    id
    description
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const updateRejection = `mutation UpdateRejection($input: UpdateRejectionInput!) {
  updateRejection(input: $input) {
    id
    description
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const deleteRejection = `mutation DeleteRejection($input: DeleteRejectionInput!) {
  deleteRejection(input: $input) {
    id
    description
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const createCancelation = `mutation CreateCancelation($input: CreateCancelationInput!) {
  createCancelation(input: $input) {
    id
    description
  }
}
`;
export const updateCancelation = `mutation UpdateCancelation($input: UpdateCancelationInput!) {
  updateCancelation(input: $input) {
    id
    description
  }
}
`;
export const deleteCancelation = `mutation DeleteCancelation($input: DeleteCancelationInput!) {
  deleteCancelation(input: $input) {
    id
    description
  }
}
`;
export const createNotification = `mutation CreateNotification($input: CreateNotificationInput!) {
  createNotification(input: $input) {
    id
    state
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const updateNotification = `mutation UpdateNotification($input: UpdateNotificationInput!) {
  updateNotification(input: $input) {
    id
    state
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const deleteNotification = `mutation DeleteNotification($input: DeleteNotificationInput!) {
  deleteNotification(input: $input) {
    id
    state
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const createConfirmation = `mutation CreateConfirmation($input: CreateConfirmationInput!) {
  createConfirmation(input: $input) {
    id
  }
}
`;
export const updateConfirmation = `mutation UpdateConfirmation($input: UpdateConfirmationInput!) {
  updateConfirmation(input: $input) {
    id
  }
}
`;
export const deleteConfirmation = `mutation DeleteConfirmation($input: DeleteConfirmationInput!) {
  deleteConfirmation(input: $input) {
    id
  }
}
`;
export const createModule = `mutation CreateModule($input: CreateModuleInput!) {
  createModule(input: $input) {
    id
    name
    fields {
      items {
        id
        name
      }
      nextToken
    }
    image
    description
  }
}
`;
export const updateModule = `mutation UpdateModule($input: UpdateModuleInput!) {
  updateModule(input: $input) {
    id
    name
    fields {
      items {
        id
        name
      }
      nextToken
    }
    image
    description
  }
}
`;
export const deleteModule = `mutation DeleteModule($input: DeleteModuleInput!) {
  deleteModule(input: $input) {
    id
    name
    fields {
      items {
        id
        name
      }
      nextToken
    }
    image
    description
  }
}
`;
export const createDoctorCustomModuleProps = `mutation CreateDoctorCustomModuleProps(
  $input: CreateDoctorCustomModulePropsInput!
) {
  createDoctorCustomModuleProps(input: $input) {
    id
    active
    module {
      id
      name
      fields {
        nextToken
      }
      image
      description
    }
  }
}
`;
export const updateDoctorCustomModuleProps = `mutation UpdateDoctorCustomModuleProps(
  $input: UpdateDoctorCustomModulePropsInput!
) {
  updateDoctorCustomModuleProps(input: $input) {
    id
    active
    module {
      id
      name
      fields {
        nextToken
      }
      image
      description
    }
  }
}
`;
export const deleteDoctorCustomModuleProps = `mutation DeleteDoctorCustomModuleProps(
  $input: DeleteDoctorCustomModulePropsInput!
) {
  deleteDoctorCustomModuleProps(input: $input) {
    id
    active
    module {
      id
      name
      fields {
        nextToken
      }
      image
      description
    }
  }
}
`;
export const createField = `mutation CreateField($input: CreateFieldInput!) {
  createField(input: $input) {
    id
    name
  }
}
`;
export const updateField = `mutation UpdateField($input: UpdateFieldInput!) {
  updateField(input: $input) {
    id
    name
  }
}
`;
export const deleteField = `mutation DeleteField($input: DeleteFieldInput!) {
  deleteField(input: $input) {
    id
    name
  }
}
`;
export const createDoctorCustomFieldProps = `mutation CreateDoctorCustomFieldProps(
  $input: CreateDoctorCustomFieldPropsInput!
) {
  createDoctorCustomFieldProps(input: $input) {
    id
    name
    required
    visible
    field {
      id
      name
    }
  }
}
`;
export const updateDoctorCustomFieldProps = `mutation UpdateDoctorCustomFieldProps(
  $input: UpdateDoctorCustomFieldPropsInput!
) {
  updateDoctorCustomFieldProps(input: $input) {
    id
    name
    required
    visible
    field {
      id
      name
    }
  }
}
`;
export const deleteDoctorCustomFieldProps = `mutation DeleteDoctorCustomFieldProps(
  $input: DeleteDoctorCustomFieldPropsInput!
) {
  deleteDoctorCustomFieldProps(input: $input) {
    id
    name
    required
    visible
    field {
      id
      name
    }
  }
}
`;
export const createMedicalAppointment = `mutation CreateMedicalAppointment($input: CreateMedicalAppointmentInput!) {
  createMedicalAppointment(input: $input) {
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
      consultingroom {
        id
        secretary
      }
      image
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
      }
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
    read_doctor
    read_client
    createdAt
  }
}
`;
export const updateMedicalAppointment = `mutation UpdateMedicalAppointment($input: UpdateMedicalAppointmentInput!) {
  updateMedicalAppointment(input: $input) {
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
      consultingroom {
        id
        secretary
      }
      image
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
      }
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
    read_doctor
    read_client
    createdAt
  }
}
`;
export const deleteMedicalAppointment = `mutation DeleteMedicalAppointment($input: DeleteMedicalAppointmentInput!) {
  deleteMedicalAppointment(input: $input) {
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
      consultingroom {
        id
        secretary
      }
      image
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
      }
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
    read_doctor
    read_client
    createdAt
  }
}
`;
export const createMedicalHistory = `mutation CreateMedicalHistory($input: CreateMedicalHistoryInput!) {
  createMedicalHistory(input: $input) {
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
      }
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
      }
      doctor
      secretary
      patient
    }
    postConsultationsActivities {
      id
      medicalPrescriptions {
        nextToken
      }
      medicalAnalysis {
        nextToken
      }
      doctor
      secretary
      patient
    }
    doctor
    secretary
    patientname
  }
}
`;
export const updateMedicalHistory = `mutation UpdateMedicalHistory($input: UpdateMedicalHistoryInput!) {
  updateMedicalHistory(input: $input) {
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
      }
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
      }
      doctor
      secretary
      patient
    }
    postConsultationsActivities {
      id
      medicalPrescriptions {
        nextToken
      }
      medicalAnalysis {
        nextToken
      }
      doctor
      secretary
      patient
    }
    doctor
    secretary
    patientname
  }
}
`;
export const deleteMedicalHistory = `mutation DeleteMedicalHistory($input: DeleteMedicalHistoryInput!) {
  deleteMedicalHistory(input: $input) {
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
      }
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
      }
      doctor
      secretary
      patient
    }
    postConsultationsActivities {
      id
      medicalPrescriptions {
        nextToken
      }
      medicalAnalysis {
        nextToken
      }
      doctor
      secretary
      patient
    }
    doctor
    secretary
    patientname
  }
}
`;
export const createPatient = `mutation CreatePatient($input: CreatePatientInput!) {
  createPatient(input: $input) {
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
      }
      pathologicalHistory {
        id
      }
      familyHistory {
        id
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
      }
    }
  }
}
`;
export const updatePatient = `mutation UpdatePatient($input: UpdatePatientInput!) {
  updatePatient(input: $input) {
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
      }
      pathologicalHistory {
        id
      }
      familyHistory {
        id
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
      }
    }
  }
}
`;
export const deletePatient = `mutation DeletePatient($input: DeletePatientInput!) {
  deletePatient(input: $input) {
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
      }
      pathologicalHistory {
        id
      }
      familyHistory {
        id
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
      }
    }
  }
}
`;
export const createPatientHistory = `mutation CreatePatientHistory($input: CreatePatientHistoryInput!) {
  createPatientHistory(input: $input) {
    id
    nonPathologicalHistory {
      id
      alcohol {
        id
        active
        frequency
        comment
      }
      smoking {
        id
        active
        frequency
        comment
      }
      drugs {
        id
        active
        frequency
        comment
      }
      immunizations {
        id
        active
        frequency
        comment
      }
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
    }
    familyHistory {
      id
      father {
        id
        alive
        relationship
        comment
      }
      mother {
        id
        alive
        relationship
        comment
      }
      brothers {
        id
        alive
        relationship
        comment
      }
      grandfather {
        id
        alive
        relationship
        comment
      }
      grandmother {
        id
        alive
        relationship
        comment
      }
      other {
        id
        alive
        relationship
        comment
      }
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
    }
  }
}
`;
export const updatePatientHistory = `mutation UpdatePatientHistory($input: UpdatePatientHistoryInput!) {
  updatePatientHistory(input: $input) {
    id
    nonPathologicalHistory {
      id
      alcohol {
        id
        active
        frequency
        comment
      }
      smoking {
        id
        active
        frequency
        comment
      }
      drugs {
        id
        active
        frequency
        comment
      }
      immunizations {
        id
        active
        frequency
        comment
      }
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
    }
    familyHistory {
      id
      father {
        id
        alive
        relationship
        comment
      }
      mother {
        id
        alive
        relationship
        comment
      }
      brothers {
        id
        alive
        relationship
        comment
      }
      grandfather {
        id
        alive
        relationship
        comment
      }
      grandmother {
        id
        alive
        relationship
        comment
      }
      other {
        id
        alive
        relationship
        comment
      }
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
    }
  }
}
`;
export const deletePatientHistory = `mutation DeletePatientHistory($input: DeletePatientHistoryInput!) {
  deletePatientHistory(input: $input) {
    id
    nonPathologicalHistory {
      id
      alcohol {
        id
        active
        frequency
        comment
      }
      smoking {
        id
        active
        frequency
        comment
      }
      drugs {
        id
        active
        frequency
        comment
      }
      immunizations {
        id
        active
        frequency
        comment
      }
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
    }
    familyHistory {
      id
      father {
        id
        alive
        relationship
        comment
      }
      mother {
        id
        alive
        relationship
        comment
      }
      brothers {
        id
        alive
        relationship
        comment
      }
      grandfather {
        id
        alive
        relationship
        comment
      }
      grandmother {
        id
        alive
        relationship
        comment
      }
      other {
        id
        alive
        relationship
        comment
      }
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
    }
  }
}
`;
export const createNonPathologicalHistory = `mutation CreateNonPathologicalHistory(
  $input: CreateNonPathologicalHistoryInput!
) {
  createNonPathologicalHistory(input: $input) {
    id
    alcohol {
      id
      active
      frequency
      comment
    }
    smoking {
      id
      active
      frequency
      comment
    }
    drugs {
      id
      active
      frequency
      comment
    }
    immunizations {
      id
      active
      frequency
      comment
    }
  }
}
`;
export const updateNonPathologicalHistory = `mutation UpdateNonPathologicalHistory(
  $input: UpdateNonPathologicalHistoryInput!
) {
  updateNonPathologicalHistory(input: $input) {
    id
    alcohol {
      id
      active
      frequency
      comment
    }
    smoking {
      id
      active
      frequency
      comment
    }
    drugs {
      id
      active
      frequency
      comment
    }
    immunizations {
      id
      active
      frequency
      comment
    }
  }
}
`;
export const deleteNonPathologicalHistory = `mutation DeleteNonPathologicalHistory(
  $input: DeleteNonPathologicalHistoryInput!
) {
  deleteNonPathologicalHistory(input: $input) {
    id
    alcohol {
      id
      active
      frequency
      comment
    }
    smoking {
      id
      active
      frequency
      comment
    }
    drugs {
      id
      active
      frequency
      comment
    }
    immunizations {
      id
      active
      frequency
      comment
    }
  }
}
`;
export const createNonPathologicalActivities = `mutation CreateNonPathologicalActivities(
  $input: CreateNonPathologicalActivitiesInput!
) {
  createNonPathologicalActivities(input: $input) {
    id
    active
    frequency
    comment
  }
}
`;
export const updateNonPathologicalActivities = `mutation UpdateNonPathologicalActivities(
  $input: UpdateNonPathologicalActivitiesInput!
) {
  updateNonPathologicalActivities(input: $input) {
    id
    active
    frequency
    comment
  }
}
`;
export const deleteNonPathologicalActivities = `mutation DeleteNonPathologicalActivities(
  $input: DeleteNonPathologicalActivitiesInput!
) {
  deleteNonPathologicalActivities(input: $input) {
    id
    active
    frequency
    comment
  }
}
`;
export const createPathologicalHistory = `mutation CreatePathologicalHistory($input: CreatePathologicalHistoryInput!) {
  createPathologicalHistory(input: $input) {
    id
    surgicalInterventions {
      items {
        id
        name
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
  }
}
`;
export const updatePathologicalHistory = `mutation UpdatePathologicalHistory($input: UpdatePathologicalHistoryInput!) {
  updatePathologicalHistory(input: $input) {
    id
    surgicalInterventions {
      items {
        id
        name
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
  }
}
`;
export const deletePathologicalHistory = `mutation DeletePathologicalHistory($input: DeletePathologicalHistoryInput!) {
  deletePathologicalHistory(input: $input) {
    id
    surgicalInterventions {
      items {
        id
        name
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
  }
}
`;
export const createFamilyHistory = `mutation CreateFamilyHistory($input: CreateFamilyHistoryInput!) {
  createFamilyHistory(input: $input) {
    id
    father {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
    mother {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
    brothers {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
    grandfather {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
    grandmother {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
    other {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
  }
}
`;
export const updateFamilyHistory = `mutation UpdateFamilyHistory($input: UpdateFamilyHistoryInput!) {
  updateFamilyHistory(input: $input) {
    id
    father {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
    mother {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
    brothers {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
    grandfather {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
    grandmother {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
    other {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
  }
}
`;
export const deleteFamilyHistory = `mutation DeleteFamilyHistory($input: DeleteFamilyHistoryInput!) {
  deleteFamilyHistory(input: $input) {
    id
    father {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
    mother {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
    brothers {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
    grandfather {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
    grandmother {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
    other {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
  }
}
`;
export const createFamilyDetails = `mutation CreateFamilyDetails($input: CreateFamilyDetailsInput!) {
  createFamilyDetails(input: $input) {
    id
    alive
    relationship
    diseases {
      id
      name
    }
    comment
  }
}
`;
export const updateFamilyDetails = `mutation UpdateFamilyDetails($input: UpdateFamilyDetailsInput!) {
  updateFamilyDetails(input: $input) {
    id
    alive
    relationship
    diseases {
      id
      name
    }
    comment
  }
}
`;
export const deleteFamilyDetails = `mutation DeleteFamilyDetails($input: DeleteFamilyDetailsInput!) {
  deleteFamilyDetails(input: $input) {
    id
    alive
    relationship
    diseases {
      id
      name
    }
    comment
  }
}
`;
export const createDiseases = `mutation CreateDiseases($input: CreateDiseasesInput!) {
  createDiseases(input: $input) {
    id
    name
  }
}
`;
export const updateDiseases = `mutation UpdateDiseases($input: UpdateDiseasesInput!) {
  updateDiseases(input: $input) {
    id
    name
  }
}
`;
export const deleteDiseases = `mutation DeleteDiseases($input: DeleteDiseasesInput!) {
  deleteDiseases(input: $input) {
    id
    name
  }
}
`;
export const createGynecoObstetricHistory = `mutation CreateGynecoObstetricHistory(
  $input: CreateGynecoObstetricHistoryInput!
) {
  createGynecoObstetricHistory(input: $input) {
    id
    menarche
    sexual_development
    menstrual_rhythm
    sex_life
    deliveries
    abortions
    caesarean_sections
    contraceptive_method
  }
}
`;
export const updateGynecoObstetricHistory = `mutation UpdateGynecoObstetricHistory(
  $input: UpdateGynecoObstetricHistoryInput!
) {
  updateGynecoObstetricHistory(input: $input) {
    id
    menarche
    sexual_development
    menstrual_rhythm
    sex_life
    deliveries
    abortions
    caesarean_sections
    contraceptive_method
  }
}
`;
export const deleteGynecoObstetricHistory = `mutation DeleteGynecoObstetricHistory(
  $input: DeleteGynecoObstetricHistoryInput!
) {
  deleteGynecoObstetricHistory(input: $input) {
    id
    menarche
    sexual_development
    menstrual_rhythm
    sex_life
    deliveries
    abortions
    caesarean_sections
    contraceptive_method
  }
}
`;
export const createAllergies = `mutation CreateAllergies($input: CreateAllergiesInput!) {
  createAllergies(input: $input) {
    id
    name
    patients {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const updateAllergies = `mutation UpdateAllergies($input: UpdateAllergiesInput!) {
  updateAllergies(input: $input) {
    id
    name
    patients {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const deleteAllergies = `mutation DeleteAllergies($input: DeleteAllergiesInput!) {
  deleteAllergies(input: $input) {
    id
    name
    patients {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const createPatientAllergies = `mutation CreatePatientAllergies($input: CreatePatientAllergiesInput!) {
  createPatientAllergies(input: $input) {
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
    }
    allergies {
      id
      name
      patients {
        nextToken
      }
    }
  }
}
`;
export const updatePatientAllergies = `mutation UpdatePatientAllergies($input: UpdatePatientAllergiesInput!) {
  updatePatientAllergies(input: $input) {
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
    }
    allergies {
      id
      name
      patients {
        nextToken
      }
    }
  }
}
`;
export const deletePatientAllergies = `mutation DeletePatientAllergies($input: DeletePatientAllergiesInput!) {
  deletePatientAllergies(input: $input) {
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
    }
    allergies {
      id
      name
      patients {
        nextToken
      }
    }
  }
}
`;
export const createPatientMedications = `mutation CreatePatientMedications($input: CreatePatientMedicationsInput!) {
  createPatientMedications(input: $input) {
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
    }
  }
}
`;
export const updatePatientMedications = `mutation UpdatePatientMedications($input: UpdatePatientMedicationsInput!) {
  updatePatientMedications(input: $input) {
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
    }
  }
}
`;
export const deletePatientMedications = `mutation DeletePatientMedications($input: DeletePatientMedicationsInput!) {
  deletePatientMedications(input: $input) {
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
    }
  }
}
`;
export const createMedicines = `mutation CreateMedicines($input: CreateMedicinesInput!) {
  createMedicines(input: $input) {
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
  }
}
`;
export const updateMedicines = `mutation UpdateMedicines($input: UpdateMedicinesInput!) {
  updateMedicines(input: $input) {
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
  }
}
`;
export const deleteMedicines = `mutation DeleteMedicines($input: DeleteMedicinesInput!) {
  deleteMedicines(input: $input) {
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
  }
}
`;
export const createPostConsultationsActivities = `mutation CreatePostConsultationsActivities(
  $input: CreatePostConsultationsActivitiesInput!
) {
  createPostConsultationsActivities(input: $input) {
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
    doctor
    secretary
    patient
  }
}
`;
export const updatePostConsultationsActivities = `mutation UpdatePostConsultationsActivities(
  $input: UpdatePostConsultationsActivitiesInput!
) {
  updatePostConsultationsActivities(input: $input) {
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
    doctor
    secretary
    patient
  }
}
`;
export const deletePostConsultationsActivities = `mutation DeletePostConsultationsActivities(
  $input: DeletePostConsultationsActivitiesInput!
) {
  deletePostConsultationsActivities(input: $input) {
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
    doctor
    secretary
    patient
  }
}
`;
export const createMedicalPrescriptions = `mutation CreateMedicalPrescriptions($input: CreateMedicalPrescriptionsInput!) {
  createMedicalPrescriptions(input: $input) {
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
  }
}
`;
export const updateMedicalPrescriptions = `mutation UpdateMedicalPrescriptions($input: UpdateMedicalPrescriptionsInput!) {
  updateMedicalPrescriptions(input: $input) {
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
  }
}
`;
export const deleteMedicalPrescriptions = `mutation DeleteMedicalPrescriptions($input: DeleteMedicalPrescriptionsInput!) {
  deleteMedicalPrescriptions(input: $input) {
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
  }
}
`;
export const createPostConsultActMedicalPres = `mutation CreatePostConsultActMedicalPres(
  $input: CreatePostConsultActMedicalPresInput!
) {
  createPostConsultActMedicalPres(input: $input) {
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
      doctor
      secretary
      patient
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
        nextToken
      }
      doctor
      secretary
      patient
    }
  }
}
`;
export const updatePostConsultActMedicalPres = `mutation UpdatePostConsultActMedicalPres(
  $input: UpdatePostConsultActMedicalPresInput!
) {
  updatePostConsultActMedicalPres(input: $input) {
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
      doctor
      secretary
      patient
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
        nextToken
      }
      doctor
      secretary
      patient
    }
  }
}
`;
export const deletePostConsultActMedicalPres = `mutation DeletePostConsultActMedicalPres(
  $input: DeletePostConsultActMedicalPresInput!
) {
  deletePostConsultActMedicalPres(input: $input) {
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
      doctor
      secretary
      patient
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
        nextToken
      }
      doctor
      secretary
      patient
    }
  }
}
`;
export const createMedicalPrescriptionsMedications = `mutation CreateMedicalPrescriptionsMedications(
  $input: CreateMedicalPrescriptionsMedicationsInput!
) {
  createMedicalPrescriptionsMedications(input: $input) {
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
        nextToken
      }
      doctor
      secretary
      patient
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
    }
  }
}
`;
export const updateMedicalPrescriptionsMedications = `mutation UpdateMedicalPrescriptionsMedications(
  $input: UpdateMedicalPrescriptionsMedicationsInput!
) {
  updateMedicalPrescriptionsMedications(input: $input) {
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
        nextToken
      }
      doctor
      secretary
      patient
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
    }
  }
}
`;
export const deleteMedicalPrescriptionsMedications = `mutation DeleteMedicalPrescriptionsMedications(
  $input: DeleteMedicalPrescriptionsMedicationsInput!
) {
  deleteMedicalPrescriptionsMedications(input: $input) {
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
        nextToken
      }
      doctor
      secretary
      patient
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
    }
  }
}
`;
export const createPostConsultActMedAnalysis = `mutation CreatePostConsultActMedAnalysis(
  $input: CreatePostConsultActMedAnalysisInput!
) {
  createPostConsultActMedAnalysis(input: $input) {
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
      doctor
      secretary
      patient
    }
    medicalAnalysis {
      id
      name
      code
      medicalAnalysis {
        nextToken
      }
    }
  }
}
`;
export const updatePostConsultActMedAnalysis = `mutation UpdatePostConsultActMedAnalysis(
  $input: UpdatePostConsultActMedAnalysisInput!
) {
  updatePostConsultActMedAnalysis(input: $input) {
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
      doctor
      secretary
      patient
    }
    medicalAnalysis {
      id
      name
      code
      medicalAnalysis {
        nextToken
      }
    }
  }
}
`;
export const deletePostConsultActMedAnalysis = `mutation DeletePostConsultActMedAnalysis(
  $input: DeletePostConsultActMedAnalysisInput!
) {
  deletePostConsultActMedAnalysis(input: $input) {
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
      doctor
      secretary
      patient
    }
    medicalAnalysis {
      id
      name
      code
      medicalAnalysis {
        nextToken
      }
    }
  }
}
`;
export const createMedicalAnalysis = `mutation CreateMedicalAnalysis($input: CreateMedicalAnalysisInput!) {
  createMedicalAnalysis(input: $input) {
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
  }
}
`;
export const updateMedicalAnalysis = `mutation UpdateMedicalAnalysis($input: UpdateMedicalAnalysisInput!) {
  updateMedicalAnalysis(input: $input) {
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
  }
}
`;
export const deleteMedicalAnalysis = `mutation DeleteMedicalAnalysis($input: DeleteMedicalAnalysisInput!) {
  deleteMedicalAnalysis(input: $input) {
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
  }
}
`;
export const createSurgicalIntervention = `mutation CreateSurgicalIntervention($input: CreateSurgicalInterventionInput!) {
  createSurgicalIntervention(input: $input) {
    id
    name
  }
}
`;
export const updateSurgicalIntervention = `mutation UpdateSurgicalIntervention($input: UpdateSurgicalInterventionInput!) {
  updateSurgicalIntervention(input: $input) {
    id
    name
  }
}
`;
export const deleteSurgicalIntervention = `mutation DeleteSurgicalIntervention($input: DeleteSurgicalInterventionInput!) {
  deleteSurgicalIntervention(input: $input) {
    id
    name
  }
}
`;
export const createPhysicalExploration = `mutation CreatePhysicalExploration($input: CreatePhysicalExplorationInput!) {
  createPhysicalExploration(input: $input) {
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
    }
    doctor
    secretary
    patient
  }
}
`;
export const updatePhysicalExploration = `mutation UpdatePhysicalExploration($input: UpdatePhysicalExplorationInput!) {
  updatePhysicalExploration(input: $input) {
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
    }
    doctor
    secretary
    patient
  }
}
`;
export const deletePhysicalExploration = `mutation DeletePhysicalExploration($input: DeletePhysicalExplorationInput!) {
  deletePhysicalExploration(input: $input) {
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
    }
    doctor
    secretary
    patient
  }
}
`;
export const createVitalSigns = `mutation CreateVitalSigns($input: CreateVitalSignsInput!) {
  createVitalSigns(input: $input) {
    id
    blood_pressure
    Breathing
    Pulse
    Temperature
    doctor
    secretary
    patient
  }
}
`;
export const updateVitalSigns = `mutation UpdateVitalSigns($input: UpdateVitalSignsInput!) {
  updateVitalSigns(input: $input) {
    id
    blood_pressure
    Breathing
    Pulse
    Temperature
    doctor
    secretary
    patient
  }
}
`;
export const deleteVitalSigns = `mutation DeleteVitalSigns($input: DeleteVitalSignsInput!) {
  deleteVitalSigns(input: $input) {
    id
    blood_pressure
    Breathing
    Pulse
    Temperature
    doctor
    secretary
    patient
  }
}
`;
export const createRegionalExploration = `mutation CreateRegionalExploration($input: CreateRegionalExplorationInput!) {
  createRegionalExploration(input: $input) {
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
  }
}
`;
export const updateRegionalExploration = `mutation UpdateRegionalExploration($input: UpdateRegionalExplorationInput!) {
  updateRegionalExploration(input: $input) {
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
  }
}
`;
export const deleteRegionalExploration = `mutation DeleteRegionalExploration($input: DeleteRegionalExplorationInput!) {
  deleteRegionalExploration(input: $input) {
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
  }
}
`;
