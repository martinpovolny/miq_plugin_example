import * as React from 'react';
import { TablePfProvider, Table, Filter, FormControl, Button } from 'patternfly-react'

const headerFormat = value => <Table.Heading>{value}</Table.Heading>;
const cellFormat = value => <Table.Cell>{value}</Table.Cell>;
const headerFormatRightAlign = value => <Table.Heading align="right">{value}</Table.Heading>;
const cellFormatRightAlign = value => <Table.Cell align="right">{value}</Table.Cell>;

export const mockPatternflyColumns = [
  {
    header: {
      label: 'Name',
      formatters: [headerFormat]
    },
    cell: {
      formatters: [cellFormat]
    },
    property: 'name'
  },
  {
    header: {
      label: 'Type',
      formatters: [headerFormat]
    },
    cell: {
      formatters: [cellFormat]
    },
    property: 'type'
  },
  {
    header: {
      label: 'Action',
      formatters: [headerFormat]
    },
    cell: {
      formatters: [cellFormat]
    },
    property: 'action'
  },
];

export const mockBootstrapRows = [
  {
    id: 0,
    name: 'Provider1',
    type: 'Amazon',
    action: <Button>connect</Button>,
  },
  {
    id: 1,
    name: 'Provider2',
    type: 'Amazon',
    action: <Button>connect</Button>,
  },
  {
    id: 2,
    name: 'Provider3',
    type: 'Openstack',
    action: <Button>connect</Button>,
  },
  {
    id: 3,
    name: 'Provider4',
    type: 'Azure',
    action: <Button>connect</Button>,
  }
];

const mockFilterExampleFields = [
  {
    id: 'name',
    title: 'Name',
    placeholder: 'Filter by Name',
    filterType: 'text'
  },
  {
    id: 'type',
    title: 'Type',
    placeholder: 'Filter by Provider Type',
    filterType: 'text'
  },
  {
    id: 'action',
    title: 'Action',
    placeholder: 'Filter by Action',
    filterType: 'select',
    filterValues: [
      { title: 'Connect', id: 'connect' },
      { title: 'Disconnect', id: 'disconnect' },
    ]
  }
];

export default class RedHatCloudServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilterType: mockFilterExampleFields[0],
      activeFilters: [],
      currentValue: '',
      rows: mockBootstrapRows,
      filteredRows: mockBootstrapRows,
    };
  };

  selectFilterType = filterType => {
    const { currentFilterType, rows } = this.state;

    if (currentFilterType !== filterType) {
      const newFilterCategory = mockFilterExampleFields.find(a => a.id === filterType.id);
      this.setState({
        currentFilterType: filterType,
        currentValue: '',
        filterCategory: newFilterCategory,
        filteredRows: rows
      });
    }
  }

  onChange = ({ target: { value: filterValue } }) => {
    const { rows, currentFilterType: { id: filterType } } = this.state;
    this.setState({
      currentValue: filterValue,
      filteredRows: rows.filter(row => row[filterType].toLowerCase().includes(filterValue))
    });
  }

  onFilterValueSelected = selected => {
    const { rows, currentFilterType: { id: filterType } } = this.state;
    this.setState({
      currentValue: selected,
      filteredRows: rows.filter(row => row[filterType] === selected.id)
    });
  }


  render() {
    const { currentFilterType, currentValue, filteredRows } = this.state;
    const valueSelector = (currentFilterType.filterType === 'select'
    ? <Filter.ValueSelector
        filterValues={currentFilterType.filterValues}
        currentValue={currentValue}
        onFilterValueSelected={this.onFilterValueSelected}
      />
    : <FormControl
        type={currentFilterType.filterType}
        value={currentValue}
        placeholder={currentFilterType.placeholder}
        onChange={this.onChange}
        onKeyPress={e => console.log(e)}
      />
    );

    return (
      <div>
        <Filter>
          <Filter.TypeSelector
            filterTypes={mockFilterExampleFields}
            currentFilterType={currentFilterType}
            onFilterTypeSelected={e => this.selectFilterType(e)}
          />
          {valueSelector}
        </Filter>
        <RedHatCloudServicesTable
          columns={mockPatternflyColumns}
          rows={filteredRows}
        />
      </div>
    )
  }
}

class RedHatCloudServicesTable extends React.Component {
  render() {
    return (
      <Table.PfProvider striped bordered hover columns={this.props.columns}>
         <Table.Header />
         <Table.Body rows={this.props.rows} rowKey="id" />
      </Table.PfProvider>
    )
  }
}
