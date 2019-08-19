import { RichText, PlainText } from "@wordpress/editor"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("eecontractingllc/two-column-blurb", {
  title: "Two Column Blurb",
  icon: "heart",
  category: "common",
  attributes: {
    leftHeading: {
      source: "text",
      selector: ".left h3"
    },
    leftBody: {
      type: "array",
      source: "children",
      selector: ".left div"
    },
    rightHeading: {
      source: "text",
      selector: ".right h3"
    },
    rightBody: {
      type: "array",
      source: "children",
      selector: ".right div"
    }
  },
  edit({ attributes, className, setAttributes }) {
    return (
      <div className="container">
        <PlainText
          onChange={leftHeading => setAttributes({ leftHeading })}
          value={attributes.leftHeading}
          placeholder="Left column heading"
          className="heading"
        />
        <RichText
          onChange={leftBody => setAttributes({ leftBody })}
          value={attributes.leftBody}
          multiline="p"
          placeholder="Left column body text"
          formattingControls={["bold", "italic", "underline"]}
        />
        <PlainText
          onChange={rightHeading => setAttributes({ rightHeading })}
          value={attributes.rightHeading}
          placeholder="Right column heading"
          className="heading"
        />
        <RichText
          onChange={rightBody => setAttributes({ rightBody })}
          value={attributes.rightBody}
          multiline="p"
          placeholder="Right column body text"
          formattingControls={["bold", "italic", "underline"]}
        />
      </div>
    )
  },

  save({ attributes }) {
    return (
      <div>
        {window.nav}
        <div>
          <div className="left">
            <h3>{attributes.leftHeading}</h3>
            <div>{attributes.leftBody}</div>
          </div>
          <div className="right">
            <h3>{attributes.rightHeading}</h3>
            <div>{attributes.rightBody}</div>
          </div>
        </div>
      </div>
    )
  }
})
