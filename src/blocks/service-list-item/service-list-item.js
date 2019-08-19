import { RichText, MediaUpload, PlainText } from "@wordpress/editor"
import { registerBlockStyle, registerBlockType } from "@wordpress/blocks"
import { Button } from "@wordpress/components"

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
    const getImageButton = openEvent => {
      if (attributes.imageUrl) {
        return (
          <img
            src={attributes.imageUrl}
            onClick={openEvent}
            className="image"
          />
        )
      } else {
        return (
          <div className="button-container">
            <Button onClick={openEvent} className="button button-large">
              Pick an image
            </Button>
          </div>
        )
      }
    }

    return (
      <div className="container">
        <MediaUpload
          onSelect={media => {
            setAttributes({ imageAlt: media.alt, imageUrl: media.url })
          }}
          type="image"
          value={attributes.imageID}
          render={({ open }) => getImageButton(open)}
        />
        <PlainText
          onChange={title => setAttributes({ title })}
          value={attributes.title}
          placeholder="Service name"
          className="heading"
        />
        <PlainText
          onChange={leftButton => setAttributes({ leftButton })}
          value={attributes.leftButton}
          placeholder="Left button text"
          className="heading"
        />
        <PlainText
          onChange={rightButton => setAttributes({ rightButton })}
          value={attributes.rightButton}
          placeholder="Right button text"
          className="heading"
        />
        <RichText
          onChange={body => setAttributes({ body })}
          value={attributes.body}
          multiline="p"
          placeholder="Service Description"
          formattingControls={["bold", "italic", "underline"]}
          isSelected={attributes.isSelected}
        />
      </div>
    )
  },

  save({ attributes }) {
    const cardImage = (src, alt) => {
      if (!src) return null

      if (alt) {
        return <img src={src} alt={alt} />
      }

      // No alt set, so let's hide it from screen readers
      return <img src={src} alt="" aria-hidden="true" />
    }

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
          {cardImage(attributes.imageUrl, attributes.imageAlt)}
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
