export const activePageButton = () => {
  const url = (window.location.pathname).split('/')[0]
  return url
}