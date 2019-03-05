// @flow
import React from 'react';
import { injectIntl } from 'react-intl';
import type { IntlShape } from 'react-intl';
import ReactTable from 'react-table';

type Props = {
  data: Array<{
    str: string,
    dex: string,
    con: string,
    int: string,
    wis: string,
    cha: string
  }>,
  intl: IntlShape
}

const InfoTable = ({ data, intl: { formatMessage } }: Props) => {
  const keys = Object.keys(data[0]);

  const columns = keys.map((key: string) => ({
    Header: formatMessage({ id: `monster.${key}` }),
    accessor: key,
    Cell: ({ value }) => {
      const calcValue = Math.floor((Number(value) - 10) / 2);
      return `${value} (${calcValue > 0 ? '+' : ''}${calcValue})`;
    },
    style: { justifyContent: 'center' }
  }));

  return (
    <ReactTable
      data={data}
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
    />
  );
};

export default injectIntl(InfoTable);
