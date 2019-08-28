import { registerBlockType } from "@wordpress/blocks"
import LogoColor from "../../common/svg/logo-color.svg"
import LogoWhite from "../../common/svg/logo-white.svg"
import FatBurger from "../../common/svg/fatburger-white.svg"
import { processNav } from "../../common/js/util"

registerBlockType("eecontractingllc/animated-navbar", {
  title: "Animated Navbar",
  icon: "heart",
  category: "common",
  attributes: {},
  edit({ attributes, className, setAttributes }) {
    return (
      <div className={`${className}-editor`}>
        <h1>Animated Navbar</h1>
      </div>
    )
  },

  save({ attributes }) {
    return (
      <div>
        <div class="scrolled">
          <span>
            <img src={LogoColor} />
            <ul>{processNav(navMenu)}</ul>
          </span>
          <button class="cta">Request a complimentary quote</button>
        </div>
        <div class="default">
          <img src={LogoWhite} />
          <span>
            <span class="contact">{attributes.contactNumber}</span>
            <img class="fatburger" src={FatBurger} />
          </span>
        </div>
      </div>
    )
  }
})
