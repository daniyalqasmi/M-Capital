import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavigationMenuDemo } from './navelinks'

const Navebar = () => {
    return (
        <div className="ml-4 mr-4 ">

            <div className="navbar bg-base-100 bg-mywhite">

                <div className="navbar-start hidden lg:flex">
                    <NavigationMenuDemo />
                </div>
                <div className="navbar-start">
                    <div className="dropdown text-myred">
                        <label tabIndex={0} className="p-0 text-2xl lg:hidden bg-myblack text-myredDark">
                            <GiHamburgerMenu />
                        </label>
                        <ul tabIndex={0} className="uppercase menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  ">
                            <li><Link href={"/home"}>Home</Link></li>
                            <li><Link href={"/home"}>PRODUCT</Link></li>
                            <li><Link href={"/home"}>SERVICES</Link></li>
                            <li><Link href={"/about"}>About</Link></li>
                            <li><Link href={"/contactus"}>Contact Us</Link></li>
                        </ul>
                    </div>

                </div>
                <div className='navbar-end'>
                    <Link href={"#"} className=" text-xl"><Image src={'/assest/logo.png'} alt="logo" width={80} height={80} /></Link>
                </div>

            </div>
        </div>
    )
}

export default Navebar