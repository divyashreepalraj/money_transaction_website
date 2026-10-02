import React from 'react'

const navLinks = [
    {id: 1, label: "Send Money", href: "#", active: true},
    {id: 2, label: "Rates", href: "#"},
    {id: 3, label: "How it works", href: "#"},
    {id: 4, label: "Security", href: "#"},
    {id: 5, label: "Track transfer", href: "#"}
]


const NavLinks = () => {
  return (
    <>
    {navLinks.map((link) => {
        return(
            <li className="nav-item" key={link.id}>
                <a className={`nav-link ${link.active ? "active" : ""}`} aria-current="page" href={link.href}>{link.label}</a>
            </li>
        )
        }
    )}
    </>
  )
}

export default NavLinks;