export const getImageUrl = (
    fileName: string,
    { oldPrefix = false }: { oldPrefix?: boolean } = {}
): string => `https://static.${oldPrefix ? 'showcasejobs.com/web' : 'getshowcase.io/preview/images'}/${fileName}`;
