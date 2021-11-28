const DOWNLOAD_WIN32 =
  "https://pan.bilnn.com/api/v3/file/sourcejump/Z9BNepSo/6dJ0nw01gjfrHZhQfkrAkL_N6QXI6SxSGB3zoG4rb7c*";
const DOWNLOAD_GNU =
  "https://pan.bilnn.com/api/v3/file/sourcejump/3nGPpGhD/eWsS5UYI-bUgu6lvnJWryIW2bwCAzS4nDOg3ygfxVqQ*";

export const getUrl = () => {
  if (navigator.userAgent.toLowerCase().includes("win")) {
    return DOWNLOAD_WIN32;
  }
  return DOWNLOAD_GNU;
};
