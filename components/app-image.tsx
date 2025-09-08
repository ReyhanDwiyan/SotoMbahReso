import { getImagePath } from "@/lib/env-config";

export function AppImage({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
    // Handle src yang sudah memiliki basePath
    const imageSrc =
        typeof src === "string"
            ? src.startsWith("http")
                ? src
                : getImagePath(src)
            : src;

    return <img src={imageSrc} alt={alt} className={className} {...props} />;
}