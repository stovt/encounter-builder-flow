// @flow
import React from 'react';
import { injectIntl } from 'react-intl';
import type { IntlShape } from 'react-intl';
import ReactTable from 'react-table';
import './MonstersTable.css';
import type { MonsterTableData } from 'shared/types/encounterBuilder';
import { crValueToNumber } from './MonstersTable.helpers';
import { DEFAULT_PAGE_SIZE, PAGE_SIZE_OPTIONS } from './MonstersTable.constants';
import AddMonsterButton from './AddMonsterButton';
import CRFilter from './CRFilter';
import SizeFilter from './SizeFilter';
import TypeFilter from './TypeFilter';

type Props = {
  monsters: MonsterTableData[],
  intl: IntlShape
}
type Filter = {
  id: string,
  value: any,
  pivotId?: string
}

class MonstersTable extends React.PureComponent<Props> {
  defaultFilterMethod = (filter: Filter, row: any): boolean => {
    const id = filter.pivotId || filter.id;
    if (row[id] !== undefined) {
      return String(row[id].toLowerCase()).includes(filter.value.toLowerCase());
    }
    return true;
  }

  CRFilterMethod = (filter: Filter, row: any): boolean => {
    const rowNumValue = crValueToNumber(row[filter.id]);
    const { value: { minCR, maxCR } } = filter;

    if (!minCR && !maxCR) return true;
    if (minCR && maxCR && +maxCR >= +minCR) {
      return rowNumValue >= +minCR && rowNumValue <= +maxCR;
    }
    if (minCR && !maxCR) {
      return rowNumValue >= +minCR;
    }
    if (!minCR && maxCR) {
      return rowNumValue <= +maxCR;
    }
    return true;
  }

  typeRenderer = ({ value }: { value: string }): React$Element<'span'> => {
    const { intl: { formatMessage } } = this.props;
    const typeValues: string[] = value.split(' (');
    const translatedType: string = formatMessage({ id: `monster.types.${typeValues[0]}` });
    const mainType: string = translatedType.charAt(0).toUpperCase() + translatedType.slice(1);
    const typeDescription: string = ` (${typeValues[1]}`;
    return (
      <span>{mainType}{typeValues[1] && <i>{typeDescription}</i>}</span>
    );
  }

  typeFilterMethod = (filter: Filter, row: any): boolean => {
    const id = filter.pivotId || filter.id;
    return row[id] !== undefined ? String(row[id]).startsWith(filter.value) : true;
  }

  handleGetTDprops = (state: any, rowInfo: any): {} => ({
    onClick: (e, handleOriginal) => {
      alert(rowInfo.original.id);
      if (handleOriginal) handleOriginal();
    }
  })

  render() {
    const { monsters, intl: { formatMessage } } = this.props;

    const columns = [{
      Header: '',
      accessor: 'id',
      width: 50,
      Cell: ({ value }: { value: string }) => <AddMonsterButton monsterId={value} />,
      sortable: false,
      filterable: false,
      style: { justifyContent: 'center' }
    }, {
      Header: formatMessage({ id: 'monster.name' }),
      accessor: 'name'
    }, {
      Header: formatMessage({ id: 'monster.cr' }),
      accessor: 'cr',
      width: 190,
      style: { justifyContent: 'center' },
      filterMethod: this.CRFilterMethod,
      Filter: ({ onChange }: { onChange: (value: any) => void }) => <CRFilter onChange={onChange} />
    }, {
      Header: formatMessage({ id: 'monster.size' }),
      accessor: 'size',
      width: 140,
      Cell: ({ value }: { value: string }) => formatMessage({ id: `monster.sizes.${value}` }),
      Filter: ({ filter, onChange }: { filter: Filter, onChange: (value: string) => void }) => (
        <SizeFilter onChange={onChange} value={filter ? filter.value : ''} />
      )
    }, {
      Header: formatMessage({ id: 'monster.type' }),
      accessor: 'type',
      minWidth: 130,
      Cell: this.typeRenderer,
      Filter: ({ filter, onChange }: { filter: Filter, onChange: (value: string) => void }) => (
        <TypeFilter onChange={onChange} value={filter ? filter.value : ''} />
      ),
      filterMethod: this.typeFilterMethod
    }];

    return (
      <ReactTable
        data={monsters}
        columns={columns}
        pageSizeOptions={PAGE_SIZE_OPTIONS}
        defaultPageSize={DEFAULT_PAGE_SIZE}
        resizable={false}
        filterable
        previousText={formatMessage({ id: 'table-labels.previousText' })}
        nextText={formatMessage({ id: 'table-labels.nextText' })}
        loadingText={formatMessage({ id: 'table-labels.loadingText' })}
        noDataText={formatMessage({ id: 'table-labels.noDataText' })}
        pageText={formatMessage({ id: 'table-labels.pageText' })}
        ofText={formatMessage({ id: 'table-labels.ofText' })}
        rowsText={formatMessage({ id: 'table-labels.rowsText' })}
        pageJumpText={formatMessage({ id: 'table-labels.pageJumpText' })}
        rowsSelectorText={formatMessage({ id: 'table-labels.rowsSelectorText' })}
        defaultFilterMethod={this.defaultFilterMethod}
        getTdProps={this.handleGetTDprops}
      />
    );
  }
}

export default injectIntl(MonstersTable);
