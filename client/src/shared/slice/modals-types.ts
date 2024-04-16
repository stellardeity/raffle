import { IAnyObject } from "../types/global";

export enum Modals {
  VenuesDialog = "VenuesDialog",
}

export interface ICustomModalProps extends Record<Modals, IAnyObject> {
  [Modals.VenuesDialog]: IVenuesDialogModalProps;
}

export interface IModalProps {
  modalMode: ModalMode;
  id: string;
}

export interface IVenuesDialogModalProps extends IModalProps {}
export interface IPatientsDialogModalProps extends IModalProps {}
export interface ISubdivisionsDialogModalProps extends IModalProps {}
export interface ICompaniesDialogModalProps extends IModalProps {}
export interface IDeleteFilesDialogModalProps extends IModalProps {
  bucket: string;
  fileNames: string[];
  refetchTrigger: () => void;
}
export interface IUploadFilesDialogModalProps extends IModalProps {
  bucket: string;
  refetchTrigger: () => void;
}
export interface IMoveFilesDialogModalProps extends IModalProps {
  sourceBucket: string;
  fileNames: string[];
  refetchTrigger: () => void;
}

export enum ModalMode {
  CREATE = "create",
  EDIT = "edit",
}
