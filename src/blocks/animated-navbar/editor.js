import { registerBlockType } from "@wordpress/blocks"
import LogoColor from "../../common/svg/logo-color.svg"
import LogoWhite from "../../common/svg/logo-white.svg"
import { processNav } from "../../common/js/util"

registerBlockType("eecontractingllc/animated-navbar", {
  title: "Animated Navbar",
  icon: "heart",
  category: "common",
  attributes: {},
  edit({ attributes, className, setAttributes }) {
    return (
      <div className="wp-block-eecontractingllc-animated-navbar-editor">
        <h1>Animated Navbar</h1>
      </div>
    )
  },

  save({ attributes }) {
    return (
      <div>
        <div class="scrolled">
          <span>
            <img src={`${assets}/svg/logo-color.svg`} />
            <ul>{processNav(navMenu)}</ul>
          </span>
          <button class="cta">Request a complimentary quote</button>
        </div>
        <div class="default">
          <img src={`${assets}/svg/logo-white.svg`} />
          <span>
            (717) 442-4814
            <img class="fatburger" src={`${assets}/svg/fatburger-white.svg`} />
          </span>
        </div>
      </div>
    )
  }
})
