import { Coin, Msg } from "@cosmjs/sdk38";
/**
 * Uploads Wasm code to the chain.
 * A numeric, auto-incrementing code ID will be generated as a result of the execution of this message.
 *
 * @see https://github.com/CosmWasm/wasmd/blob/v0.9.0-alpha4/x/wasm/internal/types/msg.go#L34
 */
export interface MsgStoreCode extends Msg {
  readonly type: "wasm/store-code";
  readonly value: {
    /** Bech32 account address */
    readonly sender: string;
    /** Base64 encoded Wasm */
    readonly wasm_byte_code: string;
    /** A valid URI reference to the contract's source code. Can be empty. */
    readonly source: string;
    /** A docker tag. Can be empty. */
    readonly builder: string;
  };
}
/**
 * Creates an instance of contract that was uploaded before.
 * This will trigger a call to the "init" export.
 *
 * @see https://github.com/CosmWasm/wasmd/blob/v0.9.0-alpha4/x/wasm/internal/types/msg.go#L104
 */
export interface MsgInstantiateContract extends Msg {
  readonly type: "wasm/instantiate";
  readonly value: {
    /** Bech32 account address */
    readonly sender: string;
    /** ID of the Wasm code that was uploaded before */
    readonly code_id: string;
    /** Human-readable label for this contract */
    readonly label: string;
    /** Init message as JavaScript object */
    readonly init_msg: any;
    readonly init_funds: ReadonlyArray<Coin>;
  };
}
/**
 * Execute a smart contract.
 * This will trigger a call to the "handle" export.
 *
 * @see https://github.com/CosmWasm/wasmd/blob/v0.9.0-alpha4/x/wasm/internal/types/msg.go#L158
 */
export interface MsgExecuteContract extends Msg {
  readonly type: "wasm/execute";
  readonly value: {
    /** Bech32 account address */
    readonly sender: string;
    /** Bech32 account address */
    readonly contract: string;
    /** Handle message as JavaScript object */
    readonly msg: any;
    readonly sent_funds: ReadonlyArray<Coin>;
  };
}
export declare function isMsgStoreCode(msg: Msg): msg is MsgStoreCode;
export declare function isMsgInstantiateContract(msg: Msg): msg is MsgInstantiateContract;
export declare function isMsgExecuteContract(msg: Msg): msg is MsgExecuteContract;
