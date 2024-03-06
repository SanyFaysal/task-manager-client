import baseApi from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",

        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    getMe: builder.query({
      query: (token) => ({
        url: `/auth/me`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Auth"],
    }),
    getAllUser: builder.query({
      query: ({ userType, token, searchTerm }) => ({
        url: `/auth/all/${userType}?searchTerm=${searchTerm}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetAllUserQuery,
  useGetMeQuery,
} = authApi;
