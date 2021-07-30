import React, { useContext } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {DataContext} from '../store/GlobalState'
import Cookie from 'js-cookie'

function NavBar() {
    const router = useRouter()
    const {state, dispatch} = useContext(DataContext)
    const { auth, cart } = state


    const isActive = (r) => {
        if(r === router.pathname){
            return " active"
        }else{
            return ""
        }
    }

    const handleLogout = () => {
        Cookie.remove('refreshtoken', {path: 'api/auth/accessToken'})
        localStorage.removeItem('firstLogin')
        dispatch({ type: 'AUTH', payload: {} })
        dispatch({ type: 'NOTIFY', payload: {success: 'Logged out!'} })
        return router.push('/')
    }

    const adminRouter = () => {
        return(
            <>
            <Link href="/users">
                <a className="dropdown-item" >Users</a>
            </Link>
            <Link href="/create">
                <a className="dropdown-item">Products</a>
            </Link>
            <Link href="/categories">
                <a className="dropdown-item">Categories</a>
            </Link>
            </>
        )
    }

    const loggedRouter = () => {
        return(
            <div className="dropdown text-end">
                <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle  text-white" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={auth.user.avatar} alt={auth.user.avatar}  width="32" height="32" className="rounded-circle"/>{auth.user.name}
                </a>
                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                    <li><Link href="/profile"><a className="dropdown-item">Profile</a></Link></li>
                    {
                        auth.user.role === 'admin' && adminRouter()
                    }
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                </ul>
            </div>

            // <li className="nav-item dropdown">
            //     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //         <img src={auth.user.avatar} alt={auth.user.avatar} 
            //         style={{
            //             borderRadius: '50%', width: '30px', height: '30px',
            //             transform: 'translateY(-3px)', marginRight: '3px'
            //         }} /> {auth.user.name}
            //     </a>

            //     <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            //         <Link href="/profile">
            //             <a className="dropdown-item">Profile</a>
            //         </Link>
            //         {
            //             auth.user.role === 'admin' && adminRouter()
            //         }
            //         <div className="dropdown-divider"></div>
            //         <button className="dropdown-item" onClick={handleLogout}>Logout</button>
            //     </div>
            // </li>
        )
    }

    return (
        <header className="p-3 bg-dark text-white">
        <div className="container-fluidΩ">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span className="fs-4"> Blake's House</span>
        </a>
            {/* <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
            </ul> */}

            

            <div className="text-end">
                <Link href="/cart">
                    <a className={"btn text-white mr-3 position-relative" + isActive('/cart')}>
                        <i className="fas fa-shopping-cart fa-lg" aria-hidden="true"></i>
                        <span className="position-absolute top-0 start-80 translate-middle badge rounded-pill bg-danger">
                        {cart.length}
                    </span>
                    </a>
                </Link>
            </div>
        
            {
                Object.keys(auth).length === 0 
                ?
                <div className="text-end">
                    <Link href="/signin">
                        <a className={"btn btn-warning mx-2" + isActive('/signin')}>
                            <i className="fas fa-user" aria-hidden="true"></i> Sign in
                        </a>
                    </Link>
                </div>
                
                : loggedRouter()
            }
            
            </div>
        </div>
    </header>
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <Link  href="/">
        //         <a className="navbar-brand">Blake's House</a>
        //     </Link>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        //         <ul className="navbar-nav p-1">
        //             <li className="nav-item">
        //                 <Link href="/cart">
        //                     <a className={"nav-link" + isActive('/cart')}>
        //                         <i className="fas fa-shopping-cart position-relative" aria-hidden="true">
        //                             <span className="position-absolute"
        //                             style={{
        //                                 padding: '3px 6px',
        //                                 background: '#ed143dc2',
        //                                 borderRadius: '50%',
        //                                 top: '-10px',
        //                                 right: '-10px',
        //                                 color: 'white',
        //                                 fontSize: '14px'
        //                             }}>
        //                                 {cart.length}
        //                             </span>
        //                         </i> Cart
        //                     </a>
        //                 </Link>
        //             </li>
        //             {
        //                 Object.keys(auth).length === 0 
        //                 ? <li className="nav-item">
        //                     <Link href="/signin">
        //                         <a className={"nav-link" + isActive('/signin')}>
        //                             <i className="fas fa-user" aria-hidden="true"></i> Sign in
        //                         </a>
        //                     </Link>
        //                 </li>
        //                 : loggedRouter()
        //             }
        //         </ul>
        //     </div>
        // </nav>
    )
}

export default NavBar
