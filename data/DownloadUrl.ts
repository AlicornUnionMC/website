const DOWNLOAD_WIN32 =
  "https://pan.bilnn.com/api/v3/file/sourcejump/XrdqJ2Cd/iKqEGVS_QfpHV-CZy3BClfcBgbkeJ_wBiGrj_bKXWFo*";
const DOWNLOAD_GNU =
  "https://pan.bilnn.com/api/v3/file/sourcejump/bmBGMxUY/0UKyK_UKVM1jZJQcRioYhl-iG9GjEu9_Dci7Or1DWzQ*";

export const getUrl = () => {
  if (navigator.userAgent.toLowerCase().includes("win")) {
    return DOWNLOAD_WIN32;
  }
  return DOWNLOAD_GNU;
};
