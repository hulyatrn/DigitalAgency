import React from "react";
import star from "../img/Star.png";
import rectangle from "../img/Rectangle.png";
import rectangle6 from "../img/Rectangle6.png";
import Group from "../img/Group.png";
import Group37 from "../img/Group 37.png";
import Group44 from "../img/Group 44.png";
import Ellipse from "../img/Ellipse 7.png";
import Ellipse5 from "../img/Ellipse 5.png";
import Ellipse6 from "../img/Ellipse 6.png";
import Group25 from "../img/Group 25.png";
import Group23 from "../img/Group 23.png";
import Ornament from "../img/Ornament.png";
import Rectangle12 from "../img/Rectangle 12.png";
import Rectangle11 from "../img/Rectangle 11.png";
import Rectangle10 from "../img/Rectangle 10.png";
import Rectangle9 from "../img/Rectangle 9.png";
import Rectangle4 from "../img/Rectangle 4.png";
import Rectangle13 from "../img/Rectangle 13.png";
import Rectangle14 from "../img/Rectangle 14.png";
import Rectangle18 from "../img/Rectangle 18.png";
import Rectangle19 from "../img/Rectangle 19.png";
import Rectangle20 from "../img/Rectangle 20.png";
import Rectangle21 from "../img/Rectangle 21.png";
import Rectangle22 from "../img/Rectangle 22.png";
import Rectangle23 from "../img/Rectangle 23.png";
import { AiFillCaretDown } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Home() {
  return (
    <section>
      <div>
        <div>
        <img className="star-img absolute	ml-[1116px] w-[54px] h-[54px]" src={star} />
        <img className="absolute w-[54px] h-[54px] mt-28 ml-5" src={star} />
        <img className="world-text absolute pl-[248px] mt-6" src={Group25} />
        <div className="text-white font-bold">
          <h1 className="digital-title text-[150px] pl-[484px]">Digital</h1>
          <h1 className="agency-title text-[150px] pl-[331px] leading-[181px]">Agency</h1>
        </div>
        </div>
        <div className="section-container flex">
          <div className="digital-img ml-9 mt-[175px]">
            <img src={rectangle6} />
          </div>
          <div className="full-service-text text-text-title pl-10 mt-[50px] font-normal text-2xl leading-10">
            <p>
              Full-service design support that growing B2B <br />
              <span>companies need. World leading agency.</span>
            </p>
            <div className="bg-button-title w-[200px] h-[60px] rounded-[30px] mt-11">
              <button className="flex text-regal-blue text-lg font-medium pl-6 pt-[17px]">
                Our Projects
                <div className="mt-2 ml-[10px]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15 1.125C15 0.95924 14.9341 0.800269 14.8169 0.683058C14.6997 0.565848 14.5408 0.5 14.375 0.5H6.875C6.70924 0.5 6.55026 0.565848 6.43305 0.683058C6.31584 0.800269 6.25 0.95924 6.25 1.125C6.25 1.29076 6.31584 1.44973 6.43305 1.56694C6.55026 1.68415 6.70924 1.75 6.875 1.75H12.8662L0.182496 14.4325C0.124386 14.4906 0.0782908 14.5596 0.046842 14.6355C0.0153931 14.7114 -0.000793457 14.7928 -0.000793457 14.875C-0.000793457 14.9572 0.0153931 15.0386 0.046842 15.1145C0.0782908 15.1904 0.124386 15.2594 0.182496 15.3175C0.240606 15.3756 0.309592 15.4217 0.385517 15.4532C0.461441 15.4846 0.542816 15.5008 0.624996 15.5008C0.707176 15.5008 0.788551 15.4846 0.864475 15.4532C0.9404 15.4217 1.00939 15.3756 1.0675 15.3175L13.75 2.63375V8.625C13.75 8.79076 13.8158 8.94973 13.9331 9.06694C14.0503 9.18415 14.2092 9.25 14.375 9.25C14.5408 9.25 14.6997 9.18415 14.8169 9.06694C14.9341 8.94973 15 8.79076 15 8.625V1.125Z"
                      fill="#0A142F"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div>
              <p className="down-div text-sm text-text-scrool rotate-[-90deg] pl-12 ml-64">
                Scroll Down
              </p>
              <AiFillCaretDown className="down-svg absolute w-[18px] h-4 ml-[378px] mt-[72px]" />
            </div>
            <img className="ornament-img absolute mt-36 ml-[-115px]" src={Ornament} />
          </div>
          <div className="mt-[-144px]">
            <div>
              <img className="home-img w-[390px] h-[475px] ml-16" src={rectangle} />
              <img
                className="start-img absolute w-[54px] h-[54px] mt-[-372px] ml-[455px]"
                src={star}
              />
            </div>
            <div className="absolute ml-[257px] mt-[-85px]">
              <img src={Ellipse} />
              <img className="mt-[-135px] ml-[15px]" src={Group} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-text pt-[120px] px-[150px] py-[150px]">
        <div className="creative-container flex items-center justify-between">
          <div>
            <h1 className="text-white text-5xl font-bold leading-[58px] pl-3 mb-10">
              We Are A Creative <br />
              Digital Agency
            </h1>
            <p className="creative-container-text w-[545px] text-base text-text-title leading-[30px]">
              Dalio started with a vision for building an agency to solve the
              business problems of the future, and that requires a different
              model.
              <br />
              We’re not a branding agency that dabbles in tech, and we’re not a
              development shop that leaves you hanging when it’s time <br />
              to go to market.
            </p>
            <p className=" text-base text-text-title leading-[30px] mt-10 mb-12">
              We start with human experience and layer in technology and
              <br />
              marketing to deliver truly integrated digital solutions. <br />
              This unique set of capabilities sets us apart from other agencies
              <br />
              and positions DIG to help you attack your goals.
            </p>
            <div className="bg-button-title w-[200px] h-[60px] rounded-[30px]">
              <button className="flex text-regal-blue text-lg font-medium pl-6 pt-[17px]">
                Contact us
                <div className="mt-2 ml-[10px]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15 1.125C15 0.95924 14.9341 0.800269 14.8169 0.683058C14.6997 0.565848 14.5408 0.5 14.375 0.5H6.875C6.70924 0.5 6.55026 0.565848 6.43305 0.683058C6.31584 0.800269 6.25 0.95924 6.25 1.125C6.25 1.29076 6.31584 1.44973 6.43305 1.56694C6.55026 1.68415 6.70924 1.75 6.875 1.75H12.8662L0.182496 14.4325C0.124386 14.4906 0.0782908 14.5596 0.046842 14.6355C0.0153931 14.7114 -0.000793457 14.7928 -0.000793457 14.875C-0.000793457 14.9572 0.0153931 15.0386 0.046842 15.1145C0.0782908 15.1904 0.124386 15.2594 0.182496 15.3175C0.240606 15.3756 0.309592 15.4217 0.385517 15.4532C0.461441 15.4846 0.542816 15.5008 0.624996 15.5008C0.707176 15.5008 0.788551 15.4846 0.864475 15.4532C0.9404 15.4217 1.00939 15.3756 1.0675 15.3175L13.75 2.63375V8.625C13.75 8.79076 13.8158 8.94973 13.9331 9.06694C14.0503 9.18415 14.2092 9.25 14.375 9.25C14.5408 9.25 14.6997 9.18415 14.8169 9.06694C14.9341 8.94973 15 8.79076 15 8.625V1.125Z"
                      fill="#0A142F"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="digital-container flex pl-[46px]">
            <div className="pr-7">
              <img
                className="mb-[26px] w-[264px] h-[264px]"
                src={Rectangle12}
              />
              <img className="w-[220px] h-[220px]" src={Rectangle11} />
            </div>
            <div className="mt-[60px]">
              <div className="absolute mt-[-57px] ml-10">
                <svg
                  width="11"
                  height="104"
                  viewBox="0 0 11 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.42194 103.22C9.78294 103.574 10.3682 103.574 10.7292 103.22C11.0903 102.867 11.0903 102.293 10.7292 101.94L1.57806 92.9735C1.21706 92.6198 0.631757 92.6198 0.270753 92.9735C-0.0902516 93.3272 -0.0902513 93.9006 0.270753 94.2543L9.42194 103.22ZM9.42193 92.9735C9.78294 93.3272 10.3682 93.3272 10.7292 92.9735C11.0903 92.6198 11.0903 92.0463 10.7292 91.6926L1.57806 82.7265C1.21706 82.3728 0.631756 82.3728 0.270752 82.7265C-0.090252 83.0802 -0.0902517 83.6537 0.270752 84.0074L9.42193 92.9735ZM10.7292 82.7266C10.3682 83.0803 9.78294 83.0803 9.42193 82.7266L0.270752 73.7605C-0.0902522 73.4068 -0.0902525 72.8333 0.270752 72.4796C0.631756 72.1259 1.21706 72.1259 1.57806 72.4796L10.7292 81.4457C11.0903 81.7994 11.0903 82.3729 10.7292 82.7266ZM9.42193 72.4796C9.78294 72.8333 10.3682 72.8333 10.7292 72.4796C11.0902 72.1259 11.0902 71.5524 10.7292 71.1987L1.57806 62.2326C1.21706 61.8789 0.631755 61.8789 0.270751 62.2326C-0.0902529 62.5863 -0.0902526 63.1598 0.270751 63.5135L9.42193 72.4796ZM10.7292 62.2327C10.3682 62.5864 9.78294 62.5864 9.42193 62.2327L0.270751 53.2666C-0.0902531 52.9129 -0.0902534 52.3394 0.270751 51.9857C0.631755 51.632 1.21706 51.632 1.57806 51.9857L10.7292 60.9518C11.0902 61.3055 11.0902 61.879 10.7292 62.2327ZM9.42193 51.9857C9.78294 52.3394 10.3682 52.3394 10.7292 51.9857C11.0902 51.632 11.0902 51.0586 10.7292 50.7049L1.57806 41.7388C1.21706 41.3851 0.631754 41.3851 0.27075 41.7388C-0.0902538 42.0925 -0.0902535 42.6659 0.27075 43.0196L9.42193 51.9857ZM10.7292 41.7388C10.3682 42.0925 9.78294 42.0925 9.42193 41.7388L0.27075 32.7727C-0.0902539 32.419 -0.0902543 31.8455 0.27075 31.4918C0.631754 31.1381 1.21706 31.1381 1.57806 31.4918L10.7292 40.4579C11.0902 40.8116 11.0902 41.3851 10.7292 41.7388ZM9.42193 31.4919C9.78294 31.8456 10.3682 31.8456 10.7292 31.4919C11.0902 31.1382 11.0902 30.5647 10.7292 30.211L1.57806 21.2449C1.21706 20.8912 0.631754 20.8912 0.270749 21.2449C-0.0902547 21.5986 -0.0902544 22.1721 0.270749 22.5258L9.42193 31.4919ZM10.7292 21.2449C10.3682 21.5986 9.78294 21.5986 9.42193 21.2449L0.270749 12.2788C-0.0902548 11.9251 -0.0902552 11.3516 0.270749 10.9979C0.631753 10.6442 1.21706 10.6442 1.57806 10.9979L10.7292 19.964C11.0902 20.3177 11.0902 20.8912 10.7292 21.2449ZM9.42193 10.998C9.78293 11.3517 10.3682 11.3517 10.7292 10.998C11.0902 10.6443 11.0902 10.0708 10.7292 9.71711L1.57806 0.750999C1.21706 0.397293 0.631753 0.397293 0.270748 0.750999C-0.0902556 1.10471 -0.0902553 1.67818 0.270749 2.03188L9.42193 10.998Z"
                    fill="white"
                  />
                </svg>
              </div>
              <img className="w-[220px] h-[220px]" src={Rectangle10} />
              <img className="w-[264px] h-[264px] mt-[26px]" src={Rectangle9} />
              <div className="absolute mt-[-95px] ml-[115px]">
                <img src={Ornament} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="number-div px-[237px] mb-[120px]">
        <div className="number-container flex items-center justify-between">
          <div className="text-center">
            <h1 className="text-5xl mb-2 text-white font-bold">4.8k</h1>
            <p className="text-text-title text-xl">Job Completed</p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl mb-2 text-white font-bold">12+</h1>
            <p className="text-text-title text-xl">Industry Experience</p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl mb-2 text-white font-bold">2.5k+</h1>
            <p className="text-text-title text-xl">World wide clients</p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl mb-2 text-white font-bold">120+</h1>
            <p className="text-text-title text-xl">Won Awards</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex">
          <div className="bg-container-div bg-button-title w-[576px] h-[850px]">
            <div className="bg-container-img absolute mt-[100px] ml-[86px]">
              <div className="absolute ml-[440px] mt-[-55px]">
                <img src={Ornament} />
              </div>
              <img className="w-[558px] h-[666px]" src={Rectangle4} />
              <div className="absolute mt-[-83px] ml-[-31px]">
                <img src={Group23} />
              </div>
            </div>
          </div>
          <div className="approach-container bg-bg-container w-[864px] h-[850px] text-center">
            <div>
              <h1 className="text-white text-5xl font-bold pt-[151px]">
                Our Solution Approach
              </h1>
              <div className="ml-[148px]">
                <div className="flex items-center mt-[50px]">
                  <IoMdCheckmarkCircleOutline className="text-white text-2xl" />
                  <h5 className="text-white text-2xl font-bold ml-5">
                    Data Analysis with problem factor
                  </h5>
                </div>
                <p className="text-left text-text-title text-base leading-7 mt-[18px] w-[463px] pl-[46px]">
                  Delivering the spatial expertise of the largest, most
                  <br />
                  sophisticated performance marketing agencies, while
                  <br />
                  providing intimate, boutique-like support.
                </p>
              </div>
              <div className="ml-[148px]">
                <div className="flex items-center mt-[42px]">
                  <IoMdCheckmarkCircleOutline className="text-white text-2xl" />
                  <h5 className="text-white text-2xl font-bold ml-5">
                    Functionality solution for users
                  </h5>
                </div>
                <p className="text-left text-text-title text-base leading-7 mt-[18px] w-[463px] pl-[46px]">
                  Delivering the spatial expertise of the largest, most
                  <br />
                  sophisticated performance marketing agencies..
                </p>
              </div>
              <div className="ml-[148px]">
                <div className="flex items-center mt-[42px]">
                  <IoMdCheckmarkCircleOutline className="text-white text-2xl" />
                  <h5 className="text-white text-2xl font-bold ml-5">
                    Latest technology enabled
                  </h5>
                </div>
                <p className="text-left text-text-title text-base leading-7 mt-[18px] w-[463px] pl-[46px]">
                  Delivering the spatial expertise of the largest, most
                  <br />
                  sophisticated performance marketing agencies, while
                  <br />
                  providing intimate, boutique-like support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-div px-[150px]">
        <div className="flex items-center justify-around mt-[120px] gap-7">
          <div>
            <h2 className="text-white text-5xl font-bold leading-[58px]">
              Service we can <br />
              help you
            </h2>
            <div className="w-[555px] h-[522px] bg-bg-container rounded-tl-[50px] mt-10">
              <div className="px-[34px] pt-[94px]">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.4679 8.8873L47.1126 15.5289L40.4679 8.8873ZM44.7408 3.03626L26.7736 21.0035C25.8452 21.9306 25.2121 23.1117 24.954 24.398L23.2943 32.7056L31.6019 31.0428C32.8882 30.7856 34.0678 30.155 34.9964 29.2263L52.9637 11.2591C53.5036 10.7192 53.9319 10.0782 54.2241 9.37275C54.5163 8.66731 54.6667 7.91123 54.6667 7.14767C54.6667 6.38411 54.5163 5.62803 54.2241 4.92259C53.9319 4.21715 53.5036 3.57617 52.9637 3.03626C52.4237 2.49634 51.7828 2.06805 51.0773 1.77585C50.3719 1.48365 49.6158 1.33325 48.8522 1.33325C48.0887 1.33325 47.3326 1.48365 46.6272 1.77585C45.9217 2.06805 45.2808 2.49634 44.7408 3.03626V3.03626Z"
                    stroke="#FFC93E"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M48.3926 38.98V48.3919C48.3926 50.056 47.7316 51.652 46.5549 52.8287C45.3782 54.0054 43.7822 54.6665 42.1181 54.6665H7.60791C5.94379 54.6665 4.34783 54.0054 3.17112 52.8287C1.9944 51.652 1.33334 50.056 1.33334 48.3919V13.8818C1.33334 12.2176 1.9944 10.6217 3.17112 9.44496C4.34783 8.26825 5.94379 7.60718 7.60791 7.60718H17.0198"
                    stroke="#FFC93E"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h5 className="text-white text-3xl font-semibold mt-7">
                  Content Writing
                </h5>
                <p className="text-text-title text-base leading-[30px] mt-6 mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  consequat nunc id purus pretium sagittis. Nulla ridiculus
                  nullam bibendum luctus viverra. Eu pellentesque sem sed platea
                  diam dignissim duis purus.
                </p>
                <div className="border w-[200px] h-[60px] rounded-[30px]">
                  <button className="flex text-white text-lg font-medium pl-6 pt-[17px]">
                    Read More
                    <div className="mt-2 ml-[10px]">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 1.125C15 0.95924 14.9341 0.800269 14.8169 0.683058C14.6997 0.565848 14.5408 0.5 14.375 0.5H6.875C6.70924 0.5 6.55026 0.565848 6.43305 0.683058C6.31584 0.800269 6.25 0.95924 6.25 1.125C6.25 1.29076 6.31584 1.44973 6.43305 1.56694C6.55026 1.68415 6.70924 1.75 6.875 1.75H12.8662L0.182496 14.4325C0.124386 14.4906 0.0782908 14.5596 0.046842 14.6355C0.0153931 14.7114 -0.000793457 14.7928 -0.000793457 14.875C-0.000793457 14.9572 0.0153931 15.0386 0.046842 15.1145C0.0782908 15.1904 0.124386 15.2594 0.182496 15.3175C0.240606 15.3756 0.309592 15.4217 0.385517 15.4532C0.461441 15.4846 0.542816 15.5008 0.624996 15.5008C0.707176 15.5008 0.788551 15.4846 0.864475 15.4532C0.9404 15.4217 1.00939 15.3756 1.0675 15.3175L13.75 2.63375V8.625C13.75 8.79076 13.8158 8.94973 13.9331 9.06694C14.0503 9.18415 14.2092 9.25 14.375 9.25C14.5408 9.25 14.6997 9.18415 14.8169 9.06694C14.9341 8.94973 15 8.79076 15 8.625V1.125Z"
                          fill="#FFFF"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="service-brandig-div w-[555px] h-[522px] bg-bg-container rounded-bl-[50px] mt-10">
              <div className="px-[34px] pt-[94px]">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6667 26.1257V40.3331H27.8741L24.9111 37.3702H16.6296V29.0887L13.6667 26.1257Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M51.9926 48.1703L47.7407 43.8592V47.7407H6.25924V41.5925H9.2222V39.2222H6.25924V29.3703H9.2222V27H6.25924V17.5185H9.2222V15.1481H6.25924V6.86662L29.8741 30.3481V26.1703L5.82961 2.2444C5.62239 2.03547 5.35765 1.89298 5.06913 1.8351C4.78062 1.77721 4.4814 1.80656 4.20964 1.9194C3.93787 2.03224 3.70586 2.22346 3.54319 2.46867C3.38052 2.71389 3.29456 3.00199 3.29627 3.29625V49.2222C3.29627 49.6151 3.45236 49.9919 3.73019 50.2697C4.00802 50.5476 4.38484 50.7037 4.77776 50.7037H50.9407C51.235 50.7054 51.5231 50.6194 51.7683 50.4567C52.0135 50.2941 52.2047 50.0621 52.3176 49.7903C52.4304 49.5185 52.4597 49.2193 52.4019 48.9308C52.344 48.6423 52.2015 48.3775 51.9926 48.1703Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M35.8889 44.7776H41.8148C42.6006 44.7776 43.3543 44.4655 43.9099 43.9098C44.4656 43.3541 44.7778 42.6005 44.7778 41.8147V13.2221L41.3703 6.9554C41.1068 6.49884 40.7263 6.12085 40.2679 5.86043C39.8096 5.60001 39.29 5.46658 38.7629 5.47392C38.2239 5.4782 37.6962 5.62945 37.2368 5.91139C36.7773 6.19333 36.4035 6.59527 36.1555 7.07392L32.9259 13.2517V41.8147C32.9259 42.6005 33.2381 43.3541 33.7937 43.9098C34.3494 44.4655 35.103 44.7776 35.8889 44.7776ZM35.8889 13.9628L38.7629 8.37762L41.8148 13.9776V35.8887H35.8889V13.9628ZM35.8889 38.3035H41.8148V41.9184H35.8889V38.3035Z"
                    fill="#FFC93E"
                  />
                </svg>
                <h5 className="text-white text-3xl font-semibold mt-7">
                  Branding
                </h5>
                <p className="text-text-title text-base leading-[30px] mt-6 mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  consequat nunc id purus pretium sagittis. Nulla ridiculus
                  nullam bibendum luctus viverra. Eu pellentesque sem sed platea
                  diam dignissim duis purus.
                </p>
                <div className="border w-[200px] h-[60px] rounded-[30px]">
                  <button className="flex text-white text-lg font-medium pl-6 pt-[17px]">
                    Read More
                    <div className="mt-2 ml-[10px]">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 1.125C15 0.95924 14.9341 0.800269 14.8169 0.683058C14.6997 0.565848 14.5408 0.5 14.375 0.5H6.875C6.70924 0.5 6.55026 0.565848 6.43305 0.683058C6.31584 0.800269 6.25 0.95924 6.25 1.125C6.25 1.29076 6.31584 1.44973 6.43305 1.56694C6.55026 1.68415 6.70924 1.75 6.875 1.75H12.8662L0.182496 14.4325C0.124386 14.4906 0.0782908 14.5596 0.046842 14.6355C0.0153931 14.7114 -0.000793457 14.7928 -0.000793457 14.875C-0.000793457 14.9572 0.0153931 15.0386 0.046842 15.1145C0.0782908 15.1904 0.124386 15.2594 0.182496 15.3175C0.240606 15.3756 0.309592 15.4217 0.385517 15.4532C0.461441 15.4846 0.542816 15.5008 0.624996 15.5008C0.707176 15.5008 0.788551 15.4846 0.864475 15.4532C0.9404 15.4217 1.00939 15.3756 1.0675 15.3175L13.75 2.63375V8.625C13.75 8.79076 13.8158 8.94973 13.9331 9.06694C14.0503 9.18415 14.2092 9.25 14.375 9.25C14.5408 9.25 14.6997 9.18415 14.8169 9.06694C14.9341 8.94973 15 8.79076 15 8.625V1.125Z"
                          fill="#FFFF"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="service-div">
            <div className="border w-[200px] h-[60px] rounded-[30px] ml-[340px] absolute mt-[90px]">
              <button className="flex text-right text-white text-lg font-medium pl-6 pt-[17px]">
                See All
                <div className="mt-2 ml-[10px]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15 1.125C15 0.95924 14.9341 0.800269 14.8169 0.683058C14.6997 0.565848 14.5408 0.5 14.375 0.5H6.875C6.70924 0.5 6.55026 0.565848 6.43305 0.683058C6.31584 0.800269 6.25 0.95924 6.25 1.125C6.25 1.29076 6.31584 1.44973 6.43305 1.56694C6.55026 1.68415 6.70924 1.75 6.875 1.75H12.8662L0.182496 14.4325C0.124386 14.4906 0.0782908 14.5596 0.046842 14.6355C0.0153931 14.7114 -0.000793457 14.7928 -0.000793457 14.875C-0.000793457 14.9572 0.0153931 15.0386 0.046842 15.1145C0.0782908 15.1904 0.124386 15.2594 0.182496 15.3175C0.240606 15.3756 0.309592 15.4217 0.385517 15.4532C0.461441 15.4846 0.542816 15.5008 0.624996 15.5008C0.707176 15.5008 0.788551 15.4846 0.864475 15.4532C0.9404 15.4217 1.00939 15.3756 1.0675 15.3175L13.75 2.63375V8.625C13.75 8.79076 13.8158 8.94973 13.9331 9.06694C14.0503 9.18415 14.2092 9.25 14.375 9.25C14.5408 9.25 14.6997 9.18415 14.8169 9.06694C14.9341 8.94973 15 8.79076 15 8.625V1.125Z"
                      fill="#FFFF"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div className="w-[555px] h-[522px] bg-bg-container rounded-tr-[50px] mt-10">
              <div className="px-[34px] pt-[94px] mt-[260px]">
                <svg
                  width="46"
                  height="56"
                  viewBox="0 0 46 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 41.3332H23M1.66669 6.66658V49.3332C1.66669 50.7477 2.22859 52.1043 3.22878 53.1045C4.22898 54.1047 5.58553 54.6666 7.00002 54.6666H39C40.4145 54.6666 41.7711 54.1047 42.7713 53.1045C43.7715 52.1043 44.3334 50.7477 44.3334 49.3332V18.2453C44.3333 17.5347 44.1912 16.8314 43.9155 16.1766C43.6399 15.5217 43.2361 14.9286 42.728 14.4319L30.888 2.85325C29.8917 1.87901 28.5535 1.33343 27.16 1.33325H7.00002C5.58553 1.33325 4.22898 1.89515 3.22878 2.89535C2.22859 3.89554 1.66669 5.2521 1.66669 6.66658V6.66658ZM15 30.6666H31H15Z"
                    stroke="#FFC93E"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.3334 1.33325V11.9999C28.3334 13.4144 28.8953 14.771 29.8955 15.7712C30.8957 16.7713 32.2522 17.3333 33.6667 17.3333H44.3334"
                    stroke="#FFC93E"
                    stroke-width="2.5"
                    stroke-linejoin="round"
                  />
                </svg>

                <h5 className="text-white text-3xl font-semibold mt-7">
                  UX Research
                </h5>
                <p className="text-text-title text-base leading-[30px] mt-6 mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  consequat nunc id purus pretium sagittis. Nulla ridiculus
                  nullam bibendum luctus viverra. Eu pellentesque sem sed platea
                  diam dignissim duis purus.
                </p>
                <div className="border w-[200px] h-[60px] rounded-[30px]">
                  <button className="flex text-white text-lg font-medium pl-6 pt-[17px]">
                    Read More
                    <div className="mt-2 ml-[10px]">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 1.125C15 0.95924 14.9341 0.800269 14.8169 0.683058C14.6997 0.565848 14.5408 0.5 14.375 0.5H6.875C6.70924 0.5 6.55026 0.565848 6.43305 0.683058C6.31584 0.800269 6.25 0.95924 6.25 1.125C6.25 1.29076 6.31584 1.44973 6.43305 1.56694C6.55026 1.68415 6.70924 1.75 6.875 1.75H12.8662L0.182496 14.4325C0.124386 14.4906 0.0782908 14.5596 0.046842 14.6355C0.0153931 14.7114 -0.000793457 14.7928 -0.000793457 14.875C-0.000793457 14.9572 0.0153931 15.0386 0.046842 15.1145C0.0782908 15.1904 0.124386 15.2594 0.182496 15.3175C0.240606 15.3756 0.309592 15.4217 0.385517 15.4532C0.461441 15.4846 0.542816 15.5008 0.624996 15.5008C0.707176 15.5008 0.788551 15.4846 0.864475 15.4532C0.9404 15.4217 1.00939 15.3756 1.0675 15.3175L13.75 2.63375V8.625C13.75 8.79076 13.8158 8.94973 13.9331 9.06694C14.0503 9.18415 14.2092 9.25 14.375 9.25C14.5408 9.25 14.6997 9.18415 14.8169 9.06694C14.9341 8.94973 15 8.79076 15 8.625V1.125Z"
                          fill="#FFFF"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[555px] h-[522px] bg-bg-container rounded-br-[50px] mt-10">
              <div className="px-[34px] pt-[94px]">
                <svg
                  width="56"
                  height="46"
                  viewBox="0 0 56 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3333 44.3334H38.6666M1.33331 7.00008C1.33331 5.58559 1.89522 4.22904 2.89541 3.22885C3.8956 2.22865 5.25216 1.66675 6.66665 1.66675H49.3333C50.7478 1.66675 52.1044 2.22865 53.1045 3.22885C54.1047 4.22904 54.6666 5.58559 54.6666 7.00008V31.0001C54.6666 32.4146 54.1047 33.7711 53.1045 34.7713C52.1044 35.7715 50.7478 36.3334 49.3333 36.3334H6.66665C5.25216 36.3334 3.8956 35.7715 2.89541 34.7713C1.89522 33.7711 1.33331 32.4146 1.33331 31.0001V7.00008Z"
                    stroke="#FFC93E"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h5 className="text-white text-3xl font-semibold mt-7">
                  Web Design
                </h5>
                <p className="text-text-title text-base leading-[30px] mt-6 mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  consequat nunc id purus pretium sagittis. Nulla ridiculus
                  nullam bibendum luctus viverra. Eu pellentesque sem sed platea
                  diam dignissim duis purus.
                </p>
                <div className="border w-[200px] h-[60px] rounded-[30px]">
                  <button className="flex text-white text-lg font-medium pl-6 pt-[17px]">
                    Read More
                    <div className="mt-2 ml-[10px]">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 1.125C15 0.95924 14.9341 0.800269 14.8169 0.683058C14.6997 0.565848 14.5408 0.5 14.375 0.5H6.875C6.70924 0.5 6.55026 0.565848 6.43305 0.683058C6.31584 0.800269 6.25 0.95924 6.25 1.125C6.25 1.29076 6.31584 1.44973 6.43305 1.56694C6.55026 1.68415 6.70924 1.75 6.875 1.75H12.8662L0.182496 14.4325C0.124386 14.4906 0.0782908 14.5596 0.046842 14.6355C0.0153931 14.7114 -0.000793457 14.7928 -0.000793457 14.875C-0.000793457 14.9572 0.0153931 15.0386 0.046842 15.1145C0.0782908 15.1904 0.124386 15.2594 0.182496 15.3175C0.240606 15.3756 0.309592 15.4217 0.385517 15.4532C0.461441 15.4846 0.542816 15.5008 0.624996 15.5008C0.707176 15.5008 0.788551 15.4846 0.864475 15.4532C0.9404 15.4217 1.00939 15.3756 1.0675 15.3175L13.75 2.63375V8.625C13.75 8.79076 13.8158 8.94973 13.9331 9.06694C14.0503 9.18415 14.2092 9.25 14.375 9.25C14.5408 9.25 14.6997 9.18415 14.8169 9.06694C14.9341 8.94973 15 8.79076 15 8.625V1.125Z"
                          fill="#FFFF"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-latest-container px-[150px]">
        <div className="text-center mt-[120px]">
          <div>
            <h2 className="text-white text-5xl font-bold">
              Our Latest Projects
            </h2>
          </div>
          <div className="text-white text-base font-medium">
            <ul className="flex items-center justify-center mt-6 gap-9">
              <li>All</li>
              <li className="text-button-title">UI/UX</li>
              <li>web Design</li>
              <li>Branding</li>
              <li>Interaction</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-around gap-8 mt-12">
          <div>
            <img className="w-[554px] h-[500px]" src={Rectangle14} />
            <div className="mt-8">
              <h5 className="text-white text-2xl font-bold leading-[36px]">
                Talent.com - Logo, Full Redesign <br />
                and Branding
              </h5>
            </div>
            <div>
              <p className="text-base text-text-title leading-[30px] mt-8 w-[540px]">
                Talent.com a new brand identity using their core values of
                optimism, transparency and approachability as inspiration. As a
                result, we were able to create the most streamlined
              </p>
            </div>
          </div>
          <div className="laters-project-container">
            <img className="w-[554px] h-[500px]" src={Rectangle13} />
            <div className="mt-8">
              <h5 className="text-white text-2xl font-bold leading-[36px]">
                Bonfire - Landing Page Design <br />
                Webby Awards Nomination
              </h5>
            </div>
            <div>
              <p className="text-base text-text-title leading-[30px] mt-8 w-[540px]">
                Pretty excited to announce that we just got nominated at the
                Webby Awards! easy to understand and to use should be essential
                for every business owner who uses their website.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-button-title w-[200px] h-[56px] rounded-[30px] mt-12">
            <button className="flex text-regal-blue text-lg font-medium pl-6 pt-[17px]">
              Load More
              <div className="mt-2 ml-[10px]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 1.125C15 0.95924 14.9341 0.800269 14.8169 0.683058C14.6997 0.565848 14.5408 0.5 14.375 0.5H6.875C6.70924 0.5 6.55026 0.565848 6.43305 0.683058C6.31584 0.800269 6.25 0.95924 6.25 1.125C6.25 1.29076 6.31584 1.44973 6.43305 1.56694C6.55026 1.68415 6.70924 1.75 6.875 1.75H12.8662L0.182496 14.4325C0.124386 14.4906 0.0782908 14.5596 0.046842 14.6355C0.0153931 14.7114 -0.000793457 14.7928 -0.000793457 14.875C-0.000793457 14.9572 0.0153931 15.0386 0.046842 15.1145C0.0782908 15.1904 0.124386 15.2594 0.182496 15.3175C0.240606 15.3756 0.309592 15.4217 0.385517 15.4532C0.461441 15.4846 0.542816 15.5008 0.624996 15.5008C0.707176 15.5008 0.788551 15.4846 0.864475 15.4532C0.9404 15.4217 1.00939 15.3756 1.0675 15.3175L13.75 2.63375V8.625C13.75 8.79076 13.8158 8.94973 13.9331 9.06694C14.0503 9.18415 14.2092 9.25 14.375 9.25C14.5408 9.25 14.6997 9.18415 14.8169 9.06694C14.9341 8.94973 15 8.79076 15 8.625V1.125Z"
                    fill="#0A142F"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="card-container px-[150px]">
        <h3 className="text-5xl text-white font-bold mt-[120px] mb-12">
          What say happy clients
        </h3>
        <div className="flex items-center gap-7">
          <div>
            <div className="card-container-div w-[750px] h-[439px] bg-bg-container rounded-[50px] px-16 pt-[53px]">
              <div>
                <svg
                  width="62"
                  height="48"
                  viewBox="0 0 62 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.8 35.4602C28.8729 37.1637 28.5695 38.8623 27.9113 40.4351C27.2532 42.0079 26.2564 43.4164 24.992 44.5602L24.982 44.5682C22.3641 46.8894 18.9547 48.1166 15.458 47.9962H15.48C13.3664 48.1105 11.2536 47.758 9.29168 46.9637C7.32972 46.1693 5.56675 44.9527 4.128 43.4002L4.12 43.3922C1.23558 39.9694 -0.235627 35.5758 0.0060025 31.1062L0.0040025 31.1482C-0.130043 26.5066 0.73268 21.8902 2.534 17.6102L2.454 17.8242C3.89223 14.4686 5.88771 11.3803 8.356 8.69023L8.334 8.71423C10.3732 6.50204 12.736 4.61189 15.342 3.10823L15.486 3.03223C17.457 1.8952 19.5139 0.914204 21.638 0.0982344L21.95 -0.00776563L28.218 10.5722C25.6133 11.6231 23.3271 13.3339 21.584 15.5362L21.558 15.5702C19.8224 17.6376 18.7338 20.1703 18.428 22.8522L18.422 22.9162C19.7859 22.9504 21.1272 23.2724 22.358 23.8611C23.5888 24.4497 24.6814 25.2919 25.564 26.3322L25.576 26.3462C27.8202 28.845 28.9812 32.1323 28.804 35.4862L28.806 35.4562L28.8 35.4602ZM62.696 35.4602C62.7681 37.1641 62.4642 38.8629 61.8057 40.436C61.1472 42.0091 60.1504 43.4179 58.886 44.5622L58.876 44.5702C56.2586 46.8923 52.8489 48.1196 49.352 47.9982H49.374C47.2604 48.1131 45.1474 47.7608 43.1854 46.9664C41.2233 46.1721 39.4604 44.9552 38.022 43.4022L38.014 43.3922C35.1284 39.9693 33.6571 35.5746 33.9 31.1042L33.898 31.1462C33.764 26.5046 34.6267 21.8882 36.428 17.6082L36.348 17.8222C37.7856 14.4671 39.7796 11.379 42.246 8.68823L42.224 8.71223C44.2639 6.5 46.6274 4.60985 49.234 3.10623L49.378 3.03023C51.3486 1.8924 53.4056 0.911372 55.53 0.0962344L55.842 -0.00976562L62.108 10.5702C59.503 11.6224 57.2167 13.3346 55.474 15.5382L55.448 15.5722C53.7124 17.6397 52.6238 20.1723 52.318 22.8542L52.312 22.9182C53.6754 22.9522 55.0162 23.2741 56.2464 23.8628C57.4765 24.4516 58.5683 25.2938 59.45 26.3342L59.462 26.3482C61.7087 28.8451 62.8719 32.132 62.696 35.4862L62.698 35.4562L62.696 35.4602Z"
                    fill="#F3F5F6"
                  />
                </svg>
                <p className="mt-8 text-text-title text-base leading-[30px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  semper consequat in dolor mattis pellentesque suspendisse
                  vulputate nec. Scelerisque elementum, consequat pharetra
                  lectus eget vivamus ut. Magna aliquam tellus at volutpat cras
                  aliquet facilisi quis adipiscing. Proin egestas et
                  pellentesque augue pretium, amet. Natoque blandit augue
                  integer maecenas mattis amet, nec.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 mt-8">
                    <img src={Ellipse5} />
                    <div>
                      <h6 className="text-white text-base">Brooklyn Simmons</h6>
                      <h6 className="text-button-title text-base">
                        Pendron.Inc,Ceo
                      </h6>
                    </div>
                    <div className="star-title flex ml-[260px] gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.611 15.443H3.612Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.611 15.443H3.612Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.611 15.443H3.612Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.611 15.443H3.612Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.611 15.443H3.612Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container-title">
            <div className="w-[420px] h-[439px] bg-bg-container rounded-l-[50px] pl-16 pt-[53px]">
              <div>
                <svg
                  width="62"
                  height="48"
                  viewBox="0 0 62 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.8 35.4602C28.8729 37.1637 28.5695 38.8623 27.9113 40.4351C27.2532 42.0079 26.2564 43.4164 24.992 44.5602L24.982 44.5682C22.3641 46.8894 18.9547 48.1166 15.458 47.9962H15.48C13.3664 48.1105 11.2536 47.758 9.29168 46.9637C7.32972 46.1693 5.56675 44.9527 4.128 43.4002L4.12 43.3922C1.23558 39.9694 -0.235627 35.5758 0.0060025 31.1062L0.0040025 31.1482C-0.130043 26.5066 0.73268 21.8902 2.534 17.6102L2.454 17.8242C3.89223 14.4686 5.88771 11.3803 8.356 8.69023L8.334 8.71423C10.3732 6.50204 12.736 4.61189 15.342 3.10823L15.486 3.03223C17.457 1.8952 19.5139 0.914204 21.638 0.0982344L21.95 -0.00776563L28.218 10.5722C25.6133 11.6231 23.3271 13.3339 21.584 15.5362L21.558 15.5702C19.8224 17.6376 18.7338 20.1703 18.428 22.8522L18.422 22.9162C19.7859 22.9504 21.1272 23.2724 22.358 23.8611C23.5888 24.4497 24.6814 25.2919 25.564 26.3322L25.576 26.3462C27.8202 28.845 28.9812 32.1323 28.804 35.4862L28.806 35.4562L28.8 35.4602ZM62.696 35.4602C62.7681 37.1641 62.4642 38.8629 61.8057 40.436C61.1472 42.0091 60.1504 43.4179 58.886 44.5622L58.876 44.5702C56.2586 46.8923 52.8489 48.1196 49.352 47.9982H49.374C47.2604 48.1131 45.1474 47.7608 43.1854 46.9664C41.2233 46.1721 39.4604 44.9552 38.022 43.4022L38.014 43.3922C35.1284 39.9693 33.6571 35.5746 33.9 31.1042L33.898 31.1462C33.764 26.5046 34.6267 21.8882 36.428 17.6082L36.348 17.8222C37.7856 14.4671 39.7796 11.379 42.246 8.68823L42.224 8.71223C44.2639 6.5 46.6274 4.60985 49.234 3.10623L49.378 3.03023C51.3486 1.8924 53.4056 0.911372 55.53 0.0962344L55.842 -0.00976562L62.108 10.5702C59.503 11.6224 57.2167 13.3346 55.474 15.5382L55.448 15.5722C53.7124 17.6397 52.6238 20.1723 52.318 22.8542L52.312 22.9182C53.6754 22.9522 55.0162 23.2741 56.2464 23.8628C57.4765 24.4516 58.5683 25.2938 59.45 26.3342L59.462 26.3482C61.7087 28.8451 62.8719 32.132 62.696 35.4862L62.698 35.4562L62.696 35.4602Z"
                    fill="#F3F5F6"
                  />
                </svg>
                <p className="mt-8 text-text-title text-base leading-[30px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  semper consequat in dolor mattis pellentesque suspendisse
                  vulputate nec. Scelerisque elementum, consequat pharetra
                  lectus eget vivamus ut.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <img src={Ellipse6} />
                <div>
                  <h6 className="text-white text-base">Jenny Wilson</h6>
                  <h6 className="text-button-title text-base">
                    Bettero.Inc, CEO
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-container px-[150px]">
        <h2 className="blog-text text-white mt-[120px] mb-10 font-bold text-5xl">
          Blog from insights
        </h2>
        <div className="flex gap-8">
          <div>
            <img src={Rectangle18} />
            <button className="bg-text-scrool w-[108px] h-7 rounded-lg mt-7">
              <p className="text-xs text-text-bluee font-medium">TECHNOLOGY</p>
            </button>
            <h6 className="text-white text-base mt-4">
              John Doe • 19 Jan 2022
            </h6>
            <h2 className="text-white text-3xl font-bold leading-[38px] mt-4">
              A small business is only as good as <br />
              its tools and it is totally true.
            </h2>
            <div className="border w-[200px] h-[60px] rounded-[30px] mt-6">
              <button className="flex text-white text-lg font-medium pl-6 pt-[17px]">
                Read More
                <div className="mt-2 ml-[10px]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15 1.125C15 0.95924 14.9341 0.800269 14.8169 0.683058C14.6997 0.565848 14.5408 0.5 14.375 0.5H6.875C6.70924 0.5 6.55026 0.565848 6.43305 0.683058C6.31584 0.800269 6.25 0.95924 6.25 1.125C6.25 1.29076 6.31584 1.44973 6.43305 1.56694C6.55026 1.68415 6.70924 1.75 6.875 1.75H12.8662L0.182496 14.4325C0.124386 14.4906 0.0782908 14.5596 0.046842 14.6355C0.0153931 14.7114 -0.000793457 14.7928 -0.000793457 14.875C-0.000793457 14.9572 0.0153931 15.0386 0.046842 15.1145C0.0782908 15.1904 0.124386 15.2594 0.182496 15.3175C0.240606 15.3756 0.309592 15.4217 0.385517 15.4532C0.461441 15.4846 0.542816 15.5008 0.624996 15.5008C0.707176 15.5008 0.788551 15.4846 0.864475 15.4532C0.9404 15.4217 1.00939 15.3756 1.0675 15.3175L13.75 2.63375V8.625C13.75 8.79076 13.8158 8.94973 13.9331 9.06694C14.0503 9.18415 14.2092 9.25 14.375 9.25C14.5408 9.25 14.6997 9.18415 14.8169 9.06694C14.9341 8.94973 15 8.79076 15 8.625V1.125Z"
                      fill="#FFFF"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="blog-section">
            <img src={Rectangle19} />
            <button className="bg-text-scrool w-[108px] h-7 rounded-lg mt-7">
              <p className="text-xs text-text-bluee font-medium">WEBINER</p>
            </button>
            <h6 className="text-white text-base mt-4">
              John Doe • 19 Jan 2022
            </h6>
            <h2 className="text-white text-3xl font-bold leading-[38px] mt-4">
              Colaboration with team members <br />
              that will be grow to business.
            </h2>
            <div className="border w-[200px] h-[60px] rounded-[30px] mt-6">
              <button className="flex text-white text-lg font-medium pl-6 pt-[17px]">
                Read More
                <div className="mt-2 ml-[10px]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15 1.125C15 0.95924 14.9341 0.800269 14.8169 0.683058C14.6997 0.565848 14.5408 0.5 14.375 0.5H6.875C6.70924 0.5 6.55026 0.565848 6.43305 0.683058C6.31584 0.800269 6.25 0.95924 6.25 1.125C6.25 1.29076 6.31584 1.44973 6.43305 1.56694C6.55026 1.68415 6.70924 1.75 6.875 1.75H12.8662L0.182496 14.4325C0.124386 14.4906 0.0782908 14.5596 0.046842 14.6355C0.0153931 14.7114 -0.000793457 14.7928 -0.000793457 14.875C-0.000793457 14.9572 0.0153931 15.0386 0.046842 15.1145C0.0782908 15.1904 0.124386 15.2594 0.182496 15.3175C0.240606 15.3756 0.309592 15.4217 0.385517 15.4532C0.461441 15.4846 0.542816 15.5008 0.624996 15.5008C0.707176 15.5008 0.788551 15.4846 0.864475 15.4532C0.9404 15.4217 1.00939 15.3756 1.0675 15.3175L13.75 2.63375V8.625C13.75 8.79076 13.8158 8.94973 13.9331 9.06694C14.0503 9.18415 14.2092 9.25 14.375 9.25C14.5408 9.25 14.6997 9.18415 14.8169 9.06694C14.9341 8.94973 15 8.79076 15 8.625V1.125Z"
                      fill="#FFFF"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="categories px-[175px]">
        <h2 className="text-white mt-[120px] text-5xl font-bold">Categories</h2>
        <div className="categories-title flex items-center gap-7 mt-12 sm:hidden md:hidden lg:flex">
          <div className="bg-bg-categories w-[245px] h-[367px] rounded-[58px] px-[10px] py-[10px]">
            <img className="absolute mt-[120px] ml-[-45px]" src={Group37} />
            <img src={Rectangle20} />
            <h6 className="text-white text-2xl font-bold text-center mt-[51px]">
              Games
            </h6>
          </div>
          <div className="bg-bg-categories w-[245px] h-[367px] rounded-[58px] px-[10px] py-[10px]">
            <img src={Rectangle21} />
            <h6 className="text-white text-2xl font-bold text-center mt-[51px]">
              Sports
            </h6>
          </div>
          <div className="bg-bg-categories w-[245px] h-[367px] rounded-[58px] px-[10px] py-[10px]">
            <img src={Rectangle22} />
            <h6 className="text-white text-2xl font-bold text-center mt-[51px]">
              Metaverse
            </h6>
          </div>
          <div className="bg-bg-categories w-[245px] h-[367px] rounded-[58px] px-[10px] py-[10px]">
            <img className="absolute mt-[120px] ml-[180px]" src={Group44} />
            <img src={Rectangle23} />
            <h6 className="text-white text-2xl font-bold text-center mt-[51px]">
              Art
            </h6>
          </div>
        </div>
        <div className=" categories-title flex items-center gap-7 mt-[70px] pb-[105px] sm:hidden md:hidden lg:flex">
          <div className="bg-bg-categories w-[245px] h-[367px] rounded-[58px] px-[10px] py-[10px]">
            <img className="absolute mt-[120px] ml-[-45px]" src={Group37} />
            <img src={Rectangle20} />
            <h6 className="text-white text-2xl font-bold text-center mt-[51px]">
              Games
            </h6>
          </div>
          <div className="bg-bg-categories w-[245px] h-[367px] rounded-[58px] px-[10px] py-[10px]">
            <img src={Rectangle21} />
            <h6 className="text-white text-2xl font-bold text-center mt-[51px]">
              Sports
            </h6>
          </div>
          <div className="bg-bg-categories w-[245px] h-[367px] rounded-[58px] px-[10px] py-[10px]">
            <img src={Rectangle22} />
            <h6 className="text-white text-2xl font-bold text-center mt-[51px]">
              Metaverse
            </h6>
          </div>
          <div className="bg-bg-categories w-[245px] h-[367px] rounded-[58px] px-[10px] py-[10px]">
            <img className="absolute mt-[120px] ml-[180px]" src={Group44} />
            <img src={Rectangle23} />
            <h6 className="text-white text-2xl font-bold text-center mt-[51px]">
              Art
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
