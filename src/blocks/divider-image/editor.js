import { MediaUpload } from "@wordpress/editor"
import { registerBlockType } from "@wordpress/blocks"
import { imageButton, accessibleImage } from "../../common/js/util"

registerBlockType("eecontractingllc/divider-image", {
  title: "Divider Image",
  icon: "heart",
  category: "common",
  attributes: {
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
    return (
      <div className="wp-block-eecontractingllc-divider-image-editor">
        <h1>Divider Image</h1>
        <div className="vertical">
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
      <div>{accessibleImage(attributes.imageUrl, attributes.imageAlt)}</div>
    )
  }
})
