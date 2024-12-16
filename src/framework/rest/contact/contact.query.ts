import { CoreAPi } from "@/utils/core-api";
import { API_ENDPOINTS } from "@/utils/endpoints";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const ContactService = new CoreAPi(API_ENDPOINTS.CONTACT);

export const useContactMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) =>
      ContactService.findAllPost(API_ENDPOINTS.CONTACT, data),
    onSuccess(v: any) {

    },
    onSettled: () => {
      queryClient.invalidateQueries();
    },
  });
};
export const useBookDemoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) =>
      ContactService.findAllPost(API_ENDPOINTS.CONTACT, data),
    onSuccess(v: any) {

    },
    onSettled: () => {
      queryClient.invalidateQueries();
    },
  });
};
