import { MediaUpload } from "@wordpress/editor"
import { registerBlockStyle, registerBlockType } from "@wordpress/blocks"
import { imageButton, accessibleImage } from "../../common/js/util"

registerBlockType("eecontractingllc/service-list-item", {
  title: "Service List Item",
  icon: "heart",
  category: "common",
  attributes: {
    title: {
      source: "text",
      selector: ".text h2"
    },
    body: {
      type: "array",
      source: "children",
      selector: ".text div"
    },
    leftButton: {
      source: "text",
      selector: "button.left"
    },
    rightButton: {
      source: "text",
      selector: "button.right"
    },
    imageAlt: {
      attribute: "alt",
      selector: ".image img"
    },
    imageUrl: {
      attribute: "src",
      selector: ".image img"
    }
  },
  edit({ attributes, className, setAttributes }) {
    const handleChange = ({ target: { name, value } }) => {
      setAttributes({ [name]: value })
    }

    return (
      <div className={`${className}-editor`}>
        <h1>Service List Item</h1>
        <ul className="horizontal">
          <li>
            <ul className="vertical">
              <li>
                <input
                  type="text"
                  onChange={handleChange}
                  value={attributes.title}
                  className="heading"
                  name="title"
                />
                <label for="title">Service Name</label>
              </li>

              <li className="body">
                <textarea
                  value={attributes.body}
                  onChange={handleChange}
                  name="body"
                />
                <label for="body">Service Description</label>
              </li>

              <li>
                <ul className="horizontal">
                  <li>
                    <input
                      type="text"
                      onChange={handleChange}
                      value={attributes.leftButton}
                      name="leftButton"
                    />
                    <label for="leftButton">Left button text</label>
                  </li>
                  <li>
                    <input
                      type="text"
                      onChange={handleChange}
                      value={attributes.rightButton}
                      name="rightButton"
                    />
                    <label for="rightButton">Right button text</label>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="image">
            <MediaUpload
              onSelect={media => {
                setAttributes({ imageAlt: media.alt, imageUrl: media.url })
              }}
              type="image"
              value={attributes.imageID}
              render={({ open }) => imageButton(attributes, open)}
              name="image"
            />
            <label className="always" for="image">
              Image
            </label>
          </li>
        </ul>
      </div>
    )
  },

  save({ attributes }) {
    return (
      <div>
        <div className="text">
          <h2>{attributes.title}</h2>
          <div>{attributes.body}</div>
          <span>
            <button className="left">{attributes.leftButton}</button>
            <button className="right">{attributes.rightButton}</button>
          </span>
        </div>
        <div className="image">
          {accessibleImage(attributes.imageUrl, attributes.imageAlt)}
        </div>
      </div>
    )
  }
})

registerBlockStyle("eecontractingllc/service-list-item", {
  name: "default",
  label: "Default",
  isDefault: true
})

registerBlockStyle("eecontractingllc/service-list-item", {
  name: "left-block",
  label: "Left Block"
})

registerBlockStyle("eecontractingllc/service-list-item", {
  name: "gradient-mat",
  label: "Gradient Mat"
})
