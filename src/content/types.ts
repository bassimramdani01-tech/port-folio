export type LocalePath = 'en' | 'fr' | 'zh';

export interface PublishedRecord {
  id: string;
  published: boolean;
}

export interface VerifiedFact {
  value: string;
  verified: boolean;
  confirmation?: string;
  published?: boolean;
}
