import { MediaUpload } from "@wordpress/editor"
import { registerBlockType } from "@wordpress/blocks"
import { galleryButton, accessibleImage } from "../../common/js/util"

registerBlockType("eecontractingllc/carousel-blurb", {
  title: "Blurb Carousel",
  icon: "heart",
  category: "common",
  attributes: {
    heading: {
      source: "text",
      selector: ".left h2"
    },
    body: {
      source: "text",
      selector: ".left p"
    },
    linkText: {
      source: "text",
      selector: ".left a"
    },
    images: {
      type: "array",
      source: "query",
      selector: ".slider img",
      query: {
        url: {
          type: "string",
          source: "attribute",
          attribute: "src"
        },
        alt: {
          type: "string",
          source: "attribute",
          attribute: "alt"
        }
      }
    }
  },
  edit({ attributes, className, setAttributes }) {
    const handleChange = ({ target: { name, value } }) => {
      setAttributes({ [name]: value })
    }
    return (
      <div className="wp-block-eecontractingllc-carousel-blurb-editor">
        <h1>Blurb Carousel</h1>
        <div className="horizontal">
          <div className="vertical">
            <div className="float-label">
              <input
                name="heading"
                type="text"
                value={attributes.heading}
                onChange={handleChange}
              />
              <label for="heading">Heading</label>
            </div>
            <div className="float-label">
              <textarea
                name="body"
                type="text"
                value={attributes.body}
                onChange={handleChange}
              />
              <label for="headline">Body</label>
            </div>
            <div className="float-label">
              <input
                name="linkText"
                type="text"
                value={attributes.linkText}
                onChange={handleChange}
              />
              <label for="linkText">Link Text</label>
            </div>
          </div>
          <div className="vertical">
            <div className="float-label">
              <MediaUpload
                onSelect={media => {
                  const images = media.map(image => ({
                    url: image.url,
                    alt: image.alt
                  }))
                  setAttributes({ images })
                }}
                type="image"
                value={attributes.imageID}
                render={({ open }) => galleryButton(attributes, open)}
                name="image"
                multiple="add"
              />
              <label className="always" for="image">
                Images
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  },

  save({ attributes }) {
    return (
      <div>
        <div className="left">
          <h2>{attributes.heading}</h2>
          <p>{attributes.body}</p>
          <a>{attributes.linkText}</a>
        </div>
        <div className="right">
          <div className="slider">
            {attributes.images.map(image =>
              accessibleImage(image.url, image.alt)
            )}
          </div>
        </div>
      </div>
    )
  }
})
