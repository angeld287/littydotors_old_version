/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConsultingRoom = `query GetConsultingRoom($id: ID!) {
  getConsultingRoom(id: $id) {
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
export const listConsultingRooms = `query ListConsultingRooms(
  $filter: ModelConsultingRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listConsultingRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getLocation = `query GetLocation($id: ID!) {
  getLocation(id: $id) {
    id
    name
  }
}
`;
export const listLocations = `query ListLocations(
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
    }
    nextToken
  }
}
`;
export const getStripe = `query GetStripe($id: ID!) {
  getStripe(id: $id) {
    id
    source_token
    plan_id
    plan_name
    customer_id
    subscription_id
  }
}
`;
export const listStripes = `query ListStripes(
  $filter: ModelStripeFilterInput
  $limit: Int
  $nextToken: String
) {
  listStripes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      source_token
      plan_id
      plan_name
      customer_id
      subscription_id
    }
    nextToken
  }
}
`;
export const getDoctor = `query GetDoctor($id: ID!) {
  getDoctor(id: $id) {
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
export const listDoctors = `query ListDoctors(
  $filter: ModelDoctorFilterInput
  $limit: Int
  $nextToken: String
) {
  listDoctors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getRejection = `query GetRejection($id: ID!) {
  getRejection(id: $id) {
    id
    description
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const listRejections = `query ListRejections(
  $filter: ModelRejectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listRejections(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
`;
export const getCancelation = `query GetCancelation($id: ID!) {
  getCancelation(id: $id) {
    id
    description
  }
}
`;
export const listCancelations = `query ListCancelations(
  $filter: ModelCancelationFilterInput
  $limit: Int
  $nextToken: String
) {
  listCancelations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
    }
    nextToken
  }
}
`;
export const getNotification = `query GetNotification($id: ID!) {
  getNotification(id: $id) {
    id
    state
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const listNotifications = `query ListNotifications(
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
`;
export const getConfirmation = `query GetConfirmation($id: ID!) {
  getConfirmation(id: $id) {
    id
  }
}
`;
export const listConfirmations = `query ListConfirmations(
  $filter: ModelConfirmationFilterInput
  $limit: Int
  $nextToken: String
) {
  listConfirmations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
    }
    nextToken
  }
}
`;
export const getModule = `query GetModule($id: ID!) {
  getModule(id: $id) {
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
export const listModules = `query ListModules(
  $filter: ModelModuleFilterInput
  $limit: Int
  $nextToken: String
) {
  listModules(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      fields {
        nextToken
      }
      image
      description
    }
    nextToken
  }
}
`;
export const getDoctorCustomModuleProps = `query GetDoctorCustomModuleProps($id: ID!) {
  getDoctorCustomModuleProps(id: $id) {
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
export const listDoctorCustomModulePropss = `query ListDoctorCustomModulePropss(
  $filter: ModelDoctorCustomModulePropsFilterInput
  $limit: Int
  $nextToken: String
) {
  listDoctorCustomModulePropss(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      active
      module {
        id
        name
        image
        description
      }
    }
    nextToken
  }
}
`;
export const getField = `query GetField($id: ID!) {
  getField(id: $id) {
    id
    name
  }
}
`;
export const listFields = `query ListFields(
  $filter: ModelFieldFilterInput
  $limit: Int
  $nextToken: String
) {
  listFields(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
    }
    nextToken
  }
}
`;
export const getDoctorCustomFieldProps = `query GetDoctorCustomFieldProps($id: ID!) {
  getDoctorCustomFieldProps(id: $id) {
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
export const listDoctorCustomFieldPropss = `query ListDoctorCustomFieldPropss(
  $filter: ModelDoctorCustomFieldPropsFilterInput
  $limit: Int
  $nextToken: String
) {
  listDoctorCustomFieldPropss(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      required
      visible
      field {
        id
        name
      }
    }
    nextToken
  }
}
`;
export const getMedicalAppointment = `query GetMedicalAppointment($id: ID!) {
  getMedicalAppointment(id: $id) {
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
export const listMedicalAppointments = `query ListMedicalAppointments(
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
      }
      rejection {
        nextToken
      }
      cancelation {
        id
        description
      }
      notification {
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
    nextToken
  }
}
`;
export const getMedicalHistory = `query GetMedicalHistory($id: ID!) {
  getMedicalHistory(id: $id) {
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
      surgicalIntervention {
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
export const listMedicalHistorys = `query ListMedicalHistorys(
  $filter: ModelMedicalHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listMedicalHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      }
      physicalExploration {
        id
        general_exploration
        doctor
        secretary
        patient
      }
      postConsultationsActivities {
        id
        doctor
        secretary
        patient
      }
      doctor
      secretary
      patientname
    }
    nextToken
  }
}
`;
export const getPatient = `query GetPatient($id: ID!) {
  getPatient(id: $id) {
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
export const listPatients = `query ListPatients(
  $filter: ModelPatientFilterInput
  $limit: Int
  $nextToken: String
) {
  listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPatientHistory = `query GetPatientHistory($id: ID!) {
  getPatientHistory(id: $id) {
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
export const listPatientHistorys = `query ListPatientHistorys(
  $filter: ModelPatientHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listPatientHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getNonPathologicalHistory = `query GetNonPathologicalHistory($id: ID!) {
  getNonPathologicalHistory(id: $id) {
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
export const listNonPathologicalHistorys = `query ListNonPathologicalHistorys(
  $filter: ModelNonPathologicalHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listNonPathologicalHistorys(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const getNonPathologicalActivities = `query GetNonPathologicalActivities($id: ID!) {
  getNonPathologicalActivities(id: $id) {
    id
    active
    frequency
    comment
  }
}
`;
export const listNonPathologicalActivitiess = `query ListNonPathologicalActivitiess(
  $filter: ModelNonPathologicalActivitiesFilterInput
  $limit: Int
  $nextToken: String
) {
  listNonPathologicalActivitiess(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      active
      frequency
      comment
    }
    nextToken
  }
}
`;
export const getPathologicalHistory = `query GetPathologicalHistory($id: ID!) {
  getPathologicalHistory(id: $id) {
    id
    surgicalInterventions {
      items {
        id
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
export const listPathologicalHistorys = `query ListPathologicalHistorys(
  $filter: ModelPathologicalHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listPathologicalHistorys(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const getFamilyHistory = `query GetFamilyHistory($id: ID!) {
  getFamilyHistory(id: $id) {
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
export const listFamilyHistorys = `query ListFamilyHistorys(
  $filter: ModelFamilyHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listFamilyHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getFamilyDetails = `query GetFamilyDetails($id: ID!) {
  getFamilyDetails(id: $id) {
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
export const listFamilyDetailss = `query ListFamilyDetailss(
  $filter: ModelFamilyDetailsFilterInput
  $limit: Int
  $nextToken: String
) {
  listFamilyDetailss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      alive
      relationship
      diseases {
        id
        name
      }
      comment
    }
    nextToken
  }
}
`;
export const getDiseases = `query GetDiseases($id: ID!) {
  getDiseases(id: $id) {
    id
    name
  }
}
`;
export const listDiseasess = `query ListDiseasess(
  $filter: ModelDiseasesFilterInput
  $limit: Int
  $nextToken: String
) {
  listDiseasess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
    }
    nextToken
  }
}
`;
export const getGynecoObstetricHistory = `query GetGynecoObstetricHistory($id: ID!) {
  getGynecoObstetricHistory(id: $id) {
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
export const listGynecoObstetricHistorys = `query ListGynecoObstetricHistorys(
  $filter: ModelGynecoObstetricHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listGynecoObstetricHistorys(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const getAllergies = `query GetAllergies($id: ID!) {
  getAllergies(id: $id) {
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
export const listAllergiess = `query ListAllergiess(
  $filter: ModelAllergiesFilterInput
  $limit: Int
  $nextToken: String
) {
  listAllergiess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      patients {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getMedicines = `query GetMedicines($id: ID!) {
  getMedicines(id: $id) {
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
export const listMediciness = `query ListMediciness(
  $filter: ModelMedicinesFilterInput
  $limit: Int
  $nextToken: String
) {
  listMediciness(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPostConsultationsActivities = `query GetPostConsultationsActivities($id: ID!) {
  getPostConsultationsActivities(id: $id) {
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
  }
}
`;
export const listPostConsultationsActivitiess = `query ListPostConsultationsActivitiess(
  $filter: ModelPostConsultationsActivitiesFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostConsultationsActivitiess(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    }
    nextToken
  }
}
`;
export const getMedicalPrescriptions = `query GetMedicalPrescriptions($id: ID!) {
  getMedicalPrescriptions(id: $id) {
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
export const listMedicalPrescriptionss = `query ListMedicalPrescriptionss(
  $filter: ModelMedicalPrescriptionsFilterInput
  $limit: Int
  $nextToken: String
) {
  listMedicalPrescriptionss(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const getMedicalAnalysis = `query GetMedicalAnalysis($id: ID!) {
  getMedicalAnalysis(id: $id) {
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
export const listMedicalAnalysiss = `query ListMedicalAnalysiss(
  $filter: ModelMedicalAnalysisFilterInput
  $limit: Int
  $nextToken: String
) {
  listMedicalAnalysiss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      code
      medicalAnalysis {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getSurgicalIntervention = `query GetSurgicalIntervention($id: ID!) {
  getSurgicalIntervention(id: $id) {
    id
    surgicalIntervention {
      id
      state
      date
      pcActivities {
        id
        doctor
        secretary
        patient
      }
      surgicalIntervention {
        id
      }
    }
  }
}
`;
export const listSurgicalInterventions = `query ListSurgicalInterventions(
  $filter: ModelSurgicalInterventionFilterInput
  $limit: Int
  $nextToken: String
) {
  listSurgicalInterventions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      surgicalIntervention {
        id
        state
        date
      }
    }
    nextToken
  }
}
`;
export const getPhysicalExploration = `query GetPhysicalExploration($id: ID!) {
  getPhysicalExploration(id: $id) {
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
export const listPhysicalExplorations = `query ListPhysicalExplorations(
  $filter: ModelPhysicalExplorationFilterInput
  $limit: Int
  $nextToken: String
) {
  listPhysicalExplorations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const getVitalSigns = `query GetVitalSigns($id: ID!) {
  getVitalSigns(id: $id) {
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
export const listVitalSignss = `query ListVitalSignss(
  $filter: ModelVitalSignsFilterInput
  $limit: Int
  $nextToken: String
) {
  listVitalSignss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      blood_pressure
      Breathing
      Pulse
      Temperature
      doctor
      secretary
      patient
    }
    nextToken
  }
}
`;
export const getRegionalExploration = `query GetRegionalExploration($id: ID!) {
  getRegionalExploration(id: $id) {
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
export const listRegionalExplorations = `query ListRegionalExplorations(
  $filter: ModelRegionalExplorationFilterInput
  $limit: Int
  $nextToken: String
) {
  listRegionalExplorations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
