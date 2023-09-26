import React, { useEffect, useState } from 'react'
import Containerr from '../layouts/Containerr'
import Image from '../layouts/Image'
import List from '../layouts/List'
import Item from '../layouts/Item'
import Flex from '../layouts/Flex'
import {FaBars} from 'react-icons/fa'


const Navbar = () => {
  let [show, setShow] = useState(true)
  useEffect(()=>{
    function scrollWidth(){
      if(window.innerWidth<769){
        setShow(false)
      }else{
        setShow(true)
      }
    }
    scrollWidth()
    window.addEventListener('resize',scrollWidth)
  },[])
  return (
   <section>
    <Containerr>
       <Flex className={` lg:flex p-0`}>
        <div className='w-1/4'>
          <Image imagesrc= 'images/logo.png' className=''/>
        </div>
        <div className='w-3/4'>
          <FaBars className=' block lg:hidden ml-auto absolute top-3 right-3' onClick={()=> setShow(!show)}/>
          {
            show &&
            <List className='lg:flex lg:gap-x-10 lg: justify-end'>
            <Item className='hover:text-black hover:font-bold font-normal transition duration-150 ease-out my-3 lg:gap-y-0' listItem='Shop'/>
            <Item className='hover:text-black hover:font-bold font-normal transition duration-150 ease-out my-3 lg:gap-y-0' listItem='About'/>
            <Item className='hover:text-black hover:font-bold font-normal transition duration-150 ease-out my-3 lg:gap-y-0' listItem='Home'/>
            <Item className='hover:text-black hover:font-bold font-normal transition duration-150 ease-out my-3 lg:gap-y-0' listItem='Contracts'/>
            <Item className='hover:text-black hover:font-bold font-normal transition duration-150 ease-out my-3 lg:gap-y-0' listItem='Journal'/>
          </List>
          }
        </div>
       </Flex>
    </Containerr>
   </section>
  )
}

export default Navbar