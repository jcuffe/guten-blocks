import { MediaUpload } from "@wordpress/editor"
import { registerBlockType } from "@wordpress/blocks"
import { imageButton, accessibleImage } from "../../common/js/util"

registerBlockType("eecontractingllc/l-shaped-blurb", {
  title: "L-Shaped Blurb",
  icon: "heart",
  category: "common",
  attributes: {
    heading: {
      source: "text",
      selector: "h2"
    },
    body: {
      type: "text",
      selector: ".main p"
    },
    subHeading: {
      source: "text",
      selector: "h3"
    },
    subBody: {
      type: "text",
      selector: ".sub p"
    },
    imageUrl: {
      attribute: "src",
      selector: ".sub img"
    },
    imageAlt: {
      attribute: "alt",
      selector: ".sub img"
    }
  },
  edit({ attributes, className, setAttributes }) {
    const handleChange = ({ target: { name, value } }) => {
      setAttributes({ [name]: value })
    }

    return (
      <div className="wp-block-eecontractingllc-l-shaped-blurb-editor">
        <h1>L-Shaped Blurb</h1>
        <div className="vertical">
          <div className="float-label">
            <input
              type="text"
              name="heading"
              value={attributes.heading}
              onChange={handleChange}
            />
            <label for="heading">Heading</label>
          </div>
          <div className="float-label">
            <textarea
              name="body"
              value={attributes.body}
              onChange={handleChange}
            />
            <label for="heading">Body</label>
          </div>
          <div className="float-label">
            <input
              type="text"
              name="subHeading"
              value={attributes.subHeading}
              onChange={handleChange}
            />
            <label for="subHeading">Sub-heading</label>
          </div>
          <div className="float-label">
            <textarea
              name="subBody"
              value={attributes.subBody}
              onChange={handleChange}
            />
            <label for="heading">Sub-body</label>
          </div>
          <div className="float-label">
            <MediaUpload
              onSelect={media => {
                setAttributes({ imageUrl: media.url, imageAlt: media.alt })
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

  save({ attributes }) {
    return (
      <div>
        <div class="main">
          <h2>{attributes.heading}</h2>
          <p>{attributes.body}</p>
        </div>
        <h3>{attributes.subHeading}</h3>
        <div class="sub">
          {accessibleImage(attributes.imageUrl, attributes.imageAlt)}
          <p>{attributes.subBody}</p>
        </div>
      </div>
    )
  }
})
