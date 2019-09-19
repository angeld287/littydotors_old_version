/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMedicalConsultation = `subscription OnCreateMedicalConsultation(
  $doctorname: String
  $secretary: String
) {
  onCreateMedicalConsultation(doctorname: $doctorname, secretary: $secretary) {
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
export const onUpdateMedicalConsultation = `subscription OnUpdateMedicalConsultation(
  $read_secretary: Boolean
  $read_company: Boolean
  $read_client: Boolean
  $doctorname: String
  $secretary: String
) {
  onUpdateMedicalConsultation(
    read_secretary: $read_secretary
    read_company: $read_company
    read_client: $read_client
    doctorname: $doctorname
    secretary: $secretary
  ) {
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
export const onCreateConsultingRoom = `subscription OnCreateConsultingRoom {
  onCreateConsultingRoom {
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
export const onUpdateConsultingRoom = `subscription OnUpdateConsultingRoom {
  onUpdateConsultingRoom {
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
export const onDeleteConsultingRoom = `subscription OnDeleteConsultingRoom {
  onDeleteConsultingRoom {
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
export const onCreateLocation = `subscription OnCreateLocation {
  onCreateLocation {
    id
    name
  }
}
`;
export const onUpdateLocation = `subscription OnUpdateLocation {
  onUpdateLocation {
    id
    name
  }
}
`;
export const onDeleteLocation = `subscription OnDeleteLocation {
  onDeleteLocation {
    id
    name
  }
}
`;
export const onCreateStripe = `subscription OnCreateStripe {
  onCreateStripe {
    id
    source_token
    plan_id
    plan_name
    customer_id
    subscription_id
  }
}
`;
export const onUpdateStripe = `subscription OnUpdateStripe {
  onUpdateStripe {
    id
    source_token
    plan_id
    plan_name
    customer_id
    subscription_id
  }
}
`;
export const onDeleteStripe = `subscription OnDeleteStripe {
  onDeleteStripe {
    id
    source_token
    plan_id
    plan_name
    customer_id
    subscription_id
  }
}
`;
export const onCreateDoctor = `subscription OnCreateDoctor {
  onCreateDoctor {
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
export const onUpdateDoctor = `subscription OnUpdateDoctor {
  onUpdateDoctor {
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
export const onDeleteDoctor = `subscription OnDeleteDoctor {
  onDeleteDoctor {
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
export const onCreatePatient = `subscription OnCreatePatient {
  onCreatePatient {
    id
    name
    username
    email
    phone
    phone_id
  }
}
`;
export const onUpdatePatient = `subscription OnUpdatePatient {
  onUpdatePatient {
    id
    name
    username
    email
    phone
    phone_id
  }
}
`;
export const onDeletePatient = `subscription OnDeletePatient {
  onDeletePatient {
    id
    name
    username
    email
    phone
    phone_id
  }
}
`;
export const onCreateRejection = `subscription OnCreateRejection {
  onCreateRejection {
    id
    description
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const onUpdateRejection = `subscription OnUpdateRejection {
  onUpdateRejection {
    id
    description
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const onDeleteRejection = `subscription OnDeleteRejection {
  onDeleteRejection {
    id
    description
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const onCreateCancelation = `subscription OnCreateCancelation {
  onCreateCancelation {
    id
    description
  }
}
`;
export const onUpdateCancelation = `subscription OnUpdateCancelation {
  onUpdateCancelation {
    id
    description
  }
}
`;
export const onDeleteCancelation = `subscription OnDeleteCancelation {
  onDeleteCancelation {
    id
    description
  }
}
`;
export const onCreateNotification = `subscription OnCreateNotification {
  onCreateNotification {
    id
    state
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const onUpdateNotification = `subscription OnUpdateNotification {
  onUpdateNotification {
    id
    state
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const onDeleteNotification = `subscription OnDeleteNotification {
  onDeleteNotification {
    id
    state
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const onCreateConfirmation = `subscription OnCreateConfirmation {
  onCreateConfirmation {
    id
  }
}
`;
export const onUpdateConfirmation = `subscription OnUpdateConfirmation {
  onUpdateConfirmation {
    id
  }
}
`;
export const onDeleteConfirmation = `subscription OnDeleteConfirmation {
  onDeleteConfirmation {
    id
  }
}
`;
