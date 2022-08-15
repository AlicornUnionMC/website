const DOWNLOAD_WIN32 =
  "https://ghproxy.com/?q=https%3A%2F%2Fgithub.com%2FAndy-K-Sparklight%2FAlicorn%2Freleases%2Fdownload%2F50%2FAlicorn-win32-x64.zip";
const DOWNLOAD_GNU =
  "https://ghproxy.com/?q=https%3A%2F%2Fgithub.com%2FAndy-K-Sparklight%2FAlicorn%2Freleases%2Fdownload%2F50%2FAlicorn-linux-x64.tar.gz";

export const getUrl = () => {
  if (navigator.userAgent.toLowerCase().includes("win")) {
    return DOWNLOAD_WIN32;
  }
  return DOWNLOAD_GNU;
};
