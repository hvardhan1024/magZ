import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
import {useSelector} from 'react-redux'

function Header() {
    const path = useLocation().pathname;
    const {currentUser} = useSelector(state=>state.user)
    console.log(currentUser.rest.username);
    
  return (
    <Navbar className='border-b-2'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 text-white rounded-lg'>Mag</span>
            Z
        </Link>

        <form>
            <TextInput 
                type='text'
                placeholder='Search'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />
        </form>

        <Button className='w-12 h-10  lg:hidden border-2' color='grey' pill>
            <AiOutlineSearch />
        </Button>

        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline border-2' color='grey' pill>
                <FaMoon />
            </Button>
            
            {
                currentUser?
                (<Dropdown arrowIcon={false} inline label={<Avatar alt='user' img={currentUser.rest.profilePicture} rounded/>} >
                    <Dropdown.Header>
                        <span className='block text-sm'> @{currentUser.rest.username}</span>
                        <span className='block text-sm font-medium truncate'> {currentUser.rest.email}</span>
                    </Dropdown.Header>
                    <Dropdown.Header>
                        <Link to={'/dashboard?tab=profile'}>
                            <Dropdown.Item>
                                Profile
                            </Dropdown.Item>
                        </Link>
                    </Dropdown.Header>
                    {/* <Dropdown.Divider/> */}
                    <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>)
                :(<Link to={'/sign-in'} ><Button gradientDuoTone='purpleToBlue'  outline>
                    Sign In
                </Button>  </Link>)
            }
                       
            <Navbar.Toggle/>
        </div>


        <Navbar.Collapse>
                <Navbar.Link active={path === "/"} as={'div'}>
                    <Link to={'/'} >
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"} as={'div'}>
                    <Link to={'/about'} >
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/projects"} as={'div'}>
                    <Link to={'/projects'} >
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
    </Navbar>
  )
}

export default Header