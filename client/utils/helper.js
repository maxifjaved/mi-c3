export function getPageNumber(url) {
    if (!url) return null;

    return url.split('page=')[1] * 1;
  }