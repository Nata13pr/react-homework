import React from 'react';
import {Link} from "react-router-dom";

const links = [
    {link: "/", label: "home"},
    {link: "/users", label: "users page"},
    {link: "/posts", label: "post page"},
    {link: "/userPosts", label: "users with posts page"},
    {link: "/comments", label: "comments page"},
    {link: "/postComments", label: "posts with comments page"}
]

const HeaderComponent = () => (
    <div>
        <ul>
            {links.map((item, index) => (
                <li key={index}>
                    <Link to={item.link}>
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default HeaderComponent;