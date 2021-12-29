export interface UserCreationOptions {
  email?: string;
  challenge?: string;
  rp?: {
    name: string;
  };
  user?: {
    id: string;
    name: string;
    displayName: string;
  };
  attestation?: 'direct' | 'indirect' | 'none';
}
