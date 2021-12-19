import './drawer.css'






const Drawer = ({ children,open, setOpen }) => {


    return (
        <>
            <div className={`drawer_container ${open ? 'drawer_width':'' }   `}>
                   {children}
            </div>
            <div className="drawer_backdrop" onClick={() => { setOpen(false) }}>



            </div>
        </>
    )
}

export default Drawer