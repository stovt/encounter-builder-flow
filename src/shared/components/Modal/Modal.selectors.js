// @flow
import type { State } from 'shared/types';
import type { ModalItem } from 'shared/types/modals';
import { MODAL_ITEM_DEFAULT_STRUCTURE } from './Modal.constants';

const getModalFromState = (
  state: State, modalId: string, defaultValue = MODAL_ITEM_DEFAULT_STRUCTURE
): ModalItem => state.modals[modalId] || defaultValue;

export const getVisible = (state: State, modalId: string): boolean => (
  getModalFromState(state, modalId).visible
);
export const getAnyVisible = (state: State): boolean => (
  Object.keys(state.modals).some((modalId: string) => getVisible(state, modalId))
);
export const getData = (state: State, modalId: string): {} => (
  getModalFromState(state, modalId).data
);
export const getVisibleModalId = (state: State): ?string => (
  Object.keys(state.modals).find((modalId: string) => getModalFromState(state, modalId).visible)
);
