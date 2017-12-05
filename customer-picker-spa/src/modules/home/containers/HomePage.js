import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Redirect } from 'react-router-dom'
import { authLogin } from '../../../redux/modules/authReducer'

import {
  ContainerWrapperStyled,
  TextFieldStyled, ButtonStyled,
  LoadingProgressStyled,
  ContentBlockStyled,
  ContentBlockAllStyled,
  ContentBlockLStyled,
  ContentBlockRStyled, ButtonWrapper} from '../../core/stylesheets/core.styles'
import { IntroducePanelStyled,
  TopPanelStyled, BranchStyled, BranchDescStyled, BottomPanelStyled
  } from '../stylesheets/homepage.style';

import { InfoMore } from '../components'; 
import { ROUTE_PATH } from '../../../Routes';


const HomePage = (props) => {
  return (
    <DocumentTitle title="GrabFake - Xem trạng thái điểm">
      <ContainerWrapperStyled>
        <IntroducePanelStyled>
          <TopPanelStyled>
            <BranchStyled>
              GrabFake
            </BranchStyled>
            <BranchDescStyled>
              Khách hàng là thượng đế
            </BranchDescStyled>
          </TopPanelStyled>
          <BottomPanelStyled>
            <TextFieldStyled
              fullWidth={true}
              hintText="Ví dụ: Hà nội"
              floatingLabelText="Tìm kiếm địa điểm"
            />
            <ButtonWrapper>
              <ButtonStyled label="Tìm kiếm"></ButtonStyled>
            </ButtonWrapper>
          </BottomPanelStyled>
        </IntroducePanelStyled>
        <ContentBlockStyled>
          <ContentBlockAllStyled>
            <ContentBlockLStyled>
              <InfoMore
                title="Booking - công cụ tìm kiếm khách sạn khắp thế giới"
                content={`Booking hỗ trợ người dùng so sánh giá phòng giữa hơn 400 website đặt phòng với hơn 1,8 triệu khách sạn tại hơn 190 quốc gia. Với hơn 1,4 tỉ lượt truy cập website của chúng tôi hàng năm, du khách thường xuyên sử dụng công cụ so sánh khách sạn để so sánh giá tốt tại cùng một thành phố. Chuẩn bị ngay cho kỳ nghỉ cuối tuần của bạn tại các thành phố như Hà Nội hay Nha Trang và bạn có thể dễ dàng tìm thấy khách sạn mong muốn tại trivago. Khu vực Đà Nẵng và vùng phụ cận cũng rất phù hợp cho một chuyến du lịch cuối tuần với rất nhiều khách sạn còn phòng trống.`} />
            </ContentBlockLStyled>
            <ContentBlockRStyled>
              <InfoMore
                title="Booking - công cụ tìm kiếm khách sạn khắp thế giới"
                content={`Booking hỗ trợ người dùng so sánh giá phòng giữa hơn 400 website đặt phòng với hơn 1,8 triệu khách sạn tại hơn 190 quốc gia. Với hơn 1,4 tỉ lượt truy cập website của chúng tôi hàng năm, du khách thường xuyên sử dụng công cụ so sánh khách sạn để so sánh giá tốt tại cùng một thành phố. Chuẩn bị ngay cho kỳ nghỉ cuối tuần của bạn tại các thành phố như Hà Nội hay Nha Trang và bạn có thể dễ dàng tìm thấy khách sạn mong muốn tại trivago. Khu vực Đà Nẵng và vùng phụ cận cũng rất phù hợp cho một chuyến du lịch cuối tuần với rất nhiều khách sạn còn phòng trống.`} />
            </ContentBlockRStyled>
          </ContentBlockAllStyled>
          <ContentBlockAllStyled>
            <ContentBlockLStyled>
              <InfoMore
                title="Đánh giá khách sạn giúp bạn tìm nơi dừng chân lý tưởng"
                content={`Cơ sở dữ liệu gồm hơn 175 triệu đánh giá và hơn 19 triệu ảnh của chúng tôi giúp bạn hiểu rõ hơn về nơi mình định đến. Để có được cái nhìn tổng quan về cơ sở vật chất của khách sạn, chúng tôi hiển thị mức xếp hạng trung bình và các nhận xét từ các website đặt phòng như Hotels.com, Expedia, Agoda hay các khách sạn hàng đầu khác. trivago giúp bạn dễ dàng tìm thông tin cho các chuyến du lịch cuối tuần tới Thành phố Hồ Chí Minh và chọn khách sạn theo yêu cầu riêng của bạn.`} />
            </ContentBlockLStyled>
            <ContentBlockRStyled>
              <InfoMore
                title="Cách đặt phòng"
                content={`Trivago là một công cụ so sánh và tìm kiếm giá phòng khách sạn tối ưu. Giá phòng hiển thị được cung cấp bởi rất nhiều khách sạn và website đặt phòng. Điều này đồng nghĩa với việc khi người dùng quyết định chọn khách sạn nào trên trivago, thủ tục đặt phòng sẽ được thực hiện bởi công ty cung cấp (được kết nối tới trivago). Bằng cách nhấn vào nút "Xem Giá tốt", bạn sẽ được chuyển tiếp đến trang web đặt phòng, tại đây bạn có thể kiểm tra và đặt phòng như ý muốn.Hãy để trivago giúp bạn tìm giá tốt nhất từ hơn 400 website khách sạn!`} />
            </ContentBlockRStyled>
          </ContentBlockAllStyled>
        </ContentBlockStyled>
      </ContainerWrapperStyled>    
    </DocumentTitle>
  );
}

export default HomePage;