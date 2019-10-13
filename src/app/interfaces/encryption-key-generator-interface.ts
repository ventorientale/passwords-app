export interface EncryptionKeyGeneratorInterface {
  readonly derivable: boolean;
  readonly algorithmName: string;

  generate?(): Promise<CryptoKey>;

  fromPassword?(password: string, salt: string): Promise<CryptoKey>;

  export(key: CryptoKey): Promise<string>;

  import(jwk: string): Promise<CryptoKey>;
}
