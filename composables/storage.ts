export const useSupabaseStorage = () => {
    const client = useSupabaseClient()

    const getPublicURL = async (path: string) => {
        return useAsyncData(async () => {
            const { data, error } = await client.storage.from('assets').download(path)
            if (error) throw error;
            const src = URL.createObjectURL(data)
            return src
        });
    }

    return {
        client,
        getPublicURL,
    }
}