/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConsultingRoom = `mutation CreateConsultingRoom($input: CreateConsultingRoomInput!) {
  createConsultingRoom(input: $input) {
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
export const createPatient = `mutation CreatePatient($input: CreatePatientInput!) {
  createPatient(input: $input) {
    id
    name
    username
    email
    phone
    phone_id
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
export const createMedicalConsultation = `mutation CreateMedicalConsultation($input: CreateMedicalConsultationInput!) {
  createMedicalConsultation(input: $input) {
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
    read_client
    createdAt
  }
}
`;
export const updateMedicalConsultation = `mutation UpdateMedicalConsultation($input: UpdateMedicalConsultationInput!) {
  updateMedicalConsultation(input: $input) {
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
    read_client
    createdAt
  }
}
`;
export const deleteMedicalConsultation = `mutation DeleteMedicalConsultation($input: DeleteMedicalConsultationInput!) {
  deleteMedicalConsultation(input: $input) {
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
    read_client
    createdAt
  }
}
`;
