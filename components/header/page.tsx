"use client"
import React, { useEffect } from "react";
import Container from "../container/page";
import Image from "next/image";
import LOGO from "../../images/LOGO.png";
import { Button, Input, Avatar, Badge } from "antd";
import { ArrowRightOutlined, BarChartOutlined, CloseSquareOutlined, HeartOutlined, PhoneOutlined, SearchOutlined, ShoppingCartOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import "./style.css";
import useCategoryStore from '@/store/categories/page';

import { useState } from "react";



function Index() {
  const [open, setOpen] = useState(false)
  const {categories, getCategories} = useCategoryStore()


  useEffect(() =>{
    getCategories()
  }, [])
  return (
    <header>
      <div className="py-[10px] bg-[#F0F0F0]">
        <Container>
          <div className="flex justify-between items-center">
            <ul className="flex items-center gap-[20px]">
              <li className="text-[14px] font-medium cursor-pointer">
                Biz Haqimizda
              </li>
              <li className="text-[14px] font-medium cursor-pointer">
                Yetkazib berish
              </li>
              <li className="text-[14px] font-medium cursor-pointer">
                Shartnoma shartlari
              </li>
              <li className="text-[14px] font-medium cursor-pointer">
                Bizning kafolatlar
              </li>
            </ul>
            <ul className="flex items-center gap-[15px]">
              <li className="text-[14px] font-medium ">+998 71 300 30 30</li>
              <li className="px-[10px] py-[4px] bg-[white] rounded-lg cursor-pointer font-medium text-[#240E0066]">
                Rus
              </li>
              <li className="px-[10px] py-[4px] bg-[white] rounded-lg cursor-pointer font-medium text-[#240E0066]">
                Ozb
              </li>
              <li className="px-[10px] py-[4px] bg-[white] rounded-lg cursor-pointer font-medium text-[#240E0066]">
                Eng
              </li>
            </ul>
          </div>
        </Container>
      </div>
      
      
      <div>
        <Container>
          <div className="py-[30px] px-[60px] flex justify-between bg-[white] rounded-md relative">
            <Image
              className="ml-[30px]"
              src={LOGO}
              width={140}
              height={40}
              alt="Picture of the author"
            />

            <div className="flex gap-[16px] items-center">
              <Button onClick={() => setOpen(!open)} className="category_btn bg-[#1EB91E] text-white text-[14px] font-bold py-[15px] px-[36px] h-[46px]">
                  {
                    open?
                    <CloseSquareOutlined className=" text-[18px]"/>
                    :
                    <UnorderedListOutlined className=" text-[18px] rotate-180" />
                  }
                  Kategoriya
              </Button>
              <Input
                placeholder="Хочу купить..."
                className="search_input"
                prefix={<SearchOutlined />}
              />
            </div>

            <div className={`w-[100%] absolute bg-[#fff] left-0 z-20 py-[30px] px-[20px] ${open ? ' top-[110px] duration-300 opacity-1' : "top-[-1200px] duration-300 opacity-0"} drawer`}>
                {
                  categories.map((e,i) => {
                    return (
                      <div key={i} className='mt-[10px] flex items-center justify-between w-[440px] h-[50px] py-[35px] px-[59px] bg-white rounded-xl cursor-pointer card hover:bg-[#f2f2f2]'>
                          <PhoneOutlined className='w-[60px] h-[60px] bg-[#FF800B1A] rounded-full p-[20px] text-[#D55200]'/>
                          <p>{e.name}</p>
                          <ArrowRightOutlined />
                      </div>
                    )
                  })
                }
            </div>

            <div className="flex items-center gap-[15px]">
              <Badge count={2} >
                <Avatar shape="square" size="large" className="bg-[#F0F0F0] cursor-pointer" >
                    <HeartOutlined className="text-[20px] text-[black]" />
                </Avatar>
              </Badge>
              <Badge count={6} >
                <Avatar shape="square" size="large" className="bg-[#F0F0F0] cursor-pointer">
                    <BarChartOutlined className="text-[20px] text-[black]"/>
                </Avatar>
              </Badge>
              <Badge count={7} >
                <Avatar shape="square" size="large" className="bg-[#F0F0F0] cursor-pointer">
                    <ShoppingCartOutlined className="text-[20px] text-[black]" />
                </Avatar>
              </Badge>
              <Avatar size="large" icon={<UserOutlined className="text-[20px] text-[black]"/>} className="bg-[#F0F0F0] cursor-pointer"/>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Index;
