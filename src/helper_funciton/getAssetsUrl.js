const BaseUrl = "https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com";

export function getAssetUrl(path) {
    // Remove leading slash if present
    const pathname = path.startsWith('/') ? path.slice(1) : path;
    return `${BaseUrl}/public/${pathname}`;
}