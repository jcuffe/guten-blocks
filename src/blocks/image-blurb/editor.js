import { MediaUpload } from "@wordpress/editor"
import { registerBlockType } from "@wordpress/blocks"
import { imageButton, accessibleImage } from "../../common/js/util"

registerBlockType("eecontractingllc/image-blurb", {
  title: "Image Blurb",
  icon: "heart",
  category: "common",
  attributes: {
    heading: {
      source: "text",
      selector: "h2"
    },
    body: {
      type: "text",
      selector: "p"
    },
    imageUrl: {
      attribute: "src",
      selector: "img"
    },
    imageAlt: {
      attribute: "alt",
      selector: "img"
    }
  },
  edit({ attributes, className, setAttributes }) {
    const handleChange = ({ target: { name, value } }) => {
      setAttributes({ [name]: value })
    }
    return (
      <div className="wp-block-eecontractingllc-image-blurb-editor">
        <h1>Image Blurb</h1>
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
            <label for="body">Body</label>
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
        <div className="image">
          {accessibleImage(attributes.imageUrl, attributes.imageAlt)}
        </div>
        <div>
          <h2>{attributes.heading}</h2>
          <p>{attributes.body}</p>
        </div>
      </div>
    )
  }
})
