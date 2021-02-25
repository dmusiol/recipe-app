import React from "react";
import style from "./menu.module.css";


export default function TopMenu() {

    return (
        <div className={style.topMenu} >
            <h2 className={style.name}>deli<span className={style.nameSH}>SH</span>.com</h2>
<div className={style.buttons}>
        <a href="https://www.allrecipes.com/recipes/">Allrecipes.com </a>
        <a href="http://ohsheglows.com">Healthy Food</a>
        <a href="https://www.delish.com/food/a35036824/food-trends-2021/">Food Trends</a>
        <button className={style.subscribe}>Subscribe</button>
      </div>
      </div>
    )
}