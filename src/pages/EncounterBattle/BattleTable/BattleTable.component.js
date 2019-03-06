// @flow
import React from 'react';
import { injectIntl } from 'react-intl';
import type { IntlShape } from 'react-intl';
import ReactTable from 'react-table';
import type { Monster } from 'shared/types/encounterBuilder';
import type { BattleMonster, BattleMonsters } from 'shared/types/encounterBattle';
import type { ModalsAction } from 'shared/types/modals';
import { MONSTER_INFO_MODAL_ID } from 'shared/components/MonsterInfoModal/MonsterInfoModal.constants';
import HPInput from './HPInput';
import StateMultiSelect from './StateMultiSelect';

type Props = {
  monsters: BattleMonsters,
  turn: number,
  showModal: (modalId: string, data: { monster: Monster }) => ModalsAction,
  getMonsterByID: (monsterID: string) => ?Monster,
  intl: IntlShape
}

class BattleTable extends React.PureComponent<Props> {
  handleTrProps = (state: any, { index }: any) => {
    const { turn } = this.props;
    return {
      style: {
        cursor: 'auto',
        background: turn === index ? '#e4e4e4' : 'inherit'
      }
    };
  }

  handleTdProps = (state: any, rowInfo: any, column: any): {} => ({
    onClick: (e, handleOriginal) => {
      if (column.id === 'monster.name') {
        const { getMonsterByID, showModal } = this.props;
        const monster = getMonsterByID(rowInfo.original.monster.id);
        if (monster) showModal(MONSTER_INFO_MODAL_ID, { monster });
      }
      if (handleOriginal) handleOriginal();
    }
  })

  render() {
    const { monsters, intl: { formatMessage } } = this.props;

    const columns = [{
      Header: formatMessage({ id: 'monster.name' }),
      accessor: 'monster.name',
      width: 250,
      style: {
        cursor: 'pointer'
      }
    }, {
      Header: formatMessage({ id: 'monster.hit-points' }),
      accessor: 'monster.hp',
      Cell: (
        { original: { id: rowID }, value }: { original: any, value: string | number }
      ) => <HPInput rowID={rowID} value={value} />,
      width: 100,
      style: { justifyContent: 'center' }
    }, {
      Header: `${formatMessage({ id: 'monster.armor' })} (${formatMessage({ id: 'monster.armor-class' })})`,
      accessor: 'monster',
      Cell: ({ value }: { value: BattleMonster }) => (value.armor ? `${value.armor} (${value.ac})` : value.ac),
      width: 160
    }, {
      Header: formatMessage({ id: 'monster.initiative' }),
      accessor: 'monster.initiative',
      style: { justifyContent: 'center' },
      width: 120
    }, {
      Header: formatMessage({ id: 'monster.speed' }),
      accessor: 'monster.speed',
      width: 160
    }, {
      Header: formatMessage({ id: 'monster.state' }),
      accessor: 'monster.state',
      Cell: (
        { original: { id: rowID }, value }: { original: any, value: string | number }
      ) => <StateMultiSelect rowID={rowID} value={value} />,
      width: 240
    }, {
      Header: formatMessage({ id: 'monster.actions' }),
      accessor: 'monster.actions',
      Cell: ({ value }: { value: string[] | string }) => {
        if (Array.isArray(value)) {
          return value.map((action, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={index}>{action}</span>
          ));
        }
        return value;
      },
      style: { flexDirection: 'column', alignItems: 'normal' }
    }];

    return (
      <ReactTable
        data={monsters}
        columns={columns}
        showPagination={false}
        resizable={false}
        sortable={false}
        minRows={1}
        previousText={formatMessage({ id: 'table-labels.previousText' })}
        nextText={formatMessage({ id: 'table-labels.nextText' })}
        loadingText={formatMessage({ id: 'table-labels.loadingText' })}
        noDataText={formatMessage({ id: 'table-labels.noDataText' })}
        pageText={formatMessage({ id: 'table-labels.pageText' })}
        ofText={formatMessage({ id: 'table-labels.ofText' })}
        rowsText={formatMessage({ id: 'table-labels.rowsText' })}
        pageJumpText={formatMessage({ id: 'table-labels.pageJumpText' })}
        rowsSelectorText={formatMessage({ id: 'table-labels.rowsSelectorText' })}
        getTrProps={this.handleTrProps}
        getTdProps={this.handleTdProps}
      />
    );
  }
}

export default injectIntl(BattleTable);
