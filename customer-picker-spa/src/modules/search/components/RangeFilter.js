import React from 'react';
import { SliderStyled } from '../../core/stylesheets/core.styles'
import { CostSliderWrapper } from '../stylesheets/search.style'


export default class RangeFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.max,
    };
  }
  handleChange = (event, value) => {
    const { onChange } = this.props;
    value = value.toFixed(1);
    this.setState({
      value,
    });
    onChange(value);
  }
  render(){
    const { max, min } = this.props;
    const step = (max - min) / 30;
     return (
      <CostSliderWrapper>
        <span>{this.state.value} Km</span>
        <SliderStyled
          min={min} 
          max={max}
          step={step}
          onChange={this.handleChange}
          value={this.state.value}/>
      </CostSliderWrapper>
    );
  }
} 
