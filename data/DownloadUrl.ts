const DOWNLOAD_WIN32 =
  "https://pan.bilnn.com/api/v3/file/sourcejump/Md2pDGcv/wGCv-ZAU74v8ejIQq8vRD_dF3avQQMpNnk1fRHERnBg*";
const DOWNLOAD_GNU =
  "https://pan.bilnn.com/api/v3/file/sourcejump/eWX9vzTZ/kPOemhNm-jwWMgtu1YYldrGNWm2WijRoTGpisok_0ws*";

export const getUrl = () => {
  if (navigator.userAgent.toLowerCase().includes("win")) {
    return DOWNLOAD_WIN32;
  }
  return DOWNLOAD_GNU;
};
