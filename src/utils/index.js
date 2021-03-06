import logo from '../img/logo.svg'

// Media resize
export const getSmallImage = (imagePath, size) => {
    if (!imagePath) return logo

    const image = imagePath.match(/media\/screenshots/)
        ? imagePath.replace(
              'media/screenshots',
              `media/resize/${size}/-/screenshots`
          )
        : imagePath.replace('/media/games/', `/media/resize/${size}/-/games/`)

    return image
}
