const DOWNLOAD_WIN32 =
  "https://pan.bilnn.com/api/v3/file/sourcejump/6WrxyMSg/ZDxFAo_87LLl2TCH2866jhCaeqz0iC2YTWmQnoSU6rs*";
const DOWNLOAD_GNU =
  "https://pan.bilnn.com/api/v3/file/sourcejump/pm5P9mcw/PFwf-mI9lHcX4np8wipsTbcZiZz054kE5rKQ-P8QlO0*";

export const getUrl = () => {
  if (navigator.userAgent.toLowerCase().includes("win")) {
    return DOWNLOAD_WIN32;
  }
  return DOWNLOAD_GNU;
};
