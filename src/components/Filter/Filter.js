import React from 'react'
import { Container,Tabs,TabList, Tab, filter } from '@chakra-ui/react'

import {FILTER} from './constans'
import { useDispatch } from 'react-redux'
import { setFilter } from '../redux/reducer/actions'

const Filter = () => {
  const  dispatch = useDispatch();
  return (
    <Container centerContent color={"white"}>
      <Tabs>
          <TabList>
          {Object.keys(FILTER).map(filterkey=>{
            const currentFilter = FILTER[filterkey];
            return(
              <Tab  onClick={()=> dispatch(setFilter(currentFilter))}
              key={`filter-${currentFilter}`}>
                {currentFilter}
              </Tab>
            )
          })}
          </TabList>
          </Tabs>
    </Container>
  )
}

export default Filter