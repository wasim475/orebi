import React, { useState } from 'react'
import Containerr from '../layouts/Containerr'
import Flex from '../layouts/Flex'
import {RiBarChartHorizontalLine} from 'react-icons/ri'
import List from '../layouts/List'
import Item from '../layouts/Item'

const Header = () => {
    let [showCat, setShowCat] = useState(false)
  return (
    <section>
        <Containerr>
            <Flex className='flex py-8 bg-bgC'>
                <div className=' w-1.5/4 lg:w-1/4'>
                    <div onClick={()=> setShowCat(!showCat)}>
                        <RiBarChartHorizontalLine className='inline-block'/>
                        <p className='hidden lg:inline-block'> Shop by Category</p>
                    </div>
                   { showCat&&
                        <List className='p-4 border border-solid drop-shadow-lg ml-2 rounded-lg truncate'>
                            <Item listItem='Accesories' className='my-3'/>
                            <Item listItem='Furniture' className='my-3'/>
                            <Item listItem='Electronics' className='my-3'/>
                            <Item listItem='Clothes' className='my-3'/>
                            <Item listItem='Bags' className='my-3'/>
                            <Item listItem='Home appliances' className='my-3'/>
                        </List>
                   }
                </div>
                <div className='w-2/4'>middle</div>
                <div className='w-1/4'>righe</div>
            </Flex>
        </Containerr>
    </section>
  )
}

export default Header