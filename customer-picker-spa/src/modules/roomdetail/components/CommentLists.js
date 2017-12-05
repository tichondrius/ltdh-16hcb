import React from 'react';
import logo from '../../../images/map-access.jpg' 
import {
    ContainerWrapperStyled,
    TextFieldStyled, ButtonStyled,
    LoadingProgressStyled,
    ContentBlockStyled,
    ContentBlockAllStyled,
    ContentBlockLStyled,
  } from '../../core/stylesheets/core.styles';
  import Avatar from 'material-ui/Avatar';
import { 
   HeadingInfoStyled, MapContainerStyled,OverallScore,IconStartWrapper,BoldText,TestFlexColumn
} from '../stylesheets/roomdetail.style';
import { Row, Column } from '../../core/stylesheets/column-row.styles'; 

const CommentLists= (props) =>{

  const len = props.length;
  var rows = [], i = 0;
  while (++i <= len) rows.push(i);
  const renderStart = (starValue) => (
    <ContainerWrapperStyled key={starValue}>
        <Row >
    <Column md="2" sm="2">
    <TestFlexColumn>
        <Avatar src={logo} />
        <span>Name test</span>
        <span>Come from</span>
        <span>Time</span>
        
        
    </TestFlexColumn>
    
       </Column>
    <Column md="10" sm="10">
    <IconStartWrapper>
          <OverallScore >
                  <span>{8}+</span>
          </OverallScore>
          <BoldText>Test tieu de</BoldText>
      </IconStartWrapper>
      <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ego vero isti, inquam, permitto. Dempta enim aeternitate nihilo beatior Iuppiter quam Epicurus; Duo Reges: constructio interrete. Apparet statim, quae sint officia, quae actiones. Quae cum essent dicta, finem fecimus et ambulandi et disputandi. Quod si ita se habeat, non possit beatam praestare vitam sapientia. Licet hic rursus ea commemores, quae optimis verbis ab Epicuro de laude amicitiae dicta sunt.</span>
    </Column>
    </Row>
    </ContainerWrapperStyled>
    
  );
  return(
    <TestFlexColumn>
      {
        // console.log(comment)
        rows.map(val => renderStart(val))
      }
    </TestFlexColumn>
  );
}
export default CommentLists;