import MobNav from './MobNav'
import DeskNav from './DeskNav'
import CartModal from '../CartModal/CartModal'

import './navbar.css'
import { useState } from 'react'




const Navbar = () => {

    const [open, setOpen] = useState(false)


    return (
        <>
            <DeskNav open={open} setOpen={setOpen} />
            <MobNav open={open} setOpen={setOpen} />
           {open && <CartModal open={open} setOpen={setOpen} />}
        </>
    )
}

export default Navbar