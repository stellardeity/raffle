import { SyntheticEvent } from "react";

export enum DateFormats {
  Default = "YYYY-MM-DD",
  DefaultTime = "hh:mm",
  DefaultWithTime = "YYYY-MM-DDTHH:mm:ss",
  HoursAndMinutes24 = "HH:mm",
  UserFriendly = "DD.MM.YYYY",
  UserFriendlyHalfYear = "DD.MM.YY",
  UserFriendlyWithSlash = "DD.MM/YY",
  BugFixUserFriendlyWithSlash = "dd.MM/yy",
  Time = "HH:mm:ss",
  UserFriendlyWithTimeFirst = "HH:mm DD.MM",
  UserFriendlyWithTimeLast = "DD.MM HH:mm",
  UserFriendlyWithSlashTimeAndYear = "HH:mm DD.MM/YY",
  UserFriendlyWithNoYear = "DD.MM",
  UserFriendlyWithNoYearAndMonthName = "DD MMMM",
}

export enum GlobalKeyBoardListeners {
  ConfirmModalActions = "ConfirmModalActions",
  ModalCloseOnEsc = "ModalCloseOnEsc",
  ToggleTasksFiltersPanel = "ToggleTasksFiltersPanel",
}

export type AnyObject = Record<string | number | symbol, unknown>;

export const EmptyObject = {};
export const EmptyArray = [];
export const EmptyString = "";

export enum TimePeriods {
  Second = 1000,
  Minute = TimePeriods.Second * 60,
  Hour = TimePeriods.Minute * 60,
  Day = TimePeriods.Hour * 24,
  Week = TimePeriods.Day * 7,
}

export enum KeyCodes {
  ESCAPE = 27,
  ENTER = 13,
  DELETE = 46,
  BACKSPACE = 8,
  SHIFT = 16,
  CONTROL = 17,
  TAB = 9,
}

export enum KeyboardSpecialKeys {
  ArrowUp = "ArrowUp",
  ArrowRight = "ArrowRight",
  ArrowLeft = "ArrowLeft",
  ArrowDown = "ArrowDown",
  Backspace = "Backspace",
  Control = "Control",
  Delete = "Delete",
  End = "End",
  Enter = "Enter",
  Escape = "Escape",
  Home = "Home",
  Shift = "Shift",
  Tab = "Tab",
}

export type AnyIndex = string | number | symbol;

export type IAnyObject<T extends AnyIndex = string, U = any> = {
  [key in AnyIndex]: U;
};

export type ThemeType = "dark" | "light";

export enum ThemeTypes {
  Dark = "dark",
  Light = "light",
}

export type ISyntheticEventWithDataset<T, U = IAnyObject> = SyntheticEvent<T, MouseEvent> & {
  target?: { dataset: U };
};
