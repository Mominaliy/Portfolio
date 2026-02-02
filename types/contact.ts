export interface ContactFormData {
  name: string;
  email: string;
  projectDetails: string;
  budget?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}
