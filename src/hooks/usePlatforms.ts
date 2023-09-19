import { useQuery } from "@tanstack/react-query";
import { platforms } from "../data/platforms";
import APIClient from "../services/api-client";
import { Platform } from "./useGames";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatform;
