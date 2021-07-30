import Link from "next/link";
import React, { useContext } from "react";
import {DataContext} from '../store/GlobalState'
import {useRouter} from 'next/router'


const Menu = () => {
  const {state, dispatch} = useContext(DataContext)
  const { auth, cart } = state
  const router = useRouter()


  const isActive = (r) => {
    if(r === router.pathname){
        return " active"
    }else{
        return ""
    }
  }

  return (
    
    (auth.user !== undefined && auth.user.role === 'admin') && 
    <div className="col-2 p-0 m-0">
      <div className="col-2 d-flex flex-column flex-shrink-0 p-3 bg-dark text-white" style={{minHeight:'100vh', position:'fixed', top:0}}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4"> Blake's House</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">

    <li className="nav-item">
        <Link href="/users">
          <a className={"nav-link text-white py-2" + isActive('/users')}>
            <i className="mr-2 fas fa-users" />
            &nbsp;Users 
          </a>
        </Link>
        </li>
          <li className="nav-item">
          <Link href="/profile">
          <a className={"nav-link text-white py-2" + isActive('/profile')}>
            <i className="mr-2 fas fa-file-alt" />
            &nbsp; Booking History 
          </a>
        </Link>
        </li>
          <li className="nav-item">
          <Link href="/create">
          <a className={"nav-link text-white py-2" + isActive('/create')}>
            <i className="mr-2 fas fa-list-ul" /> Add New Product
          </a>
        </Link>
        </li>
    <li className="nav-item">
          <Link href="/categories">
          <a className={"nav-link text-white py-2"+ isActive('/categories')}>
            <i className="mr-2 fas fa-layer-group" /> Categories 
          </a>
        </Link>
        </li>

      </ul>
      <hr/>
    </div>

      {/* <div className="nav flex-column flex-nowrap vh-100 overflow-auto text-white p-2 d-none">
          
          <Link href="/users">
          <a className="nav-link py-2">
            <i className="fas fa-users" />
            &nbsp;Users Management
          </a>
        </Link>
          <Link href="/profile">
          <a className="nav-link py-2">
            <i className="fas fa-file-alt" />
            &nbsp; Booking History Management
          </a>
        </Link>
          <Link href="/create">
          <a className="nav-link py-2">
            <i className="fas fa-list-ul" /> Add New Product
          </a>
        </Link>

          <Link href="/categories">
          <a className="nav-link py-2">
            <i className="fas fa-layer-group" /> Categories Management
          </a>
        </Link>

        
        
         <Link href="/product">
          <a className="nav-link">
            <i className="fas fa-list-ul" /> Products Management
          </a>
        </Link> 
        
        
      </div> */}
    </div>
  );
};
export default Menu;
