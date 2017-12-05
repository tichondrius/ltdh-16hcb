import React from 'react';
import { CardStyled, CardTitleStyled, CardHeaderStyled, TextFieldStyled, ButtonStyled } from '../../core/stylesheets/core.styles';
import {Tabs, Tab} from 'material-ui/Tabs';
import { StarFilter, RatingFilter, CostFilter, RangeFilter } from '../components';
import { CardBodyWrapper } from '../stylesheets/search.style'; 
const FormSearch = (props) => {
  return (
    <CardStyled style={{paddingBottom: 30}}>
      <Tabs
      >
        <Tab label="Tiêu chí chính">
          <CardStyled style={{ flex: 1}}>
            <CardHeaderStyled title="Hạng khách sạn" />
            <StarFilter />
          </CardStyled>
          <CardStyled style={{ flex: 1}}>
            <CardHeaderStyled title="Đánh giá của khách" />
            <RatingFilter />
          </CardStyled>
          <CardStyled style={{ flex: 1}}>
            <CardHeaderStyled title="Giá" />
            <CostFilter min={0} max={20000000} onChange={() => {}} />
          </CardStyled>
          <CardStyled style={{ flex: 1}}>
            <CardHeaderStyled title="Khoảng cách" />
            <RangeFilter min={0} max={50} onChange={() => {}} />
          </CardStyled>
          <CardStyled style={{ flex: 1}}>
            <CardHeaderStyled title="Tìm theo tên" />
            <CardBodyWrapper>
              <TextFieldStyled
                fullWidth={true}
                hintText="Ví dụ: Hà nội"
                floatingLabelText="Tìm kiếm địa điểm"
              />
            </CardBodyWrapper>
          </CardStyled>
          <CardStyled style={{ flex: 1}}>
            <CardBodyWrapper>
              <ButtonStyled label="Chọn lại tiêu chí" fullWidth primary/>
            </CardBodyWrapper>
          </CardStyled>
        </Tab>
        <Tab label="Tiêu chí khác">
          
        </Tab>
    </Tabs>
    </CardStyled>
  );
}

export default FormSearch;