import { CoreAPi } from "@/utils/core-api";
import { API_ENDPOINTS } from "@/utils/endpoints";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const RegisterService = new CoreAPi(API_ENDPOINTS.REGISTER);

export const useRegisterMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data: any) =>
        RegisterService.findAllPost(API_ENDPOINTS.REGISTER, data),
      onSuccess(v: any) {
  
      },
      onSettled: () => {
        queryClient.invalidateQueries();
      },
    });
  };

  export const useSigninMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data: any) =>
        RegisterService.findAllPost(API_ENDPOINTS.LOGIN, data),
      onSuccess(v: any) {
  
      },
      onSettled: () => {
        queryClient.invalidateQueries();
      },
    });
  };