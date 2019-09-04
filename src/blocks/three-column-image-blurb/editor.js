import { MediaUpload } from "@wordpress/editor"
import { registerBlockType } from "@wordpress/blocks"
import { imageButton, accessibleImage } from "../../common/js/util"

registerBlockType("eecontractingllc/three-column-image-blurb", {
  title: "Three Columned Image Blurb",
  icon: "heart",
  category: "common",
  attributes: {
    mainHeading: {
      source: "text",
      selector: "h2"
    },
    headingOne: {
      source: "text",
      selector: ".one h3"
    },
    bodyOne: {
      type: "text",
      selector: ".one p"
    },
    headingTwo: {
      source: "text",
      selector: ".two h3"
    },
    bodyTwo: {
      type: "text",
      selector: ".two p"
    },
    headingThree: {
      source: "text",
      selector: ".three h3"
    },
    bodyThree: {
      type: "text",
      selector: ".three p"
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
      <div className="wp-block-eecontractingllc-three-column-image-blurb-editor">
        <h1>Three Columned Image Blurb</h1>
        <div className="vertical">
          <div className="float-label">
            <input
              type="text"
              name="mainHeading"
              value={attributes.mainHeading}
              onChange={handleChange}
            />
            <label for="heading">Main Heading</label>
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
          <div className="horizontal">
            <div className="vertical">
              <div className="float-label">
                <input
                  type="text"
                  name="headingOne"
                  value={attributes.headingOne}
                  onChange={handleChange}
                />
                <label for="subHeading">Heading One</label>
              </div>
              <div className="float-label">
                <textarea
                  name="bodyOne"
                  value={attributes.bodyOne}
                  onChange={handleChange}
                />
                <label for="heading">Body One</label>
              </div>
            </div>
            <div className="vertical">
              <div className="float-label">
                <input
                  type="text"
                  name="headingTwo"
                  value={attributes.headingTwo}
                  onChange={handleChange}
                />
                <label for="subHeading">Heading Two</label>
              </div>
              <div className="float-label">
                <textarea
                  name="bodyTwo"
                  value={attributes.bodyTwo}
                  onChange={handleChange}
                />
                <label for="heading">Body Two</label>
              </div>
            </div>
            <div className="vertical">
              <div className="float-label">
                <input
                  type="text"
                  name="headingThree"
                  value={attributes.headingThree}
                  onChange={handleChange}
                />
                <label for="subHeading">Heading Three</label>
              </div>
              <div className="float-label">
                <textarea
                  name="bodyThree"
                  value={attributes.bodyThree}
                  onChange={handleChange}
                />
                <label for="heading">Body Three</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  save({ attributes }) {
    return (
      <div>
        <div className="top">
          <h2>{attributes.mainHeading}</h2>
          <div className="image">
            {accessibleImage(attributes.imageUrl, attributes.imageAlt)}
          </div>
        </div>
        <div className="bottom">
          <div className="one">
            <h3>{attributes.headingOne}</h3>
            <p>{attributes.bodyOne}</p>
          </div>
          <div className="two">
            <h3>{attributes.headingTwo}</h3>
            <p>{attributes.bodyTwo}</p>
          </div>
          <div className="three">
            <h3>{attributes.headingThree}</h3>
            <p>{attributes.bodyThree}</p>
          </div>
        </div>
      </div>
    )
  }
})
