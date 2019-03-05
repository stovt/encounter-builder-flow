// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { State } from 'shared/types';
import type { Monster } from 'shared/types/encounterBuilder';
import Modal from 'shared/components/Modal';
import { getData } from 'shared/components/Modal/Modal.selectors';
import { MONSTER_INFO_MODAL_ID } from './MonsterInfoModal.constants';
import MonsterInfoModal from './MonsterInfoModal.component';

type Props = {
  modalData: {
    monster: Monster
  }
}

const MonsterInfoModalContainer = ({ modalData: { monster }, ...props }: Props) => (
  <Modal
    modalId={MONSTER_INFO_MODAL_ID}
    title={monster ? monster.displayName : ''}
    width="90vw"
  >
    {monster && <MonsterInfoModal {...props} monster={monster} />}
  </Modal>
);

const mapStateToProps = (state: State) => ({
  modalData: getData(state, MONSTER_INFO_MODAL_ID)
});

export default connect(mapStateToProps)(MonsterInfoModalContainer);
