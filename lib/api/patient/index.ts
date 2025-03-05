import type { Patient, PatientPayload } from '@/types/patient.type';
import api, { ApiResponse } from '../';

export const getPatients = async (physician_id: number | string): Promise<ApiResponse<Patient[]>> => {
  return await api.get(`/patient/all/${physician_id}`);
};

export const getPatient = async (id: number | string): Promise<ApiResponse<Patient>> => {
  return await api.get(`/patient/${id}`);
};

export const createPatient = async (data: PatientPayload): Promise<ApiResponse<Patient>> => {
  return await api.post('/patient', data);
};

export const updatePatient = async (id: number | string, data: PatientPayload): Promise<ApiResponse<Patient>> => {
  return await api.patch(`/patient/${id}`, data);
};

export const deletePatient = async (id: number | string): Promise<ApiResponse<Patient>> => {
  return await api.delete(`/patient/${id}`);
};
