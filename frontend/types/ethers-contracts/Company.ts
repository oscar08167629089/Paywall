//@ts-nocheck
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface CompanyInterface extends utils.Interface {
  functions: {
    "companyOwner()": FunctionFragment;
    "currentId()": FunctionFragment;
    "editEmployee(string,string,address,uint256,uint256)": FunctionFragment;
    "employeeIds(uint256)": FunctionFragment;
    "getAllEmployee()": FunctionFragment;
    "id()": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "payEmployee(uint256)": FunctionFragment;
    "registerEmployee(string,string,address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "companyOwner"
      | "currentId"
      | "editEmployee"
      | "employeeIds"
      | "getAllEmployee"
      | "id"
      | "name"
      | "owner"
      | "payEmployee"
      | "registerEmployee"
      | "renounceOwnership"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "companyOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "currentId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "editEmployee",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "employeeIds",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllEmployee",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "id", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payEmployee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerEmployee",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "companyOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "currentId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "editEmployee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "employeeIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllEmployee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "id", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "payEmployee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerEmployee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "employeeCreated(string,string,address,uint256)": EventFragment;
    "employeeInfoModified(string,string,address,uint256)": EventFragment;
    "employeesPaid(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "employeeCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "employeeInfoModified"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "employeesPaid"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface employeeCreatedEventObject {
  employeeName: string;
  employeeRank: string;
  employeeAddress: string;
  payment: BigNumber;
}
export type employeeCreatedEvent = TypedEvent<
  [string, string, string, BigNumber],
  employeeCreatedEventObject
>;

export type employeeCreatedEventFilter = TypedEventFilter<employeeCreatedEvent>;

export interface employeeInfoModifiedEventObject {
  employeeName: string;
  employeeRank: string;
  employeeAddress: string;
  payment: BigNumber;
}
export type employeeInfoModifiedEvent = TypedEvent<
  [string, string, string, BigNumber],
  employeeInfoModifiedEventObject
>;

export type employeeInfoModifiedEventFilter =
  TypedEventFilter<employeeInfoModifiedEvent>;

export interface employeesPaidEventObject {
  companyName: string;
  payment: BigNumber;
}
export type employeesPaidEvent = TypedEvent<
  [string, BigNumber],
  employeesPaidEventObject
>;

export type employeesPaidEventFilter = TypedEventFilter<employeesPaidEvent>;

export interface Company extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CompanyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    companyOwner(overrides?: CallOverrides): Promise<[string]>;

    currentId(overrides?: CallOverrides): Promise<[BigNumber]>;

    editEmployee(
      _employeeName: PromiseOrValue<string>,
      _employeeRank: PromiseOrValue<string>,
      _employeeAddress: PromiseOrValue<string>,
      _payment: PromiseOrValue<BigNumberish>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    employeeIds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAllEmployee(
      overrides?: CallOverrides
    ): Promise<
      [string[], string[], string[], BigNumber[], BigNumber[]] & {
        employeeNames: string[];
        employeeRanks: string[];
        employeeAddresses: string[];
        payments: BigNumber[];
        ids: BigNumber[];
      }
    >;

    id(overrides?: CallOverrides): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    payEmployee(
      exchangeRate: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    registerEmployee(
      _employeeName: PromiseOrValue<string>,
      _employeeRank: PromiseOrValue<string>,
      _employeeAddress: PromiseOrValue<string>,
      _payment: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  companyOwner(overrides?: CallOverrides): Promise<string>;

  currentId(overrides?: CallOverrides): Promise<BigNumber>;

  editEmployee(
    _employeeName: PromiseOrValue<string>,
    _employeeRank: PromiseOrValue<string>,
    _employeeAddress: PromiseOrValue<string>,
    _payment: PromiseOrValue<BigNumberish>,
    _id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  employeeIds(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAllEmployee(
    overrides?: CallOverrides
  ): Promise<
    [string[], string[], string[], BigNumber[], BigNumber[]] & {
      employeeNames: string[];
      employeeRanks: string[];
      employeeAddresses: string[];
      payments: BigNumber[];
      ids: BigNumber[];
    }
  >;

  id(overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  payEmployee(
    exchangeRate: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  registerEmployee(
    _employeeName: PromiseOrValue<string>,
    _employeeRank: PromiseOrValue<string>,
    _employeeAddress: PromiseOrValue<string>,
    _payment: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    companyOwner(overrides?: CallOverrides): Promise<string>;

    currentId(overrides?: CallOverrides): Promise<BigNumber>;

    editEmployee(
      _employeeName: PromiseOrValue<string>,
      _employeeRank: PromiseOrValue<string>,
      _employeeAddress: PromiseOrValue<string>,
      _payment: PromiseOrValue<BigNumberish>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    employeeIds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllEmployee(
      overrides?: CallOverrides
    ): Promise<
      [string[], string[], string[], BigNumber[], BigNumber[]] & {
        employeeNames: string[];
        employeeRanks: string[];
        employeeAddresses: string[];
        payments: BigNumber[];
        ids: BigNumber[];
      }
    >;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    payEmployee(
      exchangeRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    registerEmployee(
      _employeeName: PromiseOrValue<string>,
      _employeeRank: PromiseOrValue<string>,
      _employeeAddress: PromiseOrValue<string>,
      _payment: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "employeeCreated(string,string,address,uint256)"(
      employeeName?: null,
      employeeRank?: null,
      employeeAddress?: null,
      payment?: null
    ): employeeCreatedEventFilter;
    employeeCreated(
      employeeName?: null,
      employeeRank?: null,
      employeeAddress?: null,
      payment?: null
    ): employeeCreatedEventFilter;

    "employeeInfoModified(string,string,address,uint256)"(
      employeeName?: null,
      employeeRank?: null,
      employeeAddress?: null,
      payment?: null
    ): employeeInfoModifiedEventFilter;
    employeeInfoModified(
      employeeName?: null,
      employeeRank?: null,
      employeeAddress?: null,
      payment?: null
    ): employeeInfoModifiedEventFilter;

    "employeesPaid(string,uint256)"(
      companyName?: null,
      payment?: null
    ): employeesPaidEventFilter;
    employeesPaid(companyName?: null, payment?: null): employeesPaidEventFilter;
  };

  estimateGas: {
    companyOwner(overrides?: CallOverrides): Promise<BigNumber>;

    currentId(overrides?: CallOverrides): Promise<BigNumber>;

    editEmployee(
      _employeeName: PromiseOrValue<string>,
      _employeeRank: PromiseOrValue<string>,
      _employeeAddress: PromiseOrValue<string>,
      _payment: PromiseOrValue<BigNumberish>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    employeeIds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllEmployee(overrides?: CallOverrides): Promise<BigNumber>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    payEmployee(
      exchangeRate: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    registerEmployee(
      _employeeName: PromiseOrValue<string>,
      _employeeRank: PromiseOrValue<string>,
      _employeeAddress: PromiseOrValue<string>,
      _payment: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    companyOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    editEmployee(
      _employeeName: PromiseOrValue<string>,
      _employeeRank: PromiseOrValue<string>,
      _employeeAddress: PromiseOrValue<string>,
      _payment: PromiseOrValue<BigNumberish>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    employeeIds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllEmployee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    id(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payEmployee(
      exchangeRate: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    registerEmployee(
      _employeeName: PromiseOrValue<string>,
      _employeeRank: PromiseOrValue<string>,
      _employeeAddress: PromiseOrValue<string>,
      _payment: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
