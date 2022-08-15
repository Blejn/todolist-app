import React from 'react'
import { Container,Tabs,TabList, Tab } from '@chakra-ui/react'

import {FILTER} from './constans'

const Filter = () => {
  return (
    <Container centerContent color={"white"}>
      <Tabs>
          <TabList>
          {Object.keys(FILTER).map(filterkey=>{
            const currentFilter = FILTER[filterkey];
            return(
              <Tab 
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