
export const getBrowser = (): 'chrome' | 'firefox' => {
    return (navigator.userAgent.indexOf('Firefox') < 0)
        ? "chrome"
        : "firefox";
};