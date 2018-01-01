import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import {
  ContainerWrapperStyled } from '../../core/stylesheets/core.styles';
import { Row, Column } from '../../core/stylesheets/column-row.styles';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { connect } from 'react-redux';

import { INFO_STATUS } from '../../../utils/enums';

export class InfoListPage extends Component {


  render() {
    const { infos } = this.props;
    return (
      <DocumentTitle title="Danh sách cần định vị">
        <ContainerWrapperStyled>
          <h1>Danh sách cần được định vị</h1>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Tên KH</TableHeaderColumn>
                <TableHeaderColumn>Địa chỉ cung cấp</TableHeaderColumn>
                <TableHeaderColumn>Loại dịch vụ</TableHeaderColumn>
                <TableHeaderColumn>Trạng thái</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.props.infos.map((info) => (
              <TableRow>
                <TableRowColumn>{info._id}</TableRowColumn>
                <TableRowColumn>{info.name}</TableRowColumn>
                <TableRowColumn>{info.phone}</TableRowColumn>
                <TableRowColumn>{info.address}</TableRowColumn>
                <TableRowColumn>{info.status}</TableRowColumn>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </ContainerWrapperStyled>
      </DocumentTitle>
    );
  
  }
}

const mapStateToProps = state => {
  const infosFromState = state.info.infos || [];
  const infos = infosFromState.filter(info => {
    return info.status === INFO_STATUS.NEW
  });

  return {
    infos,
  }
}

export default connect(mapStateToProps)(InfoListPage);