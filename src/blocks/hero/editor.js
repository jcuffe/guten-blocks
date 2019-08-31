import { MediaUpload } from "@wordpress/editor"
import { registerBlockType } from "@wordpress/blocks"
import { imageButton, processNav } from "../../common/js/util"
import LogoSplash from "../../common/svg/logo-splash.svg"

registerBlockType("eecontractingllc/hero", {
  title: "Hero",
  icon: "shield",
  category: "common",
  attributes: {
    headline: {
      source: "text",
      selector: ".headline"
    },
    buttonText: {
      source: "text",
      selector: "button"
    },
    imageUrl: {
      type: "string",
      default: null
    }
  },

  edit: function({ attributes, className, setAttributes }) {
    const handleChange = ({ target: { name, value } }) => {
      setAttributes({ [name]: value })
    }
    return (
      <div className="wp-block-eecontractingllc-hero-editor">
        <h1>Hero</h1>
        <div className="horizontal">
          <div className="vertical">
            <div className="float-label">
              <input
                name="headline"
                type="text"
                value={attributes.headline}
                onChange={handleChange}
              />
              <label for="headline">Headline</label>
            </div>
            <div className="float-label">
              <input
                name="buttonText"
                type="text"
                value={attributes.buttonText}
                onChange={handleChange}
              />
              <label for="buttonText">Splash Button Text</label>
            </div>
          </div>
          <div className="vertical">
            <div className="float-label">
              <MediaUpload
                onSelect={media => {
                  setAttributes({ imageUrl: media.url })
                }}
                type="image"
                value={attributes.imageID}
                render={({ open }) => imageButton(attributes, open)}
                name="image"
              />
              <label className="always" for="image">
                Image
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  },

  save: function({ attributes }) {
    return (
      <div style={`background-image: url('${attributes.imageUrl}')`}>
        <h1 class="headline">{attributes.headline}</h1>
        <ul class="hero-menu">{processNav(heroMenu)}</ul>
        <div class="splash">
          <ul class="splash-menu">{processNav(navMenu)}</ul>
          <img src={LogoSplash} />
          <button class="primary thick">{attributes.buttonText}</button>
        </div>
      </div>
    )
  }
})
