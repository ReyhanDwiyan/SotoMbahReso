export function getBasePath() {
    return process.env.NODE_ENV === "production" ? "/SotoMbahReso" : "";
}

export function getImagePath(path: string) {
    const basePath = getBasePath();
    return `${basePath}${path}`;
}