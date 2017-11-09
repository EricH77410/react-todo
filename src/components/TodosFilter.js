import React from 'react';

import { connect } from 'react-redux';

import { DateRangePicker } from 'react-dates'

import { setTextFilter, setStartDate, setEndDate } from '../actions/filter'

import { Input, Icon } from 'react-materialize';

class TodosFilter extends React.Component {
  state = {
    calendarFocused:null
  }
  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }
  onFocusChange = (calendarFocused) => {
    this.setState(()=>({calendarFocused}))
  }
  render() {
    return (
        <div className="container filter-area">

            <Input
            className="input-search"
            placeholder="Contient le texte ..."
            label="Filtre"
            onChange={(e)=>{
              const term = e.target.value
              this.props.dispatch(setTextFilter(term))
              }}
            ><Icon>search</Icon>
            </Input>
          <DateRangePicker
            startDate={this.props.filter.startDate}
            endDate={this.props.filter.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false}
            showClearDates={true}
          />

    </div>
    )
  }

}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

export default connect(mapStateToProps)(TodosFilter);
