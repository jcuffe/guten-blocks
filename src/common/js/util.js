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

export const galleryButton = (attributes, openEvent) => {
  if (attributes.images && attributes.images.length > 0) {
    return (
      <div className="gallery">
        {attributes.images.map(image => (
          <img src={image.url} onClick={openEvent} className="image" />
        ))}
      </div>
    )
  } else {
    return (
      <div className="button-container">
        <Button onClick={openEvent} className="button button-large">
          Choose images
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

export const processNav = nav => {
  const items = {}
  nav.forEach(({ ID, title, url, menu_item_parent, menu_order }) => {
    if (menu_item_parent == "0") {
      items[ID] = { title, url, children: [], menu_order }
    }
  })
  nav.forEach(({ title, url, menu_item_parent }) => {
    if (menu_item_parent != "0") {
      items[menu_item_parent].children.push({ title, url })
    }
  })

  const sortedNavItems = Object.values(items).sort(
    (a, b) => a.menu_order - b.menu_order
  )
  const navMenuElements = sortedNavItems.map(item => (
    <li>
      <a href={item.url}>{item.title}</a>
      {item.children.length ? (
        <ul>
          {item.children.map(child => (
            <li>
              <a href={child.url}>{child.title}</a>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  ))

  return navMenuElements
}
