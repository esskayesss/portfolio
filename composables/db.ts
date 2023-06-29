import { Database } from "~~/types/supabase"

export const useDatabase = () => {
    const client = useSupabaseClient<Database>()

    const getCertificates = async () => {
        return useAsyncData("certificates", async () => {
            const { data } = await client.from("certificates").select("*").order('when', { ascending: false });
            return data;
        });
    };

    const getProjects = async () => {
        return useAsyncData("projects", async () => {
            const { data } = await client.from("projects").select("*").order('created_at', { ascending: false });
            return data;
        });
    };

    const getResearch = async () => {
        return useAsyncData("research", async () => {
            const { data } = await client.from("research").select("*").order('when', { ascending: false });
            return data;
        });
    };

    const getWork = async () => {
        return useAsyncData("work", async () => {
            const { data } = await client.from("work").select("*").order('when', { ascending: false });
            return data;
        });
    };

    return {
        getCertificates,
        getProjects,
        getResearch,
        getWork,
    }

};