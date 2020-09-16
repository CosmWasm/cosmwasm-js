/* eslint-disable @typescript-eslint/naming-convention */
import { toBase64 } from "@cosmjs/encoding";
import { makeCosmoshubPath, makeSignBytes, StdFee, StdSignature } from "@cosmjs/launchpad";

import { LedgerSigner } from "../ledgersigner";

const defaultChainId = "testing";
const defaultFee: StdFee = {
  amount: [{ amount: "100", denom: "ucosm" }],
  gas: "250",
};
const defaultMemo = "Some memo";
const defaultSequence = "0";
const defaultPrehashType = undefined;

const signer = new LedgerSigner({
  testModeAllowed: true,
  hdPaths: [makeCosmoshubPath(0), makeCosmoshubPath(1), makeCosmoshubPath(2)],
});

export async function getAccounts(): Promise<
  ReadonlyArray<{
    readonly algo: string;
    readonly address: string;
    readonly pubkey: string;
  }>
> {
  const accounts = await signer.getAccounts();
  return accounts.map((account) => ({ ...account, pubkey: toBase64(account.pubkey) }));
}

export async function sign(
  accountNumber: number,
  fromAddress: string,
  toAddress: string,
): Promise<StdSignature> {
  const msgs = [
    {
      type: "cosmos-sdk/MsgSend",
      value: {
        amount: [
          {
            amount: "1234567",
            denom: "ucosm",
          },
        ],
        from_address: fromAddress,
        to_address: toAddress,
      },
    },
  ];
  const signBytes = makeSignBytes(
    msgs,
    defaultFee,
    defaultChainId,
    defaultMemo,
    accountNumber,
    defaultSequence,
  );
  return signer.sign(fromAddress, signBytes, defaultPrehashType, accountNumber);
}