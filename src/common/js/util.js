import { Button } from "@wordpress/components"

export const imageButton = (attributes, openEvent) => {
  if (attributes.imageUrl) {
    return (
      <img src={attributes.imageUrl} onClick={openEvent} className="image" />
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

export const accessibleImage = (src, alt) => {
  if (!src) return null

  if (alt) {
    return <img src={src} alt={alt} />
  }

  // No alt set, so let's hide it from screen readers
  return <img src={src} alt="" aria-hidden="true" />
}
