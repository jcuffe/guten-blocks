import { MediaUpload } from "@wordpress/editor"
import { registerBlockType } from "@wordpress/blocks"
import { imageButton } from "../../common/js/util"
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
      <div className={`${className}-editor`}>
        <h1>Hero</h1>
        <div className="horizontal">
          <div className="float-label">
            <input
              name="headline"
              value={attributes.headline}
              onChange={handleChange}
            />
            <label for="headline">Headline</label>
          </div>
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
    )
  },

  save: function({ attributes }) {
    return (
      <div style={`background-image: url('${attributes.imageUrl}')`}>
        <h1 class="headline">{attributes.headline}</h1>
        <ul>
          <li>Hello</li>
        </ul>
        <div class="splash">
          <ul>
            <li>Hello</li>
          </ul>
          <img src={LogoSplash} />
          <button id="splash-button">{attributes.buttonText}</button>
        </div>
      </div>
    )
  }
})
