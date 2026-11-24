export enum IdentityDocumentType { DNI = 'DNI', CE = 'CE' }
export enum EmployeeStatus { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  documentType: IdentityDocumentType;
  documentNumber: string;
  email: string;
  phone?: string;
  position: string;
  area: string;
  hireDate: string;
  status: EmployeeStatus;
}
