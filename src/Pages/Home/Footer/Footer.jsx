import logo from "../../../assets/images/logo/logo.jpeg";
import { AiFillPhone, AiTwotoneMail, AiFillHome } from "react-icons/ai";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaSearch,
  FaGithub,
} from "react-icons/fa";
import Container from "../../../Components/Container/Container";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <>
      <Container>
        <footer>
          <section className="flex flex-col md:flex-col lg:flex-row  justify-between  text-black space-y-5">
            <div className="mt-6">
              <img
                className=" w-[120px] lg:w-[120px] rounded-md lg:ml-[-24px] lg:pt-2 object-cover"
                src={logo}
                alt=""
              />
              <p className="text-[#0087EB] cursor-pointer font-bold">
                SCC Technovision Inc.
              </p>

              <div className="flex gap-4 mt-4 ">
                <a href="#">
                  {" "}
                  <span className="text-2xl text-[#1877F2] ">
                    <FaFacebook></FaFacebook>
                  </span>{" "}
                </a>
                <a href="#">
                  {" "}
                  <span className="text-2xl text-[#1DA1F2]">
                    <FaTwitter></FaTwitter>
                  </span>{" "}
                </a>
                <a href="#">
                  {" "}
                  <span className="text-2xl text-[#0077B5]">
                    <FaLinkedin></FaLinkedin>
                  </span>{" "}
                </a>
                <a href="#">
                  {" "}
                  <span className="text-2xl text-[#181717]">
                    <FaGithub></FaGithub>
                  </span>{" "}
                </a>
              </div>
            </div>

            <div className="lg:ml-3">
              <ul className="mt-4">
                <li className="flex items-center gap-2">
                  {" "}
                  <AiFillHome className="text-gray-400"></AiFillHome> Sector-3,
                  Azampur, Uttara
                </li>
                <li className="flex items-center gap-2">
                  <AiFillPhone className="text-gray-400"></AiFillPhone>{" "}
                  +8801316782
                </li>
                <li className="flex items-center gap-2">
                  <AiTwotoneMail className="text-gray-400"></AiTwotoneMail>
                  scctechnovision@gmail.com
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <div className="form-control">
                <h1 className="font-bold text-[#0087EB]">Search For Task</h1>
                <div className="input-group mt-6">
                  <input
                    type="text"
                    placeholder="Search here.."
                    className="input input-bordered"
                  />
                  <button className="btn  bg-[#0087EB] text-white px-4 hover:text-black">
                    <FaSearch></FaSearch>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <h1 className="text-center  py-3 px-2">
            {" "}
            <Marquee>
              <p>
                Copyright © 2023 - All right reserved by SCC Technovision Inc.
              </p>
            </Marquee>
          </h1>
        </footer>
      </Container>
    </>
  );
};

export default Footer;