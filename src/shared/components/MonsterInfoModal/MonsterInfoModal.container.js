// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { State, Dispatch, ErrorType } from 'shared/types';
import type { Monster } from 'shared/types/monsters';
import type { EncounterBuilderAction } from 'shared/types/encounterBuilder';
import Modal from 'shared/components/Modal';
import { getData } from 'shared/components/Modal/Modal.selectors';
import AlertBox from 'shared/components/AlertBox';
import LoadingComponent from 'shared/components/LoadingComponent';
import { fetchMonsterByID } from 'pages/EncounterBuilder/EncounterBuilder.actions';
import { getMonsterByID, isMonsterLoading, getMonsterError } from 'pages/EncounterBuilder/EncounterBuilder.selectors';
import { MONSTER_INFO_MODAL_ID } from './MonsterInfoModal.constants';
import MonsterInfoModal from './MonsterInfoModal.component';

type Props = {
  modalData: {
    monsterID: string
  },
  getMonsterById: (monsterID: string) => Monster,
  fetchMonsterById: (monsterID: string) => EncounterBuilderAction,
  monsterLoading: boolean,
  monsterError: ?ErrorType
}

class MonsterInfoModalContainer extends React.PureComponent<Props> {
  componentDidUpdate(prevProps) {
    const { modalData: { monsterID: oldMonsterID } } = prevProps;
    const { modalData: { monsterID: newMonsterID }, fetchMonsterById, getMonsterById } = this.props;
    if (newMonsterID && newMonsterID !== oldMonsterID
      && !getMonsterById(newMonsterID)
    ) {
      fetchMonsterById(newMonsterID);
    }
  }

  render() {
    const {
      modalData: { monsterID },
      getMonsterById, fetchMonsterById,
      monsterLoading, monsterError,
      ...props
    } = this.props;

    const monster = getMonsterById(monsterID);

    return (
      <Modal
        modalId={MONSTER_INFO_MODAL_ID}
        title={monster ? monster.name : ''}
        width="90vw"
      >
        {monsterLoading && <LoadingComponent />}
        {monsterError && <AlertBox>{monsterError}</AlertBox>}
        {monster && <MonsterInfoModal {...props} monster={monster} />}
      </Modal>
    );
  }
}


const mapStateToProps = (state: State) => ({
  modalData: getData(state, MONSTER_INFO_MODAL_ID),
  getMonsterById: (monsterID: string) => getMonsterByID(state, monsterID),
  monsterLoading: isMonsterLoading(state),
  monsterError: getMonsterError(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchMonsterById: (monsterID: string) => dispatch(fetchMonsterByID(monsterID))
});

export default connect(mapStateToProps, mapDispatchToProps)(MonsterInfoModalContainer);
