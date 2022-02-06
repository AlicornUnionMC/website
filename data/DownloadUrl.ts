const DOWNLOAD_WIN32 =
  "https://pan.bilnn.com/api/v3/file/sourcejump/qdB3LYUd/XtmaP9eXzHV6noKJln5bKK3Gy_3HbSec5lxXSk94acQ*";
const DOWNLOAD_GNU =
  "https://pan.bilnn.com/api/v3/file/sourcejump/nOKDWnHe/C5rosDc14k1hwxK3S9T5Hs3IYvm_rJ8wz5u_KQVrLKA*";

export const getUrl = () => {
  if (navigator.userAgent.toLowerCase().includes("win")) {
    return DOWNLOAD_WIN32;
  }
  return DOWNLOAD_GNU;
};
