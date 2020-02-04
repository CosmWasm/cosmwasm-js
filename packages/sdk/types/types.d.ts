export interface AminoTx {
  readonly type: "cosmos-sdk/StdTx";
  readonly value: StdTx;
}
export interface StdTx {
  readonly msg: ReadonlyArray<Msg>;
  readonly fee: StdFee;
  readonly signatures: ReadonlyArray<StdSignature>;
  readonly memo: string;
}
export declare function isAminoStdTx(txValue: unknown): txValue is StdTx;
export declare function isAminoTx(tx: unknown): tx is AminoTx;
export declare type Msg = MsgSendTyped | MsgUnknownTyped;
export interface MsgUnknownTyped {
  readonly type: string;
  readonly value: unknown;
}
export interface MsgSendTyped {
  readonly type: "cosmos-sdk/MsgSend";
  readonly value: MsgSend;
}
export interface MsgSend {
  /** Bech32 account address */
  readonly from_address: string;
  /** Bech32 account address */
  readonly to_address: string;
  readonly amount: ReadonlyArray<Coin>;
}
export interface StdFee {
  readonly amount: ReadonlyArray<Coin>;
  readonly gas: number;
}
export interface Coin {
  readonly denom: string;
  readonly amount: string;
}
export interface StdSignature {
  readonly pub_key: PubKey;
  readonly signature: Uint8Array;
}
export declare type PubKey = PubKeyEd25519 | PubKeySecp256k1 | PubKeySr25519;
export interface PubKeySecp256k1 {
  readonly type: "tendermint/PubKeySecp256k1";
  readonly value: Uint8Array;
}
export interface PubKeyEd25519 {
  readonly type: "tendermint/PubKeyEd25519";
  readonly value: Uint8Array;
}
export interface PubKeySr25519 {
  readonly type: "tendermint/PubKeySr25519";
  readonly value: Uint8Array;
}
export interface BaseAccount {
  /** Bech32 account address */
  readonly address: string;
  readonly coins: ReadonlyArray<Coin>;
  readonly public_key: PubKey;
  readonly account_number: number;
  readonly sequence: number;
}
