const DOWNLOAD_WIN32 =
  "https://pan.bilnn.com/api/v3/file/sourcejump/Oq9Z96HO/V0uBCc5zutPpW6msTjkQ_SlAetkUneDCX9WpUTgOTe0*";
const DOWNLOAD_GNU =
  "https://pan.bilnn.com/api/v3/file/sourcejump/zZ8A8DSq/r9WYbsctSoxNmi9iQ07BLq9jJ7G-9z-KwFPJnvO0zHk*";

export const getUrl = () => {
  if (navigator.userAgent.toLowerCase().includes("win")) {
    return DOWNLOAD_WIN32;
  }
  return DOWNLOAD_GNU;
};
