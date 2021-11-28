const DOWNLOAD_WIN32 =
  "https://hub.fastgit.org/Andy-K-Sparklight/AlicornBinaries/releases/download/latest/Alicorn-win32-x64.zip";
const DOWNLOAD_GNU =
  "https://hub.fastgit.org/Andy-K-Sparklight/AlicornBinaries/releases/download/latest/Alicorn-linux-x64.tar.gz";

export const getUrl = () => {
  if (navigator.userAgent.toLowerCase().includes("win")) {
    return DOWNLOAD_WIN32;
  }
  return DOWNLOAD_GNU;
};
