import React from 'react'
import NavBar from './NavBar'
import Notify from './Notify'
import Modal from './Modal'
import Menu from './Menu'

function Layout({children}) {
    return (
        <div>
            <NavBar />
            
            <div className="container-fluid" style={{paddingLeft:0}}>
                <div className="row">
                    
                        <Menu />
                    <div className="col">
                        
                        <div className="p-2">
                            <Notify />
                            <Modal />
                            {children}

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Layout
