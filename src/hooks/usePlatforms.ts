import { useQuery } from "@tanstack/react-query";
import { platforms } from "../data/platforms";
import APIClient from "../services/api-client";
import { Platform } from "../entities/Platform";
import ms from "ms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 hours
    initialData: platforms,
  });

export default usePlatforms;
