import type { PublishedRecord } from './types';

export interface CertificateRecord extends PublishedRecord {
  title: string;
  issuer: string;
  issuedOn?: string;
  url?: string;
}

export const certificates: readonly CertificateRecord[] = [];
