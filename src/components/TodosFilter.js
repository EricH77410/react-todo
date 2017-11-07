import React from 'react';

import { connect } from 'react-redux';

import { setTextFilter, setDoneFilter } from '../actions/filter'

import { Input, Icon, Row } from 'react-materialize';

const TodosFilter = (props) =>{
    return (
        <div>
        <Row>
          <Input 
          className="input-search" 
          placeholder="Contient le texte ..." 
          label="Filtre"
          onChange={(e)=>{
              const term = e.target.value
              props.dispatch(setTextFilter(term))
              }}
          ><Icon>search</Icon></Input>
          <Input 
            onClick={this.setDone} 
            name='on' 
            type='switch'                        
            onLabel='Done'
            offLabel='Pending'                                
            defaultChecked="false"
            onChange={(e)=>{
                const chk = e.target.checked;
                const value = chk ? 'done':'pending'
                props.dispatch(setDoneFilter(value))
            }}
            />
        </Row>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
} 

export default connect(mapStateToProps)(TodosFilter);