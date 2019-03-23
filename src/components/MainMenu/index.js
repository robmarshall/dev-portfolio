import React from "react"
import { Link } from "gatsby"
import _ from "lodash";

const Menu = ({ data }) => (
    <div>
        <h1>Main Menu</h1>
        <ul>

            {data.map((item) =>
                <li key={( item.object_slug || _.kebabCase(item.title) )}>
                    <Link to={item.url}>
                        {item.title}
                    </Link>
                </li>
            )}

        </ul>
    </div>
)

export default Menu
