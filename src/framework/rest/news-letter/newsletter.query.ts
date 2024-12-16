import { CoreAPi } from "@/utils/core-api";
import { API_ENDPOINTS } from "@/utils/endpoints";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const NewsletterService = new CoreAPi(API_ENDPOINTS.NEWSLETTER);

export const useNewsletterMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data: any) =>
        NewsletterService.findAllPost(API_ENDPOINTS.NEWSLETTER, data),
      onSuccess(v: any) {
  
      },
      onSettled: () => {
        queryClient.invalidateQueries();
      },
    });
  };