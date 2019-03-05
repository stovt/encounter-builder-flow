// @flow
export type ModalItem = {
  visible: boolean,
  data: { }
};

export type Modals = {
  [modalId: string]: ModalItem
};

export type ModalsState = {
  +modals: Modals
};

export type ModalsAction =
  | { type: 'modals/REGISTER', modalId: string }
  | { type: 'modals/UNREGISTER', modalId: string }
  | { type: 'modals/SHOW', modalId: string, data: {} }
  | { type: 'modals/HIDE', modalId: string }
  | { type: 'modals/MERGE_DATA', modalId: string, data: {} };
