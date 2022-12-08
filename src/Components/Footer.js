import React from 'react'

const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "45vh",
        width: "100%",
    }
    return(
        <footer className='bg-dark text-light py-4' style={footerStyle}>
            <p className='text-center'> Copyright &copy; MyContacts.com</p>
        </footer>
    )
}

export default Footer