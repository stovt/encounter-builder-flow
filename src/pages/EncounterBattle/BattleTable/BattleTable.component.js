// @flow
import React from 'react';
import { injectIntl } from 'react-intl';
import type { IntlShape } from 'react-intl';
import ReactTable from 'react-table';
import type { MonsterActions, BattleMonsterRows } from 'shared/types/monsters';
import type { ModalsAction } from 'shared/types/modals';
import { MONSTER_INFO_MODAL_ID } from 'shared/components/MonsterInfoModal/MonsterInfoModal.constants';
import HPInput from './HPInput';
import StateMultiSelect from './StateMultiSelect';

type Props = {
  monsters: BattleMonsterRows,
  turn: number,
  showModal: (modalId: string, data: { monsterID: string }) => ModalsAction,
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
        this.props.showModal(MONSTER_INFO_MODAL_ID, { monsterID: rowInfo.original.monster.id });
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
      accessor: 'monster.hit_points',
      Cell: (
        { original: { rowID }, value }: { original: any, value: string | number }
      ) => <HPInput rowID={rowID} value={value} />,
      width: 100,
      style: { justifyContent: 'center' }
    }, {
      Header: `${formatMessage({ id: 'monster.armor' })} (${formatMessage({ id: 'monster.armor-class' })})`,
      accessor: 'monster',
      Cell: ({ value }: { value: any }) => (value.armor_desc ? `${value.armor_desc} (${value.armor_class})` : value.armor_class),
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
        { original: { rowID }, value }: { original: any, value: string | number }
      ) => <StateMultiSelect rowID={rowID} value={value} />,
      width: 240
    }, {
      Header: formatMessage({ id: 'monster.actions' }),
      accessor: 'monster.actions',
      Cell: ({ value }: { value: MonsterActions }) => value.map(action => (
        <span key={action.name}><b>{action.name}.</b> {action.desc}</span>
      )),
      style: { flexDirection: 'column', alignItems: 'normal' }
    }];

    const tableData = monsters.map(row => ({
      rowID: row.rowID,
      monster: {
        id: row.monster.id,
        name: row.monster.name,
        hit_points: row.monster.hit_points,
        armor_class: row.monster.armor_class,
        armor_desc: row.monster.armor_desc,
        initiative: row.monster.initiative,
        speed: row.monster.speed,
        state: row.monster.state,
        actions: row.monster.actions
      }
    }));

    return (
      <ReactTable
        data={tableData}
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
