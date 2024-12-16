import { CoreAPi } from "@/utils/core-api";
import { API_ENDPOINTS } from "@/utils/endpoints";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const integrationService = new CoreAPi(API_ENDPOINTS.INTEGRATION);

export const useIntegrationMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data: any) =>
        integrationService.findAllPost(API_ENDPOINTS.INTEGRATION, data),
      onSuccess(v: any) {
  
      },
      onSettled: () => {
        queryClient.invalidateQueries();
      },
    });
  };