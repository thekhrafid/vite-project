import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './component/Container'
import Flex from './component/Flex'
import Logo from '../src/assets/logo.png'
import Menu from './component/Menu'
import Button from './component/Button'
import Headline from './component/Headline'
import Paragraph from './component/Paragraph'
import dotsimg from '../src/assets/dotimg.png'
import Card from './component/Card'
import Work from './component/Work'
import workimg from '../src/assets/workimg1.png'
import workimgone from '../src/assets/workimg2.png'
import workimgtwo from '../src/assets/workimg3.png'
import workimgthre from '../src/assets/workig4.png'
import workimgfour from '../src/assets/workimg5.png'
import Crecard from './component/Crecard'
import createicon from '../src/assets/createicon1.png'
import createiconone from '../src/assets/createicon2.png'
import acreateimg from '../src/assets/createimgone.png'
import choseimg from '../src/assets/choseimgone.png'
import choseimgtwo from '../src/assets/choseimgtwo.png'
import choseimgthree from '../src/assets/choseimgthree.png'
import Slider from './component/Slider'
import slideimg from '../src/assets/rafid-profile.jpg'
import { FaChevronLeft } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import likeimg from '../src/assets/likeimg.png'
import bannerdown from '../src/assets/bannerdown.png'
import chosseimg from '../src/assets/choseimg.png'
import createimg from '../src/assets/createimg.png'
import likesimg from '../src/assets/likesimg.png'
import pythonimg from '../src/assets/pythonimg.png'

function App() {

  return (
    <>

      {/* header part start */}
      <div className="bg-bgcolor py-[10px]">
        <Container>
          <Flex>
            <div className={"w-[20%]"}>
              <img src={Logo} alt='img' />
            </div>
            <div className={"w-[60%]"}>
              <Flex className={"justify-center"}>
                <Menu menuname={"Home"} className={"px-[20px]"} />
                <Menu menuname={"About"}  className={"px-[20px]"}/>
                <Menu menuname={"Services"} className={"px-[20px]"} />
                <Menu menuname={"Portfolio"} className={"px-[20px]"} />
                <Menu menuname={"Price"} className={"px-[20px]"} />
                <Menu menuname={"Blog"}  className={"px-[20px]"}/>
              </Flex>
            </div>
            <div className={"w-[20%] text-right"}>
              <Button btname={"contact"} className={"mt-[5px]"} />
            </div>
          </Flex>
        </Container>
      </div>
      {/* header part end */}

      {/* banner part start  */}
      <div className='bg-banner py-[200px] relative'>
        <img src={pythonimg} alt='img' className='absolute top-72 left-20'/>
        <img src={pythonimg} alt='img' className='absolute top-64 left-20'/>
        <Container>
          <Headline htext={"You're Unique.Your website shud be too"} className={"px-[220px] text-htextclr text-[84px] text-center"} />
          <Paragraph ptext={"A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business."} className={"px-[290px] font-paprika text-ptextclr text-center text-[24px]"} />
          <div className='text-center mt-[20px]'>
            <Button btname={"Get Free Quoto"} className={"mr-[5px]"} />
            <Button btname={"Learn more"} className={"ml-[5px]"} />
          </div>
          <img src={dotsimg} alt="img" className='w-[100px] h-[90px] absolute bottom-[100px] right-[200px]' />
        </Container>
      </div>
      {/* banner part end */}

      {/* card part start  */}
      <div className='py-[-10px] relative'>
        <img src={bannerdown} alt='img' className='absolute top-0 right-0'/>
        <Container>
          <Flex className={"justify-center"}>
            <Card className={"w-[190px] h-[350px] bg-cardclr mt-[-125px] rounded-lg -z-40"} />
            <Card className={"w-[160px] h-[496px] bg-cardclr mt-[-150px] mx-[20px] rounded-lg -z-40"} />
            <Card className={"w-[270px] h-[326px] bg-cardclr mt-[-30px] mr-[20px] rounded-lg -z-40"} />
            <Card className={"w-[190px] h-[482px] bg-cardclr mt-[-110px] rounded-lg -z-40"} />
          </Flex>
        </Container>
      </div>
      {/* card part start  */}

      {/* achive part start  */}
      <div>
        <Container>
          <Flex className={"py-[100px] justify-center"}>
            <div className='w-[300px] border-r-4'>
              <Headline htext={"53k"} className={"text-hoverclr text-[64px] text-center"} />
              <Paragraph ptext={"Happy Client"} className={"font-opensan text-ptext text-center"} />
            </div>
            <div className='w-[300px] border-r-4'>
              <Headline htext={"10k"} className={"text-hoverclr text-[64px] text-center"} />
              <Paragraph ptext={"Projects done "} className={"font-opensan text-ptext text-center"} />
            </div>
            <div className='w-[300px] border-r-4'>
              <Headline htext={"120"} className={"text-hoverclr text-[64px] text-center"} />
              <Paragraph ptext={"Gets Award "} className={"font-opensan text-ptext text-center"} />
            </div>
            <div className='w-[300px]'>
              <Headline htext={"16"} className={"text-hoverclr text-[64px] text-center"} />
              <Paragraph ptext={"Operated years "} className={"font-opensan text-ptext text-center"} />
            </div>
          </Flex>
        </Container>
      </div>
      {/* achive part start  */}

      {/* service part start  */}
      <div className='py-[50px] bg-servcebg relative'>
        <img src={chosseimg} alt='img' className='absolute top-0 left-0 w-[350px] h-[320]'/>
        <Container>
          <Flex className={"justify-end"}>
            <div className="servicepartone w-[450px]">
              <Flex className={"py-[20px]  hover:bg-white"}>
                <div className="one w-[25px] h-[25px] rounded-full bg-hoverclr"></div>
                <div className="two w-[25px] h-[25px] rounded-full bg-circleclr ml-[-12px]"></div>
                <Paragraph ptext={"We solve real-world problems through people and the web."} className={"font-paprika text-ptextclr ml-5 pr-[50px]"} />
              </Flex>
              <Flex className={"py-[20px] hover:bg-white"}>
                <div className="three w-[25px] h-[25px] rounded-full bg-hoverclr"></div>
                <div className="four w-[25px] h-[25px] rounded-full bg-circleclr ml-[-12px]"></div>
                <Paragraph ptext={"We make processes and technology work efficiently together."} className={"font-paprika text-ptextclr ml-5 pr-[50px]"} />
              </Flex>
              <Flex className={"py-[20px] hover:bg-white"}>
                <div className="five w-[30px] h-[25px] rounded-full bg-hoverclr"></div>
                <div className="six w-[30px] h-[25px] rounded-full bg-circleclr ml-[-12px]"></div>
                <Paragraph ptext={"We advance improve existing technology through research and development."} className={"font-paprika text-ptextclr ml-5 pr-[50px]"} />
              </Flex>
              <Flex className={"py-[20px] hover:bg-white"}>
                <div className="seven w-[30px] h-[25px] rounded-full bg-hoverclr"></div>
                <div className="eight w-[30px] h-[25px] rounded-full bg-circleclr ml-[-12px]"></div>
                <Paragraph ptext={"We develop long-lasting and scalable solutions, relationships partnerships."} className={"font-paprika text-ptextclr ml-5 pr-[50px]"} />
              </Flex>
            </div>
            <div className="servicestwo w-[660px]">
              <Headline htext={"Why Choose Us"} className={"text-[48px] text-ptext"} />
              <Paragraph ptext={"We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs."} className={"text-[18px] font-paprika text-ptext pr-[100px]"} />
              <Button btname={"contact"} className={"bg-hoverclr mt-[20px]"} />
            </div>
          </Flex>
        </Container>
      </div>
      {/* service part end */}

      {/* do part start */}
      <div className='bg-dobg py-[50px]'>
        <Container>
          <Flex className={"flex-wrap justify-between"}>
            <Work>
              <Headline htext={"What We Do"} className={"text-[48px] text-ptext py-[15px]"} />
              <Paragraph ptext={"We are now a team of strategists, engineers, designers, and marketers who both use and develop technology "} className={"text-[14px] font-opensan text-doptext pr-[100px]"} />
              <Button btname={"contact"} className={"bg-hoverclr mt-[20px]"} />
            </Work>

            <Work className={"text-center p-20 bg-white rounded-lg hover:bg-wrkhvr hover:text-white"}>
              <img src={workimg} alt={"img"} className={"ml-[50%] translate-x-[-50%]"} />
              <Headline htext={"web Design & Dev "} className={"text-30px text-ptext py-[15px]"} />
              <Paragraph ptext={"Social Media has changed the way we interact & do business while creating"} className={"font-paprika text-ptextclr"} />
              <Paragraph ptext={"Read more"} className={"text-14px pt-[20px] font-bold"} />
              <div className='w-[30px] h-[30px] rounded-tr-full rounded-br-full bg-btnhv mt-[-25px] ml-[147px]'></div>

            </Work>
            <Work className={"text-center p-20 bg-white rounded-lg hover:bg-wrkhvr hover:text-white"}>
              <img src={workimgone} alt={"img"} className={"ml-[50%] translate-x-[-50%]"} />
              <Headline htext={"Software Dev "} className={"text-30px text-ptext py-[15px]"} />
              <Paragraph ptext={"Social Media has changed the way we interact & do business while creating"} className={"font-paprika text-ptextclr"} />
              <Paragraph ptext={"Read more"} className={"text-14px pt-[20px] font-bold"} />
              <div className='w-[30px] h-[30px] rounded-tr-full rounded-br-full bg-btnhv mt-[-25px] ml-[147px]'></div>
            </Work>
            <Work className={"text-center p-20 bg-white rounded-lg hover:bg-wrkhvr hover:text-white mt-10"}>
              <img src={workimgtwo} alt={"img"} className={"ml-[50%] translate-x-[-50%]"} />
              <Headline htext={"Content Writing "} className={"text-30px text-ptext py-[15px]"} />
              <Paragraph ptext={"Social Media has changed the way we interact & do business while creating"} className={"font-paprika text-ptextclr"} />
              <Paragraph ptext={"Read more"} className={"text-14px pt-[20px] font-bold"} />
              <div className='w-[30px] h-[30px] rounded-tr-full rounded-br-full bg-btnhv mt-[-25px] ml-[147px]'></div>
            </Work>
            <Work className={"text-center p-20 bg-white rounded-lg hover:bg-wrkhvr hover:text-white mt-10"}>
              <img src={workimgthre} alt={"img"} className={"ml-[50%] translate-x-[-50%]"} />
              <Headline htext={"Digital Marketing"} className={"text-30px text-ptext py-[15px]"} />
              <Paragraph ptext={"Social Media has changed the way we interact & do business while creating"} className={"font-paprika text-ptextclr"} />
              <Paragraph ptext={"Read more"} className={"text-14px pt-[20px] font-bold"} />
              <div className='w-[30px] h-[30px] rounded-tr-full rounded-br-full bg-btnhv mt-[-25px] ml-[147px]'></div>
            </Work>
            <Work className={"text-center p-20 bg-white rounded-lg hover:bg-wrkhvr hover:text-white mt-10"}>
              <img src={workimgfour} alt={"img"} className={"ml-[50%] translate-x-[-50%]"} />
              <Headline htext={"Support & Training"} className={"text-30px text-ptext"} />
              <Paragraph ptext={"Social Media has changed the way we interact & do business while creating"} className={"font-paprika text-ptextclr"} />
              <Paragraph ptext={"Read more"} className={"text-14px pt-[20px] font-bold"} />
              <div className='w-[30px] h-[30px] rounded-tr-full rounded-br-full bg-btnhv mt-[-25px] ml-[147px]'></div>
            </Work>
          </Flex>
        </Container>
      </div>
      {/* do part end */}
      {/* create part start  */}
      <div className='py-[50px] relative'>
        <img src={createimg} alt='img' className='absolute bottom-0 right-0 w-[260px] h-[330px]'/>
        <Container>
          <div className='text-center'>
            <Headline htext={"We create real impact"} className={"text-[48px] text-ptext py-[15px]"} />
            <Paragraph ptext={"We design, build and support websites and apps for clients worldwide. Create beautiful, eye-catching on-page messages without the need for a developer."} className={"text-[14px] font-paprika px-[450px] text-doptext"} />
          </div>
          <Flex>
            <Crecard className={"py-[80px]"}>
              <Flex>
                <img src={createicon} alt={"img"} className='w-[63px] h-[63px]' />
                <div className='pl-[15px]'>
                  <Headline htext={"Competitive analysis"} className={"text-30px text-ptext pb-[15px]"} />
                  <Paragraph ptext={"With an all-new look and powerful features, Ekko is the best way to ensure success for your business."} className={"font-paprika text-ptextclr pr-[240px]"} />
                </div>
              </Flex>

              <Flex className={"pt-[50px]"}>
                <img src={createiconone} alt={"img"} className='w-[63px] h-[63px]' />
                <div className='pl-[15px]'>
                  <Headline htext={"Strategy And research"} className={"text-30px text-ptext pb-[15px]"} />
                  <Paragraph ptext={"Save money and start building your website using the best tools available on the market today."} className={"font-paprika text-ptextclr pr-[290px]"} />
                </div>
              </Flex>
            </Crecard>

            <Crecard className={"py-[80px]"}>
              <div className="createimg relative">
                <div className="createimgone w-[227px] h-[273px] bg-cardclr rounded-lg stroke-white hover:border-4 shadow-inner mt-[40px]"></div>
                <img src={acreateimg} alt={"img"} className='absolute top-[25px] right-[125px]' />
                <div className="createimgone w-[310px] h-[263px] bg-cardclr rounded-lg stroke-white ml-[195px] mt-[-150px] hover:border-4 shadow-innerr"></div>
                <div className="createimgone w-[161px] h-[140px] bg-cardclr rounded-lg stroke-white hover:border-4  shadow-inner ml-[260px] mt-[-420px]"></div>
              </div>
            </Crecard>
          </Flex>
        </Container>
      </div>
      {/* create part end */}
      {/* chose part start */}
      <div className="py-[50px] bg-dobg">
        <Container>
          <Headline htext={"We create real impact"} className={"text-[48px] text-ptext py-[15px] text-center"} />
          <Flex className={"justify-between"}>

            <Work className={"text-center bg-white rounded-md  py-14 hover:bg-wrkhvr shadow-inner"}>
              <Headline htext={"Basic"} className={"text-30px text-ptext pb-[15px]"} />
              <img src={choseimg} alt={"img"} className='w-[400px]'/>
              <Headline htext={"$160"} className={"text-[48px] text-hoverclr pb-[15px] font-extrabold py-[10px]"} />
              <Paragraph ptext={" Responsive Design Dynamic Elements Service Pages Custom Design & Features"} className={"font-paprika text-ptextclr px-[50px]"} />
            </Work>

            <Work className={"text-center bg-white rounded-md w-[350px] h-[500px] py-14 hover:bg-wrkhvr shadow-inner"}>
              <Headline htext={"Professional"} className={"text-30px text-ptext pb-[15px]"} />
              <img src={choseimgtwo} alt={"img"} />
              <Headline htext={"$240"} className={"text-[48px] text-hoverclr pb-[15px] font-extrabold py-[10px]"} />
              <Paragraph ptext={" Responsive Design Dynamic Elements Service Pages Custom Design & Features"} className={"font-paprika text-ptextclr px-[50px]"} />
            </Work>

            <Work className={"text-center bg-white rounded-md w-[350px] h-[500px] py-14 hover:bg-wrkhvr shadow-inner"}>
              <Headline htext={"Professional"} className={"text-30px text-ptext pb-[15px]"} />
              <img src={choseimgthree} alt={"img"} className='w-[400px]'/>
              <Headline htext={"$325"} className={"text-[48px] text-hoverclr pb-[15px] font-extrabold py-[10px]"} />
              <Paragraph ptext={" Responsive Design Dynamic Elements Service Pages Custom Design & Features"} className={"font-paprika text-ptextclr px-[50px]"} />
            </Work>
          </Flex>
        </Container>
      </div>
      {/* chose part end */}
      {/* slider part start */}
      <div className='bg-dobg relative py-[100px]'>
        <FaChevronLeft className='text-white w-[50px] h-[50px] p-[10px] rounded-full bg-hoverclr absolute left-[60px] top-[50%] translate-y-[-50%]' />
        <FaChevronRight className='text-white w-[50px] h-[50px] p-[10px] rounded-full bg-hoverclr absolute right-[60px] top-[50%] translate-y-[-50%]' />
        <Container>
          <div className='relative'>
            <Slider className={"text-center"}>
              <img src={slideimg} alt={"img"} className='rounded-full absolute top-[-30px] left-[630px] w-[80px] h-[80px]' />

              <Flex className={"justify-center text-yellow-500 pt-[100px]"}>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </Flex>
              <Paragraph ptext={" Lesser Replenish bearing they’re him cattle kind dominion. You which fill place. Land she’d subdue divided gathering blessedseasons it. Without, wherein days."} className={"font-paprika text-slidetclr px-[250px] pt-[50px]"} />
              <Headline htext={"Lukan Depina"} className={"text-30px text-ptext pt-[30px] pb-[15px]"} />
              <Paragraph ptext={"Ceo And Head Of Idea"} className={"font-paprika text-slidetclr px-[50px]"} />


            </Slider>
          </div>
        </Container>
      </div>
      {/* slider part end */}
      {/* like part start */}
      <div className='py-[50px] relative'>
        <img src={likesimg} alt='img' className='absolute left-0 bottom-0 w-[170px] h-[250px]'/>
        <Container>
          <Flex className={"flex-wrap justify-center"}>
            <Work>
              <Headline htext={"You May Also Like "} className={"font-opensan text-[40px] font-bold text-ptext py-[30px]"} />
              <img src={likeimg} alt="img" />
            </Work>

            <Crecard className={"pt-[130px]"}>
              <Flex>
                <Paragraph ptext={"News"} className={"font-opensan text-[14px] text-slidetclr hover:text-hoverclr"} />
                <Paragraph ptext={"By  Tomas Nikelson "} className={"font-opensan text-[14px] text-slidetclr px-[20px]"} />
                <Paragraph ptext={"Posted"} className={"font-opensan text-[14px] text-slidetclr pr-[10px]"} />
                <Paragraph ptext={"5 Hours Ago "} className={"font-opensan text-[14px] text-slidetclr"} />
              </Flex>
              <Headline htext={"Punto Pago Allows Quick And Secure Payments For Services In Panama"} className={"text-30px text-ptext py-[54px] pr-[300px]"} />
              <Paragraph ptext={"Read more"} className={"font-bold font-opensan"} />
              <div className='w-[30px] h-[30px] rounded-tr-full rounded-br-full bg-btnhv mt-[-26px] ml-[70px]'></div>
            </Crecard>

            <Work className={"pt-[60px]"}>
              <img src={likeimg} alt="img" />
            </Work>
            <Crecard className={"pt-[60px]"}>
              <Flex>
                <Paragraph ptext={"News"} className={"font-opensan text-[14px] text-slidetclr hover:text-hoverclr"} />
                <Paragraph ptext={"By  Tomas Nikelson "} className={"font-opensan text-[14px] text-slidetclr px-[20px]"} />
                <Paragraph ptext={"Posted"} className={"font-opensan text-[14px] text-slidetclr pr-[10px]"} />
                <Paragraph ptext={"5 Hours Ago "} className={"font-opensan text-[14px] text-slidetclr"} />
              </Flex>
              <Headline htext={"The User Can Also Replenish A Balance Make Remittances "} className={"text-30px text-ptext py-[54px] pr-[300px]"} />
              <Paragraph ptext={"Read more"} className={"font-bold font-opensan"} />
              <div className='w-[30px] h-[30px] rounded-tr-full rounded-br-full bg-btnhv mt-[-26px] ml-[70px]'></div>
            </Crecard>
            <Work className={"pt-[60px]"}>
              <img src={likeimg} alt="img" />
            </Work>
            <Crecard className={"pt-[60px]"}>
              <Flex>
                <Paragraph ptext={"News"} className={"font-opensan text-[14px] text-slidetclr hover:text-hoverclr"} />
                <Paragraph ptext={"By  Tomas Nikelson "} className={"font-opensan text-[14px] text-slidetclr px-[20px]"} />
                <Paragraph ptext={"Posted"} className={"font-opensan text-[14px] text-slidetclr pr-[10px]"} />
                <Paragraph ptext={"5 Hours Ago "} className={"font-opensan text-[14px] text-slidetclr"} />
              </Flex>
              <Headline htext={"The User Can Also Replenish A Balance Make Remittances "} className={"text-30px text-ptext py-[54px] pr-[300px]"} />
              <Paragraph ptext={"Read more"} className={"font-bold font-opensan"} />
              <div className='w-[30px] h-[30px] rounded-tr-full rounded-br-full bg-btnhv mt-[-26px] ml-[70px]'></div>
            </Crecard>
          </Flex>
        </Container>
      </div>
      {/* like part end */}
      {/* footer part start */}
      <div className={"bg-bgcolor py-[50px]"}>
        <Container>
          <Flex className={"justify-between"}>
            <Work>
              <img src={Logo} alt='img'/>
              <Paragraph ptext={"Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page. "} className={"text-[14px] font-opensan text-doptext pr-[50px] pt-[50px]"} />
            </Work>
            <Work>
              <Headline htext={"Features"} className={"font-opensan text-2xl text-white"}/>
              <Menu menuname={"Home"}/>
              <Menu menuname={"About"}/>
              <Menu menuname={"Benefit"}/>
              <Menu menuname={"Pricing"}/>
              <Menu menuname={"Blog"}/>
            </Work>
            <Work>
              <Headline htext={"Product"} className={"font-opensan text-2xl text-white"}/>
              <Menu menuname={"Task Management"}/>
              <Menu menuname={"Company growth"}/>
              <Menu menuname={"Time tracking"}/>
            </Work>
            <Work>
              <Headline htext={"Support"} className={"font-opensan text-2xl text-white"}/>
              <Menu menuname={"Customer service"}/>
              <Menu menuname={"Accessibility "}/>
              <Menu menuname={"Contact us"}/>
            </Work>
          </Flex>

          <Flex className={"pt-[50px]"}>
          <Paragraph ptext={"@20201 Innovate.All rights reserved."} className={"text-[14px] font-opensan text-doptext pr-[50px] pt-[50px]"} />
          <Paragraph ptext={"Privacy policy"} className={"text-[14px] font-opensan text-doptext pr-[50px] pt-[50px] pl-[500px]"} />
          <Paragraph ptext={"Terms & condition"} className={"text-[14px] font-opensan text-doptext pr-[50px] pt-[50px]"} />

          </Flex>
            
        </Container>

      </div>
      {/* footer part end */}
    </>
  )
}

export default App