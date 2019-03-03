// @flow
import React from 'react';
import { injectIntl } from 'react-intl';
import type { IntlShape } from 'react-intl';
import ReactTable from 'react-table';
import type { BattleMonster, BattleMonsters } from 'shared/types/encounterBattle';
import HPInput from './HPInput';
import StateMultiSelect from './StateMultiSelect';

type Props = {
  monsters: BattleMonsters,
  turn: number,
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

  render() {
    const { monsters, intl: { formatMessage } } = this.props;

    const columns = [{
      Header: formatMessage({ id: 'monster.name' }),
      accessor: 'monster.name',
      width: 250
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
      Cell: ({ value }: { value: BattleMonster }) => `${value.armor} (${value.ac})`,
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
    }, {
      Header: formatMessage({ id: 'monster.state' }),
      accessor: 'monster.state',
      Cell: (
        { original: { id: rowID }, value }: { original: any, value: string | number }
      ) => <StateMultiSelect rowID={rowID} value={value} />,
      width: 240
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
      />
    );
  }
}

export default injectIntl(BattleTable);
