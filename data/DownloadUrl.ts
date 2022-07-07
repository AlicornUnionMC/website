const DOWNLOAD_WIN32 =
  "https://pan.bilnn.com/api/v3/file/sourcejump/J8D1N1Fz/7pyVSQiKbkqij1zjPCA1wQ_B5wD5RlntFVgDZCYRTJs*";
const DOWNLOAD_GNU =
  "https://pan.bilnn.com/api/v3/file/sourcejump/E5YQXbc9/qb3x77XW1_7hitnNK-JySdK3V7Xv92Y2u1GMgWkbNsY*";

export const getUrl = () => {
  if (navigator.userAgent.toLowerCase().includes("win")) {
    return DOWNLOAD_WIN32;
  }
  return DOWNLOAD_GNU;
};
